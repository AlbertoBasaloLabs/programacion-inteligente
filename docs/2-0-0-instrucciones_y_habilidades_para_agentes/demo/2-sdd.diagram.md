# Level 2 SDD workflow

```mermaid
flowchart TD
  classDef nd fill:#f8fafc,stroke:#00c4cc,color:#457b9d
  classDef sg fill:#f1f5f9,stroke:#00f2ff,color:#457b9d 

  HUM[HUMAN]

  subgraph P["PRODUCT"]
      REQ["slug.spec.md"]:::nd
  end

  subgraph A["AGENTS"]
      AGT["AGENTS.md"]:::nd
      SKL["skills/"]:::nd
  end  

  subgraph S["SOLUTION"]
      COD[Source Code]:::nd
  end

	HUM -->|/initialize| AGT
  HUM -->|/write-a-skill| SKL
  AGT -.-> SKL
  AGT -.-> COD  
  REQ -->|/codify| COD

  class P,A,S sg
```

## Commands

- `/initialize` - Create initial technology documentation (/AGENTS.md and skills/) for a project.

- `/write-a-skill` - Create a new skill from a human need (Can be a rule set, a workflow, or a utility command).

- `/codify` - Run the implementation cycle for one specification: generate plans, produce code, and validate with tests.


## Artifacts

- `/AGENTS.md` - The entry point for any agent joining the project; defines how agents should operate, including rules, workflows, and artifact conventions.

- `skills/` - Teach your agent how to do things. Make them easy to know when to use.

- `spec-slug.spec` - A detailed specification (problem, solution, verification) of a feature or technical requirement.
  
- `Source Code` - The implementation of the system, including unit tests.
