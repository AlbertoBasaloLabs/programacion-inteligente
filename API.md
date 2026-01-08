# API Scaffolding

This project scaffolds a REST API in Node using Express without defining endpoints yet.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment defaults:
   ```bash
   cp .env.example .env
   ```
3. Start in development mode (with reloads):
   ```bash
   npm run dev
   ```
4. Start in production mode:
   ```bash
   npm start
   ```
5. Run tests:
   ```bash
   npm test
   ```

## Next steps
- Add routes/controllers as needed; register them in `src/app.js`.
- Introduce a health endpoint when ready, then add Playwright e2e coverage.
