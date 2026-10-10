# Walking Skeleton

**Status:** retained implementation plan · **Not selected for Sprint 1; not implemented** · Decision recorded on 2026-10-10

The evaluator clarified that the walking skeleton (§7.1.2, item 10) is optional for Sprint 1. The team decided not to develop it this sprint; its absence is not a Sprint 1 completion blocker. See [DEC-11](planning/decisions-and-feedback.md#confirmed-sprint-1-scope-decision--dec-11). The original assignment remains unchanged, and later technical delivery requirements remain applicable.

The plan below is retained for later implementation planning, not a Sprint 1 commitment or evidence of implementation. This baseline contains no application, Dockerfiles, application build/test pipeline or software tests.

## 1. Minimum objective

Test client → backend → persistent storage → query the same ID after restart. Include a test identity and an access check between two buildings.

This skeleton does not need to implement all stories, AI or the calendar yet. Future boundaries must be clear; Sprint 2 requires two independent backend components or an accepted modular alternative.

## 2. Proposed sequence

1. Resolve the stack/environment and minimum boundaries in DEC-04 / EN-01.
2. Create synthetic fixtures for two buildings, a resident and an administrator.
3. Implement a slice of US-01: record a report and query its status.
4. Enforce authorisation in the backend; do not delegate security to the client.
5. Containerise the client/backend/storage and document configuration.
6. Create an automated build and at least an integration test for the slice.
7. Restart the service and demonstrate persistence; test denied access from another building.
8. Save commit/PR links, pipeline run and tested instructions.

## 3. Acceptance checklist

Apply this checklist when the implementation is scheduled; these unchecked items are not Sprint 1 exit criteria.

- [ ] Code and configuration in Git, linked to EN-02.
- [ ] Client records and queries a persisted ID.
- [ ] Data survives restart.
- [ ] Automated test confirms the path.
- [ ] Unauthorised access test fails as expected.
- [ ] Automated build executed successfully.
- [ ] Containers start with reproducible instructions.
- [ ] Basic health check and log with correlation ID.
- [ ] Configuration/secrets and test data cleanup documented.
- [ ] Another member reproduces the demonstration.

## 4. Execution record (to be filled in with evidence)

| Field | Status |
|---|---|
| Stack / accepted ADR | Undecided |
| Commit / PR | Unavailable |
| Pipeline / run | Unavailable |
| Installation/build/test/deploy commands | To be written after stack selection; do not invent commands |
| Environment and versions | To be defined |
| Test result | Not executed |
| Demonstration / reviewer | Pending |
| Observed limitations | To be recorded after execution |

## 5. Evolution

Evolution after the skeleton follows the [Sprint 2 milestones](05-product-roadmap.md#3-sprint-2--proposed-sequence). Each increment updates the [design](08-technical-design.md), contracts and [DoD](governance/definition-of-done.md).

Items: EN-01/02/03 and US-01 in the [backlog](06-product-backlog.md). This document will be the entry point for actual execution instructions when they exist.
