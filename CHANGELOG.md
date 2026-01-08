# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-08

### Added

- **Rockets API** - Complete REST API endpoints for rocket management
  - `POST /rockets` - Create new rockets with validation
  - `GET /rockets` - Retrieve all rockets in the system
  - `GET /rockets/:id` - Retrieve specific rocket by ID
  
- **Rocket Management**
  - Rocket data model with id, name, range, and capacity properties
  - Comprehensive input validation for all rocket properties
  - Support for rocket ranges: suborbital, orbital, moon, mars
  - Passenger capacity management (1-10 seats)

- **Error Handling**
  - Proper HTTP status codes (201, 200, 400, 404, 500)
  - Descriptive error messages for invalid input
  - Graceful handling of edge cases

- **Testing**
  - End-to-end test suite with Playwright
  - Health endpoint verification
  - Complete coverage of all rockets endpoints and validation rules
  - All 8 acceptance criteria tests passing

- **Development Tools**
  - TypeScript support with strict configuration
  - Express.js framework for API development
  - In-memory data storage for simplicity
  - Development mode with auto-reload via Nodemon
  - Environment configuration with Dotenv

### Project Structure

- Modular route handlers for scalability
- Type-safe implementation with TypeScript
- Centralized validation logic
- Clean separation of concerns

---

[1.0.0]: https://github.com/your-org/astro-bookings/releases/tag/v1.0.0
