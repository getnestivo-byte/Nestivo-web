import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductByHandle } from "../lib/productService.js";
import NotFound from "./NotFound.jsx";

export default function Product() {
  const { handle } = useParams();
  const [product, setProduct] = useState(undefined);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let active = true;
    setProduct(undefined);
    setActiveImage(0);
    setSize(null);
    setAdded(false);
    fetchProductByHandle(handle).then((data) => {
      if (active) setProduct(data);
    });
    return () => {
      active = false;
    };
  }, [handle]);

  if (product === null) return <NotFound />;
  if (product === undefined) return null;

  function handleAddToBag(e) {
    e.preventDefault();
    // UI only — no cart/checkout logic wired up yet.
    setAdded(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
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
              alt={product.name}
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
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
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
          </div>

          <form onSubmit={handleAddToBag}>
            <button
              type="submit"
              disabled={!size}
              className="mt-8 w-full rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-brown disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {added ? "Added to Bag" : "Add to Bag"}
            </button>
            {!size && (
              <p className="mt-2 text-xs text-charcoal/50">Select a size to continue.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
