## Plan

1. Copy `user-uploads://DMS_Dashboard_Home_1.png` to `src/assets/legal-dms-hero.png` (overwrite existing file).
2. No code changes needed — `src/routes/work.legal-dms.tsx` already imports `legal-dms-hero.png` for the hero (and og:image), and `src/components/Work.tsx` already uses it for the project thumbnail.
3. Keep the first screen in the "Key screens" gallery using the same hero image (current behavior), unless you'd prefer to drop that duplicate entry — let me know.

No other files affected.