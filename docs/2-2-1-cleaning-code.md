---
description: Best practices for clean and maintainable code in TypeScript
applyTo: '**/*.ts'
---

# Clean code best practices 

## Variables and naming
- Name variables and functions descriptively to enhance readability.
- Use named constants instead of magic numbers or strings.
## Functions and complexity
- Keep functions small and focused on a single task.
- Avoid nested structures to reduce complexity.
## Classes and modules
- Avoid primitive obsession by defining clear types and interfaces.
- Keep dependencies to a minimum and use adapter pattern to decouple modules.
- Maintain a shared module (folder...) for common utilities and types.
## Error handling and comments
- Handle errors gracefully with try-catch blocks and meaningful messages.
- Write comments to explain the "why" behind complex logic, not the "what".
## General principles
- Keep it simple and avoid over-engineering.
- Try to keep it DRY (Don't Repeat Yourself) by reusing code where applicable.

## TypeScript specific guidelines

- Use ES modules (`import`/`export`) instead of CommonJS.
- Use strict typing and avoid using `any`.
- Declare `types` for data structures and `interfaces` for class contracts.
- Avoid `null` and `undefined` where possible; prefer optional properties.
- Leverage TypeScript's utility types (e.g., `Partial`, `Pick`, `Omit`).
