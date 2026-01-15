---
name: generating-add
description: > 
  Generates an Architecture Design Document (ADD) for software projects.
  Also generates or updates the AGENTS.md file to reflect any architectural rules.
  Use this skill when designing a project to create an ADD.

--- 
# Generating an ADD

To generate an Architecture Design Document (ADD), follow these steps:

## Context

Use the provided context, or current documentation files to understand the project architecture, and technical requirements.

## Steps to follow:

### Step 1: Clarifying Questions

Ask only critical questions where the initial prompt is ambiguous. Focus on:

- System Requirements: What are the key technical requirements?
- Constraints: Are there any technology or architecture constraints?
- Non-Functional Requirements: What performance, security, or scalability needs exist?

### Step 2: Drafting the ADD

- Draft the ADD following the [ADD template](ADD.md)
- Ensure each section is filled out with relevant information.
- Keep the document concise, aiming for clarity and brevity.

### Step 3: Drafting the AGENTS.md

- Review existing `AGENTS.md` file if it exists.
- Update or create the file WITH
  - any architectural rules, guidelines, or agent relevant behaviors
  - Follow the [Agents template](./AGENTS.md) provided in the context.
  - The file with less than 100 sentences and less than 100 characters per sentence.
  
### Step 4: Review and Finalize

- [ ] Review the documents for completeness and accuracy.
- [ ] Write the final ADD to root folder with `ADD.md` name.
- [ ] Update or create the `AGENTS.md` file in the root folder.