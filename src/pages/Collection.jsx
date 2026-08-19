import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCollectionById, fetchProductsByCollection } from "../lib/productService.js";
import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";
import NotFound from "./NotFound.jsx";

export default function Collection() {
  const { id } = useParams();
  const [collection, setCollection] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let active = true;
    setCollection(undefined);
    fetchCollectionById(id).then((data) => {
      if (active) setCollection(data);
    });
    fetchProductsByCollection(id).then((data) => {
      if (active) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, [id]);

  if (collection === null) return <NotFound />;
  if (collection === undefined) return null;

  return (
    <section>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 md:px-8">
          <h1 className="font-display text-4xl font-medium text-cream md:text-5xl">
            {collection.name}
          </h1>
          <p className="mt-2 max-w-md text-cream/80">{collection.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={Math.min(i, 4) * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
