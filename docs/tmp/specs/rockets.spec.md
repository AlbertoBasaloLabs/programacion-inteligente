# Rockets Spec

## Problem Description

- We need a way to manage rockets in our system. 
- Each rocket should have a unique ID, a name, a range, and a passenger capacity. 

### User Stories

- As a user, I want to **create a new rocket by providing its name, range, and capacity.**
- As a user, I want to **retrieve a list of all rockets in the system.**
- As a user, I want to **retrieve details of a specific rocket by its ID.**

## Solution Overview

### Endpoints

- `POST /rockets`: Create a new rocket.
- `GET /rockets`: Retrieve a list of all rockets.
- `GET /rockets/:id`: Retrieve details of a specific rocket by its ID.

### Model

- **Rocket**
  - `id` (number): Unique identifier for the rocket (max count + 1).
  - `name` (string): Name of the rocket (between 3 and 50 characters).
  - `range` (string): Range of the rocket ( "suborbital", "orbital", "moon" , "mars").
  - `capacity` (number): Passenger capacity (between 1 and 10 integers).

### Error Handling

- `200 OK` for successful retrieval and updates.
- `201 Created` upon successful creation of a rocket.
- `400 Bad Request` for invalid input data.
- `404 Not Found` if the rocket with the specified ID does not exist.
- `500 Internal Server Error` for unexpected server errors.

## Acceptance Criteria

- [ ] WHEN creating a valid rocket, the system SHALL return `201 Created` with the created rocket details.
- [ ] WHEN retrieving all rockets, the system SHALL return `200 OK` with a list of rockets
- [ ] IF retrieving an existing rocket by ID, THEN the system SHALL return `200 OK` with the rocket details.
- [ ] IF retrieving a non-existing rocket by ID, THEN the system SHALL return `404 Not Found`.
- [ ] IF creating a rocket with invalid data, THEN the system SHALL return `400 Bad Request`.