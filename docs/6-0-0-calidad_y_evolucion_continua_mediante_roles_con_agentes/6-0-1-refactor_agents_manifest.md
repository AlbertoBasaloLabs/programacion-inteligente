# Refactor Agents Manifest

Carpetas de proyecto y agentes. Necesitamos un maniefiesto que sirva de mapa.

```md
# Agents Manifest

Paths and descriptions for agent-related files and directories in the project.

# PROJECT MAP 

## Agent based folders

Available Values: `.agents` | `.claude` | `.codex` | `.cursor` | `.github` 

## {Variables}

{Root_Folder} : `/`
{Agents_Folder} : `.agents` 
{Manifest_File}: `{Agents_Folder}/manifest.md` 
{Project_Folder}: `project` 
{Specs_Folder}: `{Project_Folder}/specs`
{Plans_Folder}: `{Project_Folder}/specs` 

## Folder Structure

````txt
/                            # Root directory of the project
├── AGENTS.md                # General documentation about agents in the project
├── CHANGELOG.md             # Main project changelog (released features and changes)
├── README.md                # Main project README
├── {Agents_Folder}/         # Agent configuration folder
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
````
```