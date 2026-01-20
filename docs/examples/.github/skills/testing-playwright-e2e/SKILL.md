---
name : testing-playwright-e2e
description : >
  Writes end-to-end tests with Playwright.
  To be used for verifying acceptance criteria through automated tests.
---
# Playwright Testing Skill

When writing end-to-end tests with Playwright, follow these guidelines to ensure consistency and best practices:

## Test Structure

Organize your tests in a clear and maintainable structure. A common structure includes:

### Test Files
- Place test files in a `tests/`  directory.
- Name test files with a `.spec.ts` or `.test.ts` suffix.

### Test Suites
- Use `describe` blocks to group related tests into suites.
- Each suite should focus on a specific feature or user flow.

### Test Cases
- Use `test` blocks to define individual test cases.
- Each test case should be independent and test a single aspect of the feature.

### Patterns

- Follow Arrange-Act-Assert (AAA) pattern for clarity:
  - **Arrange**: Set up the initial state and context.
  - **Act**: Perform the actions to be tested.
  - **Assert**: Verify the expected outcomes.

## Running Tests

- Use the Playwright Test Runner to execute tests.
- Run tests with the command: `npx playwright test`.
- Ensure server is running if tests depend on a backend service.
- Stop the server after tests complete to free up resources.

### When to stop the test 

- After all tests have been executed and passed successfully.
- If tests keep failing after multiple attempts and need debugging.
  