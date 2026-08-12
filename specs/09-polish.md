# Phase 5 — Polish Pass

Governing specs: `00-overview.md` (a11y/SEO baseline), `03-frontend-spec.md`

## 5.1 SEO meta per page

- **File(s):** `app/*/page.tsx` (`metadata` export in each route)
- **Done when:** Every route has a distinct, accurate `<title>` and `<meta name="description">`, plus `og:title`/`og:description`/`og:image` for social sharing.
- **Copilot prompt:**
  > Add a Next.js `metadata` export to each page (`app/page.tsx`, `app/menu/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`[, `app/gallery/page.tsx`]) with a distinct title, description, and OpenGraph tags appropriate to that page's content.

## 5.2 Favicon and browser tab treatment

- **File(s):** `app/favicon.ico` / `app/icon.tsx`
- **Done when:** A favicon based on the Lucy's Kitchen mark (per `01-brand-content.md`) appears correctly in the browser tab.
- **Copilot prompt:**
  > Set up a favicon for this Next.js App Router project using our logo mark, following Next's `app/icon` conventions.

## 5.3 Alt text audit

- **Done when:** Every `<img>`/`Image` in the codebase has a specific, descriptive `alt` — none missing, none generic ("image1," "photo").
- **Note:** This is a review task — grep the codebase for image usages and check each one manually rather than trusting Copilot to self-audit its own prior output.

## 5.4 Contrast check

- **Done when:** Hero text-over-image (and any other text-on-image element) is legible at a glance — add a gradient/scrim behind text if the underlying image contrast is inconsistent.
- **Copilot prompt:**
  > Review the Home page hero text overlay for contrast against the background image/video. If contrast is inconsistent across the image, add a dark gradient scrim behind the text rather than relying on the raw image.

## 5.5 Mobile pass

- **Done when:** Hero, gallery (parallax/horizontal-scroll), and mobile nav drawer all behave correctly at common mobile viewport widths (test at minimum 375px and 414px) — no overflow, no broken animations, no unreachable content.
- **Note:** Manually test in devtools responsive mode across all pages — this is the highest-risk area given the animation-heavy design decisions.

## 5.6 Lighthouse pass

- **Done when:** A Lighthouse run (Chrome DevTools or CLI) on the built static export shows reasonable scores across Performance, Accessibility, Best Practices, and SEO — no glaring failures (e.g. missing alt text flagged again, huge unoptimized images).
- **Note:** Run this against the actual static export output, not the dev server, since static-export-specific issues (like unoptimized `next/image` usage) won't show up the same way in dev mode.
