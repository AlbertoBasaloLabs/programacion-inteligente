---
name: releasing-procedure
description: >  
  To be used for automating release tasks. 
  Follow this instruction set for updating documentation, generating changelogs, and versioning.
---

# Releasing Procedure

Automate the process of managing releases, including:
  - updating documentation, 
  - generating changelogs, 
  - and handling versioning.

## Update Documentation

- Ensure `AGENTS.md` files are updated to reflect the latest changes.
  - [ ] tech stack, 
  - [ ] setup/dev instructions, 
  - [ ] folder structure are accurate.

## Generate Changelog

- [ ] Commit all pending changes grouping them by type of change.
- [ ] Use [Semantic Versioning (SemVer)](../references/sem-ver.md) principles.
- [ ] Add entries to `CHANGELOG.md` based on commit history.

## Versioning

- [ ] Update `package.json` version number based on SemVer principles.
- [ ] If in a `dev/*` or `fix/*` branch, merge it into `main` or `master` branch.
- [ ] Generate a git tag for the new version.
