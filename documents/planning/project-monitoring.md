# Project monitoring

**Status:** collector and chart paths configured; live project access, workflow execution and real measurements remain to be verified.

## 1. Assignment requirements and chosen evidence

The [assignment](../../LABDSOF-26-27-Assignment.md) requires the evidence below. The recording formats are our choices; it does **not** mandate a burndown, burnup or cumulative-flow chart. Optional capacity analysis, blocker-age indicators and retrospective actions are not part of this required evidence list.

| Assignment requirement | Reference | Chosen evidence and location |
|---|---|---|
| Prioritised backlog and acceptance criteria | §7.1.2, §8.2 | [Product backlog](../06-product-backlog.md), linked to board items with priority and acceptance criteria |
| Sprint planning, goals and initial release plan | §7.1.2, §8.2 | Sprint dates, selected items and goal in the [sprint plan](sprint-1-plan.md) / sprint backlog; release milestones in the [roadmap](../05-product-roadmap.md) |
| Assign and track work; monitor progress | §8.2 | Owners and current statuses on the board; sprint goal outcome and a dated progress chart in the sprint review. Section 4 explains the chart choices |
| Record decisions and stakeholder feedback | §8.2 | [Decisions and feedback](decisions-and-feedback.md), with source, date, rationale and affected items |
| Revise at least one product or technical decision following lecturer/investor feedback | §5.7 | Actual previous → revised decision and rationale, using the [review template](../templates/investor-review.md); a scheduled meeting is not evidence |
| Define product risks and measurable success criteria | §5.4 | [Product vision](../04-product-vision.md), supported by research and evaluation evidence |
| Demonstrate collaborative engineering and quality | §8.1, §8.3, §8.5 | Linked PRs, reviews, tests and CI results; acceptance evidence organised using the [DoD](../governance/definition-of-done.md) |
| Demonstrate individual contributions | §7.3.2, §10, §12 | Individual contribution statements linked to implementation, reviews, research, decisions and documentation. Explain impact; raw commit counts are insufficient |

The operational dashboard required by §6.7 and §7.3.2 monitors the running application. It is separate from these project-management charts.

## 2. Common measurement rules

- Use the board for operational status, following [issue conventions](../governance/issue-management.md). Update the documentation at reviews.
- Record the sprint dates, selected issue IDs and starting scope before measuring progress. Record dated scope additions/removals and reopenings.
- Count delivery items once: do not count both an epic and its children. Use item counts initially; the snapshot script does not capture estimates.
- Done means the acceptance criteria and DoD are met. Missing data does not mean Done. Counts indicate progress, not equal effort or individual productivity.
- Use one reporting timezone, retain UTC source timestamps and show missing snapshots as gaps.
- Save the selected chart, source data, sprint goal outcome and evidence links in `documents/planning/sprint-N-review.md` for each official sprint. These review records are to be created when evidence exists.

## 3. Data collection and configuration

Files: [snapshot.js](../../workflow-scripts/snapshot.js), [metrics.yml](../../.github/workflows/metrics.yml), [chart.html](../../workflow-scripts/chart.html) and [burndown.html](../../workflow-scripts/burndown.html).

### Implemented configuration

