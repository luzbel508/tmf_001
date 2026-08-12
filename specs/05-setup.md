# Phase 1 — Setup

Governing specs: `00-overview.md`

## 0.1 Lock pre-build decisions (before any Copilot task)

- **Done when:** Both decisions in `00-overview.md` §Decisions to lock before Phase 1 are resolved: gallery placement (own route vs. Home section) and the final menu category list. Gallery placement specifically affects the Navbar built in Phase 3, so resolve it now rather than later.
- **Note:** This is a you-decision, not a Copilot task.

## 1.1 Scaffold Next.js with static export

- **File(s):** `next.config.ts` (or `.js`), project root
- **Done when:** `next build` produces a fully static `out/` directory with no build errors, and `next.config` has `output: 'export'` set.
- **Copilot prompt:**
  > Scaffold a new Next.js project (App Router, TypeScript) configured for static export via `output: 'export'` in `next.config.ts`. No API routes, no server-only features — this site will deploy to GitHub Pages as static files.

## 1.2 Install and configure Tailwind CSS

- **File(s):** `tailwind.config.ts`, `app/globals.css`
- **Done when:** Tailwind utility classes work in a test component, and the color palette from `01-brand-content.md` is registered as named theme colors (not just used ad hoc as arbitrary hex values).
- **Copilot prompt:**
  > Install and configure Tailwind CSS for this Next.js App Router project. Extend the theme with these custom colors from our brand spec: `navy: #03202F`, `battleRed: #A71930`, `cream: #F5F1E8`, `charcoal: #1A1A1A`, `mustard: #D9A441`. Register the display font and body font as theme font families (font files/imports TBD in task 1.4).

## 1.3 Install Framer Motion

- **File(s):** `package.json`
- **Done when:** Framer Motion is installed and a trivial test component (e.g. a fade-in div) renders and animates correctly in dev mode.
- **Copilot prompt:**
  > Install Framer Motion and create a one-off test component that fades and slides in on mount, so I can confirm the setup works before building real components.

## 1.4 Set up fonts

- **File(s):** `app/layout.tsx` (or `app/fonts.ts`), `tailwind.config.ts`
- **Done when:** A bold display font (headings) and a clean sans-serif (body) are loaded via `next/font` and available as Tailwind font-family utilities, e.g. `font-display` / `font-body`.
- **Copilot prompt:**
  > Set up two fonts using `next/font/google` (or local fonts if we're using a licensed display font): a bold display font for headings and a clean sans-serif for body text, per `01-brand-content.md`'s typography direction. Wire them into `layout.tsx` and expose them as Tailwind font-family utilities.

## 1.5 Configure GitHub Pages deploy

- **File(s):** `.github/workflows/deploy.yml`
- **Done when:** Pushing to `main` triggers a GitHub Actions workflow that builds the static export and publishes it to GitHub Pages, and the deployed URL loads successfully.
- **Copilot prompt:**
  > Add a GitHub Actions workflow that builds this Next.js static-export project on push to `main` and deploys the `out/` directory to GitHub Pages.

## Open decision to resolve before Phase 2

- Confirm whether the project uses TypeScript (recommended, referenced throughout the specs) or plain JS — affects how `02-content-layer.md` tasks are written.
