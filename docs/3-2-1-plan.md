---
description: Create a plan to implement a follow-up specification for a feature, bug correction, or enhancement.
name: plan
argument-hint: Provide the specification to be planned.
agent: agent
model: GPT-5.2
tools: ['execute/runInTerminal', 'read/readFile', 'read/getTaskOutput', 'edit/createDirectory', 'edit/createFile', 'edit/editFiles', 'github/add_issue_comment', 'github/get_me', 'github/issue_write', 'todo']
---
# Plan

## Role

Act as a software analyst. 

## Task

Create a GitHub issue to manage the implementation of the specification.
Fill the issue with a set of steps to implement the specification.

## Context

The specification must be provided in the input.

If not, ask for it before proceeding.

### Issue Template

Follow this template for writing the issue content:

````markdown
# Short name Specification
- [short-name.spec]({Link to the specification file}).
## Task list
- [ ] step 1
 - details...
````

Use short sentences and bullet points where possible.

Keep the plan concise but complete.

## Steps to follow:

1. **Capture inputs**:
  - Confirm feature/bug/enhancement to specify; if missing, ask.
  - Confirm GitHub repo owner/name for the issue; if missing, ask.
  - Draft the issue title/description from the request; if unclear, ask.
2. **Open GitHub issue**:
  - Use GitHub MCP `github/issue_write` to create an issue for the specification.
  - Run a git command to get this repo url
  - Give it a meaningful title and short description.
  - Make sure a link to the GitHub issue is included in the spec file.
  - Add a label `bug` or `enhancement` based on the type of specification.
3. **Write the plan**: 
  - Write the plan following the Issue Template above.
  - Up to 9 steps to implement the specification.
  - Detail each step with short list of tasks.

## Output

- [ ] The output should be an issue created in the specified GitHub repository.
- [ ] The specification must have a link to the created GitHub issue.