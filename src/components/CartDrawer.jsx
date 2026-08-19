import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";
import { buildCartCheckoutUrl } from "../lib/shopify.js";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "./icons.jsx";

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

export default function CartDrawer() {
  const { items, isOpen, close, updateQuantity, removeItem, subtotal } = useCart();
  const checkoutUrl = buildCartCheckoutUrl(items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-charcoal/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Cart"
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
              <h2 className="font-display text-xl font-medium text-charcoal">
                Cart{items.length > 0 && ` (${items.length})`}
              </h2>
              <button
                aria-label="Close cart"
                onClick={close}
                className="text-charcoal transition-opacity hover:opacity-70"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="text-charcoal/70">Your cart is empty.</p>
                <p className="text-sm text-charcoal/50">
                  The Nestivo store isn't live yet — products will show up here once they are.
                </p>
              </div>
            ) : (
              <ul className="flex-1 overflow-y-auto px-6 py-4">
                {items.map((line) => (
                  <li
                    key={`${line.variantId}::${line.size ?? ""}`}
                    className="flex gap-4 border-b border-charcoal/10 py-4 last:border-b-0"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-cream-dark">
                      {line.image && (
                        <img
                          src={line.image}
                          alt={line.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-display text-base text-charcoal">{line.name}</p>
                          {line.size && (
                            <p className="text-xs uppercase tracking-wide text-charcoal/50">
                              Size {line.size}
                            </p>
                          )}
                        </div>
                        <button
                          aria-label={`Remove ${line.name} from cart`}
                          onClick={() => removeItem(line.variantId, line.size)}
                          className="text-charcoal/40 transition-colors hover:text-charcoal"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 rounded-full border border-charcoal/20 px-2 py-1">
                          <button
                            aria-label={`Decrease quantity of ${line.name}`}
                            onClick={() => updateQuantity(line.variantId, line.size, line.quantity - 1)}
                            className="text-charcoal transition-opacity hover:opacity-60"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-4 text-center text-sm text-charcoal">
                            {line.quantity}
                          </span>
                          <button
                            aria-label={`Increase quantity of ${line.name}`}
                            onClick={() => updateQuantity(line.variantId, line.size, line.quantity + 1)}
                            className="text-charcoal transition-opacity hover:opacity-60"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm text-charcoal/80">
                          {formatPrice(line.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="border-t border-charcoal/10 px-6 py-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium uppercase tracking-wide text-charcoal">
                  Subtotal
                </span>
                <span className="font-display text-lg text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={items.length === 0}
                onClick={(e) => {
                  if (items.length === 0) e.preventDefault();
                }}
                className={`block rounded-full px-8 py-3.5 text-center text-sm font-medium uppercase tracking-wide transition-colors ${
                  items.length === 0
                    ? "cursor-not-allowed bg-charcoal/20 text-charcoal/40"
                    : "bg-charcoal text-cream hover:bg-brown"
                }`}
              >
                Checkout
              </a>
              <p className="mt-3 text-center text-xs text-charcoal/50">
                Checkout opens our Shopify store.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
