# Changelog

All notable changes to this project. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added

- Input & Output Devices lesson: animated Input → Process → Output flow diagram, grouped device gallery
- How a Computer Works lesson: CPU/memory/storage overview, animated fetch-decode-execute cycle, memory hierarchy pyramid
- Number Systems lesson: binary-as-hardware explainer, keystroke-to-bit-pattern step flow, animated place-value bit grid, binary/decimal/hex side-by-side comparison
- Initial project scaffold: Vite + React 19 + TypeScript
- Tailwind CSS v4 with green primary brand palette, light/dark/system theme tokens
- Theme system (`ThemeProvider`) with localStorage persistence and flash-free initial load
- App shell: Navbar (with theme toggle), Footer, responsive Layout
- Brand: `wisio.svg` logo/favicon, "Wisio — Wisdom, Byte by Byte" tagline
- Home page with animated hero illustration (`HeroComputer`) and topic preview grid
- Topics index page (`/topics`) and dynamic topic page shell (`/topics/:slug`)
- Reusable content components: `TopicLayout`, `Section`, `InfoCard`, `StepFlow`, `TopicCard`
- Topic metadata for all 6 v1 topics: Number Systems, How a Computer Works, Input & Output Devices, Operating Systems, Networking Basics, Internet Basics
- Project documentation: README, ARCHITECTURE, FEATURES, BACKLOG, TASKS, CLAUDE, AGENTS, DEPLOYMENT, MEMORY, CHANGELOG
