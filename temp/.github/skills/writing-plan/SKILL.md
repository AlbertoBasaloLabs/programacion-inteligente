---
name: writing-plan
description: Create or update physical-layer implementation plans for a spec. Use when preparing execution plans per tier (front, back, e2e) before coding.
---

# Writing Plan

Create one actionable implementation plan per physical layer for a target spec.

## When to Use

- Starting `/implement-spec`
- A tier plan is missing, outdated, or inconsistent with the current spec
- The agent needs ordered tasks before implementation work

## Inputs

- Target spec file in `specs/`
- Existing plan files: `specs/<spec-slug>.<tier>.plan.md` (if any)
- Technical constraints from `/AGENTS.md` and `/project/ADR.md`

## Tier and File Convention

- Allowed tiers: `front`, `back`, `e2e`
- One file per tier: `specs/<spec-slug>.<tier>.plan.md`
- Do not create duplicate plans for the same tier

## Plan Structure

Each plan must include:
- Context and scope for the tier
- Ordered steps
- Task checklist per step
- Validation criteria for that tier
- Lifecycle state section:
  - `Plan Status`: `Pending` | `In Progress` | `Completed` | `Blocked` | `Failed`
  - Task checkboxes (`- [ ]`, `- [x]`) as the task state source

## Status Policy

- New or refreshed plan starts at `Pending`
- Move to `In Progress` when first task execution begins
- Set `Completed` only when all tasks are done and tier validation passes
- Set `Blocked` when an external dependency prevents progress
- Set `Failed` when validation still fails after agreed remediation attempts

## Procedure

### 1. Analyze Spec Scope
- [ ] Read Problem/Solution/Verification in the target spec.
- [ ] Determine which tiers are required (`front`, `back`, `e2e`).
- [ ] Map acceptance criteria to tier-level implementation outcomes.

### 2. Build or Refresh Tier Plans
- [ ] For each required tier, create/update `specs/<spec-slug>.<tier>.plan.md`.
- [ ] Keep tasks atomic, ordered, and verifiable.
- [ ] Include explicit dependencies and blockers per tier.

### 3. Initialize States
- [ ] Set each plan `Plan Status` to `Pending` after drafting or refresh.
- [ ] Ensure all new tasks start unchecked (`- [ ]`).

### 4. Consistency Check
- [ ] Ensure plan tasks align with spec verification.
- [ ] Ensure no duplicate or orphan tier plan exists.
- [ ] Ensure naming convention is consistent for all tiers.

## Output

One updated/created plan file per required tier, all initialized as `Pending` and ready for `implementing-plan`.
