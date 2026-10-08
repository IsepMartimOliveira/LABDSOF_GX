# Definition of Done (DoD)

**Status:** proposal v0.1 · ratification pending (DEC-09)

Applies by delivery type. Completed documentation does not mean implemented functionality, completed research or active remote configuration. Non-applicable items require a reason; mandatory assignment requirements are not waived.

## Common checklist

- [ ] Acceptance criteria met with evidence linked to the item.
- [ ] Review by another member and relevant comments resolved.
- [ ] Change merged through a PR, referencing the issue/backlog ID.
- [ ] Documents, decisions and board status are consistent.
- [ ] No secrets, unnecessary identifying data or invented results.
- [ ] Limitations and remaining work are explicit.
- [ ] Functional validation by the BA/PO role or agreed reviewer.

## Code and executable configuration

- [ ] Build and applicable automated checks pass.
- [ ] Risk-proportionate tests: unit tests for rules, integration for persistence/contracts, E2E for critical journeys.
- [ ] Authorisation and failure tests when the change affects those behaviours.
- [ ] Static analysis and dependencies checked; material findings addressed or a justified decision recorded.
- [ ] Container image built for changed components; demonstrable execution in the test environment.
- [ ] Logs without sensitive data, health checks, correlation and metrics updated where applicable.
- [ ] Configuration, migrations and recovery/rollback documented when affected.
- [ ] API/contracts and architecture updated if changed.

A documentation-only edit does not require code tests or images. It requires content, consistency and link review.

## AI

- [ ] Evaluation run on relevant cases, compared with the baseline, and results recorded.
- [ ] Fallback tested; invalid outputs do not change confirmed decisions.
- [ ] Model/prompt/dataset identified; cost, latency and limitations recorded.
- [ ] UI distinguishes suggestions from human decisions; no consequential effect authorised by the model.

## Research and documentation

- [ ] Traceable sources and method; facts, hypotheses and interpretations separated.
- [ ] Results and limitations correspond to work actually performed.
- [ ] An interview plan can be documented without completed interviews; both have separate statuses.
- [ ] If data is collected: purpose explained, permission recorded and data handled according to plan.
- [ ] Findings linked to decisions or justification for not changing the product.

## Evidence and maintenance

Record commands/checks, results and demonstration location in the issue/PR. Review the DoD in retrospectives without hiding incomplete work. Investor review may lead to new work even after an item meets the DoD.

Reference: [Scrum Inc — Definition of Done](https://www.scruminc.com/definition-of-done/), accessed on 2026-10-07. The DoD acts as a shared quality standard; the specific criteria above are a proposal for this project.
