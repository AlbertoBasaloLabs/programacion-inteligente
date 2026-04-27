---
name: organizing-backlog
description: Update rows in /project/BACKLOG.md for specs using a single status/importance policy. Use when creating, updating, releasing, or requeuing specs and any prompt must create or modify BACKLOG entries.
---

# Organizing Backlog

Canonical workflow for updating entries in `/project/BACKLOG.md` tied to spec lifecycle.

## Context

IMPORTANT: The statuses and fields are in english, but this skill can be used in any language.
Here is a list of potentially translatable words and phrases:

- `Pending`, `In Progress`, `Completed`, `Blocked`, `Failed`, `Dependencies`, `Specification`, `Status`, `Importance`, `low`, `HIGH`

## When to Use

- Creating a new spec row in `/project/BACKLOG.md`
- Updating an existing spec row after spec changes
- Marking a released spec as `Completed` or `Failed`
- Requeuing a spec to `Pending` after release or implementation gaps

## Required Columns

Always preserve and update these columns:
- `Specification`: the spec ID and link/path.
- `Dependencies`: the list od specs id needed by the spec.
- `Status`: the status of the spec.
- `Importance`: the importance of the spec.

## Row Identity and Deduplication

Use this precedence to locate an existing row:
1. Exact spec ID match in `Specification` (for example `FR3`, `B07`)
2. Exact spec file link/path match
3. Exact spec title slug match

## Status Policy

Allowed statuses:
- `Pending`: spec exists and is implementation-ready but not actively being executed.
- `In Progress`: active implementation started.
- `Completed`: implementation and release evidence are sufficient and accepted.
- `Blocked`: progress is paused waiting for a dependency.
- `Failed`: implementation/validation failed in the current execution cycle.

Happy path:
- `Pending` -> `In Progress` -> `Completed`
Waiting Path:
- Dependency wait: set `Blocked` while waiting on other dependencies to be completed.

Failure Path:
- Implementation failure: `Pending` -> `In Progress` -> `Failed`
- Human remediation after failure: `Failed` -> `Pending` (requires a new implementation cycle with refreshed plans).

## Importance Policy

Use `HIGH` when user/business impact or urgency is high.  
Use `low` otherwise.

If importance cannot be inferred safely, ask a closed-option clarification.

## Procedure

### 1. Analyze Target Spec
- [ ] Identify spec ID, title, and file path.
- [ ] Identify action context (draft, report, release, requeue).

### 2. Locate or Create Row
- [ ] Search by ID, then link/path, then slug.
- [ ] Update existing row or create one new row.

### 3. Apply Status and Importance
- [ ] Set status using status policy and transition guardrails.
- [ ] Set importance from explicit instruction or impact evidence.
- [ ] Preserve existing dependencies unless new evidence requires change.

### 4. Update Dependencies
- [ ] Update related dependencies based on the current change.
- [ ] Block or unblock dependents based on the current change.

### 5. Validate Consistency
- [ ] Ensure required columns are complete.
- [ ] Ensure no duplicates exist for the spec.
- [ ] Ensure status aligns with current lifecycle evidence.
- [ ] Ensure transition follows the happy/non-happy paths and guardrails above.

## Output

One created or updated row in `/project/BACKLOG.md` for the target spec.

## Verification

- [ ] Exactly one row exists for the target spec.
- [ ] Status is valid and transition-compliant.
- [ ] Importance is justified or explicitly clarified.
- [ ] Required columns are complete and template-aligned.
