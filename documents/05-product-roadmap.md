# 5. Product Roadmap

**Status:** proposal v0.3 · **Current stage:** Sprint 1 · **Reviewed:** 2026-10-09

This filename is retained, but this is **not the Product Backlog deliverable**: that is [06-product-backlog.md](06-product-backlog.md). File numbering does not necessarily match deliverable numbering.

## 1. Horizons

| Assignment milestone | Objective | Intended evidence |
|---|---|---|
| Sprint 1 | Discover, validate and design | Research, vision, backlog, AI Assessment, design, ADRs, security and walking skeleton |
| Sprint 2 | Build and operate the first version of the complete cycle | Application, persistence, permissions, AI/fallback, integration, tests, CI/CD and demonstrated failure |
| Sprint 3 | Complete, evaluate and strengthen | AI, usability, accessibility, security, performance and resilience results, and presentation |
| Post-MVP | Explore extensions with proven demand | New planning, with no commitment for the semester |

Dates, duration and capacity need confirmation (DEC-03). **Phases 1–3 are Sprint 1 activities**, not the three official sprints. The relationship between “Sprint B” and the official schedule also needs confirmation; see the [Sprint B proposal](planning/sprint-b-backlog.md).

## 2. Sprint 1

Phases may overlap; the walking skeleton can begin while research is underway.

| Phase | Work | Output |
|---|---|---|
| Phase 1 | Git, board, methodology, DoR/DoD and roles | Reviewed agreement and verified configuration |
| Phase 2 | Domain, alternatives, questions, interviews, requirements | Evidence or limitations, findings and decisions |
| Phase 3 | Vision, personas, workflow, domain, backlog, MoSCoW with stakeholders, Sprint B | Revised scope and selection meeting the DoR |
| Throughout | AI, architecture, ADRs, security and walking skeleton | Justifiable design and minimal runnable implementation |

Checklist: [Sprint 1 plan](planning/sprint-1-plan.md). At the review, assess the value of the problem and the size of the MVP. Documented limitations do not count as positive validation. Record actual feedback and at least one revised decision during the project (§5.7).

## 3. Sprint 2 — proposed sequence

The milestones below put [epics EP-01–EP-04](06-product-backlog.md#2-epics) into practice; they do not define a second list of epics. They are proposed objectives, not completed deliveries.

| Milestone | Demonstrable increment | Main items |
|---|---|---|
| M2.1 | Persisted report, authorised access and manual triage | US-01/02 |
| M2.2 | Asynchronous AI classification, rules, fallback and idempotency | US-03 |
| M2.3 | Shared summary, impact confirmation and contractor selection | US-04/06; US-05 conditional |
| M2.4 | Approved request, contractor response and confirmed booking or explicit pending/manual status | US-07/08 |
| M2.5 | Updates, completion, closure and history | US-09/10; US-11 conditional |

Tests, contracts, logs, metrics and CI/CD accompany each slice. Deployment and observability start early.

**Intended outcome:** a complete cycle with permissions, without technical intervention from the team. Demonstrate AI unavailability and external failure without false confirmations or duplicate effects. Criteria are in the [backlog](06-product-backlog.md).

## 4. Sprint 3

- Complete J1–J3 and incorporate feedback.
- Evaluate AI against the baseline, including cost, latency, errors and limitations.
- Evaluate usability/accessibility, authorisation, performance and recovery.
- Demonstrate the operational dashboard and continuity.
- Update architecture, ADRs, technical debt, operations, roadmap and individual contribution evidence.
- Prepare the pitch, demonstration and reproducible release.

Photos, cost charts and narrative summaries **are not Sprint 3 commitments**.

## 5. Cuts and extensions

| Option | Treatment |
|---|---|
| Second notification channel | Could; cut before the primary channel |
| Advanced ranking and embeddings | Should; simplify while retaining selection and manual confirmation |
| Real calendar | Could; retain a realistic simulator |
| Photos, analytics and summaries | Post-MVP, dependent on research |
| IoT in one scenario | DEC-01; review scope and integration before adding |
| Comprehensive monitoring, prediction, payments, subscriptions | Outside the baseline |

Do not remove mandatory requirements to accommodate extras. Update the vision, requirements, backlog and decisions together.

### Post-MVP extensions, conditional on evidence

| Candidate | Condition for new planning |
|---|---|
| Pilot with one building | Partner, responsibilities and data handling defined; MVP evaluated |
| Cost analytics and summaries | Sufficient data and decisions that benefit from analysis; figures calculated from records |
| Photo upload | Confirmed need and defined access/retention policy |
| AI visual analysis | Separate evaluation of quality, cost, latency and privacy |
| Assembly reports | Confirmed demand and authorised information |
| Native app, push notifications or multilingual support | Usage evidence justifying the investment |
| Contractor commissions/partnerships | Commercial validation; no assumed marketplace |
| Preventive maintenance | Demonstrated demand and opportunity; review of focus |

These candidates preserve ideas for evolution without promising dates or changing the MVP.

## 6. Metrics and dependencies

| Evaluation | Sprint 1 | Sprint 2 | Sprint 3 |
|---|---|---|---|
| Value and administrative effort | Gather estimates and define the comparison | Measure tasks and record acceptance/corrections | Compare results and explain limitations |
| AI/duplicate detection quality, where applicable | Define dataset and criteria | Initial evaluation | Results against baseline, cost and latency |
| Continuity and operations | Define scenarios and instrumentation | Demonstrate failures and initial dashboard | Repeat relevant scenarios and present evidence |

Product definitions are in the [vision](04-product-vision.md#5-metrics-and-success); AI protocol/thresholds in the [AI Assessment](07-responsible-ai-assessment.md#4-provisional-criteria); operational targets in the [NFRs](requirements.md#non-functional-requirements--constraints). Do not copy those thresholds here or present simulation as real impact.

Dependencies: access to professionals, capacity, scope, stack, visibility and evaluation environment. See [decisions](planning/decisions-and-feedback.md) and [vision](04-product-vision.md).

## 7. Roadmap review

Review after each sprint and stakeholder feedback. Record scope/priority changes and their reasons in the [decision register](planning/decisions-and-feedback.md), updating the affected vision and backlog. Capacity and task details belong in the sprint backlog; the Sprint 1 checklist remains in its plan.
