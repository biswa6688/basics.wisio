# ADR-0002: `lucide-react` line icons over emoji, tinted diagrams over solid pastel fills

**Status**: Accepted (2026-08-30), supersedes the original v1 visual approach

## Context

The initial build (all 6 topics, theme system, app shell) used emoji as UI icons and solid-saturated pastel fill blocks in illustrations (`OsLayers`, `MemoryHierarchy`). The user reviewed the live app and explicitly called it "childish," asking for a complete redesign toward "professional, educational, funplay like" (Duolingo/Brilliant register).

## Decision

- Replace all emoji-as-icon usage with `lucide-react` line icons, sized and stroked consistently (`h-4 w-4`/`h-5 w-5`, `strokeWidth={1.75}`).
- Replace solid pastel-fill illustration blocks with outlined shapes + `color-mix`-tinted accent backgrounds.
- Tighten border-radius from `rounded-2xl`/`rounded-full` to `rounded-lg`/`rounded-xl` across cards, buttons, badges.
- Replace the pill-shaped active-nav-item and glowing CTA button with an underline nav indicator and flat buttons.
- Load real Inter typography instead of relying on the browser's fallback sans.

## Rationale

Emoji render inconsistently across platforms, carry informal/casual connotations at UI-icon scale, and can't be recolored or stroke-weighted to match a design system. Solid pastel fills read as a children's-app convention. None of this was a deliberate design choice in the first pass — it was an unexamined default that, once actually viewed in a browser, read as unintentionally juvenile.

## Consequences

- Every new UI icon must come from `lucide-react` — see [CLAUDE.md](../../CLAUDE.md) rule 3 and [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md).
- The owl mascot logo (`public/wisio.svg`) was explicitly *not* changed as part of this decision — the user chose to keep it as-is despite it being the most "playful" single element, on the reasoning that the rest of the UI's register would compensate. This is a deliberate, revisitable choice, not an oversight.
