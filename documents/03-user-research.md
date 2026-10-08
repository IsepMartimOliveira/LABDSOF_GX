# 3. User Research

**Project:** Building Maintenance Coordinator
**Sprint:** 1 · **Status:** research plan (v0.3). **No findings yet.** · **Revision:** 2026-10-09

> **Assignment rule:** do not fabricate research evidence. This document contains the plan, interview guides and recording templates. Findings sections remain **blank until real data exists**. If interviewing real users is not possible, state this in the limitations section.

---

## 1. Research objectives

| # | Question | Related assumption (deliverable 1) |
|---|---|---|
| Q1 | How are maintenance issues currently managed, from first report to resolution? | P1, P3 |
| Q2 | How much time and effort does each issue cost the administrator? | P1 |
| Q3 | How often are reports duplicated or contradictory? | P2 |
| Q4 | How is urgency determined, and who decides? | P3 |
| Q5 | How are contractors chosen (criteria, sources, approvals, cost limits)? | P6 |
| Q6 | What tools are used today, and what is missing? | Deliverable 2 |
| Q7 | Would administrators accept AI-assisted recommendations subject to approval? Under what conditions? | P7 |
| Q8 | What prompts residents to report, or not report, an issue? | P5 |
| Q9 | What does a contractor need to know about a request, and how do they manage scheduling? | P6 |

## 2. Methods

| Method | Purpose | Participants | Effort |
|---|---|---|---|
| Semi-structured interviews (30–40 min) | Q1–Q7, Q9 | Administrators, contractors | Primary method |
| Short online survey | Q8, validate problem frequency | Residents | Low |
| Review of documented experiences (articles, forums, app reviews) | Q1, Q6 | Public sources | Low |
| Public competitor documentation / demos | Q6 | n/a | Low |
| Prototype testing (late Sprint 1 or Sprint 2) | Q7, usability | Administrators, residents | Medium |

### Target sample (proposal to adjust to capacity)

| Group | Target | Note |
|---|---|---|
| Professional administrators | 2–3 | Access may be difficult; use personal or university contacts |
| Resident / volunteer administrators | 3–5 | Easier access through relatives, neighbours or acquaintances |
| Residents | 8–15 (survey) | Distribute through personal networks |
| Contractors | 2–3 | Electricians, plumbers, maintenance companies |

These figures are **targets**, not results. Record the actual numbers obtained.

## 3. Recruitment and ethics

