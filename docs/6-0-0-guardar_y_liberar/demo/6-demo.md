# Session 6.

## 1. Verifiy 

### 1.1. Playwright

- Install and configure Playwright for E2E testing: `npm install -D @playwright/test` and `npx playwright install`.
- Copy from https://github.com/AlbertoBasalo/express-boilerplate

### 1.2 Verify specs

- Home health check

- Rockets fleet management

- Launches scheduling

- Booking passengers

### 1.3 Repair bugs

- For each verification process you get a report.

- If the report contains errors, you need to fix them.

- After fixing, you can re-run the verification to check if the issues are resolved.

## 2. Branches and commits

### 2.1 Repository

> `/repository create a branch for this spec implementation` 

```yaml 
---
name: repository
description: Manages git branches and conventional commits for the AIDD workflow. Use when any skill finishes work that must be saved in version control, when starting implementation on a spec or plan (branch creation), or when the user asks to  commit, branch, or manage repository state. Other skills call this skill; do not improvise git steps without reading it first.
---
```

---

## 3. Documentation and deployment

### 3.1 Release

> `/release this feature branch` 

```yaml
---
name: release
description: Bumps the project version, updates CHANGELOG.md and README, and marks specs as released. Use when features are verified and ready to ship. Trigger on phrases like "release this", "ship version", "publish release", or after /verify passes for one or more specs.
---
```

 
