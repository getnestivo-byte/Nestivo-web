import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCollections } from "../lib/productService.js";
import CollectionCard from "./CollectionCard.jsx";
import Reveal from "./Reveal.jsx";

export default function CollectionTiles() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    let active = true;
    fetchCollections().then((data) => {
      if (active) setCollections(data);
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
            Explore
          </p>
          <h2 className="font-display text-4xl font-medium text-charcoal md:text-5xl">
            Shop by Collection
          </h2>
        </div>
        <Link
          to="/collections"
          className="hidden text-sm font-medium uppercase tracking-wide text-charcoal/70 hover:text-charcoal md:block"
        >
          View all
        </Link>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {collections.map((collection, i) => (
          <Reveal key={collection.id} delay={i * 0.08}>
            <CollectionCard collection={collection} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
