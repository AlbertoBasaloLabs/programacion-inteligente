# Agents Manifest

Paths and descriptions for agent-related files and directories in the project.

# PROJECT MAP 

Root: `/` - The root directory of the project, containing all main files and subdirectories.
Manifest: `.agents/manifest.md` - This file, serving as a path dictionary for agents.

## Core Directories
- **Agents Logic:** `.agents/` (Definitions, Prompts, Skills)
- **Human Documentation:** `docs/` (User manuals, guides, etc.)
- **Project Context:** `project/` (PRD, ERM, ADD, Roadmap)

## Folder Structure

```txt
/                            # Root directory of the project
├── AGENTS.md                # General documentation about agents in the project
├── CHANGELOG.md             # Main project changelog (released features and changes)
├── README.md                # Main project README
├── .agents/                 # Agent configuration folder
│   ├── manifest.md          # Path dictionary (this file)
│   ├── agents/              # Specific agent definitions
│   ├── prompts/             # Reusable prompts directory
│   └── skills/              # Skill definitions directory
└── docs/                    # Human documentation (User manuals, guides, etc.)
└── project/                 # Project documentation (Product and architecture)
    ├── ADD.md               # Architecture Design Document
    ├── briefing.md          # Project briefing
    ├── ERM.md               # Entity-Relationship Model
    ├── PRD.md               # Product Requirements Document
    ├── ROADMAP.md           # Product Roadmap and Milestones
    └── specs/               # Specifications and plans
        ├── *.spec.md        # Detailed specifications for features 
        └── *.plan.md        # Implementation plans for features
```