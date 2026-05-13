## Add larger thumbnails on the left of project cards

### Generate thumbnails
Create three minimal mockup images in the warm beige + ink black palette, 4:3 aspect, saved to `src/assets/`:
- `work-legal-dms.jpg` — minimal Outlook-style email pane with a "File to SharePoint" panel.
- `work-compliance-companion.jpg` — minimal stepper/form UI showing guided compliance steps.
- `work-eatsure.jpg` — minimal mobile checkout with an influencer pick widget.

All rendered as flat, low-detail UI mockups (no realistic photography, no logos), beige background, ink-black strokes/type, soft shadow — matching the portfolio's minimal aesthetic.

### Update `src/components/Work.tsx`
- Add `image: string` to each project entry, importing the three assets.
- Restructure the card grid: on desktop use `md:grid-cols-[280px_1fr_auto]`; the left column becomes the thumbnail (`aspect-[4/3]`, rounded, border, `object-cover`, `loading="lazy"`).
- Move the `01 / 02 / 03` number above the title (small muted label) so the number is preserved.
- On mobile the thumbnail stacks on top, full width.
- Keep hover state, tags, arrow icon, and Reveal animation unchanged.

### Out of scope
No copy changes, no other sections, no new dependencies.
