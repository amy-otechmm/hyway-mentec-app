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

## Husky, Commitlint & commit workflow

This project uses Husky to run Git hooks and Commitlint to enforce commit message formatting (e.g., Conventional Commits). To make commits consistent and catch errors early, we provide an interactive commit helper via the `npm run commit` script (if configured in package.json).

Typical workflow
1. Stage changes:
```bash
git add .
```

2. Create a commit using the helper:
```bash
npm run commit
```
- This script typically runs an interactive tool (e.g., Commitizen/`cz-cli` or a custom script) that helps you compose a properly formatted commit message.
- After the interactive prompt finishes, the commit-msg hook (Husky) will run Commitlint to validate the message. If the message doesn't follow the required format, the commit will be rejected and you'll be prompted to fix it.

3. Update your branch with remote changes:
```bash
git pull
# or, if you prefer rebasing:
git pull --rebase
```
Resolve any merge conflicts if they occur.

4. Push your commit:
```bash
git push
```

Why use this flow?
- The `npm run commit` step helps ensure commit messages conform to the project's commit rules, which improves changelogs, automation and release tooling.
- Husky's pre-commit hook ensures code formatting and linting run before commits to keep the codebase consistent.

Tips and common issues
- Pre-commit hook fails (lint/format errors):
  - Fix issues reported by the linter/formatter or run:
    ```bash
    npm run lint -- --fix
    npm run format
    ```
  - Stage fixes and re-run `npm run commit`.

- Commit-msg hook rejects the commit (invalid message):
  - Re-run `npm run commit` and follow the interactive prompts to produce a compliant message.
  - If you already committed a message and need to change it:
    ```bash
    git commit --amend
    ```
    Then update the message and the commit-msg hook will validate the amended message. If you've already pushed the broken commit, you'll need to force-push with care:
    ```bash
    git push --force-with-lease
    ```

- If `npm run commit` isn't available or you want to commit directly:
  - Make sure your commit message follows the project's commit format (check `commitlint.config.js`). Example:
    ```
    feat(auth): add OAuth2 login button
    fix(ui): correct button spacing
    chore(deps): bump next from 14.0.0 to 14.0.1
    ```

- Running `git pull` before `git push` reduces the chance of needing to resolve conflicts after pushing. Some teams prefer `git pull --rebase` to keep a linear history.

Optional: Example package.json entries (if you want to add them)
- These are examples; adapt to the actual tools you use:
```json
{
  "scripts": {
    "commit": "cz",
    "lint": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write ."
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```
- If you add Commitizen (`cz`) and `cz-conventional-changelog`, `npm run commit` will start an interactive prompt that outputs a Conventional Commit message.

## Commit rules & hooks
This repo uses Husky and Commitlint:
- pre-commit hooks run formatting/linting to keep code consistent.
- commit-msg hook enforces conventional commit style (or your chosen format).
Follow the commit message format outlined in `commitlint.config.js`.

Example conventional commit:
```
feat(login): add OAuth2 login button
```
`
