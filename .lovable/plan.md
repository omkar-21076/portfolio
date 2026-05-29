## Goal
Add a second Medium article "AI can build an app in minutes, but can it solve a problem?" to the Articles & posts section, using the uploaded image as its thumbnail, fully visible (no cropping).

## Changes

### 1. Copy uploaded image
- Copy `user-uploads://AI_Builders_2.png` → `src/assets/writing-ai-builders.png`.

### 2. `src/components/Writing.tsx`
- Import the new asset: `import aiBuildersThumb from "@/assets/writing-ai-builders.png";`
- Add a new tile at the top of the `tiles` array (before the self-service portal tile):
  ```ts
  {
    source: "Medium",
    title: "AI can build an app in minutes, but can it solve a problem?",
    date: "2025",
    href: "https://medium.com/@omkar-raut/ai-can-build-an-app-in-minutes-but-can-it-solve-a-problem-d7c46a6392f7",
    image: aiBuildersThumb,
    className: "md:col-span-2 md:row-span-2",
  }
  ```
- Update image rendering so thumbnails display fully without cropping: change `object-cover` → `object-contain` on image tiles, and add a matching background color (`bg-black`) so letterboxed areas blend with the dark overlay. This keeps the existing hover scale and gradient overlay for legibility.

## Out of scope
- Other sections, layout grid changes, or restyling text-only tiles.
