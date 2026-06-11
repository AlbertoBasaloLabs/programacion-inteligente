# From skills to agents: delegating whole phases

Skills are procedures you trigger one at a time; a **subagent** is a worker that chains them alone. It runs in its own context window with its own system prompt, tool restrictions, and permissions, and returns only a report — your main session stays clean and free while it works.

Definition files live in `.claude/agents/*.md` (project) or `~/.claude/agents/*.md` (user). The markdown body is the agent's system prompt; the YAML frontmatter is its contract with the runtime.

## What to delegate: phases bounded by human gates

Not every skill chain is AFK material. The two that are share the same shape — **deterministic procedure inside, human gate on each side**:

| Agent | Chain | Entry gate | Exit gate | Why it is safe |
|---|---|---|---|---|
| `architect` | `/explore` → `/extract` ×container | a repo to document | human reads the arch docs | output is docs; worst case is cheap |
| `builder` | `/planify` → `/codify` ×container → `/verify` loop | **human-approved spec** | human runs `/review` + `/release` | the e2e suite proves the work against the approved criteria |

The spec approval is the load-bearing gate: it is the moment human intent gets frozen into acceptance criteria. Everything the builder does AFK is measured against that frozen contract — which is why `/specify` itself stays interactive, and why `/review` and `/release` stay human-triggered.

## Anatomy of the agent files

| Field | Used for |
|---|---|
| `description` | when the main session should delegate to this agent — the routing signal |
| `skills` | preloads the **full SKILL.md content** into the agent's context at startup |
| `permissionMode: acceptEdits` | auto-accepts file edits — required for AFK |
| `background: true` | runs concurrently; you keep working in the main session |
| `maxTurns` | the dead-man's switch: hard stop for runaway loops |
| `memory: project` | persistent directory across sessions — the architect accumulates codebase insight |

Prerequisite: a skill with `disable-model-invocation: true` cannot be preloaded — the flag exists precisely to keep a skill human-only. Removing it from `explore`, `extract`, `planify`, `codify`, and `verify` is the deliberate decision that makes them delegable. `review`, `release`, and `modify` keep the flag: they are the human gates.

## AFK consequences baked into the prompts

- Background agents **auto-deny permission prompts and cannot ask questions**. Both prompts therefore order: never ask — document every assumption and report it. The skills already work best-effort by design.
- The builder keeps the pipeline's separation of duties internally: codify never writes e2e tests, verify never weakens one. Same session, same agent — still two roles.
- Structural escalation has a budget (re-plan at most twice, then stop and report). An AFK loop without a budget is a bill, not a worker.

## Monitoring: the artifacts are the UI

You do not watch a terminal; you watch the repository. Plan checkboxes flip to `[x]`, the spec moves `pending → in-progress`, criteria get marked, `e2e.report.md` shrinks. The paperwork the pipeline manufactures for traceability doubles as the AFK progress dashboard — a second time the artifacts pay rent.

## Limits

- A subagent cannot spawn subagents: the builder codifies containers **sequentially**. For parallel fan-out, orchestrate from the main session (one worker per container plan, `isolation: worktree` keeps them from colliding) — at the cost of being the orchestrator yourself.
- The agent only knows its prompt, the preloaded skills, `CLAUDE.md`, and the delegation message — not your conversation. If a rule matters, it must live in one of those.

See [skills.catalog.md](../5-modify/skills.catalog.md) and [skills.lifecycle.md](../5-modify/skills.lifecycle.md) for the pipeline these agents drive.
