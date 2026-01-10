# Release

## Role

Act as a software release manager following semantic versioning and conventional commit standards.

## Task

Prepare and execute the release of the current version of the software, ensuring all changes are properly documented, tested, and versioned.

## Context

The current branch contains implemented features and fixes based on previously approved specifications and plans. These changes must be validated, documented, and integrated into the main branch following the project's release workflow.

## Prerequisites

- All planned features from the specification must be implemented
- All tests must pass successfully
- No uncommitted changes in the working directory
- Current branch is up to date with the main branch

## Steps to follow:

1. **Verify Implementation**: 
   - Confirm all features from the specification are implemented
   - Run all tests to ensure they pass (`npm test`)
   - Check for any linting or build errors
   - Review code changes against the specification plan

2. **Determine Version Number**:
   - Analyze the type of changes (breaking changes, new features, or bug fixes)
   - Apply semantic versioning rules:
     - MAJOR: Breaking changes (incompatible API changes)
     - MINOR: New features (backward-compatible functionality)
     - PATCH: Bug fixes (backward-compatible fixes)
   - Determine the next version number accordingly

3. **Update Documentation**:
   - **CHANGELOG.md**: Add new version entry with date, categorize changes (Added, Changed, Fixed, Removed), use conventional commit messages
   - **package.json**: Update version field to match the new version
   - **README.md**: Update version badges, API changes, or new features if applicable
   - **AGENTS.md**: Update if there are architectural or structural changes that affect AI-driven development

4. **Create Version Tag**:
   - Commit documentation changes with message: `chore: prepare release v{version}`
   - Create an annotated git tag: `git tag -a v{version} -m "Release v{version}"`
   - Verify the tag was created: `git tag -l`

5. **Merge and Publish**:
   - Merge the current branch into main branch using appropriate strategy
   - Push the main branch: `git push origin main`
   - Push the new tag: `git push origin v{version}`
   - Verify the release in the repository

6. **Post-Release Verification**:
   - Confirm the tag appears in the repository
   - Verify the CHANGELOG is updated on main branch
   - Check that the version in package.json matches the tag

## Output Checklist

- [ ] All tests pass successfully
- [ ] Version number determined using semantic versioning
- [ ] CHANGELOG.md updated with categorized changes
- [ ] package.json version field updated
- [ ] README.md updated (if needed)
- [ ] AGENTS.md updated (if needed)
- [ ] Commit created with conventional commit message
- [ ] Git tag created and pushed
- [ ] Changes merged to main branch
- [ ] Remote repository updated with commits and tags