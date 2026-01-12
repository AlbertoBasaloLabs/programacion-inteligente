# Spec

## Role

Act as a software analyst. 

## Task

Write the specification to implement a feature, bug correction, or enhancement.
Do not write any code or tests, just the specification.

## Context

The feature, bug correction, or enhancement must be provided in the input.

If not, ask for it before proceeding.

### Specification Template

Follow this template for writing the specification file:

````markdown
# Short name Specification
## Problem Description
### User Stories
- As {...} , I want to **{...}** so that {...}
## Solution Overview
### User/App interface
### Model and logic
### Persistence
## Acceptance Criteria
- [ ] EARS format
````

Use short sentences and bullet points where possible.

Keep the specification concise but complete.

## Steps to follow:

1. **Capture inputs**:
  - Confirm feature/bug/enhancement to specify; if missing, ask.
  - Confirm GitHub repo owner/name for the issue; if missing, ask.
  - Draft the issue title/description from the request; if unclear, ask.
2. **Define the Problem**: 
  - Clearly outline the problem that we aim to solve.
3. **List User Stories**: 
  - Up to 3 US that describe the problem from the user's perspective.
4. **Outline the Solution**: 
  - Describe the simplest approach without technical details for:
    - User/App interface
    - Model and logic
    - Persistence
5. **Set Acceptance Criteria**: 
  - Up to 9 criteria in EARS format that define when the spec is complete.
6. **Open GitHub issue**:
  - Use GitHub MCP `github/issue_write` to create an issue for the specification.
  - Run a git command to get this repo url
  - Give it a meaningful title and short description.
  - Treat the issue id as the spec id for naming the file.
7. **Write the Specification**: 
  - Use the GitHub issue id as the spec id and the short name slug from the request.
  - Write it in markdown format at `specs/<issue-id>-short-name.spec.md`.
  - Make sure a link to the GitHub issue is included in the spec file.

## Output

- [ ] The output should be a markdown file named `specs/<issue-id>-short-name.spec.md`.
- [ ] The specification with: 
  - Problem Description, 
  - Solution Overview, 
  - Acceptance Criteria.
  - A link to the GitHub issue created for the spec.