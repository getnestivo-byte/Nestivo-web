import { useEffect, useState } from "react";
import { fetchAllProducts } from "../lib/productService.js";
import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let active = true;
    fetchAllProducts().then((data) => {
      if (active) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <Reveal className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
          All Products
        </p>
        <h1 className="font-display text-4xl font-medium text-charcoal md:text-5xl">Shop</h1>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={Math.min(i, 4) * 0.06}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
