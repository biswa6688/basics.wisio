# Features

Status snapshot of what exists in the app today. Updated in the same commit as any feature that changes it.

## Shipped

| Feature | Description | Key files |
|---|---|---|
| Theme system | Light / Dark / System as a 3-icon segmented control (moon/monitor/sun), persisted, no flash-of-wrong-theme on load | `src/theme/ThemeProvider.tsx`, `src/components/layout/ThemeToggle.tsx`, `index.html` |
| App shell | Sticky navbar with brand, footer, responsive layout | `src/components/layout/` |
| Home page | Hero with animated illustration, value props, topic preview grid | `src/pages/Home.tsx`, `src/components/illustrations/HeroComputer.tsx` |
| Topics index | Grid of all 6 topics with accent-colored cards | `src/pages/TopicsIndex.tsx`, `src/components/content/TopicCard.tsx` |
| Topic page shell | Per-topic header (icon, title, tagline, description) + content slot, "coming soon" fallback | `src/pages/TopicPage.tsx`, `src/components/content/TopicLayout.tsx` |
| Content component kit | `InfoCard`, `StepFlow` reusable building blocks for lesson content | `src/components/content/` |
| Brand | Wisio logo/favicon, tagline "Learn the Basics. Build Your Wisdom.", green primary palette | `public/wisio.svg`, `src/index.css` |
| Design system v2 | Professional/educational visual register: Lucide icons (no emoji), Inter typography, tinted-accent diagram style, tightened radii | `src/data/topicIcons.tsx`, `index.html`, all `components/illustrations/*` |
| Educational component system | Reusable lesson-building primitives: callouts (DidYouKnow/ImportantNote/Warning/RealWorldExample), KeyTakeaways, DefinitionCard, Comparison, Timeline, AnatomyDiagram, GlossaryTerm, quiz kit (MultipleChoice/TrueFalse/Quiz/AnswerReveal), FlashCard, RelatedTopics, LearningPath (prev/next + progress dots), progress tracking (localStorage-backed mark-complete + summary bar) | `src/components/education/*`, `src/hooks/useProgress.ts` |
| Test suite | Vitest + React Testing Library covering theme persistence/DOM effects, progress tracking, document-title hook, bit-math correctness, and quiz interaction | `vite.config.ts` (`test` block), `src/test/setup.ts`, `*.test.tsx` files colocated with source |
| Full documentation set | Design system, content/illustration guidelines, accessibility/performance/testing/security/SEO docs, contributing guide, and an ADR log | See the table in [README.md](../README.md) |
| Generated illustration (first) | `CpuCycle` regenerated via the `infographic-creator` skill (authoring-time only, no runtime dependency) instead of hand-drawn — see the adaptation checklist in [ILLUSTRATION_GUIDELINES.md](./ILLUSTRATION_GUIDELINES.md) | `src/components/illustrations/CpuCycle.tsx` |
| Reduced motion | All Framer Motion animations respect OS "reduce motion" setting app-wide | `src/main.tsx` (`MotionConfig reducedMotion="user"`) |
| Per-page titles | Browser tab title updates per route (home / topics index / each lesson) | `src/hooks/useDocumentTitle.ts` |

## Topic lessons

| Topic | Slug | Status |
|---|---|---|
| Number Systems | `number-systems` | Shipped |
| How a Computer Works | `how-computers-work` | Shipped |
| Input & Output Devices | `input-output` | Shipped |
| Operating Systems | `operating-systems` | Shipped |
| Networking Basics | `networking-basics` | Shipped |
| Internet Basics | `internet-basics` | Shipped |

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

### Networking Basics (`networking-basics`)

Animated router/device network map, IP vs MAC address explainer, and a packet routing/reassembly overview.

Key files: `src/pages/topics/networking-basics.tsx`, `src/components/illustrations/NetworkMap.tsx`

### Internet Basics (`internet-basics`)

Animated click-to-page-load request journey diagram, step-by-step breakdown, and domain/DNS/HTTP explainer cards. Completes the v1 core-basics topic set.

Key files: `src/pages/topics/internet-basics.tsx`, `src/components/illustrations/RequestJourney.tsx`
