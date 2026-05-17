## Goal

Replace placeholder content in `src/routes/work.eatsure.tsx` with the provided EatSure content verbatim, and wire up the 7 uploaded images converted to WebP.

## Image conversion

Copy uploads to `/tmp` and convert to WebP into `src/assets/`:

- `Hero_Image_Eatsure.png` → `src/assets/eatsure-hero.webp` (also overwrite `src/assets/work-eatsure.jpg` thumbnail with a WebP version used by the Work listing — keep the existing import path or swap to webp)
- `Home_screen_Eatsure.png` → `src/assets/eatsure-home.webp`
- `Curators_screen_Eatsure.png` → `src/assets/eatsure-curators.webp`
- `Cart_page_Eatsure.png` → `src/assets/eatsure-cart.webp`
- `Payment_Eatsure.png` → `src/assets/eatsure-payment.webp`
- `Profile_page_Eatsure.png` → `src/assets/eatsure-profile.webp`
- `UI_Components_1.png` → `src/assets/eatsure-ui-components.webp`

For the Work listing thumbnail (`src/components/Work.tsx` imports `work-eatsure.jpg`), swap the import to a new `eatsure-thumb.webp` generated from the hero (or reuse `eatsure-hero.webp`).

## Content mapping to `CaseStudy` props

Use content exactly as provided (no rewording). Sections in this order matches the component's render order, with **Impact placed above Final solution / after Key screens** per the established CaseStudy layout (same pattern used in Compliance Companion).

- `number` "03", `name` "Designing a Food Curation Feature on the EatSure App", `tagline` "Influencer curation widget that helps users discover curated food combinations and increases order value."
- `heroImage` eatsure-hero.webp
- `meta` { role: "UX Designer", platform: "Mobile · EatSure App" }
- `focusAreas` ["Product thinking", "Feature design", "Food curation experience", "UI design", "User flow creation", "Usability testing"]
- `context` — the two "Project Overview" paragraphs (Designing a Food Curation Feature… + The idea behind the feature…)
- `challenge` — full Challenge section text (including the bulleted questions inlined and the "target audience" paragraph)
- `research` — Research & Discovery paragraphs as intro; two `insights` pulled from "Key Findings & Improvements" (use two of the key insight sentences verbatim, attributed "Key finding")
- `screens` — six entries in this order with captions taken from the provided content themes:
  1. Home screen — eatsure-home.webp — "Curated suggestion entry point on the home feed"
  2. Curated suggestions — eatsure-curators.webp — "Discovering curations from food bloggers"
  3. Curator profile — eatsure-profile.webp — "Building trust through curator profiles"
  4. UI components & edit flow — eatsure-ui-components.webp — "Curation card, edit selection, and cancel confirmation"
  5. Cart — eatsure-cart.webp — "Curated combinations carried through to cart with cross-sell"
  6. Payment — eatsure-payment.webp — "Checkout flow for curated orders"
- `impact` — bullets from the Impact section (the four bullet items + the follow / revisit sentence)
- `solution` — the "Key Screens / UX Solution" section text (no image)
- `constraints` — three Constraints paragraphs as bullets
- `collaboration` — the "Design Process & Iterations" section text
- `reflection` — first Learnings paragraph
- `learnings` — remaining two Learnings paragraphs as bullets
- `prev` { to: "/work/compliance-companion", label: "Compliance Companion" } (no `next`)

All text strings copied verbatim from the user's message — no rewording, no summarization.

## Files touched

- new: `src/assets/eatsure-{hero,home,curators,cart,payment,profile,ui-components}.webp`
- edited: `src/routes/work.eatsure.tsx` (full rewrite of props)
- edited: `src/components/Work.tsx` — swap `work-eatsure.jpg` import to the new webp (or leave .jpg and just overwrite its bytes — simpler: overwrite `src/assets/work-eatsure.jpg` with a new compressed JPG generated from the hero so no Work.tsx change is needed; matches what was done previously for other cases)

## Verification

After edits, view the updated `/work/eatsure` route in preview, confirm images load and content appears verbatim, and confirm the Work listing thumbnail still renders.
