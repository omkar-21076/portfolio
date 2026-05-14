## Fix: case study pages don't render

### Root cause
With TanStack flat routing, `work.legal-dms.tsx` is registered as a child of `work.tsx`. The parent (`/work`) must render `<Outlet />` for child routes to appear. Currently it renders the `<Work />` list directly, so navigating to `/work/legal-dms` matches the route but nothing shows.

### Fix
1. Convert `src/routes/work.tsx` into a layout route whose component is just `() => <Outlet />` (keep its existing `head()` meta).
2. Create `src/routes/work.index.tsx` containing the original `/work` page content (`<div className="pt-10"><Work /></div>` + the work-listing meta).
3. Leave the three case study routes and the `<Work />` component as-is.

### Out of scope
No changes to copy, styling, or the case study pages themselves.
