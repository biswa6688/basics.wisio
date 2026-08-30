# Wisio — Learn the Basics. Build Your Wisdom.

Wisio is an illustrated, interactive web app that teaches computer fundamentals through rich infographics rather than walls of text.

- **Stack**: React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router + Framer Motion + Vitest
- **Theme**: Light / Dark / System, primary brand color green

## Documentation

| Doc | Covers |
|---|---|
| [ARCHITECTURE.md](./doc/ARCHITECTURE.md) | How the app is structured, theming, content model, visual language |
| [DESIGN_SYSTEM.md](./doc/DESIGN_SYSTEM.md) | Color/typography/spacing/radius/motion/icon tokens |
| [CONTENT_GUIDELINES.md](./doc/CONTENT_GUIDELINES.md) | How to write a lesson, which component to use when |
| [ILLUSTRATION_GUIDELINES.md](./doc/ILLUSTRATION_GUIDELINES.md) | In-lesson diagram style vs. marketing-infographic style |
| [ACCESSIBILITY.md](./doc/ACCESSIBILITY.md) | What's implemented, known gaps |
| [PERFORMANCE.md](./doc/PERFORMANCE.md) | Bundle sizes, targets, backlog |
| [TESTING.md](./doc/TESTING.md) | Vitest setup, coverage, conventions |
| [SECURITY.md](./doc/SECURITY.md) | Threat surface, dependency practices |
| [SEO.md](./doc/SEO.md) | What's in place, SPA limitations |
| [FEATURES.md](./doc/FEATURES.md) | What's shipped |
| [BACKLOG.md](./doc/BACKLOG.md) | What's planned |
| [TASKS.md](./doc/TASKS.md) | Active work |
| [CHANGELOG.md](./doc/CHANGELOG.md) | Version history |
| [MEMORY.md](./doc/MEMORY.md) | Decisions and context not obvious from code |
| [DEPLOYMENT.md](./doc/DEPLOYMENT.md) | How to ship it |
| [CONTRIBUTING.md](./doc/CONTRIBUTING.md) | Contributor workflow |
| [CLAUDE.md](./CLAUDE.md) / [AGENTS.md](./AGENTS.md) | Hard rules for any coding agent working in this repo |
| [DECISIONS/](./doc/DECISIONS/) | ADRs for significant architectural/design decisions |

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm test          # run the test suite
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  theme/            # ThemeProvider (light/dark/system)
  components/
    layout/         # Navbar, Footer, Layout, ThemeToggle
    content/        # TopicLayout, InfoCard, StepFlow, TopicCard — reusable content building blocks
    education/      # Pedagogical components — callouts, quiz kit, progress tracking, FlashCard, etc.
    illustrations/  # Custom SVG/animated illustrations per concept
  data/             # topics.ts + topicIcons.tsx — topic metadata and icon mapping
  hooks/            # useDocumentTitle, useProgress
  pages/            # Home, TopicsIndex, TopicPage
  pages/topics/     # One file per topic lesson + registry.tsx mapping slug -> component
```

## Content workflow

Each topic lesson is a self-contained feature: a page under `src/pages/topics/`, registered in `src/pages/topics/registry.tsx`. See [CONTENT_GUIDELINES.md](./doc/CONTENT_GUIDELINES.md) for how to structure one, [FEATURES.md](./doc/FEATURES.md) for what exists today, and [BACKLOG.md](./doc/BACKLOG.md) for what's planned.

Per project convention (see [CLAUDE.md](./CLAUDE.md)), every new feature commit updates the relevant docs in the same commit, and prior valid work is committed and pushed before starting the next feature.

## Brand

Logo/favicon: `public/wisio.svg`. Primary color: green (`--color-primary-500 = #16a34a`), defined in `src/index.css`.
