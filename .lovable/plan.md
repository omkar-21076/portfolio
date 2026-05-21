## Goal

In the "Outcome & impact" section of the **Compliance Companion** case study only:
1. Make all three cards equal height.
2. Color the percentage values green, meeting WCAG AA contrast on the beige card background.

## Changes

### 1. `src/styles.css`
Add a new semantic token for success/positive metric color, tuned for AA contrast (≥4.5:1) against `--card` (light beige) in light mode and against the dark card in dark mode.

```css
:root { --success: oklch(0.45 0.13 150); }   /* deep green, ~#1f7a3d on beige */
.dark { --success: oklch(0.78 0.15 150); }   /* light green for dark card */
```

Register in `@theme inline`:
```css
--color-success: var(--success);
```

### 2. `src/components/CaseStudy.tsx`
- Add optional prop `accentOutcomes?: boolean` to `CaseStudyProps`.
- In the Outcomes section (line ~393–402):
  - Add `h-full` to the inner card `<div>` and to the `Reveal` wrapper so all cards stretch to the tallest sibling (fixes uneven heights when labels wrap differently).
  - When `p.accentOutcomes` is true, render the value with `text-success` instead of the default foreground color.

### 3. `src/routes/work.compliance-companion.tsx`
Pass `accentOutcomes` to the `<CaseStudy />` component. No other case-study route is touched, so Legal DMS and Eatsure remain unchanged.

## Out of scope

- Other case studies' Outcome sections.
- Label text color, card border, spacing, or typography.
