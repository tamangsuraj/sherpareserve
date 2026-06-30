"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, type ProductTier } from "@/lib/products";

export type CartLine = {
  id: ProductTier["id"];
  qty: number;
};

type CartState = {
  lines: CartLine[];
  add: (id: ProductTier["id"], qty?: number) => void;
  setQty: (id: ProductTier["id"], qty: number) => void;
  remove: (id: ProductTier["id"]) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      add: (id, qty = 1) =>
        set((state) => {
          const existing = state.lines.find((l) => l.id === id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.id === id ? { ...l, qty: l.qty + qty } : l
              ),
            };
          }
          return { lines: [...state.lines, { id, qty }] };
        }),
      setQty: (id, qty) =>
        set((state) => ({
          lines:
            qty <= 0
              ? state.lines.filter((l) => l.id !== id)
              : state.lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        })),
      remove: (id) =>
        set((state) => ({ lines: state.lines.filter((l) => l.id !== id) })),
      clear: () => set({ lines: [] }),
    }),
    { name: "sherpa-reserve-cart" }
  )
);

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, l) => sum + l.qty, 0);
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((sum, l) => {
    const product = PRODUCTS.find((p) => p.id === l.id);
    return sum + (product ? product.priceNPR * l.qty : 0);
  }, 0);
}
