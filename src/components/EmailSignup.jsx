import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Form UI only — no backend wired up yet.
    setSubmitted(true);
  }

  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-cream md:text-4xl">
            Get 10% off your first order
          </h2>
          <p className="mt-3 text-cream/70">
            New drops, restocks, and the occasional badge design. No spam.
          </p>

          {submitted ? (
            <p className="mt-8 text-cream">You're on the list — thank you.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-cream/20 bg-transparent px-5 py-3 text-cream placeholder:text-cream/40 focus:border-cream/60 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-cream px-6 py-3 text-sm font-medium uppercase tracking-wide text-charcoal transition-opacity hover:opacity-90"
              >
                Sign Up
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
