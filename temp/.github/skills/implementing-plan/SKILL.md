---
name: implementing-plan
description: Execute one physical-layer plan and keep task/plan/spec states synchronized with implementation evidence. Use when implementing a tier plan created for a spec.
---

# Implementing Plan

Execute one tier plan (`front`, `back`, or `e2e`) from start to validation with explicit state transitions.

## When to Use

- During `/implement-spec`, after tier plans exist
- Re-running a failed or blocked tier plan
- Updating task and plan states from implementation evidence

## Inputs

- Target spec in `specs/`
- Tier plan file: `specs/<spec-slug>.<tier>.plan.md`
- `/project/BACKLOG.md` row for the spec

## State Model

### Task State

- Unchecked (`- [ ]`): not done
- Checked (`- [x]`): done

### Plan Status

- `Pending`
- `In Progress`
- `Completed`
- `Blocked`
- `Failed`

### Spec Status in /project/BACKLOG.md

Use `updating-backlog` transitions:
- Active implementation: `In Progress`
- External blocker: `Blocked`
- Validation unrecoverable: `Failed`
- Ready to release (after successful implementation): stays `In Progress` until `/release-spec` sets `Completed`

## Procedure

### 1. Prepare Execution
- [ ] Confirm target spec and tier plan file exist and are aligned.
- [ ] Set plan `Plan Status` to `In Progress` when execution starts.
- [ ] Ensure spec is `In Progress` in `/project/BACKLOG.md` (unless already `Blocked`/`Failed` by evidence).

### 2. Execute Plan Steps
- [ ] Follow plan steps in order.
- [ ] Implement code/tests/docs required by each task.
- [ ] Mark each completed task checkbox to `- [x]` immediately after completion.

### 3. Validate Tier
- [ ] Run tier-relevant tests and quality checks (lint/build/static checks as applicable).
- [ ] If checks pass, keep completed tasks checked and continue/finish.
- [ ] If checks fail, fix and retry with bounded remediation attempts.

### 4. Resolve Non-Happy Paths
- [ ] If blocked by external dependency, set plan `Blocked` and spec `Blocked`.
- [ ] If retries are exhausted and validation still fails, set plan `Failed` and spec `Failed`.
- [ ] If recovered, return statuses to `In Progress` and continue.

### 5. Finalize Plan
- [ ] Set plan `Completed` only when all tasks are checked and validation passes.
- [ ] Keep evidence of validations tied to the completed plan.
- [ ] Report residual gaps that require `/update-spec`.

## Output

Executed tier plan with updated task checkboxes and final plan status, corresponding code/test changes, and synchronized spec status in `/project/BACKLOG.md`.
