import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductByHandle } from "../lib/productService.js";
import { buildCartCheckoutUrl } from "../lib/shopify.js";
import { isProductAvailable, useCart } from "../context/CartContext.jsx";
import Seo from "../components/Seo.jsx";
import NotFound from "./NotFound.jsx";

export default function Product() {
  const { handle } = useParams();
  const [product, setProduct] = useState(undefined);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    let active = true;
    setProduct(undefined);
    setActiveImage(0);
    setSize(null);
    fetchProductByHandle(handle).then((data) => {
      if (active) setProduct(data);
    });
    return () => {
      active = false;
    };
  }, [handle]);

  if (product === null) return <NotFound />;
  if (product === undefined) return null;

  const available = isProductAvailable(product);
  const canAdd = available && Boolean(size);

  function handleAddToCart() {
    if (!canAdd) return;
    addItem(product, { size, quantity: 1 });
  }

  function handleBuyNow() {
    if (!canAdd) return;
    addItem(product, { size, quantity: 1 });
    window.open(buildCartCheckoutUrl([{ variantId: product.variantId, quantity: 1 }]), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <Seo
        title={product.name}
        description={`${product.description} $${product.price}.`}
      />
      <Link
        to={`/collections/${product.collection}`}
        className="mb-8 inline-block text-sm font-medium uppercase tracking-wide text-charcoal/60 hover:text-charcoal"
      >
        ← Back to collection
      </Link>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream-dark">
            <img
              src={product.images[activeImage]}
              alt={`${product.name} — Nestivo tee, view ${activeImage + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((image, i) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`h-20 w-16 overflow-hidden rounded-lg border-2 ${
                    i === activeImage ? "border-charcoal" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {!available && (
            <span className="mb-4 inline-block rounded-full bg-charcoal/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-charcoal/70">
              Not available in store yet
            </span>
          )}
          <h1 className="font-display text-3xl font-medium text-charcoal md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-charcoal/70">${product.price}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-charcoal">
              Size
            </p>
            <div className="flex gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-11 w-11 rounded-full border text-sm font-medium transition-colors ${
                    size === s
                      ? "border-charcoal bg-charcoal text-cream"
                      : "border-charcoal/30 text-charcoal hover:border-charcoal"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {available && !size && (
              <p className="mt-2 text-xs text-charcoal/50">Select a size to continue.</p>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!canAdd}
              className={`inline-block rounded-full border px-8 py-3.5 text-center text-sm font-medium uppercase tracking-wide transition-colors ${
                canAdd
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                  : "cursor-not-allowed border-charcoal/20 text-charcoal/40"
              }`}
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              disabled={!canAdd}
              className={`inline-block rounded-full px-8 py-3.5 text-center text-sm font-medium uppercase tracking-wide transition-colors ${
                canAdd
                  ? "bg-charcoal text-cream hover:bg-brown"
                  : "cursor-not-allowed bg-charcoal/20 text-charcoal/40"
              }`}
            >
              Buy Now
            </button>
          </div>
          <p className="mt-3 text-xs text-charcoal/50">
            {available
              ? "Buy Now opens our Shopify store to complete checkout."
              : "This product isn't in the Shopify store yet — check back soon."}
          </p>
        </div>
      </div>
    </section>
  );
}
