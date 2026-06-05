## Content Refinement — Hero & About Sections

Scope: text-only changes. No layout, color, spacing, typography family, image treatment, navigation, or section structure changes.

### 1. `src/components/Hero.tsx`
- **Role label**: Replace "UX Designer at Siemens Healthineers" with "UX Designer focused on Enterprise Systems & Accessibility"
- **Heading size**: Reduce the `clamp(4rem,10vw,8rem)` by ~12.5% to `clamp(3.5rem, 8.75vw, 7rem)` to improve balance with the updated copy. Keep the same `font-serif`, `font-medium`, `leading-[0.9]`, `tracking-tight`, and italic "Raut" styling.
- **Description**: Replace "I turn complex enterprise workflows into simple, accessible products." with "Turning enterprise complexity into experiences people can understand, trust, and use efficiently."
- CTA, image, framing, and all other layout elements remain untouched.

### 2. `src/components/About.tsx`
- **Headline**: Replace "Three years designing enterprise software with a bias toward clarity, consistency, and accessibility." with "Creating enterprise experiences that reduce cognitive load and improve decision making."
- **Supporting paragraph**: Replace the current paragraph with: "I design enterprise products used in complex environments where every decision carries effort. My focus is on reducing cognitive load through clear information hierarchy, consistent patterns, and accessible interactions—helping people complete tasks with greater confidence and efficiency."
- **Metadata panel**: Update to:
  - Role — UX Designer
  - Company — Siemens Healthineers
  - Domain — Healthcare · Enterprise
  - Focus — Clarity · Accessibility
- Remove the "Experience — 3 years" row entirely.
- Layout, grid, borders, `Reveal` wrappers, and styling remain untouched.

### Out of scope
- No changes to Visuals, Work, Writing, Contact, Footer, SiteHeader, or routing.
- No new dependencies.
