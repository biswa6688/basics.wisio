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
| How a Computer Works | `how-computers-work` | Shipped |
| Input & Output Devices | `input-output` | Shipped |
| Operating Systems | `operating-systems` | Shipped |
| Networking Basics | `networking-basics` | Not started |
| Internet Basics | `internet-basics` | Not started |

See [BACKLOG.md](./BACKLOG.md) for planned scope of each, and [TASKS.md](./TASKS.md) for the active work item.

### Number Systems (`number-systems`)

Why binary is used in hardware, a keystroke-to-bit-pattern step flow, an interactive-looking bit grid that builds the byte for 202, and a binary/decimal/hex side-by-side comparison.

Key files: `src/pages/topics/number-systems.tsx`, `src/components/illustrations/BitGrid.tsx`, `src/components/illustrations/BaseCompare.tsx`

### How a Computer Works (`how-computers-work`)

CPU/memory/storage overview cards, an animated fetch-decode-execute cycle diagram, and a memory hierarchy pyramid (registers → cache → RAM → storage) illustrating the speed/size trade-off.

Key files: `src/pages/topics/how-computers-work.tsx`, `src/components/illustrations/CpuCycle.tsx`, `src/components/illustrations/MemoryHierarchy.tsx`

### Input & Output Devices (`input-output`)

Animated Input → Process → Output flow diagram and a grouped device gallery (input / output / both).

Key files: `src/pages/topics/input-output.tsx`, `src/components/illustrations/IoFlow.tsx`, `src/components/illustrations/DeviceGallery.tsx`

### Operating Systems (`operating-systems`)

App/OS/hardware layer diagram, process/file/memory management overview cards, and an animated CPU time-slicing timeline showing how multitasking feels instant on one core.

Key files: `src/pages/topics/operating-systems.tsx`, `src/components/illustrations/OsLayers.tsx`, `src/components/illustrations/ProcessTimeline.tsx`
