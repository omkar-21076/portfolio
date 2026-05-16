# Convert case study screenshots to WebP

Shrink the 6 MB of Legal DMS PNGs to optimized WebP, generate a small thumbnail for the work card, and lazy-load below-the-fold images.

## Steps

1. **Convert PNGs to WebP** using `sharp` via a one-off script:
   - Source: `src/assets/legal-dms-{hero,landing,matters,outlook,sidebar,forms}.png`
   - Output: matching `.webp` files, quality 82, capped at 2000 px wide (preserves quality on 2× DPR displays).
   - Expected total: ~600–900 KB vs 6 MB today.
2. **Generate a proper Work card thumbnail**: `work-legal-dms.jpg` (~800 px wide, ~25 KB) from the hero image, matching the other two case studies.
3. **Update imports**:
   - `src/routes/work.legal-dms.tsx` → import the new `.webp` files.
   - `src/components/Work.tsx` → import the new small `work-legal-dms.jpg` instead of the 1.7 MB hero PNG.
4. **Lazy-load screens** in `src/components/CaseStudy.tsx`: add `loading="lazy"` and `decoding="async"` to the screen `<img>` tags. Keep the hero image eager (it's the LCP).
5. **Preload the LCP hero** on the case study route via `head().links` with `rel="preload" as="image" fetchpriority="high"`.
6. **Delete the original PNGs** so they don't ship in the build.

## Notes

- `sharp` is used only at build-time in a temporary `/tmp` script — no new runtime dependency.
- Vite hashes the new `.webp` files automatically; no config changes needed.
- No visible quality loss expected (WebP q82 is indistinguishable from PNG for UI screenshots at viewing size).
