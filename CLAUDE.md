# CLAUDE.md

Project-specific instructions for Claude (or any coding agent) working in this repo. See also [AGENTS.md](./AGENTS.md) for the tool-agnostic version of the same rules.

## What this project is

Wisio — an illustrated React + TypeScript web app teaching computer fundamentals. Full context in [README.md](./README.md), [ARCHITECTURE.md](./ARCHITECTURE.md), [MEMORY.md](./MEMORY.md).

## Hard rules

1. **Stack is fixed**: React + TypeScript, Vite, Tailwind CSS v4, React Router, Framer Motion. Do not introduce a competing UI library (MUI, Chakra, etc.) or swap the build tool without an explicit user request.
2. **Theme**: must always support Light / Dark / System, primary brand color is green. Never hardcode a color that bypasses the `--color-*` tokens in `src/index.css` — new UI must read from those tokens (or `@theme` extensions of them) so it repaints correctly in both themes.
3. **Visual-first content**: every topic lesson must be built around diagrams/illustrations, not paragraphs of text. Reuse `src/components/content/` building blocks (`InfoCard`, `StepFlow`, `TopicLayout`) and add new `src/components/illustrations/*` components as needed. Any illustrative image/graphic must use the app's theme colors (the green primary scale + semantic tokens), not arbitrary colors.
4. **Git workflow — before creating any new feature**: commit and push all prior valid changes to `origin` (`https://github.com/biswa6688/basics.wisio.git`) first. Do not start a new feature on top of uncommitted work from the previous one.
5. **Docs stay current**: every feature commit must update the relevant docs in the same commit:
   - `FEATURES.md` — what shipped
   - `TASKS.md` — move the item from "Next up" to "Done"
   - `CHANGELOG.md` — add an entry
   - `BACKLOG.md` — remove/adjust if the feature changes planned scope
   - `ARCHITECTURE.md` — update if the change alters structure or introduces a new pattern
6. **Brand icon**: `public/wisio.svg` is the fixed logo/favicon. Don't replace it without an explicit request.

## Conventions

- One topic lesson = one feature = one commit (or small commit series) = one doc update pass = one push, in that order.
- Topic metadata lives only in `src/data/topics.ts`; topic content lives only in `src/pages/topics/<slug>.tsx`, registered in `src/pages/topics/registry.tsx`.
- Prefer composing existing `components/content/` primitives over new one-off markup.
- Run `npm run build` (type-check + build) before considering a feature done.
