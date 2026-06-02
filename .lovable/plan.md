## Plan: Make UI screens load faster when visitors scroll to "Things I've made"

**Root cause:** the 5 screenshots are PNGs totaling ~9 MB (1–2.5 MB each). At that size, no amount of lazy-loading hides the wait — by the time someone scrolls to the section, the browser is still downloading multi-MB images. The fix is to shrink the files and start fetching them slightly before they enter view.

### Step 1 — Re-encode the 5 screenshots to WebP (the big win)

In the sandbox, convert each source PNG to WebP at ~1600px wide, quality ~82. Expected size drop: **1–2.5 MB → ~150–300 KB per image** (roughly 10× smaller, no visible quality loss for UI screenshots).

For each of the 5 images:
1. Download the current asset from its CDN URL to `/tmp`.
2. Re-encode to `.webp` with `cwebp` (or sharp).
3. Upload via `lovable-assets create` and write a new `.asset.json` pointer.
4. Delete the old PNG `.asset.json` via `delete_asset`.

Files replaced:
- `src/assets/visual-ai-review-dashboard.png.asset.json` → `.webp.asset.json`
- `src/assets/visual-compare-plans.png.asset.json` → `.webp.asset.json`
- `src/assets/visual-cultpass-fitness.png.asset.json` → `.webp.asset.json`
- `src/assets/visual-pricing-page.png.asset.json` → `.webp.asset.json`
- `src/assets/visual-luma-smartwatch.png.asset.json` → `.webp.asset.json`

### Step 2 — Start fetching just before the section enters view

In `src/components/Visuals.tsx`:
- Update the 5 imports to the new `.webp.asset.json` files.
- Keep `loading="lazy"` + add `decoding="async"` on every `<img>`.
- Add explicit `width`/`height` attributes so the browser reserves space and decodes faster.
- Wrap the marquee in an IntersectionObserver with a generous `rootMargin` (e.g. `400px 0px`) so images begin downloading a bit before the section is on screen, not the moment it appears. Until then they stay lazy.

### Out of scope

- No layout, copy, animation, or marquee-behavior changes.
- No changes to other sections.

### Expected result

Total payload for the section drops from ~9 MB to roughly ~1 MB, and images start arriving before the user reaches the section — so by the time it scrolls into view, tiles appear without the noticeable lag.
