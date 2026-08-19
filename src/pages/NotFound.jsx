import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center md:px-8 md:py-32">
      <Seo title="Page Not Found" description="This page doesn't exist, or it's moved." />
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brown">404</p>
      <h1 className="font-display text-4xl font-medium text-charcoal">Page not found</h1>
      <p className="mt-4 text-charcoal/70">
        The page you're looking for doesn't exist, or it's moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-brown"
      >
        Back to Home
      </Link>
      <div className="mt-6 flex justify-center gap-6 text-sm font-medium uppercase tracking-wide text-charcoal/60">
        <Link to="/shop" className="hover:text-charcoal">
          Shop
        </Link>
        <Link to="/collections" className="hover:text-charcoal">
          Collections
        </Link>
      </div>
    </section>
  );
}
