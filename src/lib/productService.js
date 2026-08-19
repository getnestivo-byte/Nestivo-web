// Single entry point for all product/collection data fetching.
//
// Everything else in the app (components, hooks) calls into this file only —
// never imports `data/products.js` directly. To go live with Shopify,
// replace the bodies below with Storefront API calls (e.g. via
// `@shopify/storefront-api-client`) that return the same shape and nothing
// elsewhere in the app needs to change.

import { products, collections } from "../data/products.js";

export async function fetchFeaturedProducts() {
  return products;
}

export async function fetchCollections() {
  return collections;
}
