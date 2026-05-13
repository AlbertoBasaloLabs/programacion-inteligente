# Level 2 SDD workflow

```mermaid
flowchart TD
  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
  classDef sg fill:#f1f5f9,stroke:#00f2ff,color:#457b9d 

  HUM[HUMAN]

  subgraph P["PRODUCT"]
      REQ["{slug}.spec.md"]:::nd
  end

  subgraph T["TECHNOLOGY"]
      AGT["AGENTS.md"]:::nd
      SKL["skills/"]:::nd
      RUL["rules/"]:::nd
  end 

  subgraph S["SOLUTION"]
      COD[Source Code]:::nd
  end

	HUM -->|/initialize| AGT
  AGT & RUL & SKL -.-> COD  
  REQ -->|/codify| COD

  class P,T,S sg
```

## Commands

- `/initialize` - Create initial technology documentation (/AGENTS.md and skills/) for a project.

- `/codify` - Writes the code and unit tests following a plan, implementing a specification, or a minor requirement.

## Artifacts

### Technology

- `/AGENTS.md` - The entry point for any agent joining the project; defines how agents should operate, including rules, workflows, and artifact conventions.

- `rules/` - Define rules that agents must follow when writing code.

- `skills/` - Teach your agent how to do things. Make them easy to know when to use.

### Product

- `{slug}.spec.md` - A detailed specification (problem, solution, verification) of a feature or technical requirement.
  
### Solution

- `Source Code` - The implementation of the system, including unit tests.
