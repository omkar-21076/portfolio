## Goal

Move the Impact section to appear directly below Challenge (above Key screens) for the Legal DMS and Compliance Companion case studies, while keeping EatSure's current order (Impact below Screens) unchanged.

## Approach

Add a new optional prop `impactPosition?: "after-challenge" | "after-screens"` to the shared `CaseStudy` component (default: `"after-screens"` to preserve current behavior for EatSure).

### Changes

1. **`src/components/CaseStudy.tsx`**
   - Add `impactPosition` to `CaseStudyProps` (default `"after-screens"`).
   - Extract the existing Impact `<section>` (currently rendered after Key screens, lines ~327–344) into a small inline render.
   - Render Impact either right after the Challenge section (lines ~164–174) or after the Screens block based on `impactPosition`.

2. **`src/routes/work.legal-dms.tsx`**
   - Pass `impactPosition="after-challenge"` to `<CaseStudy />`.

3. **`src/routes/work.compliance-companion.tsx`**
   - Pass `impactPosition="after-challenge"` to `<CaseStudy />`.

EatSure remains untouched and keeps the default ordering.
