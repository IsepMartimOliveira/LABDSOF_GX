import fs from "fs";

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN not set");

const query = `
{
  repository(owner:"<REPOSITORY_OWNER>", name:"<REPOSITORY_NAME>") {
    projectsV2(first: 10) {
      nodes {
        id
        number
        title
        items(first: 100) {
          nodes {
            content {
              ... on Issue {
                number
                title
              }
            }
            fieldValues(first: 10) {
              nodes {
                ... on ProjectV2ItemFieldSingleSelectValue {
                  name
                  field {
                    ... on ProjectV2FieldCommon {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

async function fetchProjectItems() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ query })
  });

  const json = await res.json();

  // Save full raw response with timestamp
  fs.mkdirSync("scripts/data/raw", { recursive: true });
  const timestamp = Date.now();
  fs.writeFileSync(`scripts/data/raw/${timestamp}.json`, JSON.stringify(json, null, 2));

  const projects = json.data.repository.projectsV2.nodes;

  // Replace <PROJECT_NUMBER> with the numeric project number.
  const project = projects.find(p => p.number === Number("<PROJECT_NUMBER>"));
  if (!project) throw new Error("Project not found");

  return project.items.nodes;
}

// Extract "Status" field dynamically
function extractStatus(item) {
  const statusNode = item.fieldValues.nodes.find(f => f.field?.name === "Status");
  return statusNode?.name || "NO_STATUS";
}

async function main() {
  const items = await fetchProjectItems();

  const issues = items
    .filter(item => item.content)
    .map(item => ({
      id: item.content.number,
      status: extractStatus(item)
    }));

  const snapshot = {
    date: new Date().toISOString(),
    issues
  };

  fs.mkdirSync("scripts/data", { recursive: true });

  // Append to single history.json
  const historyFile = "scripts/data/history.json";
  let history = [];
  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile));
  }

  history.push(snapshot);
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));

  console.log("Snapshot appended to history:", snapshot);
}

main();