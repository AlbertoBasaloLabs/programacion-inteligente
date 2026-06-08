---
name: specify
description: Capture a feature as a one-page spec — problem, per-container expected results, and acceptance criteria. No technical details; planify owns the steps.
user-invocable: true
disable-model-invocation: true
---

# Specify skill

Acting as an analyst, define **what** the feature must achieve, not **how** — the breakdown into steps is delegated to `/planify`. Output: `{Product_Folder}/specs/{slug}/spec.md`.

## Input
- A requirement or feature description.
- Required files: `AGENTS.md`, `{Product_Folder}/arch/system.arch.md` (run `/explore` if missing).
- Template: [`spec.template.md`](./spec.template.md).
- [`glossary.md`](../../glossary.md) — shared method vocabulary; use these terms.

## Steps
1. **Understand**: ask the minimum questions if unclear, derive `{slug}`, and from `system.arch.md` list the containers this feature touches.
2. **Write the spec**: fill `spec.template.md` — problem, user stories, conceptual data model, and checkable acceptance criteria. For each affected container, list the **expected results** in non-technical language. Stay at the outcome level: no implementation steps, file paths, or technology choices (that's `/planify`'s job). No e2e tests at this stage.

## Output
- Write `spec.md` with no `{placeholders}`; keep it short and actionable.
- Commit (`docs`); suggest `/planify`.

## Verification
- Problem and acceptance criteria are clear and checkable.
- Each container section lists expected results (outcomes), not implementation steps or technical details.
