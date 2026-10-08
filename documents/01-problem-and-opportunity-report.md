# 1. Problem and Opportunity Report

**Project:** Building Maintenance Coordinator
**Sprint:** 1 · **Status:** draft v0.3 (to be reviewed after interviews) · **Revision:** 2026-10-09

> Assumptions and benefits not yet demonstrated are hypotheses. Primary evidence belongs in [User Research](03-user-research.md); competitor sources belong in [document 02](02-market-and-competitor-analysis.md). This report links that evidence to the problem without duplicating the findings.

---

## 1. Target community

Residential building communities in Portugal, managed by:

- **Condominium management companies** (primary segment: managing multiple buildings), or
- **Resident administrators** (volunteer or elected administrators managing a single building).

The community includes residents and property owners, as well as maintenance contractors working in the building.

## 2. Problem

> **[Hypothesis]** In some residential buildings, reports scattered across calls, messages and emails increase the effort required for triage, contractor contact and follow-up. The frequency of duplicates, triage quality and limitations of current records still require evidence.

### Connection to the project theme (community resilience)

Failures involving water, electricity, lifts or plumbing are **disruptions to a community's everyday life**. The time between the first report and resolution affects the impact on residents and the cost of damage.

### Outcome the product aims to improve

Reduce administrators' active effort when triaging and preparing an intervention. Also measure time to request submission, acceptance and resolution, distinguishing external factors. Metrics are defined in the [vision](04-product-vision.md); targets depend on the baseline (DEC-08).

## 3. Current practices (existing alternatives)

**[Hypothesis]** Reports may arrive through calls, messages or neighbourhood groups; administrators and contractors coordinate through existing contacts and records in software, spreadsheets or paper. We need to observe where this process helps and where it requires additional effort. Advantages, limitations and products are compared in the [alternatives analysis](02-market-and-competitor-analysis.md#2-identified-alternatives).

## 4. Stakeholders

| Stakeholder | Interest | Power / influence | Main pain point [Hypothesis] |
|---|---|---|---|
| Administrator (management company) | Resolve issues quickly, control costs, avoid complaints | High (decides and pays) | Contact volume, manual coordination, lack of traceability |
| Resident administrator (volunteer) | Resolve issues without spending too much time | Medium | Limited time and technical knowledge |
| Resident / property owner | Know the problem was received and its current status | Medium (puts pressure on the administrator) | Lack of feedback, multiple channels |
| Contractor | Clear requests, conflict-free schedule, timely payment | Medium | Incomplete information, wasted visits |
| Caretaker / building attendant (where applicable) | Report and follow up | Low | Overload as an intermediary |
| Owners' assembly | Approve expenditure and review accounts | High for major expenses | Lack of cost transparency |
| Insurers | Documented incidents | Low (indirect) | Missing damage records |

## 5. Problem evidence

**Current status: no primary evidence collected.** Complete this section only with real, cited sources.

### Sources to consult

- Interviews with administrators and residents (plan in deliverable 3).
- Public reports or articles on maintenance and condominium management in Portugal (consumer associations, industry associations, media). *Research pending; record the source and date of each reference.*
- Public competitor documentation (deliverable 2).
- Legal framework for condominium administration in Portugal. *Confirm using an official source before citing legal provisions.*

### Evidence register (to be completed)

Reference finding IDs from document 03 and sources from document 02; retain only their implications for the problem here. Domain sources not recorded in those documents must include the exact URL and date.

| ID | Type | Finding/source reference and date | Implication for the problem | Assumption affected |
|---|---|---|---|---|
| E1 (to be completed) | — | — | — | — |

## 6. Consequences of leaving the problem unresolved

- Urgent failures (leaks, electrical faults) worsen because of delayed triage. **[Hypothesis]**
- Higher costs from emergency interventions and avoidable damage. **[Hypothesis]**
- Conflict between residents and administrators due to lack of transparency. **[Hypothesis]**
- Administrator overload and decisions without data or cost history. **[Hypothesis]**

## 7. Assumptions and risks

| # | Assumption | How to validate | Risk if false |
|---|---|---|---|
| P1 | Administrators spend significant time coordinating maintenance issues | Interviews, time estimates per issue | No meaningful pain point, no product opportunity |
| P2 | Duplicate reports occur in significant numbers | Ask administrators; analyse anonymised records if available | Duplicate detection loses value |
| P3 | Urgency is poorly triaged today | Interviews and concrete cases | AI classification loses value |
| P4 | Administrators are willing to adopt a new platform | Interviews and prototype testing | Low adoption |
| P5 | Residents will report through an app/web page if it is simple | Interviews and prototype testing | Insufficient input |
| P6 | Contractors will accept requests and scheduling through the platform | Contractor interviews | Dispatch remains manual |
| P7 | Administrators trust AI-assisted recommendations if they are explainable and subject to approval | Prototype testing | AI is underused or rejected |

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Limited access to professional administrators | High | High | Also involve volunteers; document the limitation |
| Excessive scope (contractor marketplace) | High | High | Small synthetic catalogue, rule-based ranking |
| Personal data and interior photographs (GDPR) | Medium | High | Synthetic data, minimisation, defined retention |
| AI error in a critical situation | Medium | High | Independent rules, human review and false-negative evaluation; no guarantee of perfect detection |
| Existing competitors cover the essentials | Medium | Medium | Investigate the flow's specific value and revise scope based on evidence; see deliverable 2 |

## 8. Opportunity

Turn an informal, fragmented process into a traceable chain: **report → triage → dispatch → resolution → history**, with urgency as a central concern and AI as support, never the final decision-maker. P1 is central to the opportunity. P2 and P3 determine the value of duplicate detection and assisted triage; negative findings should change those capabilities. Adoption (P4–P6), AI usefulness (P7) and differentiation require their own evaluation.

## 9. Investor question (Sprint 1)

*Is this a valuable problem, and is the cycle “report, review triage, approve a request, obtain a response, schedule and close” the smallest credible experiment?*

## 10. Traceability and domain research

- Interview guides and findings: [03 User Research](03-user-research.md).
- Derived requirements: [requirements](requirements.md), still subject to validation.
- IoT and target segment: DEC-01 and DEC-02 in the [register](planning/decisions-and-feedback.md).
- Investigate responsibility for shared/private areas, recurring interventions, contractor availability, approvals and digital exclusion. These are research questions, not legal or market conclusions.
- Residents may be tenants; building membership and authority to approve expenses are different concepts. Confirm terminology during interviews.
