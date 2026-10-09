# Project monitoring

**Status:** monitoring plan with snapshot/CFD templates and an implemented burndown page; project configuration and real measurements remain pending.

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

## 3. Data collection and template setup

Templates: [snapshot.js](../../workflow-scripts/snapshot.js), [metrics.yml](../../.github/workflows/metrics.yml), [chart.html](../../workflow-scripts/chart.html) and [burndown.html](../../workflow-scripts/burndown.html).

Current behaviour:

- `snapshot.js` reads project issue numbers and Status through the GitHub GraphQL API. It appends snapshots to `scripts/data/history.json` and saves raw responses under `scripts/data/raw/`.
- `metrics.yml` specifies daily collection (`0 0 * * *`) and a manual trigger, followed by a commit of the data.
- `chart.html` plots counts by Status over time as stacked areas (cumulative flow).
- `burndown.html` plots remaining issues and an ideal line for explicit sprint dates and issue numbers. It reads the same history format, supports local JSON selection, and exports a daily CSV. Its default URL is `../scripts/data/history.json`, matching the collector output when served from the repository root.

Required setup before using these templates:

1. Fill in the three placeholders in `snapshot.js` before running it: `<REPOSITORY_OWNER>` (GitHub user or organisation), `<REPOSITORY_NAME>` (repository name) and `<PROJECT_NUMBER>` (numeric project number). Replace the whole placeholder, including angle brackets. The project number is converted with `Number(...)`; for example, `Number("12")`. Verify that the chosen project is accessible through the repository query.
2. Align paths: the workflow calls `scripts/snapshot.js`, but the file is in `workflow-scripts/`. The CFD page (`chart.html`) expects `workflow-scripts/data/history.json`, while the collector writes `scripts/data/history.json`. The new burndown page already defaults to the collector location; update its editable URL if the output moves. Choose one location and update the command, writer, fetch URL and workflow commit path consistently.
3. Configure Node to support the script's ES-module `import`. Configure `MY_PAT` with the required project-read and repository-write access, and review the workflow's `HEAD:main` destination against the agreed branch rules.
4. Validate API responses and Status values; fail collection on errors. Add pagination before the query limits (10 projects, 100 items and 10 field values) can omit data.
5. Filter collected items against the dated sprint scope record. The script currently captures the entire project, not sprint membership. Use repository-qualified issue IDs if multiple repositories are included.
6. Verify a manual run, persisted history and scheduled collection. Serve the HTML and data through a local HTTP server or the chosen static hosting location so its relative fetch resolves.

The separate `burndown.html` page is implemented and uses the same item-level snapshot format as the CFD page. Repository/project values in `snapshot.js` are now placeholders, not a configured data source. The workflow still needs the path, secret and branch setup above before automated collection can run.

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
