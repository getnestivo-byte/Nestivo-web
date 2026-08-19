export default function ProductCard({ product }) {
  return (
    <a href={`#${product.handle}`} className="group block">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-display text-lg text-charcoal">{product.name}</h3>
        <span className="text-sm text-charcoal/70">${product.price}</span>
      </div>
    </a>
  );
}
