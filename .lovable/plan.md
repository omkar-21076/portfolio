## Problem

The EatSure thumbnail in the Work listing is clipped on the left. The current `src/assets/work-eatsure.jpg` is the full hero composition (EatSure logo + headline text + two phone screens) but it renders inside a 280px-wide card with `aspect-[4/3] object-cover`, so the left side text gets cropped and the result looks unbalanced next to the Legal DMS and Compliance Companion thumbnails.

## Fix

Regenerate `src/assets/work-eatsure.jpg` as a purpose-built 4:3 thumbnail:

- Source: existing `src/assets/eatsure-home.webp` (the home-screen phone screenshot)
- Tool: `imagegen--edit_image` with `aspect_ratio: "4:3"`
- Prompt: center the phone mockup on a warm cream background that matches the site palette, with generous padding and a soft shadow, no text overlay, fully visible phone
- Output overwrites `src/assets/work-eatsure.jpg`

## Files touched

- `src/assets/work-eatsure.jpg` (regenerated)

No component code changes — `src/components/Work.tsx` already imports this path. The case study hero and gallery images are untouched.
