## Content & Layout Refinements

Scope: three targeted updates. No redesign, color, typography family, spacing system, navigation, or image changes.

### 1. Hero — Name on one line
In `src/components/Hero.tsx`:
- Remove the `<br />` and the `lg:ml-20` offset so the name reads continuously.
- Slightly reduce the heading `clamp(...)` so "Omkar Raut" stays on a single line across all desktop widths without wrapping, while keeping visual prominence.
- Preserve `font-serif`, `font-medium`, `leading-[0.9]`, `tracking-tight`, and italic styling.

### 2. New section — Design Philosophy
Create `src/components/DesignPhilosophy.tsx` and insert it between `<About />` and `<Work />` in `src/routes/index.tsx`.
- Content: "Designing minimal experiences for complex systems, reducing cognitive load so people can focus on their work—not the tool."
- Style: large editorial serif typography, generous whitespace (`py-20 md:py-28` or similar), `border-t`, `px-5 md:px-8`, no supporting paragraph, no icons/cards/illustrations/decorative elements.
- Wrap in `<Reveal>` for consistency with adjacent sections.
- Acts as a quiet transition between About and Projects.

### 3. Contact — Supporting copy update
In `src/components/Contact.tsx`:
- Replace the paragraph "Open to enterprise UX roles, freelance projects, and good conversations about design." with:
  "If you're building products that involve complexity, scale, or accessibility challenges, I'd be happy to connect."
- Keep layout, styling, links, hover interactions, and section header untouched.

### Out of scope
- No changes to About, Work, Visuals, Writing, SiteHeader, SiteFooter, or routing beyond inserting the new component.
- No new dependencies.