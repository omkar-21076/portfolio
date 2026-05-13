## Switch headings to Inter

Replace Instrument Serif with Inter across all headings, keeping the minimal aesthetic but with a single typeface system.

### Changes

1. **`src/styles.css`**
   - Update `--font-serif` token to use Inter (keep the variable name to avoid touching every component, OR repoint heading rules to `--font-sans`).
   - In `@layer base`, set `h1–h4` to `var(--font-sans)`, weight `500–600`, tighter tracking (`-0.02em`) for elegance at large sizes.
   - Drop the `.font-serif` utility's serif stack so any leftover usage renders in Inter.
   - Remove italic styling reliance.

2. **`src/routes/__root.tsx`**
   - Remove `Instrument+Serif` from the Google Fonts URL; load only Inter (add weight `700` for stronger headings).

3. **Components using `font-serif` + `italic`**
   - `Hero.tsx`, `About.tsx`, `Work.tsx`, `Visuals.tsx`, `Writing.tsx`, `Contact.tsx`, `SiteHeader.tsx` (logo), `SiteFooter.tsx`, `__root.tsx` (404).
   - Keep the `font-serif` className (now mapped to Inter) so structure stays intact.
   - Remove `italic` modifiers — Inter italic looks weak for display use; rely on weight/size for hierarchy instead.
   - Slightly reduce the largest hero size if needed for balance (Inter at 7rem reads heavier than serif).

### Why keep the `font-serif` class name
Renaming everywhere would be a large diff with no visual benefit. Repointing the token keeps the change minimal and reversible.

### Out of scope
No layout, color, spacing, or content changes.
