## Hero redesign — Architectural breakout

Replace the current centered Hero (small circle portrait above a serif name) with a two-column editorial composition where the portrait becomes a tall framed image with layered architectural details, and the name + intro sit beside it.

### Layout

```text
[ eyebrow rule + role label                      ]   [ aspect 3/4 portrait ]
[                                                ]   [  · offset hairline  ]
[ Omkar                                          ]   [  · soft blur shape  ]
[       Raut (italic, indented)                  ]   [  · grayscale image  ]
[                                                ]   [  · "OR" overlay     ]
[ tagline (~2 lines)                             ]   [  · 2024 corner tag  ]
[                                                ]   [  · circle dot below ]
[ See selected work →  (with circle arrow)       ]
```

- Left column: 7/12 cols on lg, full width on mobile.
- Right column: 5/12 cols on lg, image stacks below the text on mobile.
- Background stays cream (existing token).

### Image treatment

- Replace circular avatar with tall `aspect-[3/4]` framed portrait (max ~420px wide).
- Use existing `portrait-placeholder.svg` as the image source until a real photo is added.
- Apply grayscale + slow scale-on-hover.
- Layered details:
  - Outer hairline border, slightly rotated, offset by ~16px.
  - Soft blurred cream shape behind for depth.
  - Faint italic "OR" monogram overlaid bottom-left of the image.
  - Small dark square in the top-right corner with vertical "2024" label.
  - Small outlined circle with center dot at bottom-left, breaking the frame.

### Typography

- Keep current serif for the name; render as two lines: `Omkar` then italic `Raut` indented.
- Eyebrow: short hairline rule + uppercase tracked role label ("UX Designer at Siemens Healthineers").
- Tagline keeps current copy.
- CTA: "See selected work" underline + circular arrow button (hover fills dark).

### Files to change

- `src/components/Hero.tsx` — full rewrite to the two-column structure above. Keep `<Reveal>` wrappers for entrance animation and the `<Link to="/work">` target.
- Use design tokens from `src/styles.css` (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`) instead of hardcoded hex — the prototype's `#F5F1E8` / `#1A1A1A` map to existing tokens.
- No new dependencies. No route or data changes. Mobile/tablet behaviour: stack to single column, image first or last (TBD during implementation — default: text first, image second).

### Out of scope

- Generating a real photo (placeholder SVG stays).
- Changing other sections, nav, or routing.
