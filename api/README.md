# TypeScript Express REST API

Minimal scaffold for a REST API using Express and TypeScript with linting, formatting, and testing.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Copy environment template:
   ```sh
   cp .env.example .env
   ```
   Adjust `PORT` if needed.

## Scripts

- `npm run dev` - Start in watch mode with `ts-node-dev`.
- `npm run build` - Compile TypeScript to `dist`.
- `npm start` - Run compiled app from `dist`.
- `npm test` - Run Jest tests.
- `npm run test:watch` - Jest watch mode.
- `npm run lint` - Lint with ESLint.
- `npm run format` - Format with Prettier.

## Project structure

- `src/config/env.ts` - Loads environment variables.
- `src/app.ts` - Express app wiring.
- `src/routes` - API routes (`/api/health`).
- `src/middleware/errorHandler.ts` - Basic error handler.
- `tests/` - Jest + Supertest tests.

## Running

- Development: `npm run dev`
- Production build then start: `npm run build && npm start`
- Health check: `GET /api/health` should return `{ "status": "ok" }`.
