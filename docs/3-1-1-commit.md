---
name: commit
description: Commits pending changes.
agent: agent
model: Auto (copilot)
tools: ['execute/getTerminalOutput', 'execute/runInTerminal', 'read', 'edit/editFiles', 'search', 'web/fetch']
---
# Spec

## Role

Act as a software developer. 

## Task

Commit the changes at this branch.
Use the terminal tool to run git commands.

## Context

The current branch may have uncommitted changes.

## Output checklist:

- [ ] The are no uncommitted changes in the current branch.