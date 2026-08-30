# Changelog

All notable changes to this project. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added

- Two new topics beyond the original v1 set, sourced from the same external reference doc: **History of Computers** (early calculating machines, the five computer generations) and **Types of Computers** (analog/digital/hybrid classification, supercomputer→mainframe→mini→micro scale, applications folded in as a closing section). App is now 8 topics total.
- `CpuCycle` (How a Computer Works) regenerated via the `infographic-creator` skill and hand-adapted (font stripped to Inter, neutral colors remapped to theme tokens, darkest accent quadrant lightened for dark-mode contrast) — first real application of the authoring-time diagram policy; no runtime dependency added
- Content merge from an external "Computer Fundamentals" reference document (English content only, rewritten in Wisio's own voice — not copied verbatim): a plain-language computer definition and a Hardware-vs-Software distinction in How a Computer Works, a Benefits/Limitations comparison in How a Computer Works, a concrete Input-Process-Output example in Input & Output Devices, and two missing devices (Scanner, Plotter) added to the device gallery
- Full documentation set: `DESIGN_SYSTEM.md`, `CONTENT_GUIDELINES.md`, `ILLUSTRATION_GUIDELINES.md`, `ACCESSIBILITY.md`, `PERFORMANCE.md`, `TESTING.md`, `SECURITY.md`, `SEO.md`, `CONTRIBUTING.md`, and an ADR log (`DECISIONS/ADR-0001` through `ADR-0003`) covering the SPA-over-SSR, icon-system, and progress-tracking decisions
- Test suite: Vitest + React Testing Library, covering `ThemeProvider`/`ThemeToggle` persistence and DOM effects, `useProgress`, `useDocumentTitle`, `BitGrid` bit-math correctness, and `MultipleChoice` interaction (15 tests). `npm test` / `npm run test:watch`.
- Educational component system: `DidYouKnow`, `ImportantNote`, `Warning`, `RealWorldExample` (shared `Callout` base), `KeyTakeaways`, `DefinitionCard`, `Comparison`, `Timeline`, `AnatomyDiagram`, `GlossaryTerm`, a quiz kit (`MultipleChoice`, `TrueFalse`, `Quiz`, `AnswerReveal`), `FlashCard`, `RelatedTopics`, and `LearningPath` (prev/next lesson nav with progress dots)
- Progress tracking: `useProgress` hook (localStorage-backed) plus `MarkCompleteButton` on every lesson and `ProgressSummary` on the topics index
- Every lesson now ends with a mark-complete control, related-topics suggestions, and prev/next navigation (via `TopicLayout`)
- Each of the 6 lessons gained at least one new visual/interactive element built from the above: glossary terms, quiz questions, flashcards, an SSD-vs-HDD comparison, a URL anatomy breakdown, and a brief internet history timeline
- Reduced-motion support: all Framer Motion illustrations respect `prefers-reduced-motion` via app-wide `MotionConfig`
- Per-page document titles (`useDocumentTitle` hook) for home, topics index, and each lesson
- Internet Basics lesson: animated click-to-page-load request journey, step-by-step breakdown, domain/DNS/HTTP explainer — completes the v1 core-basics topic set
- Networking Basics lesson: animated router/device network map, IP vs MAC explainer, packet routing overview
- Operating Systems lesson: app/OS/hardware layer diagram, process/file/memory overview, animated CPU time-slicing timeline
- Input & Output Devices lesson: animated Input → Process → Output flow diagram, grouped device gallery
- How a Computer Works lesson: CPU/memory/storage overview, animated fetch-decode-execute cycle, memory hierarchy pyramid
- Number Systems lesson: binary-as-hardware explainer, keystroke-to-bit-pattern step flow, animated place-value bit grid, binary/decimal/hex side-by-side comparison
- Initial project scaffold: Vite + React 19 + TypeScript
- Tailwind CSS v4 with green primary brand palette, light/dark/system theme tokens
- Theme system (`ThemeProvider`) with localStorage persistence and flash-free initial load
- App shell: Navbar (with theme toggle), Footer, responsive Layout
- Brand: `wisio.svg` logo/favicon, "Wisio — Wisdom, Byte by Byte" tagline
- Home page with animated hero illustration (`HeroComputer`) and topic preview grid
- Topics index page (`/topics`) and dynamic topic page shell (`/topics/:slug`)
- Reusable content components: `TopicLayout`, `Section`, `InfoCard`, `StepFlow`, `TopicCard`
- Topic metadata for all 6 v1 topics: Number Systems, How a Computer Works, Input & Output Devices, Operating Systems, Networking Basics, Internet Basics
- Project documentation: README, ARCHITECTURE, FEATURES, BACKLOG, TASKS, CLAUDE, AGENTS, DEPLOYMENT, MEMORY, CHANGELOG

### Changed

- Theme toggle replaced with a 3-icon segmented control (dark/system/light, always visible) instead of a button + dropdown menu
- Tagline updated app-wide from "Wisdom, Byte by Byte" to "Learn the Basics. Build Your Wisdom." (nav, footer, hero badge, document titles, poster, docs) per explicit user preference
- Documentation restructured: only `README.md`, `CLAUDE.md`, `AGENTS.md` remain at repo root; every other doc moved into `doc/` (with `git mv`, preserving history)
- Complete visual redesign from a "childish" first pass to a professional/educational register: replaced all emoji UI icons with `lucide-react` line icons, replaced solid pastel-fill illustration blocks with outlined/tinted diagram style, tightened border-radius across cards/buttons/badges, replaced pill-shaped nav/CTA with underline nav + flat buttons, and loaded real Inter typography. Owl mascot logo kept unchanged by explicit user decision.
