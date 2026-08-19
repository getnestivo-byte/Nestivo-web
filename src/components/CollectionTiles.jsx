import { useEffect, useState } from "react";
import { fetchCollections } from "../lib/productService.js";
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
    <section id="collections" className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
      <Reveal className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
          Explore
        </p>
        <h2 className="font-display text-4xl font-medium text-charcoal md:text-5xl">
          Shop by Collection
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {collections.map((collection, i) => (
          <Reveal key={collection.id} delay={i * 0.08}>
            <a
              href={`#${collection.id}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-medium text-cream">
                  {collection.name}
                </h3>
                <p className="mt-1 text-sm text-cream/80">{collection.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
