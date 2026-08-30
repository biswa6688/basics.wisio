# Content Guidelines

How to write and structure a Wisio lesson. Applies to the 8 existing topics and any new ones.

## The core rule: visual before verbal

For every concept, ask: **can this be shown as a diagram before it's explained in a sentence?** If yes, build or reuse a visual component and keep the surrounding prose to 1–3 sentences of framing. Lessons should read as a sequence of visuals with connective text, not paragraphs with the occasional illustration.

## Structure

A lesson (`src/pages/topics/<slug>.tsx`) is a sequence of `<Section title="...">` blocks. A typical lesson includes, roughly in this order:

1. **Core concept cards** — 2–3 `InfoCard`s introducing the main pieces (see `components/content/InfoCard.tsx`)
2. **The central diagram** — one illustration from `components/illustrations/` that is *the* visual for this topic
3. **Supporting detail** — a second diagram, a `Comparison`, a `Timeline`, or an `AnatomyDiagram`, depending on what the concept needs
4. **A callout** — `DidYouKnow`, `ImportantNote`, `Warning`, or `RealWorldExample` (see `components/education/`) to add one memorable, concrete detail
5. **A quick check** — one `MultipleChoice` or `TrueFalse` inside a `Quiz` wrapper
6. **`KeyTakeaways`** — 3–4 one-line summary bullets, always last

`TopicLayout` automatically appends a mark-complete button, related topics, and prev/next navigation — lesson content never needs to build these itself.

## Which component for which job

| If you need to... | Use |
|---|---|
| Introduce 2–4 parallel concepts | `InfoCard` grid |
| Show a process/sequence | `StepFlow` (horizontal steps) or `Timeline` (vertical, dated/historical) |
| Show a labeled structure (a URL, a data packet) | `AnatomyDiagram` |
| Contrast two or three options | `Comparison` |
| Define a single term inline | `GlossaryTerm` (hover/click popover) or `DefinitionCard` (standalone block) |
| Add a surprising fact | `DidYouKnow` |
| Flag something a learner must not misunderstand | `ImportantNote` or `Warning` (warning = risk/danger framing, note = "this matters") |
| Ground a concept in daily life | `RealWorldExample` |
| Check understanding | `MultipleChoice` / `TrueFalse` inside `Quiz` |
| Self-test term recall | `FlashCard` |
| Summarize the lesson | `KeyTakeaways` (always exactly one per lesson, at the end) |

Don't build a new one-off component if one of these already fits — see [ARCHITECTURE.md](./ARCHITECTURE.md) for why (e.g. `ProcessDiagram` wasn't built separately because `StepFlow` already covers it).

## Voice and tone

- Second person ("you"), present tense: "You type a URL" not "The user types a URL."
- Short sentences. No filler adjectives ("incredibly powerful", "amazing").
- Analogies are welcome (e.g. MAC address ~ serial number) but must be labeled as analogies, not stated as fact.
- Numbers and specifics beat vague claims: "billions of cycles per second," not "very fast."

## Topic metadata

Every topic needs an entry in `src/data/topics.ts` (`slug`, `title`, `tagline`, `description`, `accent`) and an icon mapping in `src/data/topicIcons.tsx` *before* its content page is registered in `src/pages/topics/registry.tsx` — this is what lets it show up in navigation immediately, with a "coming soon" placeholder, even before the lesson content is written (see the registry pattern in [ARCHITECTURE.md](./ARCHITECTURE.md)).
