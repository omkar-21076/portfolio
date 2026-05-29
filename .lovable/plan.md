## Goal
Add the Medium article "Building a user-friendly self-service portal" to the **Articles & posts** section, with the Medium thumbnail visible on the tile and clicking it opening the article in a new tab.

## Changes

### 1. `src/components/Writing.tsx`
- Extend the `Tile` type with an optional `image?: string` field.
- When `image` is present, render the tile as a cover-image card:
  - Background image fills the tile (`bg-cover bg-center`).
  - Dark gradient overlay at the bottom so the title + source badge remain legible (WCAG AA contrast).
  - Same hover behavior and arrow icon as existing tiles.
- Tiles without `image` keep the current text-only layout — no visual regression for the other 6 tiles.
- Add the new tile at the **top of the `tiles` array** so it appears first:
  ```ts
  {
    source: "Medium",
    title: "Building a user-friendly self-service portal: tips for UX design & implementation",
    date: "2024",
    href: "https://medium.com/@omkar-raut/building-a-user-friendly-self-service-portal-tips-for-ux-design-implementation-ff97f801e8b4",
    image: "/src/assets/writing-self-service-portal.png", // imported as ES6 asset
    className: "md:col-span-2 md:row-span-2",
  }
  ```
- The anchor already uses `target="_blank" rel="noopener noreferrer"`, so clicking opens in a new tab — no change needed there.

### 2. Thumbnail asset
Medium blocks programmatic fetching of its CDN images, so I cannot reliably pull the og:image at build time. Two options:

**Option A (recommended):** You upload the PNG you mentioned. I'll save it to `src/assets/writing-self-service-portal.png` and import it as an ES6 asset (cache-busted, optimized by Vite).

**Option B:** Reference Medium's hotlinked CDN image URL directly. This works but depends on Medium not rotating the URL and adds a third-party request.

Please share the PNG and I'll wire it up via Option A.

## Out of scope
- Re-ordering or removing existing tiles.
- Changing the grid layout, typography, or color tokens.
- Other sections of the site.
