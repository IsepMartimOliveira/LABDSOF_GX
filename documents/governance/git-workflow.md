# Essential Git workflow

**Status:** proposal v0.1 · remote configuration not verified

Git, PRs, reviews and traceability are part of §8.1 of the assignment. Having a standalone document is an organisational choice; the practices are not optional.

## Proposed workflow

1. Create/refine a work item and keep a stable ID (e.g. US-01).
2. Update the main branch and create a short-lived branch: feature/US-01-reporting, fix/BUG-12-state or docs/DISC-02-competitors.
3. Make small, purposeful commits: “US-01: validate building membership”.
4. Open a PR with the objective, item reference, changes, verification and limitations.
5. Obtain at least one review from another member; authors do not approve their own changes.
6. Merge only when applicable checks pass and relevant comments are resolved.
7. Prefer squashing working commits; preserve authorship/co-authorship and the item reference. Delete merged branches when safe.

The name main is the proposed convention; confirm the actual default branch before configuring protections. Do not force-push shared branches or rewrite published history without coordination.

## Remote configuration to perform/verify

- [ ] Confirm remote repository and team access.
- [ ] Define the main branch.
- [ ] Configure available protection rules: PR, review, force-push blocking and relevant checks.
- [ ] Create the pipeline before configuring its checks as required.
- [ ] Verify with a real PR and record the link/evidence.
- [ ] If a protection is unavailable on the chosen plan, record the limitation and compensating process.

None of these configurations was performed by creating this document.

## Conventions

- PRs reference the local ID and issue URL. Use “Closes #N” only when a real GitHub issue exists and the PR completes it.
- Documentation accompanies scope/contract changes in the same PR.
- Resolve conflicts by reviewing both sides' behaviour and repeating affected checks.
- Never commit tokens, environment files with secrets, recordings or identifiable participant notes.
- Do not bypass security controls for a demonstration.
- A demonstrable release has a tag and notes describing content, limitations and instructions; suggested names: v0.1.0-skeleton and v0.2.0-mvp, only when they exist.
- Preferred recovery for a merged change: revert through a PR; data recovery is documented separately.

Template available at [.github/pull_request_template.md](../../.github/pull_request_template.md). See [DoD](definition-of-done.md).
