# Project Memory

Context and decisions that aren't obvious from the code alone. This is a project knowledge base, not a code reference — keep entries short and update them as decisions change.

## Product decisions

- **Name & tagline**: "Wisio" (from "wisdom"). Tagline: **"Wisio — Wisdom, Byte by Byte."** Chosen to tie the brand meaning to the computer-fundamentals subject matter (bits/bytes wordplay).
- **Primary color**: green (`#16a34a` / Tailwind-style 500 shade), chosen per explicit requirement. Full scale defined in `src/index.css` as `--color-primary-50..950`.
- **Content scope (v1)**: "Core basics" — Number Systems, How a Computer Works, Input & Output Devices, Operating Systems, Networking Basics, Internet Basics. A programming-intro track (variables/loops/data structures) was explicitly deferred to v3 in [BACKLOG.md](./BACKLOG.md), not dropped.
- **Illustration style**: 100% custom inline SVG (+ Framer Motion for motion), not stock images or icon-font illustrations. Reason: illustrations must always match the current theme's colors exactly, which is only reliably achievable when the SVG is theme-aware in code rather than a pre-rendered image asset.
- **Brand icon**: `public/wisio.svg` was copied from an existing brand asset (`owlia.svg`, an owl mascot) per explicit instruction, kept as-is rather than recolored to green — it's the fixed logo, not a themed illustration.
- **Visual redesign (2026-08-30)**: the initial v1 build (emoji icons, solid pastel-fill illustration blocks, pill-shaped nav/buttons, `rounded-2xl`/`rounded-full` everywhere, letter-in-colored-circle topic badges) read as a children's-education app, not a professional product. User explicitly called it "childish" and asked for a complete redesign toward "professional, educational, funplay like" (Duolingo/Brilliant register — polished with personality, not literal emoji/candy). Fixed by: replacing all emoji UI icons with `lucide-react` line icons (`src/data/topicIcons.tsx` centralizes topic→icon mapping), switching illustrations from solid-saturated fill blocks to outlined/tinted diagram style (`color-mix` accents), tightening border-radius from 2xl/full to lg/xl, replacing the pill-shaped active-nav-item and glowing CTA button with an underline nav indicator and a flat `rounded-lg` button, and loading real Inter typography instead of relying on the browser's fallback sans (which rendered heading weight as bubbly). The owl mascot logo was explicitly kept unchanged by user decision even though it's the most "playful" single element — see [CLAUDE.md](./CLAUDE.md) rule 7. This is now a locked design direction — see "Visual language" in [ARCHITECTURE.md](./ARCHITECTURE.md); don't reintroduce emoji-as-icon or solid pastel fills.

## Process decisions

- **Git remote**: `https://github.com/biswa6688/basics.wisio.git`. Repo was empty at project start (verified via `git ls-remote` returning no refs) — first push is a plain push, not a force-push.
- **Feature-at-a-time workflow**: explicit user requirement — commit + push prior valid work before starting each new feature, and update docs (FEATURES/TASKS/CHANGELOG/BACKLOG/ARCHITECTURE as relevant) in the same commit as the feature. Encoded in [CLAUDE.md](./CLAUDE.md) / [AGENTS.md](./AGENTS.md) so it persists across sessions.
- **Topic content is additive, not routed statically per-file**: `TopicPage` resolves content via a `slug -> component` registry (`src/pages/topics/registry.tsx`) so all 6 topics exist in navigation from the first commit, with unbuild lessons showing a "coming soon" state, rather than 404s or missing nav items appearing feature-by-feature.

## Open questions / things to revisit

- v1 (all 6 core-basics topics) shipped 2026-08-30. No interactivity (converters, quizzes) yet — pure illustrated explanation. Next decision point: pick a v2 item from BACKLOG.md (interactive converter widget, quizzes, or progress tracking).
- No automated tests yet (unscheduled in BACKLOG) — verification is manual `npm run build` + browser check per feature.
