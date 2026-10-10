# [EN-01-03] Consolidate architecture and deployment views

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; proposed milestone: S1 — Discover, Validate and Design; dates/estimate: to be agreed.
- Type: task; suggested labels: `type:task`, `area:backend`, `phase:3`, `priority:must`.
- Parent: [EN-01](EN-01-technical-design.md); epic: [EP-04](../epics/EP-04-engineering-and-quality.md).
- Allocation: see the [backlog README](../README.md).
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §6.2–§6.8; §7.1.2 item 7.
- Dependencies for completion: [EN-01-01](EN-01-01-select-stack-and-boundaries.md), [EN-01-02](EN-01-02-define-domain-and-contracts.md)
- Related decisions: DEC-04, DEC-06, in the [register](../../planning/decisions-and-feedback.md).

## Objective and scope

Make system boundaries, communication and the proposed runtime understandable to the whole team.

Existing drafts are inputs to review and improve; do not recreate work already supported by evidence. Preparation may overlap predecessor work; confirm dependent conclusions only after the needed findings/decisions exist.

Excluded: Container builds, live dashboards, deployment or a walking skeleton.

## Acceptance criteria

- [ ] Provide consistent system-context, component/container and deployment views, using diagrams or clear structured tables.
- [ ] Identify independently deployable backend units, worker ownership, data stores, broker, external simulator/provider and trust boundaries.
- [ ] Trace report persistence, event publication, triage suggestion and intervention updates, including retries, duplicates and stale messages.
- [ ] Document proposed configuration/secrets, service identity, health/logs/metrics and recovery responsibilities with a feasible environment.
- [ ] Walk through AI, broker and calendar failure behaviour and clearly distinguish planned design from a tested deployment.

## Deliverables and evidence

- [Technical design](../../08-technical-design.md) — update the relevant sections and link the change/review evidence.
- [Requirements/NFRs](../../requirements.md) — update the relevant sections and link the change/review evidence.
- [ADRs](../../adr/README.md) — update the relevant sections and link the change/review evidence.

## Verification

Reviewer checks the views against accepted ADRs and asks another team member to explain the principal flow.

Use the documentation/research checks appropriate to this task; implementation tests are not required for a design-only outcome.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
