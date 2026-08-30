# ADR-0001: Vite SPA over a server-rendered framework

**Status**: Accepted (2026-08-30)

## Context

Wisio needed a React + TypeScript foundation. The realistic choices were a Vite-based client-only SPA, or a server-rendering framework (Next.js/Astro) with per-route rendering.

## Decision

Build as a Vite SPA with client-side routing (`react-router-dom`), no SSR/SSG.

## Rationale

- All content is static and known at build time — there's no per-request data that would benefit from server rendering.
- No backend, no auth, no user-specific server-side data — the app has nothing SSR would meaningfully speed up beyond first paint.
- Vite's dev/build loop is simpler and faster to iterate on for a content-heavy but logic-light app.

## Consequences

- Per-route SEO metadata (description, Open Graph) isn't straightforward without an extra library — see [SEO.md](../SEO.md). This was accepted knowingly, not missed.
- If organic search becomes a primary growth channel, a migration to SSR/SSG is a rendering-layer change, not a content rewrite — the content model (`src/data/topics.ts` + per-slug components) was kept decoupled from the router for exactly this reason.
