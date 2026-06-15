## Goal
In the Legal DMS case study, keep the existing "UX Designer" role label and add the detailed description paragraph directly beneath it in the meta strip.

## Changes

### 1. `src/components/CaseStudy.tsx`
- Add `roleDescription?: string` to the `meta` type.
- In the meta strip grid, when `roleDescription` is present, render it as a `<p>` below the role value with muted styling.

### 2. `src/routes/work.legal-dms.tsx`
- Pass the provided description text into the new `meta.roleDescription` prop.

## Design
- The description sits directly under the "Role" value in the meta strip.
- Style: `text-sm text-muted-foreground leading-relaxed` to distinguish it from the bold role label while keeping readability.
- No layout changes to the rest of the meta strip grid.

## Risks
- None. This is a backward-compatible additive change; other case studies are unaffected.