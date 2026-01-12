# Create AGENTS.md file

## Role

Act as a senior software developer.

## Task

Create a file named `AGENTS.md` with instructions for the agents to know the project and how to use them.

## Context

- The current project configuration, source code and documentation.

### Agents template

Follow this template for writing the instructions in the file `AGENTS.md`:

````markdown
# Agents Instructions
## Product Overview
- ...
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
└── other_files/          # Other files and folders that are relevant to the project
```
## Environment
- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness when needed to fit response limits.
- This is a windows environment using git bash terminal. 
````

Ensure a short file (less than 100 sentences).
Sacrifice grammar and punctuation to keep sentences short (less than 100 characters).

## Steps to follow:

1. **Understand the Project**:
  - Read the code base and documentation to know the project basics.
2. **Write the Instructions**:
  - Write the instructions for the agents to know the project and how to use them.
3. **Review the Instructions**:
  - Review the instructions to ensure they are clear and concise.
4. **Save the Instructions**:
  - Save the instructions to the file `AGENTS.md`.
5. **Commit the Instructions**:
  - Commit the instructions to the repository.

## Output

- [ ] The output should be a markdown file named `AGENTS.md`.
- [ ] The file with less than 100 sentences and less than 100 characters per sentence.
