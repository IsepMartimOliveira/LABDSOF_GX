# Pending decisions and feedback

**Status:** open decisions and confirmed team updates · **Updated:** 2026-10-10

A provisional baseline enables consistent documents; it does not mean approval. Named role holders are recorded in the [team agreement](../governance/team-working-agreement.md); item owners and deadlines still require assignment. When deciding, record evidence, author, date and affected documents. The recording dates below do not imply that the meetings occurred on those dates.

## 1. Open decisions

| ID | Question | Provisional baseline / alternatives | Participants (roles mapped in team agreement) | Timing | Status |
|---|---|---|---|---|---|
| DEC-01 | Coordination or IoT? | Coordination; one possible IoT scenario; broad monitoring requires a new scope | Team, BA/PO, lecturers | Before finalising the MVP | Undecided |
| DEC-02 | Segment and commercial model | Property management companies; volunteers secondary; SaaS is a hypothesis | BA/PO, administrators | After initial research | To be validated |
| DEC-03 | Team, schedule, capacity and Sprint B | Five named members and responsibilities agreed; P1 = PM, P3 = BA/PO. Three official sprints; phases 1–3 within Sprint 1; do not assume B = Sprint 2 | Pedro (PM), team, lecturers | Before committing to Sprint B | Assignments confirmed; schedule, capacity and Sprint B unresolved |
| DEC-04 | Stack, boundaries and infrastructure | Independent Issue + Dispatch; worker/queue; modular alternative subject to acceptance | Tech Lead, DevOps, team | Sprint 1 design; before implementation | Proposed ADR-001 |
| DEC-05 | AI workflow, provider and evaluation | Text classification, baseline/fallback, one provider; optional embeddings | AI, QA, BA/PO | Before the AI story meets DoR | Undecided |
| DEC-06 | Integration and notifications | Realistic simulated calendar; real optional; one proposed in-app channel | Tech Lead, BA/PO | Before integration | Undecided |
| DEC-07 | Visibility and data lifecycle | Private reports, published shared summary, extract for contractor, synthetic data | QA/Security, BA/PO | Before implementing permissions | To be validated |
| DEC-08 | Baselines and targets | Administrative effort as primary metric; provisional technical targets | QA, BA/PO, AI | Before formal evaluation | To be calibrated |
| DEC-09 | Methodology, board and Git | Adapted Scrum, GitHub Projects or Jira, short-lived branches and reviewed PRs | Team | Phase 1 | To be ratified/configured |
| DEC-10 | Approval and confirmation | Administrator approves request; contractor accepts; calendar/manual confirmation; administrator closes | BA/PO, administrators and contractors | Before US-07–US-09 | To be validated |

### Confirmed Sprint 1 scope decision — DEC-11

- **Recorded:** 2026-10-10, from the team's update in the project conversation.
- **Clarification:** the evaluator confirmed that the walking skeleton is optional for Sprint 1.
- **Team decision:** do not develop the walking skeleton this sprint. Its absence is not a Sprint 1 completion blocker; it is not marked as implemented.
- **Change:** the earlier plan treated §7.1.2 item 10 as required in Sprint 1. The revised plan excludes that implementation and retains EN-02 as a candidate foundation for later implementation planning.
- **Scope:** other Sprint 1 discovery/design deliverables and later technical delivery requirements remain applicable. The original assignment is retained unchanged.
- **Traceability:** README, strategy, roadmap, backlog, Sprint 1/Sprint B plans, walking skeleton plan, team agreement and milestone conventions updated. Evaluator name, clarification date and meeting link were not supplied.

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

The evaluator clarification below was reported by the team. No separate investor review session or revision of a product/technical decision has been recorded; the scope clarification alone is not treated as proof of meeting §5.7.

| ID | Date/participants | Feedback and evidence | Previous → revised decision | Reason | Documents/issues | Owner/status |
|---|---|---|---|---|---|---|
| FB-01 | Recorded 2026-10-10; team reports evaluator clarification; session date/name not supplied | Walking skeleton optional in Sprint 1; source: team update in project conversation | Required Sprint 1 skeleton → no skeleton development this sprint | Team chose not to implement the optional deliverable | DEC-11; EN-02; Sprint 1 plan | Team decision confirmed; Pedro coordinates planning updates |

Use the [template](../templates/investor-review.md). At least one decision must actually be revised in response to lecturers (§5.7). Minutes without a change do not meet that requirement.

## 4. Limitations and technical debt

| ID | Limitation | Impact | Next action | Owner |
|---|---|---|---|---|
| LIM-01 | No primary research recorded | Value and adoption need validation | DISC-01 | To be assigned |
| LIM-02 | Incomplete competitor sources | Differentiation not demonstrated | DISC-02 | To be assigned |
| LIM-03 | No application code, CI or deployment in this baseline | Later technical requirements not yet demonstrated; optional skeleton excluded from Sprint 1 by DEC-11 | EN-01 design; EN-02 considered in later implementation planning | To be assigned |

Add implementation debt when it exists; future features are not automatically technical debt.
