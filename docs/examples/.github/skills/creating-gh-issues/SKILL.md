---
name: creating-gh-issues
description: >
  Creates a GitHub issue based on a provided specification.
  To be used to create issues for features, bug corrections, or enhancements.
---

# Creating GitHub Issues Skill

When asked for creating a GitHub issue, follow these steps:

1. **Capture inputs**:
   - Confirm the specification for the issue to create; if missing, ask.
   - Draft the issue title from the specification; if unclear, ask.
   
2. **Create the GitHub issue**:
  - Use the GitHub MCP tool to create the issue in the appropriate repository.
  - Identify the repo by using local git commands to get the remote URL and parse it.
  - Set the issue title and body based on the provided specification.
  - Assign appropriate labels, assignees, and milestones if specified.
  - Add a label `bug` or `enhancement` based on the type of specification.
  - Save the created issue URL for reference and the ID for tracking.
  - Do not add any additional content beyond what is specified in the spec file.

3. **Double-link**:
  - Add the created issue URL back to the specification task output for traceability.
  - Add the github spec file url to the created issue body for context. 

4. **Prepare a repository branch**:
  - Commit any pending changes in the current branch.
  - Pull the latest changes from remote to keep local up to date.
  - Create a git branch named `<type>/<feature-slug>` based on the main branch. 
  - Examples: `feat/booking-management`, `bug/payment-error`, `chore/cleanup-api`

