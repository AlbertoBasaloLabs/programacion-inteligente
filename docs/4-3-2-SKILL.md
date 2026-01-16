---
name: creating-gh-issues
description: >
  Create GitHub issues based on provided specifications.
  Used to create issues for features, bug corrections, or enhancements.
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

3. **Double-link**:
  - Add the created issue URL back to the specification task output for traceability.
  - Add the github spec file url to the created issue body for context. 

4 **Plan**:
  - If asked to add a plan to the issue, break down the implementation into 3 to 9 steps with 2 to 5 tasks each, following the format in the [Implementation Plan template](./PLAN.md).