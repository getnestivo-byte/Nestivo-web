import { InstagramIcon, TiktokIcon, PinterestIcon } from "./icons.jsx";

const COLUMNS = [
  {
    title: "Shop",
    links: ["All Products", "Cities", "Retro Badges", "New Arrivals"],
  },
  {
    title: "Help",
    links: ["Shipping", "Returns", "Size Guide", "Contact"],
  },
  {
    title: "Company",
    links: ["About", "Sustainability", "Wholesale"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="font-display text-2xl font-semibold text-charcoal">
              Nestivo
            </a>
            <p className="mt-3 max-w-xs text-sm text-charcoal/60">
              Minimalist apparel inspired by city maps and retro travel badges.
            </p>
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
                  <li key={link}>
                    <a href="#" className="text-sm text-charcoal/60 hover:text-charcoal">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-charcoal/10 pt-6 text-xs text-charcoal/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Nestivo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-charcoal">Privacy</a>
            <a href="#" className="hover:text-charcoal">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
