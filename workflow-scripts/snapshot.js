// CommonJS keeps this runnable on Node 20 without a root package.json.
const fs = require("node:fs");
const path = require("node:path");

const owner = "Phenriquerafael";
const repository = "LABDSOF_GX";
const projectNumber = 9;
const dataDirectory = path.join(__dirname, "data");
const historyFile = path.join(dataDirectory, "history.json");
const token = process.env.GITHUB_TOKEN;

// Personal projects belong to the user, even when not linked to a repository.
const projectQuery = `
query($owner: String!, $number: Int!) {
  user(login: $owner) {
    projectV2(number: $number) { id number title }
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
            ... on Issue { number title repository { nameWithOwner } }
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
  const data = await graphql(projectQuery, { owner, number: projectNumber });
  if (!data.user) throw new Error(`GitHub user ${owner} was not found or is inaccessible.`);
  const project = data.user.projectV2;
  if (!project?.id) {
    throw new Error(`Project ${projectNumber} is unavailable under user ${owner}. Confirm the owner and number at https://github.com/users/${owner}/projects/${projectNumber} and that MY_PAT has read:project access. A repository link is not required.`);
  }
  return project;
}

async function fetchIssues(project) {
  let after = null;
  const cursors = new Set();
  const issues = new Map();
  const rawItems = [];
  const types = new Map();
  const repositories = new Map();
  let scanned = 0;
  do {
    const data = await graphql(itemsQuery, { id: project.id, after });
    const connection = data.node?.items;
    after = nextCursor(connection, cursors);
    for (const item of connection.nodes) {
      scanned++;
      const type = item?.content?.__typename || "Inaccessible";
      types.set(type, (types.get(type) || 0) + 1);
      if (!item?.content) throw new Error("A project item is inaccessible. Check token access before collecting a complete snapshot.");
      if (item.content.__typename !== "Issue") continue;
      if (!item.content.repository?.nameWithOwner) throw new Error("Issue repository information is missing.");
      const sourceRepository = item.content.repository.nameWithOwner;
      repositories.set(sourceRepository, (repositories.get(sourceRepository) || 0) + 1);
      if (sourceRepository.toLowerCase() !== `${owner}/${repository}`.toLowerCase()) continue;
      const id = item.content.number;
      const status = item.status?.name?.trim();
      if (!Number.isSafeInteger(id) || id <= 0) throw new Error("Invalid issue number returned by GitHub.");
      if (!status || ["no_status", "unknown"].includes(status.toLowerCase())) {
        throw new Error(`Issue #${id} has no usable Status. Set its project Status and retry.`);
      }
      if (issues.has(id)) throw new Error(`Duplicate issue #${id} across pages; retry collection.`);
      issues.set(id, { id, status });
      rawItems.push({
        content: { number: id, title: item.content.title },
        fieldValues: { nodes: [{ name: status, field: { name: "Status" } }] },
      });
    }
  } while (after);
  const counts = values => [...values].map(([name, count]) => `${name}: ${count}`).join(", ") || "none";
  console.log(`Project ${projectNumber}: scanned ${scanned} active items. Types: ${counts(types)}. Issue repositories: ${counts(repositories)}. Matched ${owner}/${repository}: ${issues.size}.`);
  if (!issues.size) {
    let hint;
    if (!scanned) {
      hint = "The project returned no active items. Confirm the project number and add existing repository issues to the board; archived items are not collected.";
    } else if (!repositories.size && types.has("DraftIssue")) {
      hint = `The board contains draft cards, not repository issues. Convert the intended cards to issues in ${owner}/${repository}, or add existing issues to the project. Draft cards have no repository issue number and are not supported by the current burndown format.`;
    } else if (repositories.size) {
      hint = `Issues were found under ${counts(repositories)}, but none under ${owner}/${repository}. Confirm which repository should be tracked; changing a project owner does not transfer its issues.`;
    } else {
      hint = "No Issue items were returned. Pull requests and other item types are excluded from this issue-based chart.";
    }
    throw new Error(`${hint} History will not be updated.`);
  }
  return { issues: [...issues.values()].sort((a, b) => a.id - b.id), rawItems };
}

async function main() {
  if (!token) throw new Error("GITHUB_TOKEN not set. Configure the MY_PAT workflow secret.");
  const project = await findProject();
  const { issues, rawItems } = await fetchIssues(project);
  const snapshot = { date: new Date().toISOString(), issues };
  let history = [];
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, "utf8"));
    if (!Array.isArray(history)) throw new Error("Existing history.json is not an array; refusing to overwrite it.");
  }
  // Compatibility export matching example.json, assembled from all API pages.
  // This contains the configured repository's issues, not verbatim API responses.
  const rawSnapshot = {
    data: {
      repository: {
        projectsV2: {
          nodes: [{
            id: project.id,
            number: project.number,
            title: project.title,
            items: { nodes: rawItems },
          }],
        },
      },
    },
  };
  const rawDirectory = path.join(dataDirectory, "raw");
  fs.mkdirSync(rawDirectory, { recursive: true });
  fs.writeFileSync(path.join(rawDirectory, `${runId}.json`), JSON.stringify(rawSnapshot, null, 2));
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
