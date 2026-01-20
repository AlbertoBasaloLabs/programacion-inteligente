---
name: releasing-procedure
description: >  
  Updates documentation, generates changelogs, and handles versioning.
  To be used for automating release tasks. 
---

# Releasing Procedure

Automate the process of managing releases, including:
  - updating documentation, 
  - generating changelogs, 
  - and handling versioning.

Use terminal git commands as needed.

## Step 1: Update Documentation

- [AGENTS.md](/AGENTS.md) : update to reflect changes.
  - [ ] tech stack, 
  - [ ] setup/dev instructions, 
  - [ ] folder structure are accurate.
- [ ] [PRD.md](/PRD.md) and/or [specs](/specs) to reflect the current status of features.
- [ ] [ADD.md](/ADD.md) : update if any architectural decisions have changed.
- [ ] Other relevant documentation files.

## Step 2: Generate Changelog

- [ ] Commit all pending changes grouping them by type of change.
- [ ] Use [Semantic Versioning (SemVer)](../sem-ver.md) principles.
- [ ] [CHANGELOG.md](/CHANGELOG.md) : Add entries to based on commit history.

## Step 3: Versioning

- [ ] Update `package.json` version number based on SemVer principles.
- [ ] If there is an issue/ticket id in the context, then `Close #ID`.
- [ ] Merge it into default branch.
- [ ] Generate a git tag for the new version.
