# Rockets Implementation Plan

## Overview

This plan outlines the steps to implement the Rockets management API endpoints as specified in `rockets.spec.md`. The implementation will provide functionality to create and retrieve rocket information.

## Tasks

### Task 1: Create Rocket Data Model

**Description**: Define the Rocket data structure and establish in-memory storage.

**Implementation Notes**:
- Create a Rocket type/interface with properties: id, name, range, capacity
- Initialize an in-memory array to store rocket instances
- Implement ID generation logic (max count + 1)

**Acceptance Criteria Mapping**: Foundation for all acceptance criteria

---

### Task 2: Implement Input Validation

**Description**: Create validation functions for rocket properties.

**Implementation Notes**:
- Validate `name`: must be a string between 3 and 50 characters
- Validate `range`: must be one of: "suborbital", "orbital", "moon", "mars"
- Validate `capacity`: must be an integer between 1 and 10
- Return descriptive error messages for validation failures

**Acceptance Criteria Mapping**: 
- IF creating a rocket with invalid data, THEN the system SHALL return `400 Bad Request`

---

### Task 3: Implement POST /rockets Endpoint

**Description**: Create endpoint to add new rockets to the system.

**Implementation Notes**:
- Create route handler for POST /rockets
- Extract rocket data from request body (name, range, capacity)
- Validate input using validation functions from Task 2
- Generate unique ID for the rocket
- Store rocket in in-memory array
- Return 201 Created with the created rocket details
- Return 400 Bad Request if validation fails
- Handle unexpected errors with 500 Internal Server Error

**Acceptance Criteria Mapping**:
- WHEN creating a valid rocket, the system SHALL return `201 Created` with the created rocket details
- IF creating a rocket with invalid data, THEN the system SHALL return `400 Bad Request`

---

### Task 4: Implement GET /rockets Endpoint

**Description**: Create endpoint to retrieve all rockets.

**Implementation Notes**:
- Create route handler for GET /rockets
- Return all rockets from in-memory storage
- Return 200 OK with array of rockets (empty array if no rockets exist)
- Handle unexpected errors with 500 Internal Server Error

**Acceptance Criteria Mapping**:
- WHEN retrieving all rockets, the system SHALL return `200 OK` with a list of rockets

---

### Task 5: Implement GET /rockets/:id Endpoint

**Description**: Create endpoint to retrieve a specific rocket by ID.

**Implementation Notes**:
- Create route handler for GET /rockets/:id
- Extract ID from URL parameters
- Parse ID as number
- Search for rocket with matching ID in storage
- Return 200 OK with rocket details if found
- Return 404 Not Found if rocket doesn't exist
- Handle unexpected errors with 500 Internal Server Error

**Acceptance Criteria Mapping**:
- IF retrieving an existing rocket by ID, THEN the system SHALL return `200 OK` with the rocket details
- IF retrieving a non-existing rocket by ID, THEN the system SHALL return `404 Not Found`

---

### Task 6: Register Rockets Routes

**Description**: Integrate rocket routes into the Express application.

**Implementation Notes**:
- Create rockets.js file in src/routes directory
- Export router with all rocket endpoints
- Import and mount rocket routes in app.js under /rockets path
- Ensure proper middleware configuration (JSON parsing)

**Acceptance Criteria Mapping**: Foundation for all acceptance criteria

---

### Task 7: Create End-to-End Tests

**Description**: Implement Playwright tests to verify all acceptance criteria.

**Implementation Notes**:
- Test POST /rockets with valid data (expect 201)
- Test POST /rockets with invalid data (expect 400)
- Test GET /rockets (expect 200 with array)
- Test GET /rockets/:id with existing ID (expect 200)
- Test GET /rockets/:id with non-existing ID (expect 404)
- Verify response structure and data types

**Acceptance Criteria Mapping**: All acceptance criteria

---

## Implementation Order

1. Task 1: Create Rocket Data Model
2. Task 2: Implement Input Validation
3. Task 3: Implement POST /rockets Endpoint
4. Task 4: Implement GET /rockets Endpoint
5. Task 5: Implement GET /rockets/:id Endpoint
6. Task 6: Register Rockets Routes
7. Task 7: Create End-to-End Tests

## Testing Strategy

- Run automated Playwright tests after Task 7
- Verify all acceptance criteria are met before considering implementation complete

## Risks and Considerations

- **In-memory storage**: Data will be lost on server restart (acceptable for demo)
- **Concurrent access**: No locking mechanism needed for single-threaded Node.js
- **ID generation**: Simple max+1 strategy sufficient for demo purposes
- **Validation edge cases**: Consider empty strings, null values, undefined properties
