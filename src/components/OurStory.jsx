import Reveal from "./Reveal.jsx";

export default function OurStory() {
  return (
    <section id="story" className="bg-cream-dark">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-28">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
            Our Story
          </p>
          <h2 className="font-display text-3xl font-medium leading-snug text-charcoal md:text-4xl">
            Nestivo started with a simple idea: the places we've lived leave a
            mark worth wearing.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
            Every design begins as a hand-traced map or a forgotten travel
            badge, redrawn for a modern wardrobe. No fast fashion, no
            overprinting — just small runs, heavyweight cotton, and designs
            we'd wear ourselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
