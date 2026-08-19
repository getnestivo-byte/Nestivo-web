import { Link } from "react-router-dom";

export default function CollectionCard({ collection }) {
  return (
    <Link
      to={`/collections/${collection.id}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
    >
      <img
        src={collection.image}
        alt={`${collection.name} collection — ${collection.description}`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-2xl font-medium text-cream">{collection.name}</h3>
        <p className="mt-1 text-sm text-cream/80">{collection.description}</p>
      </div>
    </Link>
  );
}
