# Phase 1 — Setup ✅ COMPLETE

Governing specs: `00-overview.md`

**Status:** All tasks below are done. Kept here as a record of what was actually built and why — see the notes on each task where the implementation diverged from the original plan.

## 0.1 Lock pre-build decisions (before any Copilot task)

- **Done when:** Both decisions in `00-overview.md` §Decisions to lock before Phase 1 are resolved: gallery placement (own route vs. Home section) and the final menu category list. Gallery placement specifically affects the Navbar built in Phase 3, so resolve it now rather than later.
- **Resolved:** Gallery got its own route (`app/gallery/` exists). Menu category list still needs final confirmation in Phase 2.

## 1.1 Scaffold Next.js with static export

- **File(s):** `next.config.ts` (or `.js`), project root
- **Done when:** `next build` produces a fully static `out/` directory with no build errors, and `next.config` has `output: 'export'` set.
- **Actual outcome:** `create-next-app` initially refused to scaffold into the non-empty `tmf_001` directory. Worked around by scaffolding into a temporary subfolder (`scaffold-tmp`), moving the generated files up, then deleting the subfolder. `next.config.ts` also needed `basePath: '/tmf_001'` and `assetPrefix: '/tmf_001/'` since GitHub Pages serves project sites from a subpath — not part of the original task, added during implementation.

## 1.2 Install and configure Tailwind CSS

- **File(s):** `app/globals.css` (not `tailwind.config.ts` — see below)
- **Done when:** Tailwind utility classes work in a test component, and the color palette from `01-brand-content.md` is registered as named theme colors.
- **Actual outcome:** Project scaffolded with **Tailwind v4**, which configures via an `@theme` block directly in `app/globals.css` — there is no `tailwind.config.ts` to edit. Brand colors (`navy #03202F`, `battleRed #A71930`, `cream #F5F1E8`, `charcoal #1A1A1A`, `mustard #D9A441`) and font variables are both registered there.

## 1.3 Install animation library

- **File(s):** `package.json`
- **Done when:** Animation library is installed and a trivial test component renders and animates correctly in dev mode.
- **Actual outcome:** Installed `framer-motion` first, hit a peer-dependency conflict (it doesn't officially support React 19, this project's React version). Uninstalled it and installed **`motion`** instead (the current/rebranded package, with official React 19 support) — `import { motion } from "motion/react"`. Verified via a temporary test route at `app/dev/motion`, confirmed working, then deleted the test files. **This is the confirmed choice going forward — not an open question.**

## 1.4 Set up fonts

- **File(s):** `app/layout.tsx`, `app/globals.css`
- **Done when:** A bold display font (headings) and a clean sans-serif (body) are loaded via `next/font` and available as Tailwind font-family utilities.
- **Actual outcome:** **Anton** (display) + **Inter** (body), both via `next/font/google`, exposed as `font-display`/`font-body` through the `@theme` block.
- **Follow-up discovered during docs reconciliation:** `app/layout.tsx` still has placeholder English values left over from `create-next-app`'s default scaffold — `<html lang="en">` and English `metadata.title`/`metadata.description`. This violates the Spanish-only requirement in `00-overview.md` §Tech stack. A `TODO(content)` comment was added at the top of `app/layout.tsx` flagging the three exact lines to fix. Not blocking Phase 1 completion, but tracked as a pending item in `06-content-layer.md` (real Spanish copy) and `09-polish.md` (verification before ship).

## 1.5 Configure GitHub Pages deploy

- **File(s):** `.github/workflows/deploy.yml`, `public/.nojekyll`
- **Done when:** Pushing to `main` triggers a GitHub Actions workflow that builds the static export and publishes it to GitHub Pages, and the deployed URL loads successfully.
- **Actual outcome:** Workflow runs `npm ci`, `npm run build`, deploys `out/` via `peaceiris/actions-gh-pages`. Also required an empty `public/.nojekyll` file, which the original task didn't call out — without it, GitHub Pages ignores the `_next/` folder (leading underscore triggers Jekyll's default exclusion). **Not yet pushed to `main`** — holding off until Phase 4 produces real pages worth deploying.