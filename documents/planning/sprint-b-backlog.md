# Sprint B — backlog proposal

**Status:** draft for planning; **no committed items**.

The term Sprint B was specified in the Sprint 1 phases, but its correspondence with Sprint 1/2/3, duration and dates is not documented. DEC-03 must clarify this. This plan assumes only a next work cycle that prepares/demonstrates a minimal slice; it does not rename Sprint 2.

## Candidate objective

Demonstrate a persisted text report and authorised status query while closing decisions and gathering evidence supporting the MVP.

## Candidates in dependency order

Full IDs and criteria are in the [product backlog](../06-product-backlog.md).

| Order | Item | Candidate outcome | Missing dependencies/DoR | Estimate | Owner | Selected |
|---|---|---|---|---|---|---|
| 1 | DISC-03 | Scope, schedule and priorities discussed | Participants/date, question and session duration | To be estimated | To be assigned | No |
| 2 | DISC-01 | Initial user evidence | Recruitment, owner and retention | To be estimated | To be assigned | No |
| 3 | EN-01 | Sufficient design/stack/security for the skeleton | DEC-04/07, technical review | To be estimated | To be assigned | No |
| 4 | EN-02 | Executable build, test and containers | EN-01, environment and checks | To be estimated | To be assigned | No |
| 5 | US-01 | Report/query with building membership | DEC-07, EN-01/02, reviewed criteria | To be estimated | To be assigned | No |
| 6 | US-02 | Basic states and manual correction | US-01, transition rules | To be estimated | To be assigned | No |

DISC-02 (competitors) may replace a candidate if it offers greater value for decisions. This does not authorise committing to all items without capacity.

## Planning record

| Field | Value |
|---|---|
| Correspondence with official sprint | To be confirmed in DEC-03 |
| Dates and duration | To be confirmed |
| Individual availability / absences | To be filled in |
| Total estimate and contingency | To be calculated by the team |
| Items actually selected | None |
| Final agreed objective | Pending |
| Planning date/participants | Pending |

## DoR gate

- [ ] Team agreement and capacity known.
- [ ] Each candidate's criteria and dependencies reviewed.
- [ ] Owners, reviewers and estimates assigned.
- [ ] [DoR](../governance/definition-of-ready.md) checked per item, with date.
- [ ] Selection fits capacity and supports the objective.

Items without DoR remain in the product backlog. A spike may be selected to resolve uncertainty if it has a question, effort limit and verifiable output.

## Proposed demonstration and tracking

An authorised test user records an issue; after restarting the service, they query the same ID. Another building cannot read/modify the issue. Show the build, automated test and containers; reporting does not depend on AI.

Update progress on the board and reflect decisions at the review. See [walking skeleton](../10-walking-skeleton.md).

Reference: [Sprint Backlog — Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/scrum/artifacts/sprint-backlog), accessed on 2026-10-07. This document prepares for team selection; it is not an approved commitment.
