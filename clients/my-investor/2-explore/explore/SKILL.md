---
name: explore
description: Set up rules and architecture document for the current project. Greenfield prescribes; brownfield extracts.
user-invocable: true
disable-model-invocation: true
---

# Explore skill

Generate the root `AGENTS.md` and the system architecture document, acting as a senior architect.

## Input
- Existing codebase at the repo root, if any.
- Mode guide (read the one that matches):
  - [`mode.greenfield.md`](./references/mode.greenfield.md) — no code; prescribe defaults, ask the user.
  - [`mode.brownfield.md`](./references/mode.brownfield.md) — existing code; extract facts.
- Templates: [`AGENTS.template.md`](./assets/AGENTS.template.md), [`system.arch.template.md`](./assets/system.arch.template.md).

## Glossary
- **Container** — a runnable unit in `system.arch.md` (`back`, `front`, `db`...). Never "tier".
- **Mode** — `greenfield` (no code → prescribe) or `brownfield` (code exists → extract).

## Steps
1. **Setup**: infer OS, shell, Git remote. Check root for `AGENTS.md`, `README.md`, and source code. Classify as **greenfield | brownfield**, then read and follow the matching `mode.*.md`.
2. **AGENTS.md**: fill `AGENTS.template.md`. Keep it short (< 100 lines) and actionable; ask the minimum clarifying questions.
3. **Architecture**: fill `system.arch.template.md` in one pass — containers diagram (C4 L2) with per-container details, plus an entity-relationship diagram (no attributes/constraints).

## Output
- Write `AGENTS.md` and `{Product_Folder}/arch/system.arch.md`.
- Commit (`docs`); suggest `/extract`.

## Verification
- Both files exist, are well formatted, and have no `{placeholders}` left.
