# SEO

## Why it matters here

People search for "what is RAM," "what is DNS," "how does binary work," etc. — exactly what Wisio's lessons answer. SEO is relevant even for a personal/portfolio-scale project because organic search is the natural discovery path for this content.

## In place today

- **Per-page `<title>`** via `useDocumentTitle` — home, topics index, and each of the 6 lessons have a distinct, descriptive title (e.g. "Number Systems — Wisio").
- **Semantic heading structure**: one `<h1>` per page, `<h2>` per section — see [ACCESSIBILITY.md](./ACCESSIBILITY.md) (accessibility and SEO overlap heavily here).
- **Descriptive link text**: nav and card links use real phrases ("Explore," topic titles), not "click here."
- **A single global meta description** in `index.html`.

## Known limitation: this is a client-rendered SPA

Wisio has no server-side rendering. That means:

- **Per-route `<meta name="description">` and Open Graph tags are not currently implemented** — only the global one in `index.html` applies to every route. A crawler that doesn't execute JavaScript sees the same description for every page.
- No per-page canonical URLs, no structured data (JSON-LD), no sitemap.xml or robots.txt yet.

Modern search crawlers (Googlebot) do execute JavaScript and will see the per-page `<title>` set by `useDocumentTitle`, so titles are not a wasted effort — but description/OG tags need a different mechanism (e.g. `react-helmet-async`, or moving to a framework with SSR/SSG like Next.js/Astro) to work reliably per-route. That's a real architectural tradeoff, not an oversight — see [ARCHITECTURE.md](./ARCHITECTURE.md) for why Vite SPA was chosen over Next.js for v1.

## Backlog

- [ ] Per-route meta description + Open Graph tags (needs a head-management library, since there's no SSR)
- [ ] `sitemap.xml` and `robots.txt`
- [ ] JSON-LD structured data (`Article`/`LearningResource` schema) per lesson
- [ ] Revisit SSR/SSG (Next.js or Astro) if organic search becomes a primary growth channel — the content model (`src/data/topics.ts` + per-slug page components) was deliberately kept decoupled from routing/rendering specifics so this migration wouldn't require a content rewrite, only a rendering-layer change
