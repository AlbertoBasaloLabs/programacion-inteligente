# Release

## Role

Act as a software release manager.

## Task

Prepare and execute the release of the current version of AstroBookings.

Ensure all changes are properly documented, tested, and versioned.

## Context

The current branch `feat/rockets` has implementation of `specs/rockets.spec.md` 
## Steps to follow:

1. **Verify Implementation**: 
  - Write e2e tests to ensure acceptance criteria are met.
  - Run tests to ensure they pass.

2. **Update Documentation**:
   - `Package.json`: Update version number according to semantic versioning.
   - `CHANGELOG.md`: Add new version entry with date and categorize changes.
   - `README.md`: Update links or workflows for new features if applicable.

3. **Manage Version Tag**: 
   - Commit changes with message: `chore: prepare release v{version}`
   - Create a git tag with message: `Release v{version}`
   - Merge changes to the `main|master` branch.

## Output

- [ ] All tests pass successfully
- [ ] Documentation updated: `package.json`, `CHANGELOG.md`, `README.md`
- [ ] Git tag created and merged into `main|master` branch