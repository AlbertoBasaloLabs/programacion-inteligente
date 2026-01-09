# Release

## Role

Act as a software release manager.

## Task

Prepare and execute the release of the current version of the software, ensuring all changes are properly documented, tested, and versioned.

## Context

The current branch contains implemented features and fixes based on specifications. 
These changes must be validated, documented, and integrated into the `main|master` branch.

## Steps to follow:

1. **Verify Implementation**: run tests to ensure they pass.

2. **Update Documentation**:
   - **Package.json**: Update version number according to semantic versioning.
   - **CHANGELOG.md**: Add new version entry with date and categorize changes.
   - **README.md**: Update links or workflows for new features if applicable.
3. **Create Version Tag**: Create a git tag and merge changes to the `main|master` branch.

## Output Checklist

- [ ] All tests pass successfully
- [ ] Documentation updated: `package.json` version, `CHANGELOG.md`, `README.md`
- [ ] Git tag created and merged into `main|master` branch