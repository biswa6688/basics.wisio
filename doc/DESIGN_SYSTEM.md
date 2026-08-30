# Design System

The tokens and patterns behind Wisio's UI. This documents what's already implemented in `src/index.css` and the shared component layers — it doesn't introduce anything new.

## Color

Defined as CSS custom properties in `src/index.css`, exposed to Tailwind via `@theme` / `@theme inline`.

**Brand scale** (`--color-primary-50` … `--color-primary-950`): a green ramp, `500` (`#16a34a`) is the primary brand color. An `--color-accent-500/600` cyan pair exists for secondary emphasis (used sparingly, e.g. some topic accents).

**Semantic tokens** (redefined per theme, never used as raw hex in components):

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | white | near-black green | page background |
| `--color-bg-subtle` | pale green | darker green-black | section backgrounds |
| `--color-surface` / `--color-surface-raised` | white | dark green surfaces | cards, dropdowns |
| `--color-border` | pale green-gray | dark green-gray | borders/dividers |
| `--color-text` / `--color-text-muted` | near-black / gray-green | near-white / light gray-green | text |

Rule: **never hardcode a color that bypasses these tokens.** Illustration/topic accents (e.g. `topic.accent`, per-callout colors) are the one exception — they're intentionally varied per concept, but always used at low opacity via `color-mix(in srgb, ${accent} 14%, transparent)` for backgrounds, never as a solid fill.

## Typography

Inter, loaded via Google Fonts in `index.html` (variable weight 400–800). Headings use `font-bold` (700), not `font-extrabold` (800) — a deliberate choice made during the professional-register redesign (see [MEMORY.md](./MEMORY.md)). Body copy uses default weight at `text-sm`/`text-base` with `text-text-muted` for secondary copy.

## Spacing & layout

Standard Tailwind spacing scale, no custom overrides. Page containers use `max-w-4xl` (lesson content) or `max-w-6xl` (grids/home), centered with `mx-auto px-4 sm:px-6`.

## Radius

`rounded-lg` (8px) to `rounded-xl` (12px) for cards, buttons, badges, icon chips. `rounded-full` is reserved for the theme-toggle button and small eyebrow badges — a deliberate, narrow exception, not a default. `rounded-2xl`/arbitrary large radii are avoided; they were part of the original "childish" look and were removed in the redesign.

## Elevation

Minimal. Cards use a 1px border (`border-border`), not shadows, as the primary separation cue. The few shadows in the app (`shadow-sm`, `shadow-md`) are small and used only on the primary CTA button and open dropdowns — never large "glow" shadows.

## Motion

Framer Motion, used for: entrance fades on the hero, `whileInView` step reveals (`StepFlow`), and small looping pulses/particle movement in diagrams (`CpuCycle`, `NetworkMap`, `RequestJourney`). All motion respects `prefers-reduced-motion` automatically via `<MotionConfig reducedMotion="user">` in `src/main.tsx` — no component needs to check this itself.

## Icons

`lucide-react` exclusively. **No emoji as UI icons anywhere** — this was the single biggest contributor to the app reading as a children's product before the redesign. Icons are typically `h-4 w-4` (inline/card) or `h-5 w-5` (topic header badge), `strokeWidth={1.75}`, colored via the semantic/accent token they sit on top of. Per-topic icon mapping lives in `src/data/topicIcons.tsx`.

## Component states

- **Hover**: border color shifts toward the accent (`hover:border-primary-400`), or background darkens one step (`hover:bg-primary-700`) — no scale/shadow "pop" effects.
- **Focus**: browser-default focus rings are not currently overridden; this is a tracked gap, see [ACCESSIBILITY.md](./ACCESSIBILITY.md).
- **Disabled** (quiz options after answering): `disabled` attribute + muted styling, not just visual.
- **Selected/active** (nav, quiz answers, theme menu): a colored border or underline, never a filled pill background (removed in the redesign for being too playful).

## Illustration style

See [ILLUSTRATION_GUIDELINES.md](./ILLUSTRATION_GUIDELINES.md) — in-lesson diagrams and any future standalone marketing infographics follow different, explicitly documented sub-styles.
