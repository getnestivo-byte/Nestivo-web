import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

// Cart line items key off Shopify variant IDs. `data/products.js` is
// placeholder data with no real variants yet, so `addItem` below is a no-op
// for any product missing one — see `isProductAvailable`. Once
// `lib/productService.js` is repointed at the Storefront API and products
// carry real `variantId`s, the same cart logic starts working with zero
// changes here.
const STORAGE_KEY = "nestivo:cart";

const CartContext = createContext(null);

function loadStoredItems() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function lineKey(variantId, size) {
  return `${variantId}::${size ?? ""}`;
}

export function isProductAvailable(product) {
  return Boolean(product?.variantId);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadStoredItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage unavailable (private mode, quota) — cart just won't persist.
    }
  }, [items]);

  const addItem = useCallback((product, { size, quantity = 1 } = {}) => {
    if (!isProductAvailable(product)) return false;

    setItems((current) => {
      const key = lineKey(product.variantId, size);
      const existing = current.find((line) => lineKey(line.variantId, line.size) === key);
      if (existing) {
        return current.map((line) =>
          lineKey(line.variantId, line.size) === key
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        );
      }
      return [
        ...current,
        {
          variantId: product.variantId,
          handle: product.handle,
          name: product.name,
          price: product.price,
          image: product.images?.[0] ?? null,
          size: size ?? null,
          quantity,
        },
      ];
    });
    setIsOpen(true);
    return true;
  }, []);

  const removeItem = useCallback((variantId, size) => {
    setItems((current) =>
      current.filter((line) => lineKey(line.variantId, line.size) !== lineKey(variantId, size)),
    );
  }, []);

  const updateQuantity = useCallback((variantId, size, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((line) => lineKey(line.variantId, line.size) !== lineKey(variantId, size));
      }
      return current.map((line) =>
        lineKey(line.variantId, line.size) === lineKey(variantId, size) ? { ...line, quantity } : line,
      );
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const count = useMemo(() => items.reduce((sum, line) => sum + line.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, line) => sum + line.price * line.quantity, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      isOpen,
      open,
      close,
      toggle,
      count,
      subtotal,
    }),
    [items, addItem, removeItem, updateQuantity, clear, isOpen, open, close, toggle, count, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
