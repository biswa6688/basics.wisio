# Features

Status snapshot of what exists in the app today. Updated in the same commit as any feature that changes it.

## Shipped

| Feature | Description | Key files |
|---|---|---|
| Theme system | Light / Dark / System toggle, persisted, no flash-of-wrong-theme on load | `src/theme/ThemeProvider.tsx`, `src/components/layout/ThemeToggle.tsx`, `index.html` |
| App shell | Sticky navbar with brand, footer, responsive layout | `src/components/layout/` |
| Home page | Hero with animated illustration, value props, topic preview grid | `src/pages/Home.tsx`, `src/components/illustrations/HeroComputer.tsx` |
| Topics index | Grid of all 6 topics with accent-colored cards | `src/pages/TopicsIndex.tsx`, `src/components/content/TopicCard.tsx` |
| Topic page shell | Per-topic header (icon, title, tagline, description) + content slot, "coming soon" fallback | `src/pages/TopicPage.tsx`, `src/components/content/TopicLayout.tsx` |
| Content component kit | `InfoCard`, `StepFlow` reusable building blocks for lesson content | `src/components/content/` |
| Brand | Wisio logo/favicon, tagline "Wisdom, Byte by Byte", green primary palette | `public/wisio.svg`, `src/index.css` |

## Topic lessons

| Topic | Slug | Status |
|---|---|---|
| Number Systems | `number-systems` | Shipped |
| How a Computer Works | `how-computers-work` | Not started |
| Input & Output Devices | `input-output` | Not started |
| Operating Systems | `operating-systems` | Not started |
| Networking Basics | `networking-basics` | Not started |
| Internet Basics | `internet-basics` | Not started |

See [BACKLOG.md](./BACKLOG.md) for planned scope of each, and [TASKS.md](./TASKS.md) for the active work item.

### Number Systems (`number-systems`)

Why binary is used in hardware, a keystroke-to-bit-pattern step flow, an interactive-looking bit grid that builds the byte for 202, and a binary/decimal/hex side-by-side comparison.

Key files: `src/pages/topics/number-systems.tsx`, `src/components/illustrations/BitGrid.tsx`, `src/components/illustrations/BaseCompare.tsx`
