# Team working agreement

**Status:** proposal v0.2, awaiting ratification · **Sprint:** 1 · **Team:** 5 people

## 1. Proposed methodology

Scrum adapted to the assignment's three sprints, with a visible backlog, demonstrable increments and frequent review. Phases 1–3 are Sprint 1 activities. Team size is confirmed at five people; the schedule, individual availability and relationship with Sprint B still need clarification in DEC-03.

| Practice | Proposal | Evidence |
|---|---|---|
| Planning | Objective, capacity, dependencies, DoR and selection | Sprint backlog and brief minutes |
| Daily update | Asynchronous: progress, next step and blockers | Agreed board/channel |
| Refinement | At least weekly while work remains | Items with criteria and estimates |
| Review | Demonstration by objective; lecturer/stakeholder feedback | Feedback and decision register |
| Retrospective | Review collaboration and choose a concrete improvement | Action, owner and follow-up |
| Peer review | PR for each change; review proportionate to risk | PR and resolved comments |

Final cadence and channel to be agreed in DEC-09. Proposed limit: one main task in progress per person; review if it hinders collaboration.

## 2. Roles and assignment

Each person has a primary technical area and a cross-cutting responsibility. **P1–P5 are provisional positions, not approved assignments to named people.** Choose names based on experience, interest and availability; review the distribution at the end of Sprint 1.

Being responsible for an area means following its progress, decisions and integration. It does not mean doing all the work alone or having exclusive authority over decisions.

| Person | Name | Primary technical area | Cross-cutting responsibility | Main deliverables | Backup / second member |
|---|---|---|---|---|---|
| P1 | To be assigned | Frontend and user experience | BA / Product Owner | Journeys, prototype, interfaces, research synthesis and requirements/backlog refinement | To be assigned |
| P2 | To be assigned | Issue backend | Architecture point of contact / Tech Lead | Reports, states, history, building membership, authorisation and domain model | To be assigned |
| P3 | To be assigned | Intervention backend and integrations | Project coordination / PM | Contractors, proposals, approval, response, calendar; dependency tracking and lecturer contact | To be assigned |
| P4 | To be assigned | AI and asynchronous processing | AI evaluation and data quality | Baseline, classification, worker, fallback, dataset and evaluation results | To be assigned |
| P5 | To be assigned | Infrastructure and operational quality | DevOps / QA and security coordination | Containers, CI/CD, observability, cross-cutting tests and recovery | To be assigned |

### 2.1. Shared responsibilities

- **Implementation and tests:** each person implements, tests and documents their changes. P5 prepares quality practices and infrastructure; they are not responsible for testing or fixing the entire system.
- **Research:** P1 coordinates guides and synthesis, but everyone participates in gathering and discussing evidence. Where possible, interview in pairs: one person leads and another takes notes.
- **Documentation:** each owner maintains their area's contracts, decisions and instructions. P1 does not handle all project documentation.
- **Security:** P5 coordinates risk review; each owner implements and checks controls in their components. P2 coordinates the authorisation model with the other services.
- **Architecture and priorities:** P2 facilitates technical decisions and P1 prepares priorities; the team discusses trade-offs and records stakeholder feedback.
- **Reviews:** at least one other member reviews each PR. The backup follows relevant decisions and changes so they can keep the area moving.
- **Overall knowledge:** everyone must be able to explain the vision, journeys, architecture, AI, risks and operations (§10 of the assignment).

### 2.2. Collaboration by functional slice

Area ownership does not create five isolated development efforts. Integrate complete paths early:

| Slice | Proposed primary collaboration | Support |
|---|---|---|
| Report and track | P1 + P2 | P5 on environment, tests and observability |
| Assisted triage | P4 + P2 | P1 on presenting/correcting suggestions; P5 on failure scenarios |
| Intervention and scheduling | P3 + P1 | P2 on contracts and states; P5 on integration and recovery |
| Resilience and operations | P5 coordinates | Each owner handles failures and metrics for their component |

For the walking skeleton, P1 prepares the form/query, P2 the API/persistence, P3 supports contracts and integration, P4 prepares synthetic fixtures and a simple baseline, and P5 integrates containers, CI and the end-to-end test. The baseline can be prepared in parallel and does not block the first reporting/query demonstration.

### 2.3. Capacity and review of the division

Technical and cross-cutting responsibilities count towards individual capacity. Review workload during planning and redistribute when needed, especially research/frontend for P1 and infrastructure/quality for P5.

The PM role can rotate between sprints, with a context handover and maintenance of the decision register. Distribution by phase and execution evidence belong in the [Sprint 1 plan](../planning/sprint-1-plan.md); owners of specific tasks are recorded in issues and the [sprint backlog](../planning/sprint-b-backlog.md).

## 3. Management and decisions

- Tool to be chosen: GitHub Projects or Jira; [conventions](issue-management.md).
- [DoR](definition-of-ready.md) before selecting implementation work; [DoD](definition-of-done.md) for closure.
- [Git workflow](git-workflow.md) for changes and reviews.
- Product/process decisions in the [register](../planning/decisions-and-feedback.md); significant technical decisions in ADRs.
- Priority changes with stakeholders record participants, reason and impact on the plan.
- Unresolved architecture questions lead to a spike with a question, effort limit and expected outcome.

## 4. Individual evidence

Keep references to issues, PRs, reviews, research, tests, decisions and demonstrations. Commit count does not measure contribution.

| Person | Sprint | Contribution and impact | Evidence | Learning / reflection |
|---|---|---|---|---|
| To be completed by the team | — | — | — | — |

## 5. Ratification and setup

- [x] Team size confirmed: five people.
- [ ] Names assigned to P1–P5 and responsibilities reviewed by the team.
- [ ] Backup / second member defined for each area.
- [ ] Individual availability and capacity recorded during planning.
- [ ] Methodology and cadence reviewed by the team.
- [ ] Board accessible and workflow configured.
- [ ] DoR, DoD and Git workflow reviewed.
- [ ] Schedule and Sprint B clarified.
- [ ] Agreement meeting link/date recorded here.

**Team approval:** pending. **Board URL:** to be filled in. **Channel:** undecided.
