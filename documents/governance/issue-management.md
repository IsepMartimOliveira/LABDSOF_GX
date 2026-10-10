# Backlog, labels and milestones

**Status:** proposed convention v0.1 · remote board, issues, labels and milestones not created/verified

## Source and synchronisation

Until a board is confirmed, the [Markdown backlog](../06-product-backlog.md) is the source of items. After choosing GitHub Projects/Jira (DEC-09), retain local IDs, add URLs and use the board for operational status. Update the documentation snapshot at reviews; do not maintain two lists with incompatible priorities.

An epic groups a broad outcome; a story delivers observable value; a task covers technical/research/documentation work; a bug records a deviation from expected behaviour. Do not force technical tasks into fictional personas.

## Workflow

Backlog → Refinement → Ready → In progress → In review → Done.

“Blocked” can be a separate flag, with a reason, dependency and next action. DoR controls Ready; DoD controls Done. Currently, items are proposals in Backlog without estimates or owners.

## Proposed labels

| Family | Values | Use |
|---|---|---|
| Type | type:epic, type:story, type:task, type:bug, type:spike | One per item |
| Area | area:product, area:frontend, area:backend, area:ai, area:devops, area:security, area:docs | One or more |
| Priority | priority:must, priority:should, priority:could, priority:wont | MoSCoW for the selected horizon |
| Phase | phase:1, phase:2, phase:3 | Sprint 1 organisation, where applicable |
| Flag | needs:decision, needs:research, blocked | Explain in the body and remove when resolved |

Do not duplicate state in labels if the board already has a Status field. Priority does not measure the operational urgency of a product issue.

## Proposed milestones

| Name | Outcome | Date | Remote status |
|---|---|---|---|
| S1 — Discover, Validate and Design | §7.1.2 discovery/design deliverables; optional skeleton excluded by team decision (DEC-11) | To be confirmed | Not verified |
| S2 — Build and Operate | Operational slice, §7.2.2 | To be confirmed | Not verified |
| S3 — Evaluate and Present | Evaluation and delivery, §7.3.2 | To be confirmed | Not verified |

Do not create a Sprint B milestone until DEC-03 is clarified. Phases 1–3 can be a field/label, not three additional milestones.

## Minimum fields

ID, type, epic, objective, priority and rationale, acceptance criteria, dependencies, requirements/NFRs, owner, estimate, sprint/milestone, DoR verification, DoD evidence and issue URL.

## Local templates

- [Story](../../.github/ISSUE_TEMPLATE/user-story.md)
- [Epic](../../.github/ISSUE_TEMPLATE/epic.md)
- [Task / spike](../../.github/ISSUE_TEMPLATE/task.md)
- [Bug](../../.github/ISSUE_TEMPLATE/bug.md)
- [PR](../../.github/pull_request_template.md)
- [ADR](../templates/adr.md)
- [Research](../templates/research-record.md)
- [Investor review](../templates/investor-review.md)

GitHub templates do not preassign labels or milestones that do not exist. Select them after configuring the repository; they can also be adapted for Jira.

References: [epics and stories](https://www.atlassian.com/agile/project-management/epics-stories-themes), [product backlog](https://www.atlassian.com/agile/scrum/backlogs) and [GitHub templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates), accessed on 2026-10-07.
