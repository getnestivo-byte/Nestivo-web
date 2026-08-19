import { Link } from "react-router-dom";
import { isProductAvailable } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const available = isProductAvailable(product);

  return (
    <Link to={`/products/${product.handle}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-dark">
        <img
          src={product.images[0]}
          alt={`${product.name} — Nestivo tee, $${product.price}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!available && (
          <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cream">
            Not available yet
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display text-lg text-charcoal">{product.name}</h3>
        <span className="text-sm text-charcoal/70">${product.price}</span>
      </div>
    </Link>
  );
}
