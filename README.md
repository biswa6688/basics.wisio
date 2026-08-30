# Wisio — Wisdom, Byte by Byte

Wisio is an illustrated, interactive web app that teaches computer fundamentals through rich infographics rather than walls of text.

- **Live docs**: see [ARCHITECTURE.md](./ARCHITECTURE.md), [FEATURES.md](./FEATURES.md), [BACKLOG.md](./BACKLOG.md), [TASKS.md](./TASKS.md)
- **Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router + Framer Motion
- **Theme**: Light / Dark / System, primary brand color green

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  theme/            # ThemeProvider (light/dark/system)
  components/
    layout/         # Navbar, Footer, Layout, ThemeToggle
    content/         # TopicLayout, InfoCard, StepFlow, TopicCard — reusable content building blocks
    illustrations/  # Custom SVG/animated illustrations per concept
  data/             # topics.ts — topic metadata (single source of truth for nav + cards)
  pages/            # Home, TopicsIndex, TopicPage
  pages/topics/     # One file per topic lesson + registry.tsx mapping slug -> component
```

## Content workflow

Each topic lesson is a self-contained feature: a page under `src/pages/topics/`, registered in `src/pages/topics/registry.tsx`, typically backed by one or more new components in `src/components/illustrations/`. See [FEATURES.md](./FEATURES.md) for what exists today and [BACKLOG.md](./BACKLOG.md) for what's planned.

Per project convention (see [CLAUDE.md](./CLAUDE.md)), every new feature commit updates the relevant docs (FEATURES, TASKS, CHANGELOG) in the same commit, and prior valid work is committed and pushed before starting the next feature.

## Brand

Logo/favicon: `public/wisio.svg`. Primary color: green (`--color-primary-500 = #16a34a`), defined in `src/index.css`.
