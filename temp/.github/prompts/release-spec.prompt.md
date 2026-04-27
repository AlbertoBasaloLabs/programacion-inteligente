---
name: release-spec
description: Close a completed spec and update release documentation.
argument-hint: Spec ID or spec file to release
---
# Release Spec

## Role

Act as a release coordinator who closes completed specs and keeps release artifacts consistent.

## Context

A project has an implemented spec with validation evidence generated during `/implement-spec`. Input may include spec ID/file, merged PR details, test results, and deployment notes. Write in English by default, or in the user's language if requested.

### References
- Target spec, `/project/BACKLOG.md`, `/project/CHANGELOG.md`, `/AGENTS.md`, `/project/ADR.md`
- Templates: `*.backlog.template.md`, `*.changelog.template.md`, `*.agents.template.md`, `*.adr.template.md`
- Roadmap flow: `/release-spec` -> done, or `/update-spec` if gaps remain

### Skills
- `writing-artifact`
- `updating-backlog`

### Tools
- ReadFile / rg / Glob
- Question tool (closed options; tool name is implementation-specific)
- ApplyPatch/Edit tools

## Task

Confirm release readiness from existing implementation evidence, set `/project/BACKLOG.md` status, add `/project/CHANGELOG.md` entry, and update AGENTS/ADR only when needed.

## Constraints

- Base release decisions on explicit implementation and validation evidence.
- Do not mark a spec as completed without evidence.
- Keep changes minimal, traceable, and template-aligned.
- Ask closed-option questions if critical release evidence is missing.
- Keep Human-in-the-Loop orchestration explicit: `/implement-spec` executes plans and validations; `/release-spec` decides release from evidence; `/update-spec` redefines gaps.
- Do not run full implementation test cycles in `/release-spec`; consume evidence produced by `/implement-spec`.

## Steps

### 1. Analyze Evidence
Validate release readiness.
- [ ] Confirm target spec and release scope.
- [ ] Verify all required tier plans are `Completed` (`front`, `back`, `e2e` when applicable).
- [ ] Verify implementation evidence exists for acceptance criteria, including E2E evidence when the spec requires E2E coverage.
- [ ] Record unresolved issues or follow-up work.
- [ ] Ask closed-option questions if readiness is unclear.

### 2. Update BACKLOG Status
Set workflow state.
- [ ] Use `updating-backlog` skill to update the target spec row in `/project/BACKLOG.md`.
- [ ] Set `Completed` only when release evidence is sufficient.
- [ ] If release is incomplete but recoverable, keep or set `In Progress` and route to `/update-spec`.
- [ ] If evidence shows unresolved blockers or failed validation, preserve `Blocked` or `Failed` per policy.

### 3. Add CHANGELOG Entry
Record release outcome.
- [ ] Create/update `/project/CHANGELOG.md` entry for the spec.
- [ ] Include delivered scope, validation summary, and follow-up items.

### 4. Update Technical Docs
Apply doc updates only when justified.
- [ ] Check if release changed tools, conventions, or architecture decisions.
- [ ] Ask for confirmation before editing `/AGENTS.md` or `/project/ADR.md`.
- [ ] Update only if evidence and confirmation are present; otherwise state no change.

### 5. Final Consistency Check
Ensure release artifacts are aligned.
- [ ] Verify consistency across spec, `/project/BACKLOG.md`, `/project/CHANGELOG.md`, and tech docs.
- [ ] If incomplete, do not release; suggest `/update-spec` as the next Human-in-the-Loop command.

## Output

Updated `/project/BACKLOG.md` row, `/project/CHANGELOG.md` release entry, optional AGENTS/ADR updates, and a short release summary with evidence + follow-up.

## Verification

- [ ] Target spec implementation and validation evidence were reviewed.
- [ ] Required tier plans are `Completed` before release is approved.
- [ ] E2E validation is treated as implementation evidence from `/implement-spec` (not executed as a full cycle in `/release-spec`).
- [ ] `/project/BACKLOG.md` is `Completed` only with sufficient evidence; otherwise status follows policy and next step is `/update-spec`.
- [ ] `/project/CHANGELOG.md` includes a release entry for the spec.
- [ ] AGENTS/ADR edits were confirmed before changes and applied only when relevant.
- [ ] Release documentation is consistent and traceable to the target spec.
