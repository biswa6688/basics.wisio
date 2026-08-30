# Contributing

## Setup

```bash
npm install
npm run dev
```

## Before you start a change

1. `git status` — make sure you're starting from a clean tree. Commit and push any prior work first (see the Git workflow below).
2. Read [ARCHITECTURE.md](./ARCHITECTURE.md) and [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) if you're touching lesson content, or [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) if you're touching UI.
3. Check whether a component that does what you need already exists in `src/components/content/` or `src/components/education/` before writing a new one.

## While you work

```bash
npm run build   # type-check + production build — must pass
npm test        # Vitest — must pass
npm run lint    # oxlint
```

Check both light and dark theme, and desktop and mobile widths, for any UI change.

## Before you finish

A change isn't done until:

- [ ] `npm run build`, `npm test`, and `npm run lint` all pass
- [ ] Light, dark, and system theme all look correct
- [ ] Relevant docs are updated in the same commit: [FEATURES.md](./FEATURES.md), [TASKS.md](./TASKS.md), [CHANGELOG.md](./CHANGELOG.md), and [BACKLOG.md](./BACKLOG.md)/[ARCHITECTURE.md](./ARCHITECTURE.md) if scope or structure changed
- [ ] Committed and pushed to `origin main`

## Git workflow

This project commits and pushes each feature individually — see [CLAUDE.md](../CLAUDE.md) rule 5. Don't batch multiple unrelated features into one commit, and don't start a new feature on top of a prior one's uncommitted work.

## Commit messages

Conventional-ish prefixes (`feat:`, `fix:`, `docs:`, `test:`, `chore:`), a one-line summary, and a short body explaining what changed and why when it's not obvious from the diff. See recent commits in `git log` for the established style.
