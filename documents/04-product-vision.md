# 4. Product Vision

**Status:** proposal v0.3 · **Sprint:** 1 · **Reviewed:** 2026-10-09

Personas, priorities and targets are hypotheses. This is the **source of the proposed functional scope**; changes must be reflected in the [backlog](06-product-backlog.md), [requirements](requirements.md) and [decisions](planning/decisions-and-feedback.md).

## 1. Vision and value proposition

> Help residential communities recover from everyday faults through traceable coordination, less administrative effort and information appropriate to each participant.

For administrators receiving scattered reports, BMC organises the path from reporting to resolution, suggests triage and supports interventions. The expected benefit is reduced coordination effort; differentiation from alternatives still needs validation.

## 2. Provisional personas

| Persona | Context [Hypothesis] | Expected benefit | Difficulty / condition for trust to investigate |
|---|---|---|---|
| Marta, professional administrator | Manages several buildings | Less effort per issue and control over decisions/costs | Scattered contacts; needs to understand suggestions and approve before committing resources |
| Rui, resident | Uses a mobile phone and reports occasionally | Report easily and know the status/confirmed date | Lack of feedback; concern about exposing location and private details |
| Carlos, contractor | Small maintenance company | Complete requests and an organised schedule, avoiding wasted trips | Vague descriptions, late changes and uncertainty about payment terms |

Timely payment is a need to investigate, not a promise of payment functionality. Usability targets belong in the [NFRs](requirements.md#non-functional-requirements--constraints).

Volunteers are relevant participants, but cannot by themselves validate adoption by companies.

## 3. Journeys and responsibilities

### J1 — Report and track

1. An authenticated resident selects a building they belong to, an area and a text description.
2. The system persists the report and acknowledges receipt without waiting for AI.
3. When implemented, suggestions of similar issues show only authorised information; linking is not automatic and does not delete the report.
4. The resident tracks the status and can confirm “This affects me too” on published shared issues.
5. They receive updates through the defined channel and manage their subscription.

### J2 — Triage and coordinate (main journey)

1. The administrator sees the queue for buildings they manage, including unclassified items or items using fallback.
2. They review the suggested category, urgency and rationale; they can correct them and record the decision.
3. They review duplicate suggestions, if available, and publish a summary without private data when appropriate.
4. They select an eligible contractor from a small catalogue; rule-based ranking explains the available criteria.
5. They approve the proposal and send the request. If no contractor is eligible, the issue remains visibly pending manual action.
6. After the contractor accepts, they track calendar synchronisation. Without external confirmation, the status remains “scheduling pending”; they can confirm manually and record the source.
7. They review completion, record the cost when known and close the issue. They can reopen it with a reason.

### J3 — Respond and carry out the work

1. The contractor sees only assigned requests and necessary data.
2. They accept, decline or propose another date. Changes to terms return to the administrator for approval.
3. They report completion and cost, if known. This does not automatically close the issue.

### J4 — Analyse costs (post-MVP)

The administrator views aggregates and trends; figures are calculated from records. AI summaries depend on a demonstrated need and a separate evaluation.

## 4. Proposed MVP boundary

| Proposed baseline | Conditional candidates | Outside the baseline / post-MVP |
|---|---|---|
| Text reports, states and history | Advanced duplicate detection using embeddings | Photo upload/analysis |
| Assisted classification, review, rules and fallback | Price/distance ranking if reliable data is available | Cost charts and summaries |
| Impact confirmation on shared issues | Real calendar instead of a simulator | Marketplace, payments, condominium fees and assemblies |
| Catalogue, rule-based selection and approval | Limited IoT, only after DEC-01 and a scope review | Comprehensive monitoring and fault prediction |
| Contractor response and calendar integration | Additional notification channel | Automatic expense approval |
| Notifications through one channel, closure and enforced authorisation | | Native apps and subscription management |

Basic cost may remain “not provided” and does not block closure. The [backlog](06-product-backlog.md) distinguishes Must/Should/Could/Won't; priorities await discussion with the customer/lecturers.

## 5. Metrics and success

| Metric | How to measure | Proposed criterion / limitation |
|---|---|---|
| Active administrative effort — primary | Triage and preparation time for equivalent tasks, current process vs BMC | Intended reduction; threshold pending a baseline (DEC-08) |
| Time until request sent | Receipt to dispatch to the contractor | Separate waiting from active time |
| Time until acceptance | Dispatch to contractor response | Do not confuse dispatch with confirmation |
| Time until resolution | Receipt to closure | Exploratory; simulation does not prove real impact |
| Triage quality | Model, rules and combined system | Protocol and targets in the [AI Assessment](07-responsible-ai-assessment.md) |
| Duplicate detection quality | Precision and recall on labelled pairs, if implemented | Criteria centralised in the [AI Assessment](07-responsible-ai-assessment.md#4-provisional-criteria) |
| Acceptance without editing | Percentage and correctness audit | Does not independently equate to trust |
| Continuity | AI disabled and calendar unavailable | Reporting and triage continue; pending/manual scheduling is explicit |

Interviews provide estimates, not instrumented measurements. In tests, vary the order of methods where possible and disclose the sample and limitations.

## 6. Ethical participation and visibility

**Mechanism:** “This affects me too”, on shared issue summaries published by the administrator for the same building.

1. Encourages confirming impact instead of repeating reports.
2. Helps understand the extent of impact; the counter does not determine urgency.
3. One confirmation per user/issue, rate limits and authorisation by building.
4. Identities are not exposed to other residents; no rankings or penalties for non-participants.
5. Users can withdraw confirmation and disable optional updates; they can always create a separate report.

The mechanism must respect the [access matrix](09-security-privacy.md#2-proposed-access-matrix), including the separation between the private report and the published summary. Proposal awaiting validation in DEC-07.

## 7. Risks

| Risk | Proposed response |
|---|---|
| Segment shows no interest | Investigate specific episodes, current tools and willingness to test |
| AI adds no value | Compare the baseline and review the task; retain the required meaningful workflow |
| Critical urgency goes unrecognised | Independent rules and review; no guarantee of perfect detection |
| Excessive scope | Complete cycle first; extras depend on capacity |
| A competitor covers the workflow | Review value against evidence; no automatic repositioning towards costs |
| External failure | Visible pending state, limited retries, idempotency and audited manual action |

DEC-01 to DEC-10 are in the [register](planning/decisions-and-feedback.md). These proposals are not yet stakeholder-approved decisions.

## 8. Business model

**[Hypothesis]** SaaS per building or unit, with terms suitable for property management companies. Buyer, willingness to pay and adoption costs need validation in DEC-02 and the [administrator interview guide](03-user-research.md#41-administrator-professional-or-volunteer). Contractor commissions/partnerships are only a future hypothesis and do not expand the MVP.

## 9. Expected community benefit

The aim is to make it easier to respond to water, lighting and lift faults, reduce coordination effort and provide visibility of progress. Shorter delays may reduce impact and damage, but this benefit still needs evidence. Transparency respects permissions; it does not mean publishing costs or private details to the whole building.
