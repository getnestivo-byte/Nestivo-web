// Placeholder Shopify storefront domain — swap this for the real one once
// the store is live. Every outbound Shopify link on the site is composed
// from this single constant, so updating it here updates the whole site.
export const SHOPIFY_DOMAIN = "https://nestivo-store.myshopify.com";

export function productUrl(handle) {
  return `${SHOPIFY_DOMAIN}/products/${handle}`;
}

// Shopify's standard policy page slugs — these resolve automatically once
// the store's policies are filled in under Settings > Policies.
export const POLICY_URLS = {
  shipping: `${SHOPIFY_DOMAIN}/policies/shipping-policy`,
  returns: `${SHOPIFY_DOMAIN}/policies/refund-policy`,
  privacy: `${SHOPIFY_DOMAIN}/policies/privacy-policy`,
  terms: `${SHOPIFY_DOMAIN}/policies/terms-of-service`,
};

export const CONTACT_EMAIL = "hello@nestivo.com";

// Builds a Shopify cart permalink (`/cart/{variantId}:{qty},...`) from cart
// line items so checkout can hand off to the real Shopify cart/checkout
// flow. Lines without a variantId are skipped — that only happens if this
// is ever called with placeholder data, since `CartContext` refuses to add
// unavailable products in the first place.
export function buildCartCheckoutUrl(items) {
  const lines = items
    .filter((line) => line.variantId)
    .map((line) => `${line.variantId}:${line.quantity}`)
    .join(",");
  return lines ? `${SHOPIFY_DOMAIN}/cart/${lines}` : `${SHOPIFY_DOMAIN}/cart`;
}
