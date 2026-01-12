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

Follow this template for writing the specification file `id-short-name.spec.md`:

````markdown
# Short name Specification
## Problem Description
### User Stories
- As ... , I want to **...** 
## Solution Overview
### User/App interface
### Model and logic
### Persistence
## Acceptance Criteria
- [ ] EARS format
````

## Steps to follow:

1. **Define the Problem**: 
  - Clearly outline the problem that we aim to solve.
2. **List User Stories**: 
  - Up to 3 US that describe the problem from the user's perspective.
3. **Outline the Solution**: 
  - Describe the simplest approach without technical details for:
    - User/App interface
    - Model and logic
    - Persistence
4. **Set Acceptance Criteria**: 
  - Up to 9 acceptance criteria in EARS format.
5. **Write the Specification**: 
  - Generate a new id for the short name specification.
  - Write it in markdown format at `specs/id-short-name.spec.md`.

## Output

- [ ] The output should be a markdown file named `specs/id-short-name.spec.md`.
- [ ] The specification with: 
  - Problem Description, 
  - Solution Overview, 
  - Acceptance Criteria.