---
name: coding-express-api
description: >
  Writes API endpoints with Express.js.
  To be used for implement RESTful API endpoints.
--- 

# Writing an Express API

When writing an Express.js API, follow these guidelines to ensure consistency and best practices:

## Project Structure

Write the simplest structure that meets the requirements. A common structure includes:

### Routes
- Organize routes in separate files under a `routes/` directory.
- Create a controller for each resource 
- Define and export an Express Router
- Follow [controller pattern](./controller.ts).
  
### Stores

- Use a `store/` directory for data access logic.
- Define interfaces for stores
- Implement in-memory stores for data persistence.
- Use factory functions to create store instances.

### Types

- Define shared types in a `types/` directory.
- Create types for requests and domain models.
  
### Utils

- Place validation and helper functions in a `utils/` directory.
- Before writing non-business logic code, check if a utility function already exists.
