# Security

## Threat surface (small, by design)

Wisio is a static client-only SPA: no backend, no database, no authentication, no user accounts, no server-side secrets. The only "user data" is anonymous lesson-completion state in the visitor's own `localStorage` — it never leaves their browser, isn't sent anywhere, and identifies no one.

## What this means in practice

- **No API keys or secrets belong in this repository, ever.** Nothing in the app calls a third-party API that requires one. (An unrelated, optional Claude Code skill for generating marketing-style infographics does use a Gemini API key — that key lives in the skill's own `.env` outside this repo and is never referenced from app code. See [MEMORY.md](./MEMORY.md).)
- **No `dangerouslySetInnerHTML` or raw HTML injection** anywhere in the app — all content is authored as JSX/TSX, so there's no XSS surface from user-supplied content (there is no user-supplied content).
- **Dependencies**: kept to a deliberately short, mainstream list (React, React Router, Framer Motion, Tailwind, Lucide, Vitest/RTL for dev). No dependency is added without a concrete reason — see [CLAUDE.md](../CLAUDE.md) rule 1.
- **External requests at runtime**: only the Google Fonts stylesheet/font files (`index.html`). No analytics, no tracking scripts, no third-party embeds.

## Practices

- Review `npm audit` output when adding or updating dependencies; address anything above low severity before merging.
- Never commit `.env` files or credentials — none currently exist in this repo, and none should be added without discussion.
- Keep the dependency list short deliberately; each new package is a new supply-chain surface (see the caution applied before installing the infographic-generation skill, in [MEMORY.md](./MEMORY.md)).

## Reporting

This is a personal/small-team educational project with no user data at risk. If a vulnerability is found in a dependency, open an issue or PR bumping the version; there's no formal disclosure process beyond that at this project's current size.
