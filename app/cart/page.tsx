"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, cartSubtotal } from "@/store/cart";
import Image from "next/image";
import { getProduct, formatNPR } from "@/lib/products";
import { MountainMark } from "@/components/mountain";

export default function CartPage() {
  const { lines, setQty, remove } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const subtotal = cartSubtotal(lines);

  if (!mounted) {
    return <div className="min-h-[60vh] bg-forest pt-[72px]" />;
  }

  return (
    <div className="bg-forest pt-[72px]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow">Your selection</p>
        <h1 className="display-line mt-4 text-4xl text-bone sm:text-5xl">
          Cart
        </h1>

        {lines.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            {/* Lines */}
            <ul className="divide-y divide-forest-line border-y border-forest-line">
              <AnimatePresence initial={false}>
                {lines.map((line) => {
                  const product = getProduct(line.id);
                  if (!product) return null;
                  return (
                    <motion.li
                      key={line.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-5 py-6"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-forest-line">
                        <Image
                          src="/images/chhurpi-hard.jpg"
                          alt="Hard cured chhurpi — The Original Chew"
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-xl text-bone">
                          {product.name}
                        </h3>
                        <p className="text-sm text-bone/50">
                          {product.weightRange} · {formatNPR(product.priceNPR)}
                        </p>
                        <button
                          onClick={() => remove(line.id)}
                          className="mt-2 text-xs uppercase tracking-wide text-bone/40 transition-colors hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>

                      <QtyStepper
                        qty={line.qty}
                        onChange={(q) => setQty(line.id, q)}
                      />

                      <div className="w-24 text-right font-serif text-lg text-gold">
                        {formatNPR(product.priceNPR * line.qty)}
                      </div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>

            {/* Summary */}
            <aside className="h-fit rounded-2xl border border-forest-line bg-forest-soft/40 p-7">
              <h2 className="font-serif text-2xl text-bone">Summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-bone/55">Subtotal</dt>
                  <dd className="text-bone">{formatNPR(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-bone/55">Delivery</dt>
                  <dd className="text-bone/70">Calculated at checkout</dd>
                </div>
              </dl>
              <div className="mt-6 flex justify-between border-t border-forest-line pt-5">
                <span className="font-serif text-lg text-bone">Total</span>
                <span className="font-serif text-lg text-gold">
                  {formatNPR(subtotal)}
                </span>
              </div>
              <Link href="/checkout" className="btn-gold mt-7 w-full">
                Proceed to checkout
              </Link>
              <Link
                href="/shop"
                className="mt-4 block text-center text-sm text-bone/50 transition-colors hover:text-gold"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

function QtyStepper({
  qty,
  onChange,
}: {
  qty: number;
  onChange: (q: number) => void;
}) {
  return (
    <div className="flex items-center rounded-full border border-forest-line">
      <button
        onClick={() => onChange(qty - 1)}
        className="flex h-9 w-9 items-center justify-center text-bone/70 transition-colors hover:text-gold"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <span className="w-6 text-center text-sm text-bone">{qty}</span>
      <button
        onClick={() => onChange(qty + 1)}
        className="flex h-9 w-9 items-center justify-center text-bone/70 transition-colors hover:text-gold"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-forest-line py-24 text-center">
      <MountainMark className="w-14 text-gold/40" strokeWidth={1} />
      <p className="mt-6 font-serif text-2xl text-bone/80">
        Your cart is empty
      </p>
      <p className="mt-2 max-w-sm text-sm text-bone/50">
        Every great chew starts somewhere. Pick the size that fits your dog.
      </p>
      <Link href="/shop" className="btn-gold mt-8">
        Shop the Reserve
      </Link>
    </div>
  );
}
