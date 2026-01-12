# Astro Bookings Rest API

## Product Overview

This is a demo project to be used in workshops and labs.
Not intended for production use.

AstroBookings is a fictitious space tourism company offering travel bookings.
Requires management of rockets, launches and passenger bookings.
This repository contains a REST API for managing these resources.

## Technical Implementation

- A REST API built with Node/Express written in TypeScript.
- Storage will be implemented using in-memory data structures for simplicity.
- No need for authentication or authorization in this demo.
- Monitoring and logging with simple console outputs.

### Tech stack

- Language: **TypeScript 5.3.3**
- Framework: **Express 4.18.2**
- Database: **In-memory Map store (no persistence)**
- Security: **No security measures implemented**
- Testing: **Playwright 1.57.0 (E2E API tests)**
- Logging: **Console logging**
  
### Development Workflow 

```bash
# Install dependencies
npm install
# Copy environment defaults
cp .env.example .env
# Run in development mode (with auto-reload)
npm run dev
# Run in production mode
npm run build
npm start
# Run end-to-end tests with Playwright
npm test
```

### Folder Structure

```txt
.                         # Project root  
├── AGENTS.md             # This file with rules for AI agents
├── README.md             # Project documentation
├── CHANGELOG.md          # Release notes and changelog
├── package.json          # NPM package configuration
├── tsconfig.json         # TypeScript configuration
├── .gitignore            # Git ignore file
├── .env.example          # Environment variables example
├── docs/                 # Documentation for humans
├── specs/                # Spec-driven development files
├── src/                  # Source code
├── tests/                # Test files
├── .cursor/              # Cursor commands, rules and skills
├── .github/              # GitHub copilot prompts, instructions and skills
└── .vscode/              # Visual Studio Code configuration files
```

## Environment

- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness when needed to fit response limits.
- This is a windows environment using git bash terminal. 
