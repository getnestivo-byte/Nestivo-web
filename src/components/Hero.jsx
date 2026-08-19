import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brown">
            Fall Collection
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl md:text-7xl">
            Wear the map,
            <br />
            not just the city.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
            Minimalist tees inspired by city grids and retro travel badges.
            Printed on heavyweight cotton, designed to last longer than the trend.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-brown"
          >
            Shop the Collection
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream-dark">
            <img
              src="https://placehold.co/900x1125/ece5d4/2b2b2b?text=Nestivo+Tee"
              alt="Nestivo t-shirt product mockup"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
