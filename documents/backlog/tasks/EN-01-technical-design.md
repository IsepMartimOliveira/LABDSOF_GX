# [EN-01] Consolidate technical design, ADRs and security

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; type: parent task; suggested labels: `type:task`, `area:backend`, `priority:must`.
- Epic: [EP-04](../epics/EP-04-engineering-and-quality.md).
- Allocation: see the [backlog README](../README.md).
- Horizon: S1; dates/estimate: to be agreed. Do not add parent estimates to child totals.
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §6; §7.1.2 items 7–9.
- Scope/priority baseline: [Product backlog](../../06-product-backlog.md).

## Objective

Provide a coherent, justified technical direction for the next implementation cycle.

## Child tasks

- [ ] [EN-01-01 — Select the stack and accept architecture decisions](EN-01-01-select-stack-and-boundaries.md)
- [ ] [EN-01-02 — Consolidate the domain model and contract outlines](EN-01-02-define-domain-and-contracts.md)
- [ ] [EN-01-03 — Consolidate architecture and deployment views](EN-01-03-consolidate-architecture-views.md)
- [ ] [EN-01-04 — Review the initial security and privacy assessment](EN-01-04-review-security-and-privacy.md)

## Parent completion criteria

- [ ] Significant architecture/technology choices have alternatives, recorded decisions and consequences.
- [ ] Context, components, data ownership/model, API/events, external integration and deployment views agree.
- [ ] The initial threat/data/access assessment is reviewed and unresolved decisions are identified with owners.
- [ ] Completed design tasks are supported by reviewed documents; no executable skeleton is required in Sprint 1 (DEC-11).

## Evidence and dependencies

- [Technical design](../../08-technical-design.md)
- [ADRs](../../adr/README.md)
- [Security/privacy assessment](../../09-security-privacy.md)

Child drafts state execution dependencies and verification methods. This parent aggregates their evidence rather than duplicating their work. Completing one child never automatically completes the parent. Record any genuinely additional parent-level work separately so progress is not counted twice.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
