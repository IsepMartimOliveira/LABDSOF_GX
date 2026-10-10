# [AI-01] Assess the AI opportunity and define evaluation

- Publication: Draft — not published; GitHub issue URL: pending.
- Workflow: Backlog; proposed milestone: S1 — Discover, Validate and Design; dates/estimate: to be agreed.
- Type: task; suggested labels: `type:task`, `area:ai`, `phase:3`, `priority:must`.
- Parent: [EP-02](../epics/EP-02-assisted-triage.md) (direct task); epic: [EP-02](../epics/EP-02-assisted-triage.md).
- Allocation: see the [backlog README](../README.md).
- Source: [Assignment](../../../LABDSOF-26-27-Assignment.md) §5.6; §7.1.2 item 6.
- Dependencies for completion: [DISC-01-03](DISC-01-03-synthesise-findings.md), [DISC-03-03](DISC-03-03-refine-product-vision.md)
- Related decisions: DEC-05, DEC-08, in the [register](../../planning/decisions-and-feedback.md).

## Objective and scope

Define a meaningful, testable AI-assisted workflow supported by discovery evidence, preparing US-03 without implementing it.

Existing drafts are inputs to review and improve; do not recreate work already supported by evidence. Preparation may overlap predecessor work; confirm dependent conclusions only after the needed findings/decisions exist.

Excluded: Training/inference code, a full dataset, executed AI evaluation, and closing US-03/US-05.

## Acceptance criteria

- [ ] Link the proposed text classification/urgency workflow to user findings and expected value; state unresolved need assumptions and whether a different AI task should be investigated.
- [ ] Agree proposed category/urgency labels and representative normal, ambiguous and adversarial input/output examples.
- [ ] Define baseline/fallback, human correction, output validation and handling of injection, privacy and critical-case limitations.
- [ ] Agree dataset provenance/annotation/split plans and measurable acceptance criteria for quality, value, latency and cost; justify thresholds and avoid claiming dataset/results already exist.
- [ ] Record provider/model options and cost assumptions with dated sources when evaluated; assign ownership of any provider/access choice still needed before US-03 is Ready.
- [ ] Update the assessment and DEC-05/08; link the future implementation and evaluation work in US-03 and EN-04.

## Deliverables and evidence

- [Responsible AI assessment](../../07-responsible-ai-assessment.md) — update the relevant sections and link the change/review evidence.
- [Product vision](../../04-product-vision.md) — update the relevant sections and link the change/review evidence.
- [Requirements/NFRs](../../requirements.md) — update the relevant sections and link the change/review evidence.
- [Product backlog (US-03/EN-04)](../../06-product-backlog.md) — update the relevant sections and link the change/review evidence.

## Verification

The assigned reviewer checks the user need and success criteria; supporting reviewers check interface assumptions and data handling as needed. Review allocation is recorded in the backlog README.

Use the documentation/research checks appropriate to this task; implementation tests are not required for a design-only outcome.

## Completion record

- Result/findings and limitations: to be recorded after execution or verification of existing work.
- Evidence/PR/review links: to be recorded; document presence alone is not completion evidence.
- Decision/requirement changes: to be recorded, or explain why no change was needed.
- [ ] DoR reviewed with date, estimate, owner and reviewer confirmed.
- [ ] Acceptance criteria and applicable [DoD](../../governance/definition-of-done.md) verified with evidence.
