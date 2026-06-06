## Goal
Make the portfolio deploy cleanly to Vercel (and GitHub Pages) by switching the build from a Cloudflare Worker bundle to a plain static site. The current `npm run build` produces a Worker (`@cloudflare/vite-plugin` + `src/server.ts`), which is why Vercel/GitHub Pages serve a broken or blank app — those hosts expect plain HTML/JS/CSS in `dist/`, not a Worker entry.

The site has no server functions, no API routes, no auth, no database — it is safe to ship as a pure static SPA.

## Changes

### 1. Switch Vite config to a static SPA build
- Replace `@lovable.dev/vite-tanstack-config` (which injects the Cloudflare plugin + TanStack Start SSR) with a standard Vite + React setup in `vite.config.ts`.
- Keep: `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths`, the `@` alias, and dev-only `lovable-tagger`.
- Drop the Cloudflare plugin and the TanStack Start SSR entry; output is a normal `dist/` with `index.html` + assets.

### 2. Replace TanStack Start router with TanStack Router (SPA mode)
TanStack **Router** (the SPA library) is a drop-in for the file-based routes already in `src/routes/`. We keep all route files and `routeTree.gen.ts` generation, but:
- Add a new client entry `src/main.tsx` that mounts `<RouterProvider>` into `#root`.
- Add `index.html` at project root with `<div id="root">` and `<script type="module" src="/src/main.tsx">`.
- Update `src/routes/__root.tsx` to a plain layout component (remove `shellComponent`, `HeadContent`, `Scripts`, and the `<html>/<body>` shell — those are SSR-only). Move the `<title>` / meta defaults into `index.html`.
- Remove `src/server.ts` and `src/start.ts` (Worker + SSR middleware — unused in SPA).
- Keep `src/router.tsx` as-is (already SPA-compatible).

### 3. Vercel configuration
`vercel.json` already exists with the correct SPA rewrite. Keep it as-is:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### 4. GitHub Pages workflow
The existing `.github/workflows/Deployfile` already builds and uploads `dist/`. Once the build outputs static files, GitHub Pages will work too. Add a `public/404.html` copy of `index.html` so deep-link refreshes on Pages don't 404 (Pages has no rewrite config).

### 5. Cleanup
- Remove `wrangler.jsonc` (Cloudflare-only).
- Remove `src/server.ts`, `src/start.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts` (SSR-only error wrappers).
- `package.json`: remove `@cloudflare/vite-plugin`, `@tanstack/react-start`, `wrangler` deps; add `@tanstack/router-plugin` (for routeTree generation) and `@tanstack/react-router` is likely already present transitively.

## What stays the same
- All routes under `src/routes/` and the file-based routing convention.
- All components, styling, Tailwind tokens in `src/styles.css`.
- The Lovable → GitHub → Vercel sync workflow you already set up.

## Risk / reversibility
This is a one-way move off the Worker target. If you later want server features back (contact form, API routes), we'd reintroduce TanStack Start with a Vercel preset instead of Cloudflare. For a static portfolio, the SPA build is the simplest and most reliable target for both Vercel and GitHub Pages.

## After deploy
- Vercel auto-redeploys on GitHub push.
- The live site will serve from `dist/index.html` with the SPA rewrite handling all routes (`/`, `/work`, `/work/eatsure`, etc.) on direct load and refresh.
