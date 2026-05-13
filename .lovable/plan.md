## Omkar Raut — Portfolio Plan

A minimal, accessible, fast-loading single-page portfolio (with anchor sections + dedicated routes for shareable deep links). Editorial feel using warm beige canvas, ink-black type, and Instrument Serif display + Inter body. Animations are restrained: subtle fade/slide on enter, one continuous horizontal scroll in the Visuals section, no heavy parallax or video backgrounds.

### Design system

- Palette (oklch tokens in `src/styles.css`):
  - `--background`: warm beige (~#F5F0E8)
  - `--foreground`: ink black (~#111111)
  - `--muted` / `--muted-foreground`: softer beige + warm gray
  - `--accent`: deeper warm tan for hover/underline
  - `--border`: low-contrast warm line
  - Dark mode: ink black bg, warm cream fg (same tokens, inverted)
- Typography: Instrument Serif (headings, large display), Inter (body, UI). Loaded via Google Fonts `<link>` in `__root.tsx` head with `display=swap`. No icon font; use Lucide icons (already available).
- Spacing: generous whitespace, max content width ~1200px, 8px scale.
- Motion: framer-motion only where it adds meaning — fade-up on section enter (200ms), nav link underline, and the visuals marquee. Respect `prefers-reduced-motion`.
- A11y: semantic landmarks (`<header><nav><main><section><footer>`), single H1 per route, visible focus rings, AA contrast on beige (verified), skip-to-content link, alt text on all images, 44px tap targets.

### Page architecture

Single-page scroll experience with anchor sections, plus separate routes so each is shareable/SEO-indexed:

```
src/routes/
  __root.tsx          shell + fonts + skip link + <main>
  index.tsx           Hero + brief about + section previews
  about.tsx           Full about
  work.tsx            Projects (3)
  visuals.tsx         Horizontal-scroll gallery
  writing.tsx         Articles & posts (bento)
  contact.tsx         Contact + socials
```

The home page also renders all sections inline (so the homepage is the full portfolio scroll), while the dedicated routes give clean URLs and per-route SEO metadata. Top navbar uses TanStack `<Link>` to routes; on the homepage, clicking a nav item smooth-scrolls to the section if already on `/`.

### Sections

1. **Top navbar** (sticky, translucent on scroll)
   - Left: "Omkar Raut" wordmark in Instrument Serif
   - Right: Work · Visuals · Writing · About · Contact
   - Mobile: hamburger → full-screen overlay menu, large tap targets

2. **Hero** (centered, type-led)
   - Centered circular portrait placeholder (160px), soft warm border
   - H1: "Omkar Raut" in large Instrument Serif (clamp 56–112px)
   - Sub: "UX Designer at Siemens Healthineers"
   - One-line tagline: "I turn complex enterprise workflows into simple, accessible products."
   - Single CTA: "See selected work →" (anchor to /work)
   - No background animation; one subtle fade-up on load only.

3. **About** — short editorial paragraph (3 yrs experience, focus on minimal design, accessibility, consistency, reducing cognitive load). Two-column on desktop: paragraph left, small meta list right (Role, Company, Focus, Based in).

4. **Selected Work** — 3 project cards, vertical stack on mobile, 1-col large cards on desktop (not 3-up — keeps editorial weight):
   - Legal DMS — Data Management System (with Outlook add-in, file legal matters from Outlook to SharePoint)
   - Compliance Companion — helps app owners with compliance data submission
   - Eatsure — Influencer widget for increasing AOV
   - Each card: number (01/02/03), project name, one-line description, placeholder cover image, hover reveals fine underline + arrow.

5. **Visuals** — horizontal continuous-scroll marquee
   - CSS-only infinite scroll (duplicated track, `animation: scroll Xs linear infinite`), pause on hover, pause when off-screen via IntersectionObserver, disabled under `prefers-reduced-motion`.
   - 6–8 placeholder tiles (varied aspect ratios) labeled so user can swap later.

6. **Writing — Design thoughts** (bento grid)
   - Asymmetric grid: 1 large featured tile, 2 medium, 3 small. Mix of Medium articles + LinkedIn posts; each tile shows source badge (Medium / LinkedIn), title, date, external-link icon.
   - All placeholder content with TODO markers so user can fill in URLs.
   - Mobile: single column stack.

7. **Contact**
   - Big serif headline "Let's talk." + email button (mailto)
   - Socials row: LinkedIn, Medium, Dribbble, Behance, X/Twitter, GitHub, Instagram (all as accessible icon+label links, `aria-label` on each, `rel="noopener noreferrer"`).

8. **Footer** — minimal: name · year · "Built with care".

### Performance

- No hero video, no large background images, no parallax libraries.
- Fonts: `display=swap`, preconnect to fonts.gstatic.
- Images: native `loading="lazy"`, explicit `width`/`height`, `aspect-ratio` wrappers to prevent CLS. Placeholder images use small SVG/solid-color tiles initially (no network cost).
- Animation library: framer-motion (already common). Marquee is pure CSS (no JS lib).
- Per-route head() metadata; root sets defaults, leaf routes override title/description/og.

### Technical notes

- Tokens defined in `src/styles.css` (oklch) — no hardcoded hex in components.
- Add Google Fonts via `links` array in `__root.tsx` `head()`.
- Add `<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>` and wrap `<Outlet />` in a single `<main id="main">` in `__root.tsx`.
- Install `framer-motion` (`bun add framer-motion`) for in-view fade-ups.
- Reusable components in `src/components/`: `SiteHeader`, `SiteFooter`, `Section`, `ProjectCard`, `Marquee`, `BentoTile`, `SocialLink`.
- Each route file sets its own `head()` with title + description + og tags.
- Portrait placeholder: simple SVG avatar in `src/assets/portrait-placeholder.svg` with a clearly marked TODO so user knows where to swap.
- All copy from your message wired in verbatim (with the typo "Healthiness" corrected to "Healthineers" — confirm if you'd like the original spelling kept).

### What ships in the build

- All 6 routes + homepage with full inline scroll
- Navbar + mobile menu, footer, skip link, semantic landmarks
- Light + dark theme tokens (system preference, no toggle unless requested later)
- Placeholder portrait, 3 placeholder project covers, 8 placeholder visuals, 6 placeholder writing tiles
- SEO meta per route, OG tags, lazy images, reduced-motion support
