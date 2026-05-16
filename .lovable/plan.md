## Legal DMS case study — real content + images

The supplied content doesn't map 1:1 to the current `CaseStudy` template (which assumes Goals, Research quotes, IA flow, Explorations, numeric Outcomes, Reflection). I'll extend `CaseStudy` with optional sections so the real narrative fits cleanly, and keep the other two case studies working unchanged.

### 1. Copy uploaded images into the project

Copy from `user-uploads://` to `src/assets/`:
- `Heroimage.png` → `src/assets/legal-dms-hero.png` (SharePoint dashboard — new hero)
- `DashboardUI.png` → `src/assets/legal-dms-matters.png` (My Matters table)
- `outlookUI.png` → `src/assets/legal-dms-outlook.png` (Outlook add-in ribbon + dropdown)
- `outlooksidebarUI.png` → `src/assets/legal-dms-sidebar.png` (3-state sidebar)
- `AdditionUI.png` → `src/assets/legal-dms-forms.png` (Adverse Party form + message center)

Also update `src/components/Work.tsx` to use `legal-dms-hero.png` for the project card thumbnail (replaces `work-legal-dms.jpg`).

### 2. Extend `src/components/CaseStudy.tsx`

Make several existing props optional and add new optional sections so each case study can opt in/out:

- Optional: `meta.timeline`, `meta.team` (legal DMS has no specific numbers to share)
- Optional: `goals`, `research`, `flowImage`, `explorationImages`, `outcomes`, `reflection`
- New optional sections:
  - `focusAreas: string[]` — chip list under the meta strip
  - `challenge: string` — single paragraph block
  - `screens: { title: string; image: string; caption?: string }[]` — replaces the rigid IA/Explorations/Solution slots; renders as a vertical gallery with captions
  - `constraints: string[]` — bullet list
  - `collaboration: string` — paragraph
  - `impact: string[]` — qualitative bullets (no big numeric cards needed)
  - `learnings: string[]` — bullets

The other two case studies (`compliance-companion`, `eatsure`) keep working because the removed-required props become optional — their existing data already satisfies the schema.

### 3. Rewrite `src/routes/work.legal-dms.tsx`

Wire the supplied copy into the new props:
- `name`: "Legal DMS"
- `tagline`: "A unified M365-based legal document and matter management system, with an Outlook add-in for seamless email filing."
- `heroImage`: `legal-dms-hero.png`
- `meta`: `{ role: "UX Designer", platform: "SharePoint Online, Outlook add-in (Fluent UI)" }` (timeline/team omitted)
- `focusAreas`: UX Strategy, Workflow Optimization, Outlook Add-in Experience, Enterprise UX, Agile Collaboration, Fluent UI-based Design
- `context`: Project Overview paragraphs
- `challenge`: Challenge section text
- `screens`:
  1. Matters dashboard — `legal-dms-matters.png`
  2. Outlook add-in (ribbon + matter dropdown) — `legal-dms-outlook.png`
  3. Sidebar states (My / Favorites / Recent Matters) — `legal-dms-sidebar.png`
  4. Adverse Party forms + message center — `legal-dms-forms.png`
- `constraints`: 6 bullets from the brief (fixed sprint timelines, dev in progress, Fluent UI limits, Outlook add-in restrictions, SHS UI guidelines, limited implementation flexibility) + the "no Figma access for devs" callout as the closing line
- `collaboration`: Collaboration & Delivery prose
- `impact`: Less rework, Smoother deployments, Stronger team alignment, Improved implementation confidence, Legacy system retirement, Reduced reporting dependencies, Productivity gains
- `learnings`: 4 takeaways
- `next`: keep pointing to `/work/compliance-companion`

### 4. SEO

Update the route's `head()` with a sharper description ("UX for an M365-based legal DMS with an Outlook add-in for email filing") and set `og:image` to the new hero.

### Out of scope

- Touching the other two case studies' content.
- Redesigning the case study visual style (typography, spacing, animations remain).
- Image retouching beyond copying as-is.
