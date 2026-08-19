import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedProducts } from "../lib/productService.js";
import ProductCard from "./ProductCard.jsx";
import Reveal from "./Reveal.jsx";

export default function FeaturedCollection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let active = true;
    fetchFeaturedProducts().then((data) => {
      if (active) setProducts(data.slice(0, 4));
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <Reveal className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
            Featured
          </p>
          <h2 className="font-display text-4xl font-medium text-charcoal md:text-5xl">
            New Arrivals
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden text-sm font-medium uppercase tracking-wide text-charcoal/70 hover:text-charcoal md:block"
        >
          View all
        </Link>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
