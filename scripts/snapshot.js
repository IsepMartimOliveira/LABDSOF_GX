// CommonJS keeps this runnable on Node 20 without a root package.json.
const fs = require("node:fs");
const path = require("node:path");

const owner = "Phenriquerafael";
const repository = "LABDSOF_GX";
const projectNumber = 7;
const dataDirectory = path.join(__dirname, "data");
const historyFile = path.join(dataDirectory, "history.json");
const token = process.env.GITHUB_TOKEN;

const projectQuery = `
query($owner: String!, $repository: String!, $after: String) {
  repository(owner: $owner, name: $repository) {
    projectsV2(first: 100, after: $after) {
      nodes { id number title }
      pageInfo { hasNextPage endCursor }
    }
  }
}`;

const itemsQuery = `
query($id: ID!, $after: String) {
  node(id: $id) {
    ... on ProjectV2 {
      items(first: 100, after: $after) {
        nodes {
          content {
            __typename
            ... on Issue { number repository { nameWithOwner } }
          }
          status: fieldValueByName(name: "Status") {
            ... on ProjectV2ItemFieldSingleSelectValue { name }
          }
        }
        pageInfo { hasNextPage endCursor }
      }
    }
  }
}`;

let responseNumber = 0;
const runId = `${Date.now()}-${process.pid}`;

async function graphql(query, variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ query, variables }),
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`GitHub API returned HTTP ${response.status}. Check token access and API limits.`);
  const json = await response.json();
  const rawDirectory = path.join(dataDirectory, "raw");
  fs.mkdirSync(rawDirectory, { recursive: true });
  fs.writeFileSync(path.join(rawDirectory, `${runId}-${++responseNumber}.json`), JSON.stringify(json, null, 2));
  if (json.errors?.length) {
    throw new Error(`GitHub GraphQL error: ${json.errors.map(error => error.message).join("; ")}`);
  }
  if (!json.data) throw new Error("GitHub response contains no data.");
  return json.data;
}

function nextCursor(connection, seen) {
  if (!connection || !Array.isArray(connection.nodes) || typeof connection.pageInfo?.hasNextPage !== "boolean") {
    throw new Error("GitHub returned an incomplete page; history will not be updated.");
  }
  if (!connection.pageInfo.hasNextPage) return null;
  const cursor = connection.pageInfo.endCursor;
  if (!cursor || seen.has(cursor)) throw new Error("GitHub returned an invalid pagination cursor.");
  seen.add(cursor);
  return cursor;
}

async function findProject() {
  let after = null;
  const seen = new Set();
  do {
    const data = await graphql(projectQuery, { owner, repository, after });
    if (!data.repository) throw new Error(`Repository ${owner}/${repository} was not found or is inaccessible.`);
    const connection = data.repository.projectsV2;
    const next = nextCursor(connection, seen);
    const project = connection.nodes.find(item => item?.number === projectNumber);
    if (project?.id) return project;
    after = next;
  } while (after);
  throw new Error(`Project ${projectNumber} was not found among projects linked to ${owner}/${repository}. Check the project number, repository link and token access.`);
}

async function fetchIssues(project) {
  let after = null;
  const cursors = new Set();
  const issues = new Map();
  do {
    const data = await graphql(itemsQuery, { id: project.id, after });
    const connection = data.node?.items;
    after = nextCursor(connection, cursors);
    for (const item of connection.nodes) {
      if (!item?.content) throw new Error("A project item is inaccessible. Check token access before collecting a complete snapshot.");
      if (item.content.__typename !== "Issue") continue;
      if (!item.content.repository?.nameWithOwner) throw new Error("Issue repository information is missing.");
      if (item.content.repository.nameWithOwner.toLowerCase() !== `${owner}/${repository}`.toLowerCase()) continue;
      const id = item.content.number;
      const status = item.status?.name?.trim();
      if (!Number.isSafeInteger(id) || id <= 0) throw new Error("Invalid issue number returned by GitHub.");
      if (!status || ["no_status", "unknown"].includes(status.toLowerCase())) {
        throw new Error(`Issue #${id} has no usable Status. Set its project Status and retry.`);
      }
      if (issues.has(id)) throw new Error(`Duplicate issue #${id} across pages; retry collection.`);
      issues.set(id, { id, status });
    }
  } while (after);
  return [...issues.values()].sort((a, b) => a.id - b.id);
}

async function main() {
  if (!token) throw new Error("GITHUB_TOKEN not set. Configure the MY_PAT workflow secret.");
  const project = await findProject();
  const issues = await fetchIssues(project);
  if (!issues.length) throw new Error("No repository issues found in the project; history will not be updated.");
  const snapshot = { date: new Date().toISOString(), issues };
  let history = [];
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, "utf8"));
    if (!Array.isArray(history)) throw new Error("Existing history.json is not an array; refusing to overwrite it.");
  }
  history.push(snapshot);
  fs.mkdirSync(dataDirectory, { recursive: true });
  const temporaryFile = path.join(dataDirectory, `history-${runId}.tmp`);
  fs.writeFileSync(temporaryFile, JSON.stringify(history, null, 2));
  fs.renameSync(temporaryFile, historyFile);
  console.log(`Snapshot saved: ${issues.length} issues from ${owner}/${repository}, project ${projectNumber}.`);
}

main().catch(error => {
  console.error(`Snapshot failed: ${error.message}`);
  process.exitCode = 1;
});
