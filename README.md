# Nestivo

Homepage for Nestivo, a minimalist apparel brand selling city-map-inspired
and retro-badge t-shirt designs. Built with React, Vite, Tailwind CSS, and
Framer Motion for scroll-in animations.

## Getting started

```bash
npm install
npm run dev
```

## Structure

- `src/components/` — one component per homepage section (Nav, Hero,
  FeaturedCollection, OurStory, CollectionTiles, EmailSignup, Footer), plus
  shared bits (`Reveal.jsx` for scroll animations, `icons.jsx`).
- `src/data/products.js` — static placeholder product & collection data.
- `src/lib/productService.js` — the single entry point every component uses
  to fetch products/collections (`fetchFeaturedProducts`,
  `fetchCollections`). It currently returns the static data from
  `data/products.js`. **To go live with Shopify**, replace the bodies of
  these two functions with Storefront API calls that resolve to the same
  shape — nothing else in the app needs to change.

No Shopify API, cart, or checkout logic is wired up yet — this is UI only.
