## Plan: Redesign Contact section + Footer

Rebuild the end of the homepage using the **Editorial asymmetrical grid** direction. Only email and LinkedIn remain as contact actions.

### 1. `src/components/Contact.tsx` — rewrite
- Remove the entire `socials` array and the row of 6 icon circles (Medium, Dribbble, X, GitHub, Instagram all go away).
- New layout: 12-column grid using existing semantic tokens (`bg-background`, `text-foreground`, `border-border`).
  - Top strip: small uppercase label "Contact / Collaborate" with a bottom border divider.
  - Left (col-span-7): oversized "Let's<br/>talk." headline using `clamp(3.5rem, 10vw, 8.5rem)`, leading 0.85, tight tracking, with the period in muted ink.
  - Right (col-span-5): the intro paragraph, then two stacked links:
    - Email → `mailto:rautomkar21076@gmail.com` (text shows the address)
    - LinkedIn → `https://www.linkedin.com/in/omkar-raut`
  - Each link has the two-bar underline hover animation (right bar scales out, left bar scales in) using semantic colors.
- Keep `Reveal` wrappers for the existing entrance animations.
- Drop unused lucide-react imports.

### 2. `src/components/SiteFooter.tsx` — refine
- Replace current footer with the bottom strip from the chosen direction: tiny uppercase tracked text, opacity-30, two groups:
  - Left: "© 2026 Omkar Raut" · divider · "Based in India"
  - Right: "Portfolio v2.0" · "Built with care"
- Use existing `border-border` and `text-foreground` tokens (no hex values in components).

### Color/token discipline
- All colors come from `src/styles.css` tokens (`background`, `foreground`, `border`, `muted-foreground`). No raw hex in JSX. The prototype's `#f2ede1` / `#1a1a17` already match the current `--background` / `--foreground`.

### Out of scope
- No changes to Hero, About, Work, Visuals, Writing, header nav, or routing.
- No new dependencies.
