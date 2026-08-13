# 02 — Content Model

Since the site is fully static (no backend, no CMS), all content lives in structured data files consumed at build time — not hardcoded into JSX. This keeps components clean and makes the "portfolio-quality" bar easier to hit.

Recommend a `/content` or `/data` directory of typed `.ts` files (preferred, gives type safety with Next.js/TS) or `.json` files if the project isn't using TypeScript.

## MenuItem

```ts
type SpiceLevel = 0 | 1 | 2 | 3; // 0 = not spicy, 3 = very spicy

interface MenuItem {
  id: string;              // slug, e.g. "queso-fundido"
  name: string;
  description: string;     // short, one or two sentences
  price: number;           // MXN, no currency symbol — format at render time
  category: string;        // references MenuCategory.id
  image: string;           // path to real photo
  spiceLevel?: SpiceLevel; // omit if not applicable
  vegetarian?: boolean;
  featured?: boolean;      // e.g. for homepage teasers
}
```

## MenuCategory

```ts
interface MenuCategory {
  id: string;       // e.g. "tex-mex", "americana", "mexicana", "bebidas"
  label: string;    // display name in Spanish, e.g. "Tex-Mex"
  order: number;    // controls tab order on /menu
}
```

Confirm final category list against the real menu content once it's dropped in — the four above are a reasonable starting guess based on the restaurant's stated cuisine ("Americana • Mexicana • Tex-Mex") plus a drinks category.

## BusinessInfo

```ts
interface DayHours {
  day: "lunes" | "martes" | "miércoles" | "jueves" | "viernes" | "sábado" | "domingo";
  open: string | null;   // "13:00" — null if closed that day
  close: string | null;  // "22:00"
}

interface BusinessInfo {
  name: "Lucy's Kitchen";
  cuisine: string[];       // ["Americana", "Mexicana", "Tex-Mex"]
  address: string;         // "Blvd. San Alfonso 99-Mz 7 Lt 2 Local 1A, Ejido de, 43845 Jagüey de Téllez, Hgo."
  phone: string;           // for tel: links — E.164-ish, e.g. "+527711234567"
  whatsapp: string;        // digits only, no "+", no spaces, country code included — e.g. "527711234567"
                            // consumed as `https://wa.me/${businessInfo.whatsapp}` — wrong format here breaks the link silently
  mapEmbedUrl: string;     // Google Maps embed URL
  hours: DayHours[];
  socials?: { platform: string; url: string }[];
}
```

**Format note:** `whatsapp` must be digits-only with country code (e.g. Mexico: `52` + 10-digit number, no leading `0` or `+`). Test the resulting `wa.me` link manually once real data is entered — a malformed number fails silently (opens WhatsApp with no contact) rather than erroring visibly.

This single `BusinessInfo` object is consumed by: the Contact page (address/hours/map), the footer (address/phone/hours/socials), and the live open/closed badge (compares current time against `hours`).

## GalleryImage

```ts
interface GalleryImage {
  id: string;
  src: string;
  alt: string;       // required — a11y baseline
  caption?: string;
}
```

## Where placeholder vs. real content applies

- **Menu items, categories, photos:** real content is available — populate from it directly, don't placeholder these.
- Anything not yet supplied (e.g. final gallery image set, exact hours if not yet finalized) should use clearly-marked placeholder values Copilot can flag (e.g. a `// TODO: confirm real hours` comment) rather than inventing realistic-looking fake data that could get missed later.

## Empty states & broken content (decided — keep it simple)

This is a tiny static site with content the owner controls, so don't over-engineer defensive handling. Two things are worth deciding explicitly rather than leaving accidental:

- **A menu category with zero items:** shouldn't happen once content is populated correctly, but if it does during development, `CategoryTabs` should render the tab with a simple "Próximamente" message rather than a blank panel or a crash.
- **A missing/404 image:** use a plain CSS background color (one of the theme neutrals) as a fallback behind `<img>` so a broken image path degrades to a blank card, not a broken-image icon. No image-loading-state UI beyond that is needed.

## Open/closed badge logic (spec, not implementation)

A small client component reads `BusinessInfo.hours`, compares against the visitor's local current time, and renders "Abierto ahora" / "Cerrado" accordingly. This is pure client-side logic against static data — no API call, no backend, consistent with the static-export constraint in `00-overview.md`.
