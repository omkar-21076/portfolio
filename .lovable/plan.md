## Plan

1. **Remove the Final solution image on Compliance Companion only.**
   In `src/routes/work.compliance-companion.tsx`, drop the `image` property from the `solution` prop and pass only `text`. To allow this without breaking other case studies, update `CaseStudyScreen`/`solution` typing in `src/components/CaseStudy.tsx` so `solution.image` is optional, and render the `<img>` only when `p.solution.image` is set. Legal DMS and Eatsure don't set `solution` at all, so they're unaffected. (No image asset is deleted — Compliance Companion just stops rendering it.)

2. **Update the chatbot outcome metric.**
   In `src/routes/work.compliance-companion.tsx`, change the outcomes entry from `{ value: "↑", label: "Chatbot adoption during compliance tasks" }` to `{ value: "30%+", label: "Chatbot adoption during compliance tasks" }`.

No other content, layout, or assets change.
