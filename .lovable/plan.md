## Plan

1. Copy `user-uploads://DMS_Landing_page.png` to a new asset `src/assets/legal-dms-landing.png`.
2. In `src/routes/work.legal-dms.tsx`:
   - Import the new `legal-dms-landing.png` asset.
   - Update the first entry of the `screens` array ("Legal DMS dashboard") to use `legal-dms-landing` instead of `hero`.
3. Leave the hero image, thumbnail, and all other screen images untouched.