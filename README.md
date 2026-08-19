# Nestivo

Site for Nestivo, a minimalist apparel brand selling city-map-inspired and
retro-badge t-shirt designs. Built with React, Vite, Tailwind CSS,
React Router, and Framer Motion for scroll-in animations.

## Getting started

```bash
npm install
npm run dev
```

## Pages

Routed client-side with `react-router-dom` (`HashRouter`, so it works on
GitHub Pages without server-side rewrites):

- `/` — home (hero, featured products, story teaser, collection tiles)
- `/shop` — all products
- `/products/:handle` — product detail (gallery, size select, add-to-bag UI)
- `/collections` — all collections
- `/collections/:id` — collection detail (its products)
- `/about` — full brand story
- any other path — 404

## Structure

- `src/pages/` — one component per route.
- `src/components/` — shared UI: `Layout.jsx` (Nav + page content +
  EmailSignup + Footer, used by every route), `Nav`, `Footer`, `Hero`,
  `FeaturedCollection`, `OurStory`, `CollectionTiles`, `EmailSignup`,
  `ProductCard`, `CollectionCard`, `Reveal.jsx` (scroll animations),
  `ScrollToTop.jsx` (resets scroll on route change), `icons.jsx`.
- `src/data/products.js` — static placeholder product & collection data.
- `src/lib/productService.js` — the single entry point every page/component
  uses to fetch products/collections (`fetchFeaturedProducts`,
  `fetchAllProducts`, `fetchProductByHandle`, `fetchCollections`,
  `fetchCollectionById`, `fetchProductsByCollection`). It currently returns
  the static data from `data/products.js`. **To go live with Shopify**,
  replace the bodies of these functions with Storefront API calls that
  resolve to the same shape — nothing else in the app needs to change.

No Shopify API, cart, or checkout logic is wired up yet — "Add to Bag" is UI
only (no cart state is persisted or shared across pages).
