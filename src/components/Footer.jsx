import { Link } from "react-router-dom";
import { InstagramIcon, TiktokIcon, PinterestIcon } from "./icons.jsx";
import { CONTACT_EMAIL, POLICY_URLS } from "../lib/shopify.js";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All Products", to: "/shop" },
      { label: "Cities", to: "/collections/cities" },
      { label: "Retro Badges", to: "/collections/retro-badges" },
      { label: "Monochrome", to: "/collections/monochrome" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping Info", to: POLICY_URLS.shipping, external: true },
      { label: "Returns Policy", to: POLICY_URLS.returns, external: true },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Sustainability", disabled: true },
      { label: "Wholesale", disabled: true },
    ],
  },
];

function FooterLink({ link }) {
  const className = "text-sm text-charcoal/60 hover:text-charcoal";
  if (link.disabled) {
    return <span className="text-sm text-charcoal/30">{link.label}</span>;
  }
  if (link.external) {
    return (
      <a href={link.to} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} className={className}>
      {link.label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="font-display text-2xl font-semibold text-charcoal">
              Nestivo
            </Link>
            <p className="mt-3 max-w-xs text-sm text-charcoal/60">
              Minimalist apparel inspired by city maps and retro travel badges.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 block text-sm text-charcoal/60 hover:text-charcoal"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-5 flex gap-4">
              <a aria-label="Instagram" href="#" className="text-charcoal/70 hover:text-charcoal">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a aria-label="TikTok" href="#" className="text-charcoal/70 hover:text-charcoal">
                <TiktokIcon className="h-5 w-5" />
              </a>
              <a aria-label="Pinterest" href="#" className="text-charcoal/70 hover:text-charcoal">
                <PinterestIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium uppercase tracking-wide text-charcoal">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 pt-6 text-xs text-charcoal/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nestivo. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href={POLICY_URLS.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal"
            >
              Privacy Policy
            </a>
            <a
              href={POLICY_URLS.terms}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
