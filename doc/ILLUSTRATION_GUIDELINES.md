# Illustration Guidelines

Wisio has **two distinct illustration styles for two distinct jobs**. Don't mix them — a lesson diagram that looks like a marketing poster (or vice versa) reads as inconsistent.

## 1. In-lesson diagrams (what's built today)

Every illustration in `src/components/illustrations/` follows this style:

- **Outlined, not filled.** Shapes are `var(--color-surface)` fill with a colored stroke (the accent), not solid-saturated color blocks. See `CpuCycle.tsx`, `NetworkMap.tsx`, `MemoryHierarchy.tsx` for the pattern.
- **Technical, diagrammatic composition.** Boxes, connecting lines, monospace labels for technical terms (register names, memory tiers, protocol stages) — it should read like a whiteboard/spec diagram, not a poster.
- **Accent tints via `color-mix`**, never a raw saturated fill: `color-mix(in srgb, ${accent} 14%, transparent)` for badge/icon backgrounds.
- **Theme-aware by construction.** Colors reference `var(--color-*)` tokens or are passed as props, so the same component repaints correctly in light and dark mode — never a baked-in light-only palette.
- **Motion is restrained**: a slow pulse, a particle traveling a path, a fade-in on scroll. Never bouncing, spinning, or "fun" easing.
- Built as inline SVG + Framer Motion, not raster images — see [ARCHITECTURE.md](./ARCHITECTURE.md) for why.

This is the only style used inside lesson pages. It's what makes the app itself feel professional/technical rather than like a marketing brochure.

## Authoring workflow: AI-assisted generation as the primary starting point

As of 2026-08-30, when building a **new** in-lesson diagram: try generating it first with an installed infographic-generation skill (`infographic-creator`, using `@antv/infographic`'s DSL — see its `SKILL.md`), then adapt the output by hand into a static component. Hand-code from scratch only if generation doesn't produce something worth adapting (failover).

This is an **authoring-time tool, not a runtime dependency** — `@antv/infographic` is never imported by the app itself. The workflow is generate → export static SVG → adapt → inline as a plain component, exactly like every hand-coded illustration today. See [MEMORY.md](./MEMORY.md) for why a *runtime* integration was tried and rejected (bundle size, no automatic theme reactivity).

**"Adapt" is real work, not a rubber-stamp — checklist, confirmed against an actual export:**

1. **Strip the embedded font.** Exports embed `Alibaba PuHuiTi` as base64 — in one real export this was 85KB of a 97KB file (87%). Delete the embedded font data and change every `font-family` to `Inter, ui-sans-serif, system-ui, sans-serif` to match [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
2. **Remap colors to their correct role.** A raw export bakes in literal hex everywhere. Colors that are intentionally brand-accent (matching this app's existing pattern of literal accent hex, e.g. `stroke="#16a34a"`) can stay literal. Colors standing in for neutral text/surface (anything that should read as "page text," not "accent") must become the matching `var(--color-*)` token instead, or the diagram won't repaint in dark mode.
3. **Manually verify dark-mode contrast on every accent shade used**, especially darker ones (e.g. `#0c6e31`). A static export has no dark-mode variant of its own — if a shade reads fine on white but not on `var(--color-bg)` in dark mode, either lighten it or make it conditional (pass as a prop like existing illustrations do), don't ship it as-is.
4. **Confirm there's no baked-in background rect** — exports observed so far are transparent, keep it that way so the diagram sits correctly on both `--color-bg` and `--color-bg-subtle`.

If steps 1–3 would take longer than just hand-coding the diagram (true for anything simple — a 3-4 box flow, a bit grid), skip the generator and hand-code directly; the tool earns its keep on compositions that are genuinely fiddly to lay out by hand (radial/circular arrangements, icon-heavy grids), not on everything.

## 2. Standalone marketing/summary infographics (reference style, not yet built)

For any *future* shareable one-pager (a README hero image, a social card, a printed poster) — **not** for in-app lesson diagrams — the reference target is a flat-vector, colorful, poster-style composition:

- Solid (not just outlined) light-green and white card surfaces, small filled icon illustrations per concept (not line icons at this scale)
- A clear header/hero band, a 3-up "key features" row, and a card grid for topics — a poster layout, not a diagram
- The Wisio owl mark and wordmark anchor the top
- Still green-dominant and still uses the same brand palette, but leans decorative/inviting rather than technical

**Why two styles**: a lesson diagram's job is to explain a mechanism precisely — outlines and restraint keep it legible as a technical reference. A marketing infographic's job is to be glanced at and shared — it can afford to be denser and more colorful. Building one style with both jobs in mind produces something that does neither well.

**Tooling note**: if a marketing infographic is ever produced, it does not need the Gemini-based `infographic` skill (installed for hand-drawn-style diagrams, a third style not used here) — the flat-vector poster style is achievable directly as an SVG/HTML composition, consistent with how every other illustration in this app is built (see [ARCHITECTURE.md](./ARCHITECTURE.md) on why inline SVG is preferred over generated raster images).

## Accessibility for illustrations

- Decorative SVG elements use `aria-hidden`.
- Illustrations that convey information (not just decoration) have an accessible `<title>` (see `HeroComputer.tsx`) or are paired with adjacent text that states the same information — an illustration is never the *only* place a fact appears.
