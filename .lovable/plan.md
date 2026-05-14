## Add case study pages for each project

Create dedicated detail pages for the three projects (Legal DMS, Compliance Companion, Eatsure) following standard UX case study structure. Each card on the Work section becomes a clickable link to its case study.

### Routes to add
- `src/routes/work.legal-dms.tsx` → `/work/legal-dms`
- `src/routes/work.compliance-companion.tsx` → `/work/compliance-companion`
- `src/routes/work.eatsure.tsx` → `/work/eatsure`

Each route sets its own `head()` with unique title, description, og:title, og:description, og:image (the project thumbnail).

### Case study template (shared component)
Create `src/components/CaseStudy.tsx` that takes props and renders the standard UX case study sections, in this order:

1. **Hero** — project name (serif H1), one-line tagline, hero image (the existing thumbnail, full-bleed within max-w-6xl)
2. **Overview meta strip** — Role, Timeline, Team, Platform (4-column on md, stacks on mobile)
3. **Context & problem** — short paragraph + "Problem statement" callout
4. **Goals & success metrics** — bulleted list
5. **Research** — placeholder paragraph + 2 research-insight cards (user quotes / findings)
6. **Information architecture / user flow** — placeholder image slot (uses thumbnail again as stand-in)
7. **Design explorations** — 2-up image grid (placeholder image slots)
8. **Final solution** — paragraph + full-width image
9. **Outcome & impact** — 3 metric tiles (e.g. "+18% adoption", "−32% time-to-file", "4.6/5 satisfaction") with placeholder numbers
10. **Reflection / learnings** — short paragraph
11. **Next / prev project** — links to the other two case studies + back to `/work`

All copy is placeholder lorem-style text tailored loosely to each project so it reads plausibly (not literal "Lorem ipsum"). All image slots reuse the existing `src/assets/work-*.jpg` thumbnails — no new image generation.

Uses existing design tokens, `font-serif` for headings, `Reveal` for scroll-in animation, semantic `<section>` and one `<h1>`.

### Update `src/components/Work.tsx`
- Add `slug: string` to each project (`legal-dms`, `compliance-companion`, `eatsure`).
- Wrap each `<article>` in a `<Link to="/work/$slug" params={{ slug: p.slug }}>` — but since slugs are static, use literal `to="/work/legal-dms"` etc. to keep type safety. Simplest: render the card as a `<Link>` directly with the right `to` per project (small switch or inline mapping).
- Card hover state stays; arrow icon keeps its meaning.

### Out of scope
- No new images (reuse existing thumbnails as placeholders throughout).
- No CMS, no data layer — content lives inline in each route file as props passed to `<CaseStudy />`.
- No changes to Hero, About, Writing, Visuals, Contact, header, or footer.
