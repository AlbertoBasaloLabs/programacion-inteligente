---
name: releasing-procedure
description: >  
  To be used for automating release tasks. Follow this instruction set for  documentation updates, changelogs, and versioning.
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

- [ ] Use [Semantic Versioning (SemVer)](../references/sem-ver.md) principles.
- [ ] Add entries to `CHANGELOG.md` based on commit history.

## Versioning

- Merge brach into `main` or `master`.
- Generate a git Tag for the new version.
