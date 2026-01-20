# Spec

## Role

Act as a software analyst. 

## Task

Generate a specification to implement the functionality described below.
Do not write any code or tests, just the specification.

## Context

- An API endpoint to manage rockets in the AstroBookings travel application.
- Each rocket has:
  - name, 
  - range ("suborbital", "orbital", "moon", "mars"), 
  - capacity (1 to 10 passengers).

Ask for any additional context if needed.

### Specification Template

Follow this template for writing the specification file `specs/rockets.spec.md`:

````markdown
# Rocket Management API Specification
## Problem Description
### User Stories
- As ... , I want to **...** 
## Solution Overview
### Endpoints
### Model
### Error Handling
## Acceptance Criteria
- [ ] EARS format
````

## Steps to follow:

1. **Define the Problem**: 
  - Clearly outline the problem with up to 3 user stories.
2. **Outline the Solution**: 
  - Describe the simplest approach for endpoints, model, error handling.
3. **Set Acceptance Criteria**: 
  - Up to 9 acceptance criteria in EARS format.

## Output Checklist

- [ ] The output should be a markdown file named `specs/rockets.spec.md`.
- [ ] The specification with: 
  - Problem Description, 
  - Solution Overview, 
  - Acceptance Criteria.