# Performance

## Current state (measured, `npm run build`)

| Asset | Size | Gzipped |
|---|---|---|
| `index.html` | ~1.4 KB | ~0.7 KB |
| CSS bundle | ~26 KB | ~5.7 KB |
| JS bundle | ~442 KB | ~139 KB |

Single JS bundle, no code splitting yet — the whole app (all 8 lessons, all illustrations) loads on first visit. For the current app size this is still fast in absolute terms (~139 KB gzipped is well within a good LCP budget on a typical connection), but it's the first thing to address if the app grows much further past its current 8 topics.

## What keeps it fast today

- **No backend, no data fetching** — nothing blocks render waiting on a network response beyond the initial HTML/JS/CSS/font.
- **No raster images** — every illustration is inline SVG (see [ARCHITECTURE.md](./ARCHITECTURE.md)), so there's no image-decode cost and nothing to optimize/responsive-size.
- **CSS is Tailwind utility classes**, compiled and purged at build time — no unused CSS shipped.
- **Framer Motion** is used for small, targeted animations (not full-page transitions or heavy physics), keeping its runtime cost low.

## Targets

Informal targets, not yet measured in a real environment (Lighthouse/WebPageTest run is a tracked gap):

- LCP < 2.5s
- INP < 200ms
- CLS < 0.1 (illustrations and cards have fixed/intrinsic sizing, so layout shift risk is low by construction)

## Backlog

- [ ] Route-based code splitting (`React.lazy` per topic page) once the bundle grows meaningfully — not yet worth the complexity at 8 topics sharing most of their component code
- [ ] Run and record an actual Lighthouse/WebPageTest pass rather than relying on the informal targets above
- [ ] Bundle analysis (`vite-bundle-visualizer` or similar) if the JS bundle grows significantly
- [ ] Self-host the Inter font (currently Google Fonts CDN) if a stricter no-third-party-request policy is ever needed
