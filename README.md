# Sherpa Reserve — The Original Chew

A premium showcase website for **Sherpa Reserve**, a Nepali brand selling *The Original Chew* — a natural Himalayan churpi dog chew. This is a portfolio / demo site designed to deploy free on Vercel's Hobby tier with zero backend infrastructure.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom forest-green / brass-gold / bone design system
- **Framer Motion** — scroll reveals, hover states, page transitions
- **Zustand** — client-side cart state (persisted to `localStorage`)
- Product data as static TypeScript objects — no database
- Mock order handler at `app/api/order/route.ts` (logs server-side, returns a mock confirmation)

## Pages

| Route        | Description                                                        |
| ------------ | ----------------------------------------------------------------- |
| `/`          | Full-bleed dark hero, brand story teaser, three tiers, ingredient honesty, final CTA |
| `/story`     | Editorial heritage / sourcing narrative with scroll-driven reveals |
| `/shop`      | Three breed-size tiers (Small / Medium / Large), NPR pricing, breed-size guidance |
| `/cart`      | Client-side cart with quantity steppers                            |
| `/checkout`  | Name / phone / district / address form → mock confirmation screen  |
| `/faq`       | Safety, durability, ingredients, delivery — categorized accordions |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — **no environment variables or external services required.** The framework is auto-detected as Next.js.

## Brand system

- **Forest** `#0F1F1A` — dominant dark surface
- **Gold / brass** `#C9A86A` — accents, lines, headlines
- **Bone / cream** `#F2EBDD` — light contrast sections
- Display serif: **Cormorant Garamond** (refined high-contrast, Canela-spirit)
- Body sans: **Inter**
- Recurring motif: minimal mountain line-art, used sparingly

## Swapping the mock order handler for a real one

The checkout posts JSON to `/api/order`. To use [Formspree](https://formspree.io) instead, point the `fetch` in `app/checkout/page.tsx` at your Formspree endpoint, or replace the body of `app/api/order/route.ts` with your own handler. No other changes needed.

---

*Demo showcase — no real orders are processed and no personal data is stored.*
