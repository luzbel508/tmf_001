# Phase 2 — Content Layer

Governing specs: `02-content-model.md`

## 2.1 Define content types

- **File(s):** `content/types.ts`
- **Done when:** `MenuItem`, `MenuCategory`, `BusinessInfo`, `DayHours`, `GalleryImage` types exist exactly as specified in `02-content-model.md`, with no fields added or removed without a reason noted in a comment.
- **Copilot prompt:**
  > Create `content/types.ts` with these TypeScript interfaces, copied from our content model spec: [paste the type definitions from `02-content-model.md`]. Don't add extra fields — this is the agreed shape.

## 2.2 Populate BusinessInfo

- **File(s):** `content/business-info.ts`
- **Done when:** A single exported `businessInfo: BusinessInfo` object exists with the real address, phone, WhatsApp number, hours, and a working Google Maps embed URL — no placeholder values remaining.
- **Copilot prompt:**
  > Create `content/business-info.ts` exporting a `businessInfo` object matching the `BusinessInfo` type. Use this real data: name "Lucy's Kitchen", cuisine ["Americana", "Mexicana", "Tex-Mex"], address "Boulevard San Alfonso 99, Local 2b, Zempoala, HG 43845". [Provide real phone, WhatsApp number, hours, and map embed URL directly — don't let Copilot invent these.]

## 2.3 Fix root layout metadata and language

- **File(s):** `app/layout.tsx`
- **Done when:** `<html lang="en">` is changed to `<html lang="es">`, and `metadata.title`/`metadata.description` contain real Spanish copy matching the tone direction in `01-brand-content.md` (warm, food-forward, not corporate) — not placeholder or auto-translated text.
- **Note:** This is a content task, not a Copilot task — real Spanish title/description needs to come from you. A `TODO(content)` comment in `app/layout.tsx` marks exactly what to change; delete that comment once this is done.

## 2.4 Confirm final menu categories

- **Done when:** You (not Copilot) have looked at the real menu and confirmed the category list — likely close to `Tex-Mex / Americana / Mexicana / Bebidas` but should match what's actually being served.
- **Note:** This is a decision task, not a Copilot task. Resolve it before 2.5.

## 2.5 Populate menu content

- **File(s):** `content/menu-categories.ts`, `content/menu-items.ts`
- **Done when:** Every category from 2.4 has an entry in `MenuCategory[]`, and every real menu item has a corresponding `MenuItem` entry with correct name, description, price (MXN), category reference, and image path. No invented/placeholder menu items remain.
- **Copilot prompt:**
  > Create `content/menu-categories.ts` and `content/menu-items.ts` matching the `MenuCategory` and `MenuItem` types. Here are the confirmed categories: [list]. Here is the real menu data to populate: [paste real menu items — name, description, price, category, spice level/vegetarian flag where relevant]. Reference image paths as `/images/menu/<slug>.jpg` — actual image files are handled separately.

## 2.6 Add menu photos

- **File(s):** `public/images/menu/`
- **Done when:** Every `MenuItem.image` path in `menu-items.ts` resolves to an actual optimized image file in `public/images/menu/` (reasonable file size for web — flag any oversized originals for compression).
- **Note:** Largely a manual task (dropping in real photos) — Copilot's role here is at most helping write a quick compression/resize script if the raw photos are large.

## 2.7 Populate gallery content

- **File(s):** `content/gallery.ts`, `public/images/gallery/`
- **Done when:** `GalleryImage[]` includes every gallery photo with a real, descriptive (not generic) `alt` value for each — this is the a11y baseline, don't skip it.
- **Copilot prompt:**
  > Create `content/gallery.ts` exporting a `GalleryImage[]` array from these images: [list files/descriptions]. Write a specific, descriptive `alt` for each based on what's actually in the photo — not a generic placeholder like "restaurant photo."