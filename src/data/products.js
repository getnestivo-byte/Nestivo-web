// Static placeholder product data.
// Shape mirrors what a Shopify Storefront API product-fetch would return
// (id, handle, name, price, image, collection) so `lib/productService.js`
// can be repointed at a real API without touching any component.

export const products = [
  {
    id: "p1",
    handle: "midnight-grid-tee",
    name: "Midnight Grid Tee",
    price: 38,
    image: "https://placehold.co/600x750/2b2b2b/f5f1e8?text=Midnight+Grid",
    collection: "cities",
  },
  {
    id: "p2",
    handle: "riverside-badge-tee",
    name: "Riverside Badge Tee",
    price: 36,
    image: "https://placehold.co/600x750/433633/f5f1e8?text=Riverside+Badge",
    collection: "retro-badges",
  },
  {
    id: "p3",
    handle: "harbor-lines-tee",
    name: "Harbor Lines Tee",
    price: 38,
    image: "https://placehold.co/600x750/6b5b53/f5f1e8?text=Harbor+Lines",
    collection: "cities",
  },
  {
    id: "p4",
    handle: "summit-club-tee",
    name: "Summit Club Tee",
    price: 34,
    image: "https://placehold.co/600x750/2b2b2b/f5f1e8?text=Summit+Club",
    collection: "retro-badges",
  },
];

export const collections = [
  {
    id: "cities",
    name: "Cities",
    description: "Street grids and skylines, mapped onto cotton.",
    image: "https://placehold.co/800x1000/2b2b2b/f5f1e8?text=Cities",
  },
  {
    id: "retro-badges",
    name: "Retro Badges",
    description: "Vintage-style emblems with a modern cut.",
    image: "https://placehold.co/800x1000/433633/f5f1e8?text=Retro+Badges",
  },
  {
    id: "monochrome",
    name: "Monochrome",
    description: "Tonal designs, quietly bold.",
    image: "https://placehold.co/800x1000/6b5b53/f5f1e8?text=Monochrome",
  },
];
