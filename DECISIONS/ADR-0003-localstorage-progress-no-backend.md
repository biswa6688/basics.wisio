# ADR-0003: Progress tracking via `localStorage`, no backend/accounts

**Status**: Accepted (2026-08-30)

## Context

The educational-component system needed a way to track which lessons a learner has completed, for `ProgressSummary` and `MarkCompleteButton`.

## Decision

Store completion state client-side in `localStorage` (`useProgress` hook), keyed per-browser. No user accounts, no backend, no sync across devices.

## Rationale

- Consistent with [ADR-0001](./ADR-0001-vite-spa-over-ssr.md) — the app has no backend at all, and adding one solely for progress state would be a large architectural addition for a small feature.
- No sign-up friction for learners; the app stays zero-account, zero-PII, which also keeps [SECURITY.md](../SECURITY.md)'s threat surface minimal.
- Matches the app's current scale: a handful of static lessons, not a multi-user platform (yet).

## Consequences

- Progress doesn't sync across devices or browsers, and clearing browser data resets it. This is an accepted limitation, not a bug.
- If accounts/sync are ever needed (see BACKLOG v2+), `useProgress`'s interface (`completed`, `isComplete`, `markComplete`, `markIncomplete`, `toggle`) is the seam to swap the storage backend behind — components consuming it (`ProgressTracker`, `MarkCompleteButton`) don't need to change.
