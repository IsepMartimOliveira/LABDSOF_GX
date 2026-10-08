# 2. Market and Competitor Analysis

**Status:** preliminary research v0.3 · **Sprint:** 1 · **Revision:** 2026-10-09

## 1. Evidence quality

The initial research contains useful leads, but exact URLs and dates are missing for individual findings. The details below are **older claims awaiting verification**, not results of new research. No demo, trial or functional audit has been documented.

- “Unconfirmed” means insufficient evidence, not absence of a capability.
- Marketing material describes supplier claims; it does not prove quality, security or compliance.
- Record the exact source, date, version/plan and relevant observation before confirming a capability.
- Historical prices are not current prices. Do not use older information to estimate costs without verification.
- Differentiation can only be supported after comparing alternatives relevant to users.

## 2. Identified alternatives

### 2.1. Informal practices [Hypotheses to validate]

| Alternative | Users | Potential advantage | Limitation to investigate |
|---|---|---|---|
| Calls, SMS, WhatsApp and email | Residents, administrators and contractors | Familiarity and low initial adoption effort | Message history may not structure statuses, responsibilities and decisions |
| Neighbourhood groups | Residents | Fast communication and local knowledge | Noise, repetition and information exposure |
| Spreadsheets, paper and incident logs | Administrators and caretakers | Flexibility and simple record-keeping | Effort required to update, consult and share |
| Established contractor contacts | Administrators | Trust and knowledge of the building | Dependence on individuals and availability; comparisons may be manual |

Confirm actual usage, cost and difficulties in interviews. Do not assume everyone uses the same channels or that the current process is always inferior.

### 2.2. Products and leads from the initial research

All details in this table still require verification; the “Source to recover” column is not a confirmed reference.

| Product | Reported market / users | Capabilities mentioned in the initial research | Potential relevance and open question | Source to recover |
|---|---|---|---|---|
| SolidSoft GC | Portugal; professional/volunteer administrators and residents | Photo/offline reporting, technician QR check-ins, maintenance routes, documents, assemblies and fees; GDPR compliance claim | Broad suite and Portuguese context; verify depth of triage, dispatch and access controls | Pplware article; URL and date to recover |
| Unitify | Portugal; administration and smart buildings | Access control, video intercom, meters, resident app, fees and local payment methods | Building integration; verify maintenance issue workflow and hardware dependence | Lead: unitify.com/smart-building/portugal; date/plan to verify |
| CondoBOM | Brazil; administrators, caretakers and residents | Incident reporting, periodic maintenance, reservations, visitors and deliveries; author/admin-only visibility mentioned | Relevant for follow-up and privacy; verify dispatch and suitability for Portugal | App Store; URL and version to recover |
| Manu | Brazil; condominium administrators | Preventive maintenance by equipment and links to suppliers/engineering companies | Maintenance comparable; verify response to unplanned failures | SíndicoNet, advertising content from 2022; URL to recover |
| Condomob / Sivirino | Brazil; administrators and residents | Photo requests and status tracking | Additional leads; verify product, version and current relevance | Media/SíndicoNet from 2017; URL to recover |

### 2.3. Categories still to research

| Category | Comparison needed |
|---|---|
| International maintenance/property management software | Work orders, prioritisation, contractors, costs and history |
| Generic helpdesk / ticketing | Statuses, assignment, automation, duplicates, permissions and domain adaptation effort |
| Service marketplaces in Portugal | Quotes, selection, response and continuity of follow-up |

Choose comparables based on the segment's actual tools. Do not assume these categories lack capabilities simply because they have not yet been researched.

## 3. Comparison matrix

**UC** = unconfirmed. **IL** = initial research lead, still lacking a sufficient reference. A cell only becomes “confirmed in source” or “observed in testing” with an ID from the register in section 5. IL proves neither presence nor quality. The BMC column describes plans, not implemented capabilities; scope and priorities are in [04 Vision](04-product-vision.md) and [06 Backlog](06-product-backlog.md).

| Criterion | SolidSoft GC | Unitify | CondoBOM | Manu | Proposed BMC |
|---|---|---|---|---|---|
| Reporting and follow-up | IL | UC | IL | UC | Text, statuses and history |
| Photographs | IL | UC | IL | UC | Post-MVP |
| Automatic urgency triage | UC | UC | UC | UC | Assisted AI, rules and review |
| Duplicates | UC | UC | UC | UC | Should; reviewed association |
| Contractors and dispatch | IL: technicians/routes | UC | UC | IL: supplier connections | Small catalogue; approval and response |
| External calendar | UC | UC | UC | UC | Realistic simulator; real provider optional |
| Cost recording | UC | UC | UC | UC | Basic, optional |
| Financial analysis / summaries | UC | UC | UC | UC | Post-MVP |
| Preventive maintenance | IL: routes | UC | IL | IL | Outside the current baseline scope |
| Fees, assemblies and payments | IL | IL: fees/payments | IL: administration, details to confirm | UC | Outside the current baseline scope |
| Hardware / meters | UC | IL | UC | UC | IoT pending DEC-01 |

Also evaluate the informal process in section 2.1 using equivalent tasks; do not assign absolute capability gaps merely because it lacks specialised structure.

## 4. Business models, usability and trust

| Dimension | Preserved information / status | Verification needed |
|---|---|---|
| Competitor business models | Manu: lead about a monthly subscription advertised in 2022 at R$ 59.90; other plans unconfirmed | Original source, current offer, billing unit, adoption/migration costs; historical price must not guide budgeting |
| UX | Hypothesis: a focused journey may require less effort than a broad suite | Run an equivalent task, observe time, errors and assistance; do not conclude from marketing |
| Privacy | Specific leads in the product table; no compliance audit | Role-based visibility, retention and demonstrable controls |
| Trust in AI | Insufficient evidence about competitors' use of AI | Verify suggestions, explanations, correction and approval; do not claim BMC exclusivity |

BMC's commercial model is a [product hypothesis](04-product-vision.md#8-business-model), to validate in DEC-02. Its access policy is defined in the [security assessment](09-security-privacy.md#2-proposed-access-matrix), not by automatically copying a competitor.

## 5. Source and findings register

| ID | Product and plan | Exact URL / access date | Observed capability or limitation | Evidence type | Consequence for BMC |
|---|---|---|---|---|---|
| Complete after verification | — | — | — | — | — |

Record evidence here and reference its ID in the matrix. Do not create entries from memory of pages or unverified generated content.

## 6. Differentiation hypothesis

The [value proposition](04-product-vision.md#1-vision-and-value-proposition) depends on demonstrating lower administrative effort, without assuming exclusivity in AI, traceability or scheduling.

Hypotheses to test:

- Simplicity may reduce contacts and active time.
- Explanations and correction may support decisions.
- Companies may prefer integration with existing software over replacement.
- An established catalogue may be more useful than a marketplace.
- A suite may already cover the workflow or add it; focus and speed alone do not demonstrate a defensible advantage.

If competitors cover the essentials, revisit positioning using evidence; do not automatically switch to cost analysis without investigating that need.

## 7. Next actions

1. Recover sources and select maintenance/helpdesk and marketplace comparables.
2. Complete the §5.2 criteria: users, capabilities, strengths/weaknesses, business model, UX, privacy/trust and differentiation.
3. Seek demos/trials of relevant products and document observed tasks and access limitations.
4. Cross-check findings with [user research](03-user-research.md).
5. Revise vision and priorities; record decisions under [DEC-02](planning/decisions-and-feedback.md) and work under DISC-02 in the [backlog](06-product-backlog.md).
