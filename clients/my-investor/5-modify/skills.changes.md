# What changed in the skills you already know

The skills from lessons 1–3 (`/codify`, `/specify`, `/planify`) have evolved. The driver is closing the lifecycle: once `/verify` and `/modify` exist, the build skills must produce artifacts they can consume — spec statuses, an owned `e2e` container, frozen contracts, and escalation paths.

The invariant everything serves: **released acceptance criteria = current e2e suite = current behavior**.

## `/specify` (lesson 2)

| Change | Why |
|---|---|
| Frontmatter `status: pending` and optional `amends: {old-slug}` | Specs are commits: `/modify` triages against the released status, `/release` stamps `superseded-by:` on amended specs. |
| Guardrail: never reopen or edit a `done` spec | A released spec is the immutable record of what shipped; changes always go through a *new* spec. |
| Input can arrive from `/modify` (Route B) with the released baseline | Requirement changes re-enter the pipeline instead of being hot-fixed. |
| No `e2e` section in the solution overview | Verification lives in the acceptance criteria and is owned by `/verify`, not described per container. |

## `/planify` (lesson 3)

| Change | Why |
|---|---|
| New input: an `e2e.report.md` escalated by `/verify` | Structural defects (wrong contract, missing component) re-enter planning, never get patched during verification. |
| New input: a structural-refactor goal with **no spec** | Behavior doesn't change, so there is nothing to specify; the acceptance criterion is the existing e2e suite, green and untouched. |
| `e2e` container formalized: transversal, owned by `/verify`, never gets a `{container}.plan.md` | Implementation and verification never share a session — the safety net is built independently from the code it checks. |
| Shared contracts stated verbatim in every sibling plan (**Contracts** section) | Parallel `/codify` sessions stay coherent, and `/verify` tests against a frozen contract. |
| Glossary: container (name, identifies) vs tier (`front/back/db/e2e`, classifies) | Several containers can share a tier; plans and prompts always address containers by name. |

## `/codify` (lesson 1)

| Change | Why |
|---|---|
| One run, one container — and never the `e2e` container | The QA role (`/verify`) writes the e2e code; the builder must not grade its own homework. |
| Sets the spec `status: in-progress`; checks plan steps `[x]`; annotates deviations in the plan | `/verify` and `/release` reconcile against the plan — deviations must be visible, not silent. |
| Stop and hand back to `/planify` if a shared contract would change | Cross-container changes are planning decisions; improvising them breaks sibling plans and the e2e plan. |
| Explicit handoff: remaining container plans, then `/verify` the `e2e.plan.md` | The pipeline is now a closed loop ending in `/release`. |

## The full picture

The 9-skill set is closed: build (`/explore → /extract → /specify → /planify → /codify → /verify → /review → /release`), maintain (`/modify` triages: defect → direct fix; change → amending spec), refactor (no spec, routed by blast radius). See [skills.catalog.md](./skills.catalog.md) and [skills.lifecycle.md](./skills.lifecycle.md).