- Repository: `Phenriquerafael/LABDSOF_GX`; project number: `7`. These values are constants at the top of `snapshot.js`, not placeholders. The project must be linked to that repository and accessible to the token.
- The collector runs as CommonJS on Node 20 without requiring a root `package.json`. Run it from the repository root with `node workflow-scripts/snapshot.js`, with `GITHUB_TOKEN` supplied through the environment.
- All output paths are resolved relative to the script: `workflow-scripts/data/history.json` holds timestamped issue/status snapshots; `workflow-scripts/data/raw/` holds individual API responses. Existing history is appended, not reset.
- Projects and project items are paginated. Status is retrieved directly by field name rather than from a limited field list, using [GitHub's project field API](https://docs.github.com/en/graphql/reference/projects).
- Only issues from the configured repository are counted; PRs, draft items and issues from other repositories are excluded. The collector queries active project items: preserve review evidence before archiving/removing items. It collects the whole project, not a specific sprint.
- HTTP/GraphQL errors, inaccessible items, missing Status values, invalid pagination and empty collections stop the run without appending to history. Invalid existing history is not overwritten. History is replaced only after the complete snapshot has been written to a temporary file.
- Both HTML pages use `./data/history.json`. `chart.html` renders stacked status counts; `burndown.html` filters explicit starting issue IDs, plots actual/ideal lines, supports local JSON selection and exports daily CSV data.
- The workflow runs daily at `00:00 UTC` or manually, checks out `main`, runs the collector and commits `workflow-scripts/data/` back to `main`. Concurrent workflow runs are serialised. A rebase incorporates intervening commits before pushing; commit/push failures remain visible.

### Checks still required before automated collection

1. Configure the Actions secret `MY_PAT` with access to read the repository/project and push snapshot commits. It is passed to the collector as `GITHUB_TOKEN`; do not add tokens to tracked files.
2. Confirm project `7` is linked to `Phenriquerafael/LABDSOF_GX`, that its single-select field is named `Status`, and that each tracked issue has a value. The burndown's completed status defaults to `Done` and can be changed in the page.
3. Confirm `main` is the intended destination and branch rules permit this workflow to push. Ensure the workflow is available on the repository's default branch for scheduled execution.
4. If earlier history exists at an old path, preserve and migrate it into `workflow-scripts/data/history.json` before the first run; do not silently start a new series or concatenate overlapping histories.
5. Run the workflow manually and inspect the saved history, raw responses and resulting commit. Then verify scheduled collection. Live token permissions and project visibility have not been verified locally.
6. Serve `workflow-scripts/` through HTTP and open either chart. Alternatively, open `burndown.html` directly and select a local history file. Record sprint dates and initial issue IDs before drawing the burndown.

The collector, workflow paths and chart defaults are aligned. Configuration is implemented; successful local checks do not constitute evidence of live collection or completed project work.

## 4. Charts and flow measures

These are ways to satisfy progress monitoring, not additional assignment requirements. Use burndown as the main sprint chart; use the others only where they help explain progress.

### 4.1 Burndown — remaining sprint work

**Calculation and interpretation**

For each UTC reporting day, remaining work is the number of initial sprint items not in the configured completed status. The ideal line is `initial item count × (1 − elapsed working days / total sprint working days)`. Start is the opening baseline; the line decreases on Monday–Friday after that date and reaches zero at sprint end (public holidays are not excluded). Actual values use the latest daily snapshot and can rise when items reopen.

This version tracks fixed starting scope from one repository. Later additions are excluded; removals are not silently treated as Done. Record scope changes in the review; a scope-adjusted burndown requires a dated scope-change input that is not implemented yet. Missing daily snapshots, selected issues, duplicate IDs or unknown statuses produce gaps, not zero remaining work.

**Data source and implementation — custom API snapshots and chart**

Open [burndown.html](../../workflow-scripts/burndown.html):

1. Select a local `history.json` file, or serve the repository through HTTP and use the history URL. A selected local file takes precedence and is read in the browser without uploading.
2. Set sprint start/end, enter the initial issue numbers (for example `12, 18, 24`) and confirm the completed status (default `Done`, case-insensitive).
3. Select **Draw burndown**. Inspect the daily table for data gaps; use **Download CSV** to preserve `date_utc,total_scope,done,remaining,ideal,data_quality` with the review.

The page uses Chart.js from a CDN, like the existing CFD page. If that library cannot load, the daily table and CSV remain available. No real history is bundled and no earlier progress is inferred. Item-level snapshots are required; legacy aggregate-only history cannot filter a sprint.

### 4.2 Current status distribution — where work stands

**Calculation and interpretation**

Count selected items in each workflow status. The distribution shows how much work is waiting, active, under review or Done. It is a current snapshot, not evidence of how long items have spent there.

**Data source and implementation — GitHub Projects native Insights**

Create a current chart, filter to the sprint and group item counts by Status. Save its configuration and a dated capture for the review. Native Insights provides current charts and filtering; no custom API collector is needed for this view. [GitHub documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)

### 4.3 Cumulative flow — status distribution over time

**Calculation and interpretation**

For each daily snapshot, count sprint items by Status and plot stacked areas in workflow order. A widening In review band indicates an increasing review queue; it does not establish the cause. Scope changes and reopened work can change the bands. Daily snapshots do not provide exact transition times or cycle times.

**Data source and implementation — custom API snapshots and existing HTML**

Use `snapshot.js` history with `chart.html`, which already renders stacked status counts. Apply the section 3 setup, sprint filtering, consistent workflow ordering and daily snapshot selection. Label it as status history with scope changes, rather than assuming all movement is forward.

### 4.4 Burnup — completed work and scope

**Calculation and interpretation**

Plot completed items and total scope over time. This helps distinguish delivery progress from growth in scope. State whether completion means board Status = Done or issue closure; these definitions are not automatically equivalent.

**Data source and implementation — native Insights or custom snapshots**

GitHub Projects offers a native historical Burn up chart based on issue/PR states. Use it if those states match the team's completion policy. For the exact sprint-scope and board-Status definition above, calculate Done and total scope from the snapshot table and add a custom chart. Native Insights excludes archived/deleted items, so preserve review evidence before removing them. [GitHub documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)
