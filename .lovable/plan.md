## Use uploaded photo in Hero

The uploaded file `IMG_2616.png` is actually a HEIC image (iPhone format), not a real PNG — browsers can't render it. I'll convert it to a web-friendly JPG and wire it into the existing architectural breakout Hero.

### Steps

1. Convert `user-uploads://IMG_2616.png` (HEIC) → `src/assets/portrait.jpg` using ImageMagick (via `nix run nixpkgs#imagemagick`). Auto-orient and resize to ~1200px on the long edge for a sharp 3:4 frame.
2. Update `src/components/Hero.tsx`:
   - Replace `import portrait from "@/assets/portrait-placeholder.svg"` with `import portrait from "@/assets/portrait.jpg"`.
   - Keep all existing layout, grayscale + hover, "OR" overlay, 2024 tag, and circle detail untouched.
3. Leave `portrait-placeholder.svg` in place (unused) in case you want to revert.

### Out of scope

- Layout changes, color changes, copy changes.
- Cropping/retouching the photo beyond orientation + resize.