- Explain the study's **purpose** before starting (assignment section 11).
- Obtain **consent**, recorded in notes or in writing, for note-taking and, where applicable, audio recording.
- **Do not collect unnecessary personal data.** Identify participants by codes (A1, A2, C1…). Codes are pseudonyms if a link to identity exists; store that link separately and outside Git.
- Do not ask participants to share real residents' data, home photographs or internal documents.
- Allow withdrawal at any time. Store notes with access restricted to the team.
- Before collecting data, define responsibility, access and retention under the [data lifecycle policy](09-security-privacy.md#4-data-lifecycle-and-minimisation). Do not publish raw records; use only summaries without identifying details.

### Consent text (template)

> We are students developing an academic project about maintenance issue management in residential buildings. We would like to ask about your experience (around 30 minutes). Participation is voluntary and you may stop at any time. We will use your responses only for this project and publish only summaries without identifying details. May we take notes? Recording is optional and requires separate permission; before recording, we will explain who can access it, where it will be stored and when it will be deleted.

## 4. Interview guides

Start with real experiences and only then present the proposal. Core questions are below; optional extensions are separate to avoid implying a fixed scope or lengthening every interview.

### 4.1 Administrator (professional or volunteer)

**Context**

1. How many buildings/units do you manage? For how long? Is this your main occupation?
2. Is there a caretaker or building attendant?

**Current workflow**

3. Tell me about the last maintenance issue you resolved. How did you hear about it, and what did you do next? If it required several contacts, where was most time spent?
4. Which channels do you use to receive reports and contact contractors?
5. How did you decide urgency in the last case? Has priority ever needed to change? What prompted that change?
6. Do several people report the same problem? What do you do in those cases?

**Contractors and costs**

7. How do you select a contractor? Do you request several quotes? Who approves expenditure, and above what amount?
8. How do you record costs and history? Do you use them to make decisions, such as repairs or replacements? Who confirms the date and completion? How do you handle rejection, unavailability or rescheduling (DEC-10)?

**Tools and AI**

9. What software or tools do you use? What is missing?
10. If a system suggested urgency and a contractor, what would you need to see to trust it? Would you approve with one click? When would you not?

**Closing**

11. On average, how much time do you spend per issue? What is the most frustrating part?
12. What tools do you already pay for or have you purchased? Who decides that purchase? What would justify testing another solution? Only then explore payment models and distinguish intention from commitment.
13. What information can be shared with the building, and what must remain private (DEC-07)? How do you receive reports from residents without digital access?
14. Would you be available for a task-based test in a second session? Record actual commitment separately from stated interest.

### 4.2 Resident

1. When did you last report a problem in your building? What happened?
2. How did you report it (to whom, through which channel)? Did you receive a response? How long did it take?
3. Have you ever noticed a problem and not reported it? Why?
4. What would you like to know after reporting?
5. What information about you or your home would you prefer not to share? What difficulties would you have using a page/app, and what alternative would you need?
6. Would you confirm a problem already reported by a neighbour (“This affects me too”)? Would being identified concern you?

### 4.3 Contractor

1. How do you receive requests today? What information is usually missing?
2. How do you manage your schedule? Have you used a digital calendar? Who confirms the date, and how do you communicate rejections or changes?
3. What information do you need to estimate price and duration before visiting?
4. How are payments and approvals handled? What are the main difficulties? How do you communicate completion, and who validates it?
5. Would you accept requests and appointments through a platform? What would make you refuse?

### 4.4. Optional exploratory questions

- **Photographs, post-MVP:** would they help explain the problem? Under what conditions would participants agree to send them?
- **IoT, DEC-01:** are sensors/devices monitored? What concrete decision would benefit from their data?

Do not present these capabilities as included in the MVP.

### 4.5. Prototype testing

After understanding the current process, propose a concrete task and observe completion, errors, time and assistance needed. Compare with an equivalent task in the current process, varying order where possible. Record sample and context; adoption intentions or politeness do not prove benefit or purchasing commitment.

## 5. Short resident survey (template)

1. Do you live in a building with condominium administration? (Yes/No)
2. Have you reported a maintenance issue in the last 12 months? (Yes/No)
3. If so, through which channel? (call, WhatsApp, email, caretaker, other)
4. Did you receive status feedback? (Always / Sometimes / Never)
5. How long did resolution take? (<1 day / 1–3 days / 4–7 days / >1 week / still unresolved)
6. What difficulty did you experience? (Open answer)
7. Would you use an app or web page to report? (Yes/Maybe/No, and why)
8. What information would you like to see? (status, expected date, contractor, other)

## 6. Analysis

- Transcribe or summarise each interview in **structured notes** immediately after the session.
- Code by theme (urgency, duplicates, costs, channels, trust in AI…).
- Record **quotes** only with permission and without identifying details.
- Each finding must state **how many participants** support it, e.g. “4 of 6 administrators”.
- Clearly distinguish **what was said** from **the team's interpretation**.

## 7. Findings

> **To be completed.** Do not enter findings without real data.

### 7.1 Actual participants

| Code | Group | Date | Mode (in person/online) | Duration | Notes stored at |
|---|---|---|---|---|---|
| | | | | | |

### 7.2 Findings

| ID | Finding | Number of supporting participants | Assumption confirmed, refuted or adjusted | Evidence (codes) |
|---|---|---|---|---|
| F1 | | | | |

### 7.3 Resulting product decisions

| Finding | Decision taken | Where reflected (backlog, vision, ADR) |
|---|---|---|
| | | |

## 8. Limitations (review after collection)

Expected limitations, to confirm or adjust:

- **Small convenience sample**, not representative.
- Limited access to **professional administrators**; probable bias towards volunteers.
- Risk of **confirmation bias**: interviewers know the proposed solution. Mitigate with open questions about past experiences before showing the idea.
- Participants may know the students (politeness, social desirability bias).
- Stated willingness to pay or adopt does not always translate into behaviour.
- No access to real incident data; AI evaluation will use synthetic data.

## 9. Suggested schedule

| When | Activity |
|---|---|
| Phase 1 / start of Phase 2 | Finalise guides, identify and contact participants |
| Phase 2 | Administrator and contractor interviews |
| Phase 2, subject to capacity | Resident survey |
| Phases 2–3 | Analysis, persona updates, decisions and prototype testing |

## 10. Records and decisions

Use the [recording template](templates/research-record.md). Findings remain in section 7; requirements and the problem report reference their IDs. Section 7.3 links to the [decision register](planning/decisions-and-feedback.md), which stores rationale, participants and decision status without duplicating meeting notes.

Before collection, assign an owner and resolve access/retention in DEC-07. Dates depend on DEC-03. Findings inform [requirements](requirements.md) and [backlog](06-product-backlog.md) prioritisation.
