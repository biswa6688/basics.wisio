# Testing

## Stack

Vitest + React Testing Library + jsdom. Config lives in the `test` block of `vite.config.ts` (shares the Vite/Tailwind/React setup, no separate config file). Global setup (`src/test/setup.ts`) loads `@testing-library/jest-dom` matchers and polyfills `window.matchMedia`, which jsdom doesn't implement and `ThemeProvider` depends on.

## Running tests

```bash
npm test          # run once (CI mode)
npm run test:watch  # watch mode for local development
```

## Convention

Tests are colocated with the source file they test: `Thing.tsx` → `Thing.test.tsx` in the same directory. No separate `__tests__/` tree — this keeps a test next to the code it covers and makes it obvious when a component has no coverage.

## What's covered today

| Area | File | What it verifies |
|---|---|---|
| Theme persistence | `src/components/layout/ThemeToggle.test.tsx` | Default preference, switching applies the `dark` class and persists to `localStorage` |
| Progress tracking | `src/hooks/useProgress.test.ts` | Mark complete/incomplete, no duplicate entries, `localStorage` persistence |
| Document title | `src/hooks/useDocumentTitle.test.tsx` | Sets on mount, updates on prop change, restores previous title on unmount |
| Binary math | `src/components/illustrations/BitGrid.test.tsx` | Correct bit pattern for known decimal values (0, 202, 255) |
| Quiz interaction | `src/components/education/MultipleChoice.test.tsx` | No feedback before answering, explanation appears after, options disable after answering |

This is deliberately not exhaustive coverage of every component — it targets the pieces with actual logic (state, persistence, math) rather than testing that static JSX renders, which the TypeScript compiler and a build already guarantee.

## What to test when adding a feature

- Any new hook with state or a side effect (localStorage, timers, subscriptions)
- Any component with branching logic based on user interaction (like `MultipleChoice`)
- Any pure function doing a calculation (like the bit math in `BitGrid`)

Skip tests for components that are pure presentation with no logic (e.g. `InfoCard`, `KeyTakeaways`) — a passing build and a visual check cover those.

## Gaps

- No E2E tests (Playwright/Cypress) — not yet justified at this app's size and lack of backend/auth flows
- No automated accessibility testing (`axe-core`) — see [ACCESSIBILITY.md](./ACCESSIBILITY.md)
- No CI pipeline running these on push/PR yet — see [BACKLOG.md](./BACKLOG.md)
