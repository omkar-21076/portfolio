# Fix: Nav links should scroll between sections, not isolate them

## Problem

Right now `/work`, `/visuals`, `/writing`, `/about`, `/contact` each render only their own section in isolation. When the user clicks a menu item, they land on a page that contains only that one section — scrolling reveals nothing else, so the site feels stuck on whatever was clicked.

The intent is a single scrollable page (the home route already stacks Hero → About → Work → Visuals → Writing → Contact) where the menu jumps to a section but the user can still scroll up/down through the rest.

## Plan

1. **Turn top-level nav into in-page section links on the home route.**
   - Give each section component a stable `id` (`about`, `work`, `visuals`, `writing`, `contact`) — most already have it; verify and add where missing.
   - In `SiteHeader`, change links from `<Link to="/work">` etc. to anchor-style navigation that goes to `/` and scrolls to `#section`. Use TanStack Router's `Link` with `to="/"` + `hash="work"` so it works from any route (clicking "Work" from `/about` navigates home and scrolls to the Work section).
   - Keep the logo link as `to="/"` (no hash).

2. **Handle hash scrolling on the home route.**
   - In `src/routes/index.tsx`, on mount and on hash change, scroll the matching `#id` element into view (smooth, accounting for the sticky 64px header). This makes `/#work` land at the Work section.

3. **Retire the standalone section routes (or repurpose as redirects).**
   - Delete `src/routes/about.tsx`, `visuals.tsx`, `writing.tsx`, `contact.tsx` (and `work.index.tsx` + the `work.tsx` layout if no longer needed for case studies).
   - **Exception**: `/work/legal-dms`, `/work/compliance-companion`, `/work/eatsure` case studies must keep working. Easiest path: keep `src/routes/work.tsx` as an `<Outlet />` layout, drop `work.index.tsx`, and have the home page's "Work" section continue linking into the case study routes. Visiting bare `/work` can either 404 or redirect to `/#work` — recommend redirect via a tiny `work.index.tsx` that calls `<Navigate to="/" hash="work" replace />`.

4. **Active-state styling.**
   - Replace `activeProps` (which compared route paths) with a small scroll-spy: an `IntersectionObserver` in `SiteHeader` watches the section ids and marks the matching nav link as active. Falls back to no active state on non-home routes (case studies).

## Technical notes

- TanStack Router supports `<Link to="/" hash="work">`; the resulting URL is `/#work` and triggers a route match on `/` plus a hash change the index route can react to.
- Scroll offset: subtract header height (`64px`) when calling `scrollIntoView` — use `window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })`.
- Mobile menu: same hash-link treatment, plus close the sheet on click (already wired).
- No backend or styling-system changes; purely routing + a small effect in the index route and header.

## Files touched

- `src/components/SiteHeader.tsx` — link targets become `to="/" hash="..."`, add scroll-spy for active state.
- `src/routes/index.tsx` — add `useEffect` that reads `location.hash` and scrolls to the section.
- `src/components/{About,Work,Visuals,Writing,Contact}.tsx` — verify each has the right `id` on its outer `<section>`.
- Delete `src/routes/{about,visuals,writing,contact}.tsx`.
- `src/routes/work.index.tsx` — replace body with `<Navigate to="/" hash="work" replace />` (keep `work.tsx` outlet for case studies).
