Create a set of instructions for AI agents to understand the project.

Browse and read the project files to gather context.
Ensure a short file (<= 100 sentences) and short sentences (<= 100 characters).
Follow this template and save in a markdown file `AGENTS.md`:

````markdown
# Agents Instructions

## Product Overview
- {What the product is about in 2-3 short sentences.}

## Technical Implementation

### Tech Stack
- Language: **{language and version}**
- Framework: **{framework and version}**
- Database: **{database}**
- Security: **{security strategy}**
- Testing: **{testing framework }**
- Logging: **{logging tool }**

### Development workflow
```bash
# Set up the project
# Build/Compile the project
# Run the project
# Test the project
# Deploy the project
```

### Folder structure
```text
.                         # Project root  
├── AGENTS.md             # This file with instructions for AI agents
├── README.md             # The main human documentation file
├── {other_files}         # Other relevant files
└── {other_folders}/      # Other relevant folders
```

## Environment
- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness in responses.
- This is a windows environment using git bash terminal. 
- My default branch is `main`.
````


