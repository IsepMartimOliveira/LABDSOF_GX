# [EN-01-02] Consolidate the domain model and contract outlines

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; proposed milestone: S1 — Discover, Validate and Design; dates/estimate: to be agreed.
- Type: task; suggested labels: `type:task`, `area:backend`, `phase:3`, `priority:must`.
- Parent: [EN-01](EN-01-technical-design.md); epic: [EP-04](../epics/EP-04-engineering-and-quality.md).
- Allocation: see the [backlog README](../README.md).
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §6.2–§6.6; §7.1.2 item 7.
- Dependencies for completion: [DISC-03-03](DISC-03-03-refine-product-vision.md), [EN-01-01](EN-01-01-select-stack-and-boundaries.md)
- Related decisions: DEC-04, DEC-06, DEC-07, DEC-10, in the [register](../../planning/decisions-and-feedback.md).

## Objective and scope

Specify consistent business states and interfaces for later implementation.

Existing drafts are inputs to review and improve; do not recreate work already supported by evidence. Preparation may overlap predecessor work; confirm dependent conclusions only after the needed findings/decisions exist.

Excluded: Production-complete OpenAPI, migrations and executable integration tests.

## Acceptance criteria

- [ ] Review entities, relationships, data ownership and building membership against the agreed journeys.
- [ ] Specify approval, contractor response, scheduling, completion, reopening and cancellation rules, including invalid/concurrent transitions.
- [ ] Provide representative request/response and event examples, identifiers, versions and error behaviour for the principal journey.
- [ ] Outline the realistic calendar/simulator contract, delayed/invalid/uncertain outcomes and reconciliation/idempotency requirements.
- [ ] Explain how Dispatch obtains trustworthy authorisation context without cross-writing Issue data; link unresolved details to decisions.

## Deliverables and evidence

- [Technical design](../../08-technical-design.md) — update the relevant sections and link the change/review evidence.
- [Requirements](../../requirements.md) — update the relevant sections and link the change/review evidence.
- [Security access matrix](../../09-security-privacy.md) — update the relevant sections and link the change/review evidence.

## Verification

Reviewer walks one successful journey and failure/denied-access scenarios through the model and contracts.

Use the documentation/research checks appropriate to this task; implementation tests are not required for a design-only outcome.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
