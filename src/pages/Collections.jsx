import { useEffect, useState } from "react";
import { fetchCollections } from "../lib/productService.js";
import CollectionCard from "../components/CollectionCard.jsx";
import Reveal from "../components/Reveal.jsx";
import Seo from "../components/Seo.jsx";

export default function Collections() {
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
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
      <Seo
        title="Collections"
        description="Explore Nestivo's collections: Cities, Retro Badges, and Monochrome."
      />
      <Reveal className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
          Explore
        </p>
        <h1 className="font-display text-4xl font-medium text-charcoal md:text-5xl">
          Collections
        </h1>
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
