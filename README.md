This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

## About
Short project description: what the app does and its high-level purpose. Replace this paragraph with a one- or two-line summary explaining the goal of the application.

## Tech stack
- Next.js (App Router)
- TypeScript
- Node.js / npm
- Husky (git hooks)
- Commitlint (commit message linting)
- (Add any additional libraries used by your app, e.g., Zustand/Redux, Tailwind, etc.)

## Repository structure
High-level overview of important files and folders:

- .env.local — local environment variables (do not commit)
- .env.local.example — example environment variables (copy to `.env.local`)
- .gitignore — files and folders ignored by Git
- commitlint.config.js — commit message linting rules
- .husky/ — git hooks (pre-commit, commit-msg, etc.)
  - commit-msg — enforces commit message format
  - pre-commit — runs checks before committing
- next.config.ts — Next.js configuration
- package.json — project metadata, dependencies, and npm scripts
- tsconfig.json — TypeScript configuration
- public/ — static assets served at the root (favicons, images, etc.)
  - public/images/ — additional static images
- src/ — application source code
  - src/app — Next.js app routes and pages (entry points)
  - src/components — reusable UI components
  - src/layout — application layout (header, footer, global wrappers)
  - src/stores — application state management

(Adjust the above list to reflect additional folders or files that exist in your project.)

## Getting started

Prerequisites:
- Node.js (>= 20 recommended) and npm installed
- (Optional) pnpm or yarn if you prefer

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm start
```

(Replace the above commands with exact scripts from `package.json` if they differ.)

## Environment variables
Copy the example:
```bash
cp .env.local.example .env.local
```
Then fill in required values in `.env.local` (API keys, endpoints, feature flags, etc.). Do not commit `.env.local`.

## Available scripts
List the key scripts from your package.json here (example):
```bash
npm run dev      # start dev server
npm run build    # build for production
npm run start    # start production server
npm run lint     # run linter
npm run format   # run code formatter
npm test         # run tests
```
Update this section to match exact scripts in your package.json.

## Commit rules & hooks
This repo uses Husky and Commitlint:
- pre-commit hooks run formatting/linting to keep code consistent.
- commit-msg hook enforces conventional commit style (or your chosen format).
Follow the commit message format outlined in `commitlint.config.js`.

Example conventional commit:
```
feat(login): add OAuth2 login button
`
