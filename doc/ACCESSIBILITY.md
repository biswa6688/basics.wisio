# Accessibility

Target: WCAG 2.2 AA. This documents what's actually in place today and what's an honest, tracked gap — not an aspirational checklist.

## In place

- **Semantic structure**: one `<h1>` per topic page (in `TopicLayout`), `<h2>` per `Section`, `<h3>` inside cards. No heading levels are skipped.
- **Reduced motion**: all Framer Motion animation respects the OS `prefers-reduced-motion` setting automatically via `<MotionConfig reducedMotion="user">` (`src/main.tsx`) — no per-component opt-in needed.
- **Keyboard operability**: every interactive element is a real `<button>` or `<a>`/`<Link>`, never a `<div onClick>`. Verified interactive components:
  - `ThemeToggle` — `aria-expanded`, `aria-label`, closes on outside click
  - `MultipleChoice`/`TrueFalse` — `role="radiogroup"`/`role="radio"`, `aria-checked`, options `disabled` after answering (not just visually inert)
  - `GlossaryTerm` — button with `aria-describedby` linking to the popover, opens on focus as well as hover (keyboard users get the same info as mouse users)
  - `AnswerReveal`, `MarkCompleteButton` — `aria-expanded` / `aria-pressed` reflect real state
- **Decorative vs. informative SVG**: purely decorative shapes/icons use `aria-hidden`; the one illustration that conveys unique information (`HeroComputer`) has an `<title>`. Every fact shown in a diagram is also stated in adjacent text — no information exists only inside an SVG.
- **Alt text**: the Wisio logo has `alt="Wisio logo"` everywhere it appears.
- **Color is never the only signal**: quiz feedback pairs color with a `Check`/`X` icon and text change (`disabled`), not color alone.

## Known gaps (tracked, not silently ignored)

- **Focus rings**: relying on browser-default `:focus` styling rather than a designed, consistent focus-visible treatment. Works, but isn't polished, and default rings can be subtle in dark mode on some browsers.
- **Touch targets**: several buttons (e.g. secondary nav links, quiz options) are ~36–40px tall, under the WCAG 2.2 AA 44×44px minimum target size guidance.
- **No skip-to-content link**: keyboard users must tab through the full nav on every page.
- **Color contrast**: token pairs (e.g. `text-muted` on `bg-subtle` in dark mode) have not been run through a formal contrast checker.
- **No automated accessibility testing** (e.g. `axe-core` in the test suite) — see [TESTING.md](./TESTING.md).

These are real, prioritized items — see [BACKLOG.md](./BACKLOG.md) for where they sit relative to other work, rather than being duplicated as a second list here.
