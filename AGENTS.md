# AGENTS.md

Tool-agnostic version of [CLAUDE.md](./CLAUDE.md) — same rules, for any AI coding agent (Claude, Copilot, Cursor, etc.) working in this repo.

## Project

Wisio — illustrated React + TypeScript app teaching computer fundamentals. See [README.md](./README.md) and [ARCHITECTURE.md](./doc/ARCHITECTURE.md) first.

Doc layout: only `README.md`, `CLAUDE.md`, `AGENTS.md` live at root — everything else is in `doc/` (`doc/ARCHITECTURE.md`, `doc/DECISIONS/`, etc.).

## Rules

1. Stack is fixed: React + TypeScript + Vite + Tailwind CSS v4 + React Router + Framer Motion. Don't swap it.
2. Theme must support Light / Dark / System with green as the primary brand color, via the CSS tokens in `src/index.css`. Never bypass them with hardcoded colors.
3. Visual register is professional/educational with personality — not a kids' app. Use `lucide-react` icons (never emoji) for UI icons, tinted accent backgrounds (not solid-saturated fills), and `rounded-lg`/`rounded-xl` (not `rounded-2xl`/`rounded-full`) for cards/buttons/badges. See "Visual language" in ARCHITECTURE.md.
4. Content is visual-first: build lessons from diagrams/illustrations using `src/components/content/` and `src/components/illustrations/`, not text blocks. Illustration colors must come from the app's theme palette.
5. Before starting any new feature, commit and push all prior valid work to `origin` (`https://github.com/biswa6688/basics.wisio.git`).
6. Every feature commit updates `FEATURES.md`, `TASKS.md`, `CHANGELOG.md`, and (if scope changed) `BACKLOG.md` / `ARCHITECTURE.md`, in the same commit as the code.
7. `public/wisio.svg` is the fixed brand logo/favicon — keep the owl mascot as-is; it's an explicit user decision, not an oversight.
8. Run `npm run build` before calling a feature done.

## Where things live

- Topic metadata: `src/data/topics.ts`
- Topic content: `src/pages/topics/<slug>.tsx`, registered in `src/pages/topics/registry.tsx`
- Reusable content primitives: `src/components/content/`
- Illustrations: `src/components/illustrations/`
- Theming: `src/theme/ThemeProvider.tsx`, `src/index.css`
