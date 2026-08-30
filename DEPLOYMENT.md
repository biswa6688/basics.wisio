# Deployment

Wisio is a static single-page app (no backend, no server-side rendering). Any static host works.

## Build

```bash
npm install
npm run build
```

Output goes to `dist/`. Serve it as static files with SPA fallback (all unknown paths → `index.html`) since routing is client-side (`react-router-dom` with `BrowserRouter`).

## Recommended hosts

- **Vercel** — zero-config for Vite; set build command `npm run build`, output directory `dist`.
- **Netlify** — same build/output settings; add a `_redirects` file with `/* /index.html 200` for SPA fallback if not auto-detected.
- **GitHub Pages** — requires a base path if not served from the domain root; set `base` in `vite.config.ts` accordingly and add a `404.html` copy of `index.html` for SPA fallback.

## Environment

No environment variables or secrets are required — the app has no backend calls.

## Checklist before deploying

- [ ] `npm run build` succeeds with no type errors
- [ ] `npm run preview` shows the production build correctly, including favicon and both themes
- [ ] `CHANGELOG.md` updated for the release
