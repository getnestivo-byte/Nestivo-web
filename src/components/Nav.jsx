import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartIcon, MenuIcon, CloseIcon } from "./icons.jsx";

const LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-charcoal">
          Nestivo
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-wide transition-colors hover:text-charcoal ${
                  isActive ? "text-charcoal" : "text-charcoal/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Cart" className="text-charcoal transition-opacity hover:opacity-70">
            <CartIcon className="h-6 w-6" />
          </button>
          <button
            aria-label="Toggle menu"
            className="text-charcoal md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-charcoal/10 bg-cream px-6 py-4 md:hidden">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium uppercase tracking-wide text-charcoal/80"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
