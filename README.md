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
- `/products/:handle` — product detail (gallery, size select, Add to Cart /
  Buy Now — both link out to the Shopify storefront)
- `/collections` — all collections
- `/collections/:id` — collection detail (its products)
- `/about` — full brand story
- `/contact` — email contact
- any other path — branded 404

Every page sets its own `document.title` and meta description via
`components/Seo.jsx`.

## Structure

- `src/pages/` — one component per route.
- `src/components/` — shared UI: `Layout.jsx` (Nav + page content +
  EmailSignup + Footer, used by every route), `Nav`, `Footer`, `Hero`,
  `FeaturedCollection`, `OurStory`, `CollectionTiles`, `EmailSignup`,
  `ProductCard`, `CollectionCard`, `Seo.jsx` (per-page title/meta
  description), `Reveal.jsx` (scroll animations), `ScrollToTop.jsx` (resets
  scroll on route change), `icons.jsx`.
- `src/data/products.js` — static placeholder product & collection data.
- `src/lib/productService.js` — the single entry point every page/component
  uses to fetch products/collections (`fetchFeaturedProducts`,
  `fetchAllProducts`, `fetchProductByHandle`, `fetchCollections`,
  `fetchCollectionById`, `fetchProductsByCollection`). It currently returns
  the static data from `data/products.js`. **To go live with Shopify**,
  replace the bodies of these functions with Storefront API calls that
  resolve to the same shape — nothing else in the app needs to change.
- `src/lib/shopify.js` — the placeholder Shopify storefront domain
  (`SHOPIFY_DOMAIN`) plus the helpers built on it: `productUrl(handle)` for
  Add to Cart / Buy Now links, `POLICY_URLS` for the footer's Shipping,
  Returns, Privacy, and Terms links, and `CONTACT_EMAIL`. **Swap the real
  Shopify domain into `SHOPIFY_DOMAIN`** once the store is live — every
  outbound link on the site updates automatically.

No Shopify Storefront API, cart, or checkout logic is wired up in this app —
Add to Cart / Buy Now open the Shopify store in a new tab to complete
checkout there.
