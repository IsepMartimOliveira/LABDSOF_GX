# Product Backlog

**Status:** proposal v0.2 · **Sprint:** 1 · **Priority:** not yet validated with the customer/lecturers

Corresponds to deliverable 5 in §7.1.2. The [roadmap](05-product-roadmap.md) defines horizons; this document defines items. No remote issues, estimates, assignments or implementations are assumed.

## 1. Conventions and prioritisation

MoSCoW refers to the **academic release**: Must = essential for the cycle/obligations; Should = valuable but can be simplified; Could = optional; Won't = outside this release. This is a proposal for the prioritisation session, not its outcome.

All items are in **Backlog**, with **estimate, owner, reviewer and issue URL yet to be assigned**; none has been declared Ready. Capacity and DoR discussion: [Sprint B](planning/sprint-b-backlog.md).

Initial order: DISC/EN discovery and foundations → US-01/02 → US-03/04 → US-06/07/08/09/10 → Should/Could according to evidence. EN-03 accompanies implementation and EN-04 evaluation.

## 2. Epics

| ID | Outcome / boundary | Items | Source |
|---|---|---|---|
| EP-00 | Justifiable discovery and planning | DISC-01–03 | §5.1–5.4, §5.7 |
| EP-01 | Residents report and track issues with appropriate visibility | US-01/02/04/10 | J1, P1/P5 |
| EP-02 | Assisted triage and reviewed links | US-03/05 | J2, P2/P3/P7 |
| EP-03 | Intervention from request to closure | US-06–09/11–13 | J2–J3, P6 |
| EP-04 | Deliverable, secure, observable and evaluable system | EN-01–04 | §6–§8 |

## 3. Discovery and engineering

| ID / priority | Outcome and acceptance criteria | Dependencies | Horizon |
|---|---|---|---|
| DISC-01 / Must | Gather evidence: actual method/participants recorded; findings linked to P1–P7; explicit limitations and decisions. If access fails, document attempts and alternative evidence without claiming validation | Research plan, access/retention | S1 |
| DISC-02 / Must | Complete comparison: exact, dated sources; §5.2 criteria; include an informal alternative and a comparable maintenance/helpdesk product; conclusion separates evidence from inference | Selection of comparables | S1 |
| DISC-03 / Must | Ratify organisation and review scope/priorities: roles/board/DoR/DoD; DEC-01/03/09 and DEC-10 discussion; actual feedback recorded. Document at least one decision revised following lecturer feedback during the project | Team and stakeholder availability | S1, follow-up S2/S3 |
| EN-01 / Must | Consolidate design: context, components, model, API/events, data ownership, deployment and threats; ADRs record alternatives and actual decisions | DEC-04/07, vision | S1 |
| EN-02 / Must | Walking skeleton: client→backend→persistence→query after restart; automated build, initial test and containers with reproducible instructions; linked evidence | EN-01 | S1 |
| EN-03 / Must | Delivery/quality: independent components or accepted exception; CI/CD, authorisation/contract/journey tests, logs/health/metrics/correlation, queue/AI/calendar failures and backup/restore; evidence for applicable NFRs | EN-01/02; accompanies stories | S2, strengthened in S3 |
| EN-04 / Must | Final evaluation: AI/baseline, usability, accessibility, security, performance, dashboard, architecture evolution, limitations, roadmap and contributions; reproducible results and environment | Operational increment, DEC-08 | S3 |

## 4. Stories and criteria

