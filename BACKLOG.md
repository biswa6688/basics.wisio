# Backlog

Not scheduled yet, or planned beyond the current milestone. Ordered roughly by priority.

## v1 — core topic content (complete)

All six lessons shipped: Number Systems, How a Computer Works, Input & Output Devices, Operating Systems, Networking Basics, Internet Basics. See [FEATURES.md](./FEATURES.md).

## v2 — depth & interactivity

- [x] Quiz/checkpoint at the end of each topic — shipped via `Quiz`/`MultipleChoice`/`TrueFalse`
- [x] Progress tracking (localStorage) — mark topics as read/complete, shown on TopicsIndex — shipped via `useProgress`/`ProgressTracker`
- [ ] Interactive binary-to-decimal converter widget (type a number, see it convert live)
- [ ] Search across topics
- [ ] Dedicated glossary page indexing all `GlossaryTerm` definitions used across topics (terms themselves already ship inline, e.g. "byte" in Number Systems)

## Accessibility follow-ups

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for full context on each.

- [ ] Designed, consistent focus-visible treatment (currently browser-default)
- [ ] Bring interactive elements up to 44×44px minimum touch target size
- [ ] Add a skip-to-content link
- [ ] Run a formal contrast audit on dark-mode token pairs
- [ ] Add `axe-core` (or similar) automated accessibility checks to the test suite

## v3 — programming intro track

- [ ] New topic group: variables, loops, conditionals, algorithms (deferred from v1 scope per project decision)
- [ ] Basic data structures primer (array, list, stack/queue) with visual diagrams

## Nice to have / unscheduled

- [x] Unit/component tests — shipped via Vitest + React Testing Library (see [TESTING.md](./TESTING.md))
- [ ] Printable/exportable topic summaries
- [ ] i18n — content translation support
- [ ] CI pipeline (lint + build + typecheck + test on PR)
