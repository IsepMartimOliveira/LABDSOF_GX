# [EN-01-01] Select the stack and accept architecture decisions

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; proposed milestone: S1 — Discover, Validate and Design; dates/estimate: to be agreed.
- Type: task; suggested labels: `type:task`, `area:backend`, `phase:3`, `priority:must`.
- Parent: [EN-01](EN-01-technical-design.md); epic: [EP-04](../epics/EP-04-engineering-and-quality.md).
- Allocation: see the [backlog README](../README.md).
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §6.2–§6.5; §7.1.2 items 7 and 8.
- Dependencies for completion: No blocking predecessor task; use current proposals as inputs.
- Related decisions: DEC-04, DEC-06, in the [register](../../planning/decisions-and-feedback.md).

## Objective and scope

Choose a feasible technical direction using the current scope and actual team skills/capacity.

Existing drafts are inputs to review and improve; do not recreate work already supported by evidence. Preparation may overlap predecessor work; confirm dependent conclusions only after the needed findings/decisions exist.

Excluded: Building services, benchmarking invented results and selecting technologies solely to fill document fields.

## Acceptance criteria

- [ ] Compare credible alternatives for client/backend stack, persistence, asynchronous transport and deployment, recording evidence and operational/learning costs.
- [ ] Decide Issue/Dispatch boundaries and ownership, worker placement and integration approach; record consequences of shared infrastructure.
- [ ] Accept or revise ADR-001 and create additional ADRs only for significant choices, with decision-makers, dates, rationale and trade-offs.
- [ ] If proposing a modular alternative, record lecturer acceptance or keep the exception explicitly unresolved; do not assume permission.
- [ ] Update DEC-04/06 and list unresolved details with owners and impact on later implementation.

## Deliverables and evidence

- [Technical design](../../08-technical-design.md) — update the relevant sections and link the change/review evidence.
- [Backend ADR](../../adr/ADR-001-backend-boundaries.md) — update the relevant sections and link the change/review evidence.
- [ADR index](../../adr/README.md) — update the relevant sections and link the change/review evidence.
- [ADR template](../../templates/adr.md) — update the relevant sections and link the change/review evidence.
- [Decision register](../../planning/decisions-and-feedback.md) — update the relevant sections and link the change/review evidence.

## Verification

Reviewer checks that accepted decisions have actual decision evidence and that the proposed deployment fits team capacity.

Use the documentation/research checks appropriate to this task; implementation tests are not required for a design-only outcome.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
