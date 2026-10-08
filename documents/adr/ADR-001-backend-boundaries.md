# ADR-001 — Backend boundaries and deployment

**Status:** Proposed · **Proposal date:** 2026-10-07 · **Decision-makers:** to be assigned · **DEC:** DEC-04

## Context

§6.2 requires at least two independently deployable backend components; a modular alternative depends on justification and acceptance. BMC distinguishes issue/triage from intervention preparation and execution.

## Alternatives

| Alternative | Expected advantages | Costs/risks |
|---|---|---|
| Issue + Dispatch, with asynchronous worker | Explicit domain boundaries and external failures; separate deployment | Eventual consistency, contracts, tests and distributed operations |
| Domain backend + independent worker | Fewer data boundaries; AI isolation | Justify worker autonomy/responsibility and suitability with lecturers |
| Modular monolith | Lower initial operational and transaction costs | Exception requires evidence and acceptance; modules must have verifiable boundaries |
| Service per role/subscription | Extensive separation | No demonstrated need; excessive cost for the MVP |

## Proposed direction (not accepted)

Issue controls issues/triage; Dispatch controls interventions/contractors/calendar. A worker processes triage and communicates results through the data owner's interface. A single persistence technology with separate schemas/credentials is a candidate.

Synchronous communication for requests/queries requiring an immediate response; events for lengthy tasks and state propagation. IDs and versioned contracts; no cross-writing to tables. Outbox and idempotent consumers are proposals to confirm.

## Consequences and validation

- Two services have their own builds, configuration, migrations and health checks.
- Shared database/infrastructure remain dependencies and failure points.
- Test worker unavailability, redelivery and delayed updates.
- Compare effort with actual capacity before finalising the choice.
- If choosing a modular alternative, record the justification and lecturer response; do not assume approval.

## Open questions

Stack, broker, service-to-service authentication, deployment, cancellation/reconciliation and final notification ownership. Review with the [technical design](../08-technical-design.md), EN-01 and DEC-04.

**Final decision / date / evidence:** pending.
