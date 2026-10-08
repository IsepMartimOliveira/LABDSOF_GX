# Pending decisions and feedback

**Status:** initial register · **Reviewed:** 2026-10-07

A provisional baseline enables consistent documents; it does not mean approval. Names and deadlines are assigned by the team. When deciding, record evidence, author, date and affected documents.

## 1. Open decisions

| ID | Question | Provisional baseline / alternatives | Participants (names to be assigned) | Timing | Status |
|---|---|---|---|---|---|
| DEC-01 | Coordination or IoT? | Coordination; one possible IoT scenario; broad monitoring requires a new scope | Team, BA/PO, lecturers | Before finalising the MVP | Undecided |
| DEC-02 | Segment and commercial model | Property management companies; volunteers secondary; SaaS is a hypothesis | BA/PO, administrators | After initial research | To be validated |
| DEC-03 | Team, schedule, capacity and Sprint B | Three official sprints; phases 1–3 within Sprint 1; do not assume B = Sprint 2 | PM, team, lecturers | Before committing to Sprint B | Undecided |
| DEC-04 | Stack, boundaries and infrastructure | Independent Issue + Dispatch; worker/queue; modular alternative subject to acceptance | Tech Lead, DevOps, team | Before the skeleton | Proposed ADR-001 |
| DEC-05 | AI workflow, provider and evaluation | Text classification, baseline/fallback, one provider; optional embeddings | AI, QA, BA/PO | Before the AI story meets DoR | Undecided |
| DEC-06 | Integration and notifications | Realistic simulated calendar; real optional; one proposed in-app channel | Tech Lead, BA/PO | Before integration | Undecided |
| DEC-07 | Visibility and data lifecycle | Private reports, published shared summary, extract for contractor, synthetic data | QA/Security, BA/PO | Before implementing permissions | To be validated |
| DEC-08 | Baselines and targets | Administrative effort as primary metric; provisional technical targets | QA, BA/PO, AI | Before formal evaluation | To be calibrated |
| DEC-09 | Methodology, board and Git | Adapted Scrum, GitHub Projects or Jira, short-lived branches and reviewed PRs | Team | Phase 1 | To be ratified/configured |
| DEC-10 | Approval and confirmation | Administrator approves request; contractor accepts; calendar/manual confirmation; administrator closes | BA/PO, administrators and contractors | Before US-07–US-09 | To be validated |

## 2. Editorial harmonisation

These are neither investor feedback nor user-validated choices.

| Conflict | Treatment on 2026-10-07 |
|---|---|
| 05 treated as backlog | Roadmap retained; 06-product-backlog created |
| MVP ended at notification | Completion, closure and history made explicit |
| Approval confused with scheduling | Approval, acceptance and confirmation separated |
| Photos/costs/summaries in Sprint 3 and after the course | Post-MVP, without Sprint 3 commitment |
| Automatic vs human approval | Automatic approval outside baseline |
| 100% of critical cases as a guarantee | Criterion restricted to the test set |
| Not found = nonexistent | Comparison marked preliminary/unconfirmed |
| IoT in notes vs vision scope | Preserved for DEC-01 |
| Git protections and board as facts | Proposed configurations without remote evidence |

## 3. Stakeholder/investor feedback

**No session or decision revised through feedback has been recorded.**

| ID | Date/participants | Feedback and evidence | Previous → revised decision | Reason | Documents/issues | Owner/status |
|---|---|---|---|---|---|---|
| To be completed after a session | — | — | — | — | — | — |

Use the [template](../templates/investor-review.md). At least one decision must actually be revised in response to lecturers (§5.7). Minutes without a change do not meet that requirement.

## 4. Limitations and technical debt

| ID | Limitation | Impact | Next action | Owner |
|---|---|---|---|---|
| LIM-01 | No primary research recorded | Value and adoption need validation | DISC-01 | To be assigned |
| LIM-02 | Incomplete competitor sources | Differentiation not demonstrated | DISC-02 | To be assigned |
| LIM-03 | No code, CI or deployment in this baseline | Technical requirements not demonstrated | EN-01, EN-02 | To be assigned |

Add implementation debt when it exists; future features are not automatically technical debt.
