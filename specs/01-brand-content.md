# 01 — Brand & Content

## Positioning

Lucy's Kitchen is Pachuca's Tex-Mex spot — American comfort food meets Mexican flavor, in a market that's mostly straight-Mexican or straight-American chains. The brand should lean into that hybrid identity confidently, not apologize for it or blend into generic "Mexican restaurant" visual tropes.

**Primary site goal:** since there's no online ordering, every page should funnel toward one of two actions — **get directions** or **call/WhatsApp**. Treat these as the site's real conversion goals when prioritizing what's above the fold.

## Visual identity

### Color palette — Houston Texans–inspired

Pulling from the Texans' palette (colors only — not their logo, wordmark, or any protected mark):

| Role | Color | Approx. hex |
|---|---|---|
| Primary / dark | Deep steel/navy blue | `#03202F` |
| Accent / energy | Battle red | `#A71930` |
| Secondary neutral | Off-white / cream | `#F5F1E8` |
| Supporting neutral | Warm charcoal | `#1A1A1A` |
| Optional highlight | Mustard/gold (Tex-Mex warmth, breaks up the blue/red duo) | `#D9A441` |

> **Note:** these hex values are an approximation of the Texans' palette for inspiration purposes, not sourced from an official brand kit. Do a quick visual sanity check before locking them into `tailwind.config.ts` in Phase 1 — swap freely if they don't feel right once you see them applied.

Use navy as the dominant background/structural color, red as the CTA/accent color (buttons, hover states, tags), cream as body background/text-on-dark, and mustard sparingly for warmth (icons, dividers, spice-level tags).

### Typography

- **Headings:** Bold display font — something with weight and character (e.g. a condensed or slab display face). Should feel confident, a little athletic/bold given the Texans influence, not delicate.
- **Body:** Clean, highly legible sans-serif, comfortable at small sizes for menu descriptions.
- Pair a strong display font with a neutral workhorse sans — classic two-font system, no third font needed.

### Logo / mark

An original Lucy's Kitchen wordmark or simple icon mark (not a Texans logo derivative) in the navy/red palette. Simple enough to work small (favicon, footer) and large (hero).

## Tone of voice

Casual, warm, food-forward. Written like a friendly local recommendation, not corporate copy. Short sentences. Let the food and the place speak for themselves — avoid superlative-stuffed marketing language ("the best," "unforgettable") in favor of specific, sensory detail.

## Content inventory (what's needed per page)

### Home
- Hero: full-bleed image or video of a signature dish, animated headline + short tagline, primary CTA ("Ver menú" / "Cómo llegar")
- Hours-at-a-glance or open/closed badge
- Short teaser sections linking to Menu, About, Contact/Location

### Menu
- Real menu items, organized by category (categories TBD from real content — likely something like: Tex-Mex, Americana, Mexicana, Bebidas)
- Per item: name, short description, price (MXN), dietary/spice tags where applicable
- Real food photography

### About
- Short & punchy: a few sentences on Lucy's Kitchen's story/philosophy + one large photo. Not a long-form narrative.

### Contact
- Address, phone, WhatsApp link
- Hours table + live open/closed badge
- Embedded Google Map

### Gallery (page or section — confirm placement during build)
- Food + interior photography, presented as a scroll-animated (parallax or horizontal-scroll) gallery

### Footer (site-wide)
- Address, phone, hours, social links only — kept minimal

## Content the user will supply

Real photos and real menu items are available and should be dropped into the content model (`02-content-model.md`) rather than using placeholder/stock content. Copilot should scaffold with clearly-marked placeholder data only where real content hasn't been provided yet, and flag those spots for follow-up.
