# [EN-01-04] Review the initial security and privacy assessment

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; proposed milestone: S1 — Discover, Validate and Design; dates/estimate: to be agreed.
- Type: task; suggested labels: `type:task`, `area:security`, `phase:3`, `priority:must`.
- Parent: [EN-01](EN-01-technical-design.md); epic: [EP-04](../epics/EP-04-engineering-and-quality.md).
- Allocation: see the [backlog README](../README.md).
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §6.4, §6.6; §7.1.2 item 9.
- Dependencies for completion: [EN-01-01](EN-01-01-select-stack-and-boundaries.md), [EN-01-02](EN-01-02-define-domain-and-contracts.md)
- Related decisions: DEC-04, DEC-05, DEC-07, in the [register](../../planning/decisions-and-feedback.md).

## Objective and scope

Review threats and data/access policies against the agreed architecture and journeys.

Existing drafts are inputs to review and improve; do not recreate work already supported by evidence. Preparation may overlap predecessor work; confirm dependent conclusions only after the needed findings/decisions exist.

Excluded: Legal compliance certification, implemented control tests and a production security audit.

## Acceptance criteria

- [ ] Review assets/trust boundaries and prioritise threats with stated likelihood/impact reasoning; do not claim residual risk after untested controls.
- [ ] Review author/admin/contractor access, cross-building isolation, private report/public summary separation and service authentication.
- [ ] Document minimised data fields, proposed retention/deletion and backup handling, with owners for decisions that depend on the later environment.
- [ ] Reference research-specific safeguards from DISC-01-01 without blocking initial interviews on completion of this entire task.
- [ ] Link proposed controls to NFRs and later verification work, recording review findings and unresolved risks.

## Deliverables and evidence

- [Security/privacy assessment](../../09-security-privacy.md) — update the relevant sections and link the change/review evidence.
- [Requirements/NFRs](../../requirements.md) — update the relevant sections and link the change/review evidence.
- [Technical design](../../08-technical-design.md) — update the relevant sections and link the change/review evidence.
- [Decision register](../../planning/decisions-and-feedback.md) — update the relevant sections and link the change/review evidence.

## Verification

Reviewer performs a documented threat/access walkthrough, including cross-building reads and unauthorised approval.

Use the documentation/research checks appropriate to this task; implementation tests are not required for a design-only outcome.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
