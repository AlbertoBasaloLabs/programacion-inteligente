---
description: Best practices for clean and maintainable code 
globs: '**/*.ts'
---

# Cleaning Code Instructions

## Clean code best practices 

- Name variables and functions descriptively to enhance readability.
- Keep functions small and focused on a single task.
- Avoid nested structures to reduce complexity.
- Avoid primitive obsession by defining clear types and interfaces.
- Use named constants instead of magic numbers or strings.
- Keep dependencies to a minimum and use adapter pattern to decouple modules.
- Maintain a shared module (folder...) for common utilities and types.
- Handle errors gracefully with try-catch blocks and meaningful messages.
- Write comments to explain the "why" behind complex logic, not the "what".
- Keep it simple and avoid over-engineering.

## TypeScript specific guidelines

- Use ES modules (`import`/`export`) instead of CommonJS.
- Use strict typing and avoid using `any`.
- Declare `types` for data structures and `interfaces` for class contracts.
- Avoid `null` and `undefined` where possible; prefer optional properties.
- Leverage TypeScript's utility types (e.g., `Partial`, `Pick`, `Omit`).