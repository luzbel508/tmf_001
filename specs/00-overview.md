# 00 — Overview

## Project

A portfolio-quality marketing website for **Lucy's Kitchen**, a Tex-Mex / Americana / Mexicana restaurant in Pachuca, Mexico.

- **Name:** Lucy's Kitchen (Pachuca)
- **Cuisine:** Americana • Mexicana • Tex-Mex
- **Address:** Boulevard San Alfonso 99, Local 2b, Zempoala, HG 43845
- **Ordering:** The restaurant does **not** accept online orders. This is an informational / brand site whose only job is to get people to visit or call — not a transactional platform.

## Goal

Build a deployable, portfolio-quality static site. This is a practice project for a full-stack developer, built with Copilot using a simplified spec-driven approach (this file set).

## Tech stack (decided, do not deviate without updating this file)

| Layer | Choice |
|---|---|
| Framework | Next.js, using **static export** (`output: 'export'` in `next.config`) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Hosting | GitHub Pages |
| Language | Spanish only (no i18n/locale switching) |
| Backend | **None.** Fully static, no API routes, no database. |

### Why static export matters (constraints it imposes)

Because this deploys to GitHub Pages via `next export`:
- ❌ No Next.js Image Optimization API (`next/image` must use `unoptimized: true`, or use plain `<img>` with manually optimized assets)
- ❌ No API routes (`/pages/api` or `/app/api`)
- ❌ No server components that fetch data at request time — everything must be resolvable at build time
- ❌ No middleware requiring a Node runtime
- ✅ Client-side interactivity (Framer Motion, the live open/closed badge, mobile nav drawer, menu tab filtering) is all fine — it runs in the browser regardless of static hosting
- ✅ Content can still be structured/typed data (JSON or `.ts` files) consumed at build time — see `02-content-model.md`

### Image handling policy (decided)

Since Next's Image Optimization API doesn't run under static export, this project uses **plain `<img>` tags**, not `next/image`. All real photos (menu, hero, gallery) must be **pre-optimized before they're added to `public/images/`** — resized to sensible display dimensions and compressed (aim for web-reasonable file sizes, not straight-from-camera originals). This is a manual/scripted step during content population (`02-content-model.md`), not something Copilot should be asked to solve at runtime.

## Non-goals (explicitly out of scope)

- Online ordering or a cart of any kind
- Payments
- User accounts / authentication
- A CMS or any way for the owner to edit content without touching code
- A backend API or database
- Reservation form submissions (contact is via phone/WhatsApp link only — see `03-frontend-spec.md`)
- Multi-language support
- Advanced SEO (structured data / schema.org) — basic `<title>`/`<meta>` tags only

## Pages (site map)

1. `/` — Home
2. `/menu` — Menu
3. `/about` — About / Story
4. `/contact` — Contact, location, hours
5. (Optional, see `03-frontend-spec.md`) `/gallery` — Photo gallery, or gallery may live as a section on Home — confirm during build

## Design direction (summary — full detail in `01-brand-content.md`)

Bold, high-energy brand inspired by the **Houston Texans' color palette** (deep steel blue + battle red) — the restaurant owner's favorite team — reimagined as an original Lucy's Kitchen identity. Not a licensed/logo reuse; palette and energy only.

## Accessibility & SEO baseline

- **a11y:** Standard care — semantic HTML, `alt` text on all images, sufficient color contrast. Not targeting a formal WCAG level, but should not fail obvious checks.
- **SEO:** Basic only — accurate `<title>` and `<meta name="description">` per page, and OpenGraph tags for social sharing. No structured data (LocalBusiness schema) for this pass.

## Decisions to lock before Phase 1

- **Gallery placement** (own route `/gallery` vs. a Home section) — this affects whether the navbar needs a 5th link (`03-frontend-spec.md` §Navbar), so resolve it before any component work starts, not during Phase 4 as originally flagged.
- **Final menu category list** — confirm against the real menu before Phase 2 content-population tasks.

## How to use this spec set with Copilot

Read files in order (`00` → `04`). Each spec should be referenced by file name in prompts/comments so Copilot grounds its output in the right constraints, e.g. "per `02-content-model.md`, MenuItem shape is..." `04-tasks.md` is the actual execution checklist; the other files are the source of truth it points back to.
