## Plan: Compliance Companion case study update

### 1. Convert & add images
Copy the 7 uploaded screenshots to `src/assets/` and convert each to WebP (quality ~82, max width 2000px) using `sharp`, matching the Legal DMS approach. Delete the intermediate PNGs after conversion. Final assets:

- `compliance-hero.webp` — from `116shots_so.png` (All Assessments + Compliance Coach panel — best hero, shows product + chatbot)
- `compliance-dashboard.webp` — from `897shots_so.png` (My Assessments: Drafts / Software I Own / Software I Manage)
- `compliance-prescreen-1.webp` — from `809shots_so.png` (Section 1 — Business Owner / Software Manager form)
- `compliance-prescreen-2.webp` — from `24shots_so.png` (Section 2 — interaction + country dropdown)
- `compliance-prescreen-3.webp` — from `246shots_so.png` (Section 3 — installation / login / AI / medical device)
- `compliance-aspects-applicable.webp` — from `87shots_so.png` (Applicable Aspects tab with cards)
- `compliance-aspects-not-applicable.webp` — from `548shots_so.png` (Not Applicable Aspects tab)

Also regenerate `src/assets/work-compliance-companion.jpg` (~800px wide, ~30–50 KB) from the new hero so the Work card thumbnail matches.

### 2. Reorder CaseStudy sections (Impact after Key Screens)
In `src/components/CaseStudy.tsx`, move the `Impact` block so it renders immediately after the `Key screens` section, before `Final solution`. Order becomes:

```text
... research → flow → explorations → screens → impact → solution → constraints → collaboration → outcomes → reflection → learnings ...
```

Note: this also affects the Legal DMS page (impact will appear earlier there too). That's consistent with the user's intent that Impact follows the visual proof.

### 3. Rewrite `src/routes/work.compliance-companion.tsx`
Replace the placeholder content with the supplied copy verbatim. Map content to existing `CaseStudy` props:

- `number`: "02"
- `name`: "Compliance Companion"
- `tagline`: short line from the Project Overview ("An enterprise compliance assessment tool that simplifies a highly complex compliance process and reduces cognitive load for application owners.")
- `heroImage`: `compliance-hero.webp`
- `meta`: `{ role: "UX Designer", platform: "Web · Angular" }`
- `focusAreas`: ["Enterprise UX", "Workflow simplification", "Guided user journeys", "Cognitive load reduction", "UX research & testing", "AI-assisted support experience"]
- `context`: full Project Overview paragraph (verbatim)
- `challenge`: full Challenge section (verbatim, 3 paragraphs)
- `research`: built from the "Research & Validation Process" + "Key User Findings & Improvements" sections. Use the full Research paragraphs as `intro`; convert two representative user-finding quotes into `insights` — to keep the content verbatim, instead use 2 short insight cards quoting key sentences from the findings ("Users struggled with navigation, unclear workflow paths, and confusion between View and Edit states." / "The chatbot experience initially created uncertainty because users were unsure how or when to use it."), source labeled "Usability testing finding".
- `screens` (Key Screens / UX Solution — full prose goes in `solution.text` below; screens gallery uses the 6 non-hero images):
  1. Dashboard — My Assessments → `compliance-dashboard.webp`
  2. Pre-screening · Section 1 → `compliance-prescreen-1.webp`
  3. Pre-screening · Section 2 → `compliance-prescreen-2.webp`
  4. Pre-screening · Section 3 → `compliance-prescreen-3.webp`
  5. Applicable Aspects → `compliance-aspects-applicable.webp`
  6. Not Applicable Aspects → `compliance-aspects-not-applicable.webp`

  Each caption is a single sentence drawn from the UX Solution copy (no paraphrasing of meaningful content — captions just identify the screen).
- `solution`: `text` = the full "Key Screens / UX Solution" prose (verbatim, 4 paragraphs), `image` = `compliance-aspects-applicable.webp`.
- `constraints`: split the Constraints prose verbatim into 3 bullet items matching its 3 paragraphs.
- `collaboration`: full "Collaboration & Delivery" section (verbatim, 2 paragraphs).
- `outcomes`: extract the numeric metrics from Impact:
  - `73%` — "found the new landing page more intuitive"
  - `59%` — "found the redesigned entry creation easier"
  - `↑` — "Chatbot adoption during compliance tasks"
- `impact`: split the Impact section's qualitative sentences verbatim into 3 bullets (the non-numeric statements).
- `reflection`: first paragraph of Learnings (verbatim).
- `learnings`: second paragraph of Learnings split into 2–3 verbatim bullets.
- `prev`: Legal DMS, `next`: Eatsure (unchanged).

### 4. Verify
Run the build/typecheck (auto), open the case study route, and confirm: hero loads, all 6 screens render, Impact appears directly below Key Screens, and Work card thumbnail still shows.

### Technical notes
- WebP conversion uses the same one-off `sharp` script pattern already used for Legal DMS.
- All new imports use `@/assets/...webp`.
- No changes to routing, SEO meta keys, or other case studies' content (only the section order in the shared `CaseStudy` component shifts).
