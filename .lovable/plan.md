## Plan: Replace Visuals section with 5 UI screens + captions

**File:** `src/components/Visuals.tsx`

1. Upload the 5 uploaded images as Lovable Assets and create pointer JSONs under `src/assets/`:
   - `visual-ai-review-dashboard.png`
   - `visual-compare-plans.png`
   - `visual-cultpass-fitness.png`
   - `visual-pricing-page.png`
   - `visual-luma-smartwatch.png`

2. Replace the placeholder `tiles` array (currently 8 numbered tiles) with a typed array of 5 entries: `{ src, title }`.

3. Update the marquee tile markup:
   - Render `<img>` (object-cover) inside the tile frame.
   - Below the image, render the title as a separate caption line **outside the image frame** (option C) — small muted text, centered, with top spacing.
   - Keep existing marquee scroll behavior and the duplicated track for seamless loop.
   - Use `aria-hidden` on the duplicated half; `alt={title}` on the originals, empty alt on duplicates.

**Titles:**
1. AI Design Review — Dashboard
2. Compare Plans
3. cultpass — Fitness Brand
4. Pricing Page
5. LUMA — Smartwatch Landing

**Out of scope:** No changes to section heading, Reveal animations, or surrounding sections.
