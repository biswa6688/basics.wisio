# AGENTS.md

Tool-agnostic version of [CLAUDE.md](./CLAUDE.md) — same rules, for any AI coding agent (Claude, Copilot, Cursor, etc.) working in this repo.

## Project

Wisio — illustrated React + TypeScript app teaching computer fundamentals. See [README.md](./README.md) and [ARCHITECTURE.md](./ARCHITECTURE.md) first.

## Rules

1. Stack is fixed: React + TypeScript + Vite + Tailwind CSS v4 + React Router + Framer Motion. Don't swap it.
2. Theme must support Light / Dark / System with green as the primary brand color, via the CSS tokens in `src/index.css`. Never bypass them with hardcoded colors.
3. Content is visual-first: build lessons from diagrams/illustrations using `src/components/content/` and `src/components/illustrations/`, not text blocks. Illustration colors must come from the app's theme palette.
4. Before starting any new feature, commit and push all prior valid work to `origin` (`https://github.com/biswa6688/basics.wisio.git`).
5. Every feature commit updates `FEATURES.md`, `TASKS.md`, `CHANGELOG.md`, and (if scope changed) `BACKLOG.md` / `ARCHITECTURE.md`, in the same commit as the code.
6. `public/wisio.svg` is the fixed brand logo/favicon.
7. Run `npm run build` before calling a feature done.

## Where things live

- Topic metadata: `src/data/topics.ts`
- Topic content: `src/pages/topics/<slug>.tsx`, registered in `src/pages/topics/registry.tsx`
- Reusable content primitives: `src/components/content/`
- Illustrations: `src/components/illustrations/`
- Theming: `src/theme/ThemeProvider.tsx`, `src/index.css`
