import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
          About Nestivo
        </p>
        <h1 className="font-display text-4xl font-medium leading-snug text-charcoal md:text-5xl">
          The places we've lived leave a mark worth wearing.
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
          <p>
            Nestivo started with a stack of old city maps and a box of
            forgotten travel patches. What began as a personal habit — tracing
            street grids from places we'd lived, redrawing badges from trips
            we'd taken — turned into a small collection of tees we couldn't
            stop making.
          </p>
          <p>
            Every design starts on paper. A city grid gets hand-traced from an
            actual map before it's simplified into a single-tone print. A
            badge gets redrawn from a real vintage patch, kept close to the
            original but cut down to work at t-shirt scale. Nothing is
            generated or templated — every piece in the shop was drawn by
            hand first.
          </p>
          <p>
            We print in small batches on heavyweight, garment-dyed cotton, and
            we'd rather sell out of a design than overprint it. No fast
            fashion, no filler drops — just designs we'd wear ourselves, made
            to hold up longer than the trend that inspired them.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
