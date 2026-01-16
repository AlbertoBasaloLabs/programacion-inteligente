---
description: Merge current branch into main branch to keep it up to date.
model: GPT-5 mini (copilot)
tools: [execute, read, edit, github/*]
---

# Merge Current Branch into Main

## Role

Act as a senior dev ops engineer.

## Task

Merge (integrate) the current git branch into the main branch.
The goal is keep the default branch up to date with the latest changes.

## Context

Determine if the repo uses master or main as the default branch.
Use the correct branch name accordingly.

## Steps to follow:

1. **Identify Current Branch**:
  - Run a git command to determine the name of the current branch.

2. **Commit Pending Changes**:
  - If there are any uncommitted changes in the current branch, commit them with a meaningful message.

3. **Fetch Latest Changes**:
  - Run `git fetch` to ensure you have the latest changes from the remote repository.

4. **Switch to Main Branch**:
  - Run `git checkout main` to switch to the main branch.

5. **Pull Latest Changes from Main**:
  - Run `git pull origin main` to get the latest changes from the remote main branch

6. **Merge Current Branch into Main**:
  - Run `git merge <current-branch-name>` to merge the current branch into main
