---
name: implement-spec
description: Implement one full spec by generating and executing per-tier physical plans.
argument-hint: Spec ID, spec file path, or backlog row reference
---
# Implement Spec

## Role

Act as an implementation orchestrator who delivers one spec end-to-end through tiered plans.

## Context

A project has one target spec in `specs/`, a `/project/BACKLOG.md`, and implementation conventions in `/AGENTS.md` and `/project/ADR.md`. The implementation must be split by physical layer (`front`, `back`, `e2e`) with one plan per tier, then executed in sequence until validation is complete.

### References
- Target spec, `/project/BACKLOG.md`, `/AGENTS.md`, `/project/ADR.md`, source code, test suites
- Plan files: `specs/<spec-slug>.<tier>.plan.md`
- Roadmap flow: `/implement-spec` -> `/release-spec` or `/update-spec`

### Skills
- `writing-plan`
- `implementing-plan`
- `updating-backlog`

### Tools
- ReadFile / rg / Glob
- Question tool (closed options; tool name is implementation-specific)
- ApplyPatch/Edit tools
- Shell (build, test, lint, git workflow)

## Task

Implement one full spec by: (1) creating or refreshing all required physical-layer plans, (2) executing each plan, and (3) keeping task/plan/spec lifecycle states consistent.

## Constraints

- Do not implement without a target spec.
- Keep one plan file per tier and avoid duplicate plan files.
- Use explicit lifecycle states and update them as evidence changes.
- Ask closed-option questions for missing critical inputs (tier scope, blockers, ambiguous acceptance).

## Steps

### 1. Select and Validate Target Spec
Choose the spec to implement and verify readiness.
- [ ] Resolve target spec from input (ID, file, or backlog row).
- [ ] Confirm spec has actionable Solution and Verification sections.
- [ ] If spec is not implementation-ready, stop and suggest `/update-spec`.

### 2. Set Initial Spec State
Mark implementation start.
- [ ] Use `updating-backlog` to set spec status to `In Progress` in `/project/BACKLOG.md` (if not already).
- [ ] Preserve or update dependencies only with evidence.

### 3. Create/Refresh Tier Plans
Generate plans before coding.
- [ ] Determine required tiers (`front`, `back`, `e2e`) from the spec scope.
- [ ] Use `writing-plan` skill to create/update one plan per required tier.
- [ ] Ensure each plan has ordered steps and checkable tasks.
- [ ] Mark each generated/refreshed plan as `Pending` in the spec tracking section.

### 4. Execute Plans
Implement plans one by one.
- [ ] Execute each tier plan using `implementing-plan`.
- [ ] Keep plan/task states updated (`In Progress`, `Completed`, `Failed`, `Blocked`) from actual evidence.
- [ ] Commit progress per completed plan step when appropriate.

### 5. Validate End-to-End Outcome
Gate final implementation status.
- [ ] Run tier-appropriate validations (tests/build/lint/static checks).
- [ ] Confirm spec Verification criteria are satisfied.
- [ ] If implementation is incomplete but recoverable, keep spec `In Progress` and suggest `/update-spec`.

### 6. Close Implementation State
Set final spec status.
- [ ] If all required plans completed and verification passed, keep spec ready for `/release-spec`.
- [ ] If validation fails after remediation attempts, set spec status to `Failed`.
- [ ] Keep unresolved blockers reflected as `Blocked`.

## Output

Updated per-tier plan files, implementation changes in code/tests, synchronized lifecycle states (tasks/plans/spec), and a concise implementation report with next command (`/release-spec` or `/update-spec`).

## Verification

- [ ] Exactly one target spec was selected and validated.
- [ ] Required tier plans were created/refreshed before execution.
- [ ] Plan/task statuses reflect evidence-based progress.
- [ ] `/project/BACKLOG.md` spec status follows allowed transitions.
- [ ] Verification criteria from the spec were checked and results recorded.
- [ ] Final recommendation is explicit: `/release-spec` or `/update-spec`.
