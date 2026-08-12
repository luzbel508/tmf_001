# Phase 4 — Pages

Governing specs: `03-frontend-spec.md`, `01-brand-content.md`

Assumes Phase 3 components are built and manually verified. Each page task should compose existing components rather than writing new bespoke UI inline — if a page seems to need something not in Phase 3, stop and add it as a proper component first.

## 4.1 Confirm gallery placement decision carried in

- **Done when:** You're building against the gallery placement decision already made in `00-overview.md` §Decisions to lock before Phase 1 (moved earlier in the process since it affects the navbar built in Phase 3). If it's somehow still unresolved at this point, stop and resolve it before continuing.

## 4.2 Home (`/`)

- **File(s):** `app/page.tsx`
- **Done when:** Full-bleed hero (image or video) with animated headline/tagline overlay and two CTAs ("Ver menú," "Cómo llegar") is above the fold; `OpenClosedBadge` or hours-at-a-glance is visible without scrolling on desktop; teaser sections linking to Menu/About/Contact use `SectionReveal`; gallery section included here if 4.1 decided against a separate route.
- **Copilot prompt:**
  > Build the Home page (`app/page.tsx`) per `03-frontend-spec.md`: full-bleed hero with [image/video] of a signature dish, animated text overlay (headline + tagline), primary CTA "Ver menú" and secondary CTA "Cómo llegar." Below the fold, add the `OpenClosedBadge`, then teaser sections for Menu/About/Contact each wrapped in `SectionReveal`. [If gallery lives here: add a gallery section per the decision in 4.1.]

## 4.3 Menu (`/menu`)

- **File(s):** `app/menu/page.tsx`
- **Done when:** `CategoryTabs` controls which category's `MenuCard` grid is shown; all real menu data from `content/menu-items.ts` renders correctly; page has correct `<title>`/`<meta description>` (can be a placeholder now, finalized in Phase 5).
- **Copilot prompt:**
  > Build the Menu page (`app/menu/page.tsx`) using `CategoryTabs` and a grid of `MenuCard` components, sourced from `content/menu-items.ts` and `content/menu-categories.ts`. Default to the first category by `order`.

## 4.4 About (`/about`)

- **File(s):** `app/about/page.tsx`
- **Done when:** Short copy (a few sentences, tone per `01-brand-content.md`) + one large photo. Intentionally simple — flag it if the page starts accumulating more sections than that.
- **Copilot prompt:**
  > Build the About page (`app/about/page.tsx`): short, warm copy about Lucy's Kitchen's story (a few sentences, not a long narrative) alongside one large photo. Keep this page intentionally minimal.

## 4.5 Contact (`/contact`)

- **File(s):** `app/contact/page.tsx`
- **Done when:** Embedded Google Map and address/hours block sit side by side on desktop, stacked on mobile; `OpenClosedBadge` and `HoursTable` both present; phone (`tel:`) and WhatsApp (`wa.me`) CTA links present; no contact form anywhere on the page.
- **Copilot prompt:**
  > Build the Contact page (`app/contact/page.tsx`): embedded Google Map (`businessInfo.mapEmbedUrl`) side by side with an info block containing `OpenClosedBadge`, `HoursTable`, and `CTAButton`s for phone (`tel:${businessInfo.phone}`) and WhatsApp (`https://wa.me/${businessInfo.whatsapp}` — `whatsapp` is already digits-only with country code per `02-content-model.md`, don't reformat it). Side-by-side on desktop, stacked on mobile. No form. After building, manually test the WhatsApp link opens correctly — a malformed number fails silently.

## 4.6 Gallery (if its own route per 4.1)

- **File(s):** `app/gallery/page.tsx`
- **Done when:** Renders `GalleryImage[]` using the scroll-animation style decided in `03-frontend-spec.md` (parallax or horizontal scroll), tested on mobile specifically since this is flagged as higher-risk for small viewports.
- **Copilot prompt:**
  > Build the Gallery page (`app/gallery/page.tsx`) rendering `content/gallery.ts` images in a [parallax grid / horizontal-scroll] layout using Framer Motion scroll-linked animation. Test and adjust behavior specifically for mobile viewport widths.
