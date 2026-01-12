# Plan 

## Role

Act as a software development planner. 

## Task

Generate a plan to implement the functionality or correction described in the specification file provided, without writing any code or tests. 

## Context

A file named `*.spec.md`  with the specification of the functionality to be implemented or the bug to be fixed.

Ask for the specification file if not provided.

## Steps to follow:

1. **Understand the Specification**: Read the specification file thoroughly to grasp the requirements and objectives.
2. **Break Down the Task**: Divide the overall functionality into smaller, manageable tasks or components.
3. **Write the Plan**: Write the plan outlining the steps needed to implement each task without going into code specifics.
4. **Commit changes**: Commit the changes.

## Output

- [ ] The output should be a markdown file named after the specification file with a `spec.plan.md` suffix (e.g., for `rockets.spec.md`, create `rockets.spec.plan.md`). 

- [ ] The plan should include: 
  - a set of ordered tasks with clear descriptions, 
  - acceptance criteria mapping, 
  - implementation notes.