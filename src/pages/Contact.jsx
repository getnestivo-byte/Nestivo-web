import Reveal from "../components/Reveal.jsx";
import Seo from "../components/Seo.jsx";
import { CONTACT_EMAIL } from "../lib/shopify.js";

export default function Contact() {
  return (
    <section className="mx-auto max-w-xl px-6 py-16 text-center md:px-8 md:py-24">
      <Seo
        title="Contact"
        description="Get in touch with the Nestivo team — questions about an order, a design, or anything else."
      />
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">
          Get in Touch
        </p>
        <h1 className="font-display text-4xl font-medium text-charcoal md:text-5xl">Contact</h1>
        <p className="mt-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
          Question about an order, a design, or a wholesale inquiry? Email us
          and we'll get back to you within a couple of days.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-brown"
        >
          {CONTACT_EMAIL}
        </a>
      </Reveal>
    </section>
  );
}
