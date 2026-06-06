Goal: Host the portfolio on Vercel while keeping Lovable as the development environment.

The portfolio is a fully static site — no contact forms, no server functions, no API routes, no database. It only needs to serve pre-built HTML/JS/CSS.

### What we will do

#### 1. Connect the project to GitHub (user action required)
Lovable has two-way GitHub sync. You will need to:
- Click the **Plus (+)** menu in the chat input → **GitHub** → **Connect project**
- Authorize the Lovable GitHub App
- Select your GitHub account and create a repository

Once connected, every change made in Lovable will auto-push to GitHub.

#### 2. Add Vercel deployment configuration
- Create a `vercel.json` in the project root with a catch-all rewrite so client-side routing works correctly on Vercel (prevents 404s on page refresh).
- Ensure the existing build command (`npm run build`) and output directory (`dist/`) are used.

#### 3. Configure and deploy on Vercel
- Import the GitHub repository into Vercel.
- Set build settings:
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
  - **Node Version:** 22
- Deploy. Vercel will auto-deploy on every future GitHub push from Lovable.

#### 4. Verify and iterate
- Confirm the Vercel deployment loads correctly.
- From then on: edit in Lovable → code auto-syncs to GitHub → Vercel auto-redeploys.

### Important note
The project currently builds with `@cloudflare/vite-plugin` and targets Cloudflare Workers. For a static portfolio, the `dist/` output should be deployable as static files. If Vercel fails to serve the build because it includes Worker-specific artifacts instead of static HTML, we will add a static-prerender configuration to the build step so it outputs plain HTML/JS/CSS. This is a safe, reversible adjustment.

### Future workflow
| Step | Where |
|------|-------|
| Make design/code changes | Lovable editor |
| Automatic deploy trigger | GitHub push (auto from Lovable) → Vercel |
| View live site | Vercel URL / custom domain |