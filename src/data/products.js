// Static placeholder product data.
// Shape mirrors what a Shopify Storefront API product-fetch would return
// (id, handle, variantId, name, price, description, images, sizes, collection)
// so `lib/productService.js` can be repointed at a real API without touching
// any component. `variantId` is null because none of these products exist
// in the Shopify store yet — `context/CartContext.jsx` treats a null
// variantId as "not available in store yet" and blocks add-to-cart until
// the real Storefront API is wired up and returns real variant IDs.

const SIZES = ["S", "M", "L", "XL"];

export const products = [
  {
    id: "p1",
    handle: "midnight-grid-tee",
    variantId: null,
    name: "Midnight Grid Tee",
    price: 38,
    description:
      "A hand-traced street grid, screen-printed in a single tone across the chest. Heavyweight 100% cotton, garment-dyed for a worn-in feel from day one.",
    images: [
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Midnight+Grid+1",
      "https://placehold.co/900x1125/433633/f5f1e8?text=Midnight+Grid+2",
    ],
    sizes: SIZES,
    collection: "cities",
  },
  {
    id: "p2",
    handle: "riverside-badge-tee",
    variantId: null,
    name: "Riverside Badge Tee",
    price: 36,
    description:
      "An original badge design inspired by mid-century travel patches, reworked for a modern silhouette. Printed on heavyweight cotton.",
    images: [
      "https://placehold.co/900x1125/433633/f5f1e8?text=Riverside+Badge+1",
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Riverside+Badge+2",
    ],
    sizes: SIZES,
    collection: "retro-badges",
  },
  {
    id: "p3",
    handle: "harbor-lines-tee",
    variantId: null,
    name: "Harbor Lines Tee",
    price: 38,
    description:
      "Coastline contours rendered as a minimal line drawing. A quiet, editorial take on the city-map series.",
    images: [
      "https://placehold.co/900x1125/6b5b53/f5f1e8?text=Harbor+Lines+1",
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Harbor+Lines+2",
    ],
    sizes: SIZES,
    collection: "cities",
  },
  {
    id: "p4",
    handle: "summit-club-tee",
    variantId: null,
    name: "Summit Club Tee",
    price: 34,
    description:
      "A retro alpine-club emblem, printed small on the chest. Soft-washed cotton with a relaxed, lived-in fit.",
    images: [
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Summit+Club+1",
      "https://placehold.co/900x1125/433633/f5f1e8?text=Summit+Club+2",
    ],
    sizes: SIZES,
    collection: "retro-badges",
  },
  {
    id: "p5",
    handle: "uptown-blocks-tee",
    variantId: null,
    name: "Uptown Blocks Tee",
    price: 38,
    description:
      "Dense city blocks abstracted into a repeating grid motif. Part of the Cities series, printed in tonal ink.",
    images: [
      "https://placehold.co/900x1125/433633/f5f1e8?text=Uptown+Blocks+1",
      "https://placehold.co/900x1125/6b5b53/f5f1e8?text=Uptown+Blocks+2",
    ],
    sizes: SIZES,
    collection: "cities",
  },
  {
    id: "p6",
    handle: "field-station-tee",
    variantId: null,
    name: "Field Station Tee",
    price: 34,
    description:
      "A vintage field-research badge, redrawn with a cleaner line weight. Small-batch printed on heavyweight cotton.",
    images: [
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Field+Station+1",
      "https://placehold.co/900x1125/6b5b53/f5f1e8?text=Field+Station+2",
    ],
    sizes: SIZES,
    collection: "retro-badges",
  },
  {
    id: "p7",
    handle: "tonal-form-tee",
    variantId: null,
    name: "Tonal Form Tee",
    price: 36,
    description:
      "A single abstract form in tone-on-tone ink. The quietest piece in the collection, and the most versatile.",
    images: [
      "https://placehold.co/900x1125/6b5b53/f5f1e8?text=Tonal+Form+1",
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Tonal+Form+2",
    ],
    sizes: SIZES,
    collection: "monochrome",
  },
  {
    id: "p8",
    handle: "greyscale-grid-tee",
    variantId: null,
    name: "Greyscale Grid Tee",
    price: 36,
    description:
      "A muted, monochrome reprint of our original grid motif. Same design, quieter palette.",
    images: [
      "https://placehold.co/900x1125/433633/f5f1e8?text=Greyscale+Grid+1",
      "https://placehold.co/900x1125/2b2b2b/f5f1e8?text=Greyscale+Grid+2",
    ],
    sizes: SIZES,
    collection: "monochrome",
  },
];

export const collections = [
  {
    id: "cities",
    name: "Cities",
    description: "Street grids and skylines, mapped onto cotton.",
    image: "https://placehold.co/1200x1500/2b2b2b/f5f1e8?text=Cities",
  },
  {
    id: "retro-badges",
    name: "Retro Badges",
    description: "Vintage-style emblems with a modern cut.",
    image: "https://placehold.co/1200x1500/433633/f5f1e8?text=Retro+Badges",
  },
  {
    id: "monochrome",
    name: "Monochrome",
    description: "Tonal designs, quietly bold.",
    image: "https://placehold.co/1200x1500/6b5b53/f5f1e8?text=Monochrome",
  },
];
