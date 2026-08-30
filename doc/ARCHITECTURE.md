# Architecture

## Overview

Wisio is a client-only single-page application. There is no backend — all content is static data compiled into the bundle. This keeps the app simple to deploy (any static host) and fast (no network round-trips for content).

```
index.html
  → src/main.tsx        mounts React, wraps app in ThemeProvider + BrowserRouter
    → src/App.tsx        route table
      → src/components/layout/Layout.tsx   Navbar + <main> + Footer shell on every route
        → src/pages/*.tsx                  route-level pages
```

## Theming

`src/theme/ThemeProvider.tsx` implements a three-state preference: `light`, `dark`, `system`.

- Preference is persisted to `localStorage` under `wisio-theme-preference`.
- `system` resolves via `window.matchMedia('(prefers-color-scheme: dark)')` and updates live if the OS setting changes.
- The resolved theme is applied as a `dark` class on `<html>`. Tailwind v4's `@custom-variant dark (&:where(.dark, .dark *))` (in `src/index.css`) makes `dark:` utility variants respond to that class instead of the media query directly, so the in-app toggle can override the OS setting.
- An inline script in `index.html` (before React loads) reads the stored preference and applies the `dark` class immediately, avoiding a flash of the wrong theme on load.
- All colors are CSS custom properties (`--color-bg`, `--color-text`, `--color-primary-*`, etc.) defined once in `:root` and overridden in `.dark`, then re-exposed to Tailwind via `@theme inline`. Components should reference the semantic tokens (`bg-bg`, `text-text-muted`, `border-border`) rather than raw Tailwind palette colors, so they adapt automatically across themes.

## Content model

`src/data/topics.ts` is the single source of truth for topic metadata (slug, title, tagline, description, accent color). It drives:

- The home page topic preview grid
- `/topics` — the full topic index
- `/topics/:slug` routing and the `TopicLayout` header

Each topic's actual lesson content lives in `src/pages/topics/<slug>.tsx` and is registered by slug in `src/pages/topics/registry.tsx` (`topicPages` map). `TopicPage` looks up the slug from the URL, resolves it against `topics.ts` (metadata) and `registry.tsx` (content component), and renders a "coming soon" placeholder for any topic that has metadata but no registered content yet. This lets the full navigation and topic index exist from day one while lesson content is built incrementally, one feature/commit at a time.

## Component layers

- **`components/layout/`** — app chrome (Navbar, Footer, Layout, ThemeToggle). Not concept-specific.
- **`components/content/`** — generic, reusable building blocks for lesson content: `TopicLayout`/`Section` (page scaffold), `InfoCard` (icon + text card), `StepFlow` (numbered animated step sequence), `TopicCard` (grid preview card). New topics should compose these before reaching for one-off markup.
- **`components/illustrations/`** — concept-specific SVG/animated illustrations (e.g. `HeroComputer`). Each illustration is a self-contained component using inline SVG plus Framer Motion for subtle motion, styled with the theme's CSS variables so it repaints correctly in light/dark mode.
- **`components/education/`** — pedagogical primitives layered on top of `content/`: semantic callouts (`DidYouKnow`, `ImportantNote`, `Warning`, `RealWorldExample` — all thin wrappers over one shared `Callout`, not duplicated implementations), `KeyTakeaways`, `DefinitionCard`, `Comparison`, `Timeline`, `AnatomyDiagram`, `GlossaryTerm`, an interactive quiz kit (`MultipleChoice`, `TrueFalse`, `Quiz`, `AnswerReveal`), `FlashCard`, and navigation/progress pieces (`RelatedTopics`, `LearningPath`, `ProgressTracker`'s `MarkCompleteButton`/`ProgressSummary`, backed by `src/hooks/useProgress.ts`). `LearningPath`, `RelatedTopics`, and `MarkCompleteButton` are wired into `TopicLayout` itself, so every lesson gets them automatically — no per-topic plumbing required. A `LessonHero`/`ProcessDiagram`/`InteractiveDiagram` were considered and intentionally *not* built as separate components: `TopicLayout`'s header already is the lesson hero, `StepFlow` already is the generic process diagram, and "interactive diagram" has no generic shape worth abstracting — each interactive illustration (`BitGrid`, `NetworkMap`, `CpuCycle`) is bespoke by nature.

## Visual language

Wisio reads as a technical/educational product (Duolingo/Brilliant register), not a children's app:

- **Icons**: `lucide-react` line icons only. No emoji as UI icons anywhere in the app — emoji read as informal/childish at UI scale. Per-topic icons are centralized in `src/data/topicIcons.tsx` (slug → `LucideIcon`).
- **Color**: green is the accent, not the dominant fill. Illustrations use outlined/bordered shapes with a tinted (not solid-saturated) accent, e.g. `color-mix(in srgb, ${accent} 14%, transparent)` for icon-badge backgrounds, rather than solid pastel blocks.
- **Radius**: `rounded-lg`/`rounded-xl` (8–12px) across cards, buttons, and badges — not `rounded-2xl`/`rounded-full`, which reads as bubbly at this scale. Pills are reserved for the theme toggle and small eyebrow badges, a standard SaaS pattern.
- **Typography**: Inter, loaded via Google Fonts in `index.html`, at `font-bold` (700) rather than `font-extrabold` (800) for headings.

## Why these choices

- **Vite** — fast dev/build for a static SPA, no need for Next.js SSR/routing since content has no auth or per-request data.
- **Tailwind v4 (`@tailwindcss/vite`)** — CSS-first config (`@theme`) keeps the green brand palette and dark-mode variant defined in one CSS file instead of a JS config, and ships zero-runtime utility classes.
- **Inline SVG illustrations over image assets** — infographics need to reflow, recolor per theme, and animate; SVG-in-JSX gives full control without asset pipeline overhead, satisfying the "images must match the app color theme" requirement structurally rather than by hand-tuning exported images per theme.
- **Framer Motion** — declarative, scroll-triggered (`whileInView`) animation for step flows and illustrations, used sparingly for polish rather than as a core dependency of any logic.