The criteria below apply the needs to each delivery. Detailed definitions are maintained in the [AI assessment](07-responsible-ai-assessment.md#4-provisional-criteria), [domain states](08-technical-design.md#3-states-and-business-rules), [access matrix](09-security-privacy.md#2-proposed-access-matrix) and [NFRs](requirements.md#non-functional-requirements--constraints). Changes to those definitions require a review of the affected stories.

### US-01 — Record and view a report · Must · EP-01

As a resident, I want to report a fault in my building so that management can track it.

- With valid membership, text and area, save the report/issue and return an ID and “received” status without waiting for AI.
- Invalid input produces an understandable error without creating a partial record.
- Another building cannot read or modify the report, even through direct API calls.
- Repeating the same request with the same key does not create two issues.
- Querying after a restart returns the persisted record.

**Source:** RF-01; NFR-01/02/05/07/09. **Dependencies:** EN-01/02, DEC-07. **Horizon:** S2, minimal slice in the skeleton.

### US-02 — Triage manually and track states · Must · EP-01

As an administrator, I want to review issues and their history to decide the next step.

- List only managed buildings, with pending category/urgency explicit.
- Manually changing category/urgency records the actor, timestamp and reason.
- Reject invalid transitions and concurrent changes based on an outdated version.
- Residents see authorised status and public history, without internal notes.

**Source:** RF-02; NFR-01/06. **Dependencies:** US-01, DEC-07/10. **Horizon:** S2.

### US-03 — Classify with AI and fallback · Must · EP-02

As an administrator, I want a category and urgency suggestion to reduce triage effort.

- Report events are processed asynchronously; a valid suggestion records its source/version and rationale, visibly marked as unverified.
- Critical-signal rules run independently of AI; model output does not remove an alert or overwrite a later human decision.
- Failure, timeout or invalid responses leave rules/manual triage available with a visible status.
- Event redelivery does not duplicate suggestions or effects; exhausted attempts remain observable.
- Evaluation compares AI, baseline and combined results on the versioned dataset against the agreed [AI criteria](07-responsible-ai-assessment.md#4-provisional-criteria).

**Source:** RF-03; NFR-03/04/10. **Dependencies:** US-01/02, DEC-05/08. **Horizon:** S2.

### US-04 — Publish a shared issue and confirm impact · Must · EP-01

As a resident, I want to confirm that a shared problem affects me to provide useful information without repeating the report.

- Only a summary explicitly published by the administrator is visible to the same building.
- Confirming twice retains one contribution; withdrawing removes it.
- Identity and private text are not shown to other residents; another building cannot confirm.
- The counter does not automatically change urgency; optional subscriptions can be disabled.
- Creating a separate report remains possible.

**Source:** RF-04 / §5.5; NFR-01/02/07. **Dependencies:** US-01/02, DEC-07. **Horizon:** S2.

### US-05 — Review duplicate suggestions · Should · EP-02

As an administrator, I want to identify reports of the same fault to coordinate a single response.

- Candidates respect building, area and time window; they explain why they were suggested.
- Linking requires confirmation, preserves originals and can be undone with an audit trail.
- Do not expose private text in resident searches or mix buildings.
- Measure precision/recall on annotated pairs; choose rules or embeddings after evaluation.

**Source:** RF-05; NFR-01/10. **Dependencies:** US-01/02, P2, DEC-05. **Horizon:** S2/S3 if capacity allows.

### US-06 — Select a contractor · Must · EP-03

As an administrator, I want to select an eligible contractor to prepare the intervention.

- The synthetic catalogue provides specialisation and coverage; filters eliminate incompatible candidates.
- Simple, deterministic ordering explains available criteria; unknown data is not invented.
- The administrator can change the selection; when none are eligible, they see a pending state and a manual coordination option.
- Selection does not send a request or confirm actual availability.

**Source:** RF-06; NFR-01. **Dependencies:** US-02, DEC-10. **Horizon:** S2.

### US-07 — Approve a request and obtain a response · Must · EP-03

As an administrator, I want to authorise a request and know the contractor's response to coordinate the intervention.

- Only the building administrator can approve; record the proposal, terms and version.
- Repeated approval does not send two requests.
- Only the assigned contractor can accept, decline or counterpropose; a counterproposal requires new approval.
- Request approval does not show the booking as confirmed.
- Changed terms invalidate approval of the previous version.

**Source:** RF-07; NFR-01/04. **Dependencies:** US-06, DEC-10. **Horizon:** S2.

### US-08 — Confirm calendar booking and handle failures · Must · EP-03

As an administrator, I want to know whether the booking was actually recorded to avoid communicating a false date.

- Only an approved and accepted request is sent to the calendar/simulator.
- A valid response stores the external reference and confirms; timeout/invalid data leaves an explicit pending state.
- A retry/duplicate event does not create a second booking; uncertain external outcomes are reconciled.
- Manual confirmation requires an administrator, date and reason/source; do not present it as synchronised.
- Retrying after manual action does not create a duplicate booking.

**Source:** RF-08; NFR-04/11. **Dependencies:** US-07, DEC-06/10. **Horizon:** S2.

### US-09 — Complete, close and reopen · Must · EP-03

As an administrator, I want to verify completion to close the issue with a history.

- The assigned contractor reports completion; the issue becomes “awaiting validation”.
- The administrator closes it or returns it for execution with a reason; they can also close it manually with justification.
- Reopening records a reason and preserves history; invalid transitions are rejected.
- Unknown cost does not prevent closure; no financial conclusion is invented.

**Source:** RF-09; NFR-01/09. **Dependencies:** US-02/07/08, DEC-10. **Horizon:** S2, refined in S3.

### US-10 — Notify changes · Must · EP-01

As a participant, I want to receive authorised updates to track the issue.

- One proposed in-app channel; state events generate notifications with unique IDs.
- Recipients and content respect visibility and optional preferences.
- Retries do not duplicate notifications; failure is observable without rolling back issue state.
- Status queries work even if notifications fail.

**Source:** RF-10; NFR-01/04/06. **Dependencies:** US-02/04/07, DEC-06. **Horizon:** S2.

### US-11 — Record a basic cost · Should · EP-03

As an administrator, I want to record known costs to maintain intervention history.

- Non-negative amount, currency and source; the field may be empty.
- The contractor can propose the cost of their work; administrator confirmation/correction is audited.
- Residents do not receive costs/private data by default.
- Does not include payments, aggregations or AI summaries.

**Source:** RF-11; NFR-01/02. **Dependencies:** US-09, DEC-07/10. **Horizon:** S2/S3 if capacity allows.

### US-12 — Refine ranking · Should · EP-03

As an administrator, I want to compare additional criteria to select among eligible contractors.

- Documented weights; justify the source/freshness of price, distance and availability.
- Missing data does not mean zero price or confirmed availability.
- Tests demonstrate ordering and tie-breaking; approval remains human.

**Source:** P6 / RF-06. **Dependencies:** US-06, evidence of usefulness and data. **Horizon:** S3 if capacity allows.

### US-13 — Integrate a real calendar · Could · EP-03

As an administrator, I want to synchronise with the calendar used in operations.

- The adapter respects the contract and scenarios already demonstrated by the simulator.
- Credentials stay outside Git; permissions and revocation are documented.
- Test availability and failure without compromising reproducible evaluation.

**Source:** RF-08. **Dependencies:** US-08, DEC-06, provider access. **Horizon:** if capacity allows.

## 5. Won't in this baseline / alternatives

Photos and visual analysis, cost charts/summaries, payments, marketplace, native apps, automatic approval and subscriptions. IoT is an **alternative awaiting a decision in DEC-01**; no implementation commitment is made until the scope is reviewed.

## 6. Stakeholder validation and release

- MoSCoW session: **not held/recorded**; date and participants to be filled in.
- Bring per-item value, estimated cost/risk and trade-offs; record changes and reasons in [feedback](planning/decisions-and-feedback.md).
- Release objectives and plan in the [roadmap](05-product-roadmap.md#1-horizons); dates to be confirmed.
- [Sprint B](planning/sprint-b-backlog.md): selection only after DoR/capacity checks.
- Templates and fields: [issue management](governance/issue-management.md).

Reference: [MoSCoW — ProductPlan](https://www.productplan.com/glossary/moscow-prioritization), accessed on 2026-10-07. The classification above is a proposed set of priorities for BMC.
