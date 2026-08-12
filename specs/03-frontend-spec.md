# 03 — Frontend Spec

Next.js (static export) + Tailwind CSS + Framer Motion. Multi-page structure using the App Router (or Pages Router — pick one and stay consistent; App Router is the modern default for new Next.js projects).

## Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/menu` | Menu |
| `/about` | About |
| `/contact` | Contact, location, hours |
| `/gallery` *(optional — decide during build whether this is a page or a Home section)* | Gallery |

## Global layout

### Navbar
- Sticky top navbar.
- **Scroll behavior:** hides when scrolling down, reappears when scrolling up (Framer Motion `useScroll` + `useMotionValueEvent`, or a simple scroll-direction hook driving a `translateY` animation).
- **Mobile:** hamburger icon opens a **slide-in side drawer**. Nav links animate in with a staggered entrance (Framer Motion `staggerChildren`).
- Links: Home, Menú, Sobre nosotros, Contacto (Spanish labels — confirm final copy against `01-brand-content.md` tone).

### Footer
- Minimal: address, phone (click-to-call `tel:` link), hours (short form, or link to full hours on Contact), social links.
- No large multi-column footer — keep it tight.

## Page-by-page

### Home (`/`)
- **Hero:** full-bleed image or video background of a signature dish. Animated headline + tagline overlay (fade/slide in on load). Primary CTA button ("Ver menú") and secondary CTA ("Cómo llegar") — both above the fold.
- Hours-at-a-glance or the open/closed badge (component shared with Contact page — see `02-content-model.md`).
- Teaser sections linking to Menu / About / Contact, each a candidate for scroll-triggered reveal animation (Framer Motion `whileInView`).

### Menu (`/menu`)
- **Category tabs** at the top, animated transition between category panels (Framer Motion `AnimatePresence` + layout animation, e.g. an animated tab-indicator underline).
- Grid of **MenuCard** components below the active tab.
- **MenuCard:** image, name, description, price, spice/vegetarian tags. **Hover interaction:** lift (translateY) + shadow increase + subtle image zoom (scale ~1.05), driven by Framer Motion `whileHover`.
- Data sourced from `MenuItem[]` / `MenuCategory[]` per `02-content-model.md`.

### About (`/about`)
- Short & punchy: a few sentences of copy + one large photo. Simple layout — no timeline, no team grid. Resist the urge to over-build this page; it's intentionally light.

### Contact (`/contact`)
- Embedded Google Map + address/hours **side by side** (map on one side, info block on the other; stack vertically on mobile).
- Live **open/closed badge**.
- Full hours table.
- Phone (`tel:`) and WhatsApp (`wa.me`) CTA buttons/links — no contact form.

### Gallery (page or Home section)
- **Scroll-animated** layout: parallax effect on scroll, or horizontal-scroll gallery (decide one — horizontal scroll is more distinctive/portfolio-worthy but more complex to make work well on mobile; parallax grid is safer). Recommend the team make this call once real photos are in hand and their aspect ratios are known.
- Images use `GalleryImage[]` from `02-content-model.md`; every image requires `alt` text (a11y baseline).

## Shared components (build once, reuse)

- `Navbar` (with scroll-hide behavior + mobile drawer)
- `Footer`
- `Hero` (Home only, but keep it a distinct component)
- `MenuCard`
- `CategoryTabs`
- `OpenClosedBadge`
- `HoursTable`
- `CTAButton` (primary/secondary variants — used for "Ver menú," "Cómo llegar," "Llamar," "WhatsApp")
- `SectionReveal` — a thin wrapper component applying the standard scroll-triggered fade/slide-in animation, so individual pages don't reimplement the same Framer Motion variants repeatedly

## Animation conventions (keep consistent across the site)

- Page/section entrances: fade + slight upward slide (`opacity: 0→1`, `y: 20→0`)
- Scroll-triggered reveals: `whileInView`, trigger once (`viewport={{ once: true }}`) so re-scrolling doesn't re-trigger and feel noisy
- Hover states: consistent easing/duration across MenuCard, CTAButton, nav links — pick one duration (e.g. 200–250ms) and reuse it as a shared Framer Motion transition config rather than redefining per component

## Responsive

Mobile-first Tailwind conventions (`sm:`, `md:`, `lg:` breakpoints). Given the horizontal-scroll/parallax gallery and full-bleed hero, test mobile behavior early rather than as an afterthought — those two are the highest-risk-for-mobile elements on the site.

## Accessibility & SEO implementation notes

- Semantic landmarks: `<nav>`, `<main>`, `<footer>`, proper heading hierarchy (one `<h1>` per page)
- All images require `alt` text
- Ensure text-on-image (hero overlay, nav-on-image if applicable) meets basic contrast — may need a gradient/scrim behind text rather than relying on raw image contrast
- Per-page `<title>` and `<meta name="description">`, plus OpenGraph tags (`og:title`, `og:description`, `og:image`) for social sharing — set via Next.js `metadata` export per route
