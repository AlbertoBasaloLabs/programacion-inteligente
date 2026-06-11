# Refactoring without a spec

A refactor preserves observable behavior: the *what* does not change, so there is **no `/specify` call and no spec folder**. What the pipeline already manufactured is exactly what a refactor needs: a green e2e suite as the acceptance criterion, and arch docs that describe HEAD.

The invariant still rules: **released acceptance criteria = current e2e suite = current behavior**. A refactor moves code underneath that line without bending it.

## Routing by blast radius

| Situation | Route | Proof |
|---|---|---|
| Ugly internals, contracts intact | `/review` (refactor folded into clean-code) | existing tests green, untouched |
| Contracts or components must move | `/planify` (refactor goal, **no spec**) → `/codify` → `/extract` → patch `/release` | existing e2e suite green, **untouched** |
| Big change incoming, messy landing zone | preparatory `/review` on the affected scope, then re-enter via `/specify` | green before re-entry |
| A test assertion must change to stay green | not a refactor — `/modify` | new criterion in an amending spec |

## Route A — cosmetic (`/review`)

- Scope-bound: feature branch, spec/plan files, or explicit paths.
- The three guardrails do the safety work:
  1. **Green baseline gate** — refuses to start on red.
  2. **Tests untouchable** — an assertion change means behavior changed: revert, route `/modify`.
  3. **Contracts frozen** — restructuring a shared shape escalates to Route B.
- Output: one `refactor` commit, bullet per finding. No artifacts touched.

## Route B — structural (`/planify` with no spec)

- `/planify` takes a textual refactor goal as input. Because behavior is untouched there is nothing to specify and **no e2e plan is produced** — the existing suite *is* the plan.
- The criterion must have an owner: *run the existing e2e suite, green and unmodified* is written as the final step of the last container plan.
- `/codify` executes per container as usual; the contract being moved is stated verbatim in every sibling plan (**Contracts** section) so parallel sessions stay coherent.
- `/extract` brownfield re-syncs `{container}.arch.md` and rules: specs are commits, **arch docs are HEAD** — after moving components, HEAD changed.
- Patch `/release`: changelog under *Changed* (internal), no spec to close.

## Why this is safe to delegate

Three guardrails turn refactoring from "scary" into "boring":

1. Green baseline before starting — never refactor on red.
2. The e2e suite is the measuring stick — nobody may edit it during the refactor.
3. Contracts are frozen unless a plan says otherwise — and then the plan says it in every affected container.

The safety net was never written for refactoring; SDD manufactured it as a by-product of every `/verify` run. That is the economic argument: specs pay rent twice.

## The trap to remember

If staying green would require changing a test's assertion, behavior changed and it was never a refactor. Business may still call it "cleanup" — the suite says otherwise. Route through `/modify`, which will triage it into a defect fix or an amending spec.

See [skills.catalog.md](../5-modify/skills.catalog.md) and [skills.lifecycle.md](../5-modify/skills.lifecycle.md) for the full map.
