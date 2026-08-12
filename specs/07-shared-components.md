# Phase 3 — Shared Components

Governing specs: `03-frontend-spec.md`, `02-content-model.md`

Build and manually test each component in isolation (e.g. drop it into a scratch page) before wiring it into real pages in Phase 4.

## 3.1 CTAButton

- **File(s):** `components/CTAButton.tsx`
- **Done when:** Renders primary and secondary visual variants (e.g. filled battle-red vs. outlined), accepts an `href`, and has a consistent hover transition (~200–250ms) matching the convention in `03-frontend-spec.md`.
- **Copilot prompt:**
  > Create a `CTAButton` component with `primary` and `secondary` variants using our Tailwind theme colors (primary = filled battle red, secondary = outlined navy). Accepts `href`, `children`, `variant`. Hover state uses a 200ms transition.

## 3.2 SectionReveal

- **File(s):** `components/SectionReveal.tsx`
- **Done when:** Wraps children in a Framer Motion `whileInView` fade + upward-slide animation (`opacity 0→1`, `y: 20→0`), triggers once per element (`viewport={{ once: true }}`), and is reused (not reimplemented) by every page section that needs a scroll-reveal.
- **Copilot prompt:**
  > Create a `SectionReveal` wrapper component using Framer Motion: fades and slides up on scroll into view, triggering once. Should wrap arbitrary children and be reusable across pages.

## 3.3 Navbar

- **File(s):** `components/Navbar.tsx`, `components/MobileNavDrawer.tsx`
- **Done when:** Desktop navbar hides on scroll-down and reappears on scroll-up; mobile hamburger opens a slide-in side drawer where nav links animate in with a staggered entrance; both link out to `/`, `/menu`, `/about`, `/contact` (Spanish labels).
- **Copilot prompt:**
  > Create a `Navbar` component per `03-frontend-spec.md`: sticky top nav that hides on scroll-down and shows on scroll-up (Framer Motion), with links Inicio/Menú/Sobre nosotros/Contacto. On mobile, a hamburger icon opens a `MobileNavDrawer` — a slide-in side panel with nav links animating in with a staggered stagger effect on open.

## 3.4 Footer

- **File(s):** `components/Footer.tsx`
- **Done when:** Displays address, phone (as a `tel:` link), hours (short form), and social links only — no extra columns or content per the "minimal" decision.
- **Copilot prompt:**
  > Create a minimal `Footer` component: address, a `tel:` phone link, short-form hours, and social links, sourced from `businessInfo`. Keep it visually light — this is intentionally minimal, not a full sitemap footer.

## 3.5 OpenClosedBadge

- **File(s):** `components/OpenClosedBadge.tsx`
- **Done when:** Client component that compares the visitor's current local time against `businessInfo.hours` and renders "Abierto ahora" or "Cerrado" accordingly, updating correctly across different times/days when manually tested.
- **Copilot prompt:**
  > Create a client component `OpenClosedBadge` that reads `businessInfo.hours` and the current time, and renders "Abierto ahora" or "Cerrado" with an appropriate visual style (e.g. green/red dot). Must be a client component (`'use client'`) since it depends on runtime time.

## 3.6 HoursTable

- **File(s):** `components/HoursTable.tsx`
- **Done when:** Renders all seven days from `businessInfo.hours` in order, clearly showing closed days.
- **Copilot prompt:**
  > Create a `HoursTable` component rendering `businessInfo.hours` as a simple table, Monday through Sunday, clearly marking any closed days.

## 3.7 MenuCard

- **File(s):** `components/MenuCard.tsx`
- **Done when:** Displays image, name, description, price (formatted as MXN), and spice/vegetarian tags when present; hover triggers lift (translateY) + shadow increase + image scale ~1.05, using the shared transition timing from `03-frontend-spec.md`.
- **Copilot prompt:**
  > Create a `MenuCard` component accepting a `MenuItem`. Use a plain `<img>` tag (not `next/image` — this project uses static export with pre-optimized images per `00-overview.md`), with a fallback background color for broken/missing image paths per `02-content-model.md`. Show name, description, price formatted in MXN, and spice-level/vegetarian tags if present. On hover: lift with `whileHover`, increase shadow, and scale the image slightly (~1.05) — same transition duration as `CTAButton`.

## 3.8 CategoryTabs

- **File(s):** `components/CategoryTabs.tsx`
- **Done when:** Renders tabs from `MenuCategory[]` in `order`, animates an active-tab indicator between selections, switching tabs animates the panel transition (not an instant swap), and a category with zero items shows a simple "Próximamente" message instead of a blank panel.
- **Copilot prompt:**
  > Create a `CategoryTabs` component accepting `MenuCategory[]` and an `activeCategory` + `onChange` handler. Animate the active-tab underline/indicator with Framer Motion `layoutId`, and animate the panel content transition with `AnimatePresence` when switching categories. If a category has zero items, render a simple "Próximamente" message per `02-content-model.md`.
