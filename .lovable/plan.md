## Problem
The `roleDescription` text in the Legal DMS case study is cramped inside the Role column of a 2-column meta grid. It needs more horizontal space and a clearer visual hierarchy.

## Proposed change
Update the meta strip in `src/components/CaseStudy.tsx` to a stacked layout **only when `roleDescription` is present**:

1. **Top row:** Platform (and Timeline / Team if they exist) in a compact grid.
2. **Bottom row:** Role label + value + `roleDescription` spanning the full width of the strip, separated by a subtle top border from the row above.

Case studies without `roleDescription` will keep the existing single-row grid layout, so nothing changes for Compliance Companion or EatSure.

## Files to modify
- `src/components/CaseStudy.tsx` — meta strip layout logic
- `src/routes/work.legal-dms.tsx` — no data changes needed; `meta.roleDescription` already exists