# Astro Bookings Rest API

## Product Overview

This is a demo project to be used in workshops and labs, not intended for production use.
AstroBookings is a fictitious space tourism company that offer travel bookings to space destinations.
To do so, needs a REST API to allows the management of rockets, launches and passenger bookings.

## Technical Implementation

- A REST API built with Express.js and TypeScript.
- Storage will be implemented using in-memory data structures for simplicity.
- No need for authentication or authorization in this demo.
- Monitoring and logging with simple console outputs.

### Tech stack

- **Language:** `Typescript` V5+
- **Runtime:** `Node.js` 18+
- **Framework:** `Express`  V4+
- **Testing:** `Playwright`  V1.35+
- **Tools:** 
  - `Nodemon`, 
  - `Dotenv`
  
### Development Workflow 

```bash
# Install dependencies
npm install
# Copy environment defaults
cp .env.example .env
# Run in development mode (with auto-reload)
npm run dev
# Run in production mode
npm start
# Run end-to-end tests with Playwright
npm test
```

### Folder Structure

```txt
.
├── AGENTS.md             # This file with rules for AI agents
├── README.md             # Project documentation
├── CHANGELOG.md          # Release notes and changelog
├── .gitignore            # Git ignore file
├── package.json          # NPM package configuration
├── .env.example          # Environment variables example
├── src/                  # Source code
├── tests/                # Test files
├── specs/                # Specification documents for AI-driven development
├── docs/                 # Documentation for humans
├── .github/              # GitHub copilot prompts and instructions
└── .vscode/              # Visual Studio Code configuration files
```

## Rules

- Code and documentation must be in English.
- Chat responses must be extremely concise in the language of the user prompt.
- Follow standard best practices such:
  - EARS requirements format for specifications:
  - User stories (AS A..., I WANT TO..., SO THAT...)
  - Conventional commits, change logs and versioning
- This is a windows environment using git bash terminal. 
