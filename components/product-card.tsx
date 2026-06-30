"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { type ProductTier, formatNPR } from "@/lib/products";
import { PRODUCT_SPEC } from "@/lib/brand";
import { useCart } from "@/store/cart";
import { Topography } from "./topography";

export function ProductCard({
  product,
  index = 0,
  featured = false,
}: {
  product: ProductTier;
  index?: number;
  featured?: boolean;
}) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);
  const reduce = useReducedMotion();
  const spec = PRODUCT_SPEC[product.id];

  function handleAdd() {
    add(product.id, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.article
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={reduce ? undefined : { y: -8 }}
      className={`group relative flex flex-col overflow-hidden rounded-[20px] border transition-colors duration-500 ease-lux ${
        featured
          ? "border-gold/45 bg-gradient-to-b from-forest-soft to-forest"
          : "border-forest-line bg-forest-soft/30 hover:border-gold/35"
      }`}
    >
      {/* Spec header */}
      <div className="flex items-center justify-between border-b border-forest-line/80 px-7 py-3.5">
        <span className="data text-gold/70">{spec.ref}</span>
        {featured ? (
          <span className="data rounded-full border border-gold/40 px-2.5 py-1 text-[10px] text-gold">
            Most Loved
          </span>
        ) : (
          <span className="data text-bone/35">Hardness {spec.hardness}</span>
        )}
      </div>

      {/* Weight as the hero of the card */}
      <div className="relative flex h-44 items-end justify-center overflow-hidden border-b border-forest-line/80 bg-forest-deep/30 px-7 pb-7">
        <Topography
          rings={6}
          className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 text-patina/30 transition-transform duration-700 ease-lux group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 vignette" />
        <div className="relative text-center">
          <span className="block font-serif text-[3.4rem] font-light leading-none text-bone">
            {product.weightRange.replace("g", "")}
          </span>
          <span className="data mt-2 block text-gold/70">grams · net</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-7">
        <h3 className="font-serif text-[1.9rem] font-light leading-none text-bone">
          {product.name}
        </h3>
        <p className="mt-2 font-serif text-base italic text-gold/80">
          {product.tagline}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-bone/55">
          {product.description}
        </p>

        <dl className="mt-6 space-y-3 border-t border-forest-line pt-5 text-[13px]">
          <div className="flex justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-data text-bone/40">
              Best for
            </dt>
            <dd className="text-right text-bone/75">{product.breedGuidance}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="font-mono text-[11px] uppercase tracking-data text-bone/40">
              Chew time
            </dt>
            <dd className="text-right text-bone/75">{product.chewTime}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <div>
            <span className="data block text-bone/40">Price</span>
            <span className="font-serif text-[1.75rem] leading-none text-gold">
              {formatNPR(product.priceNPR)}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[12px] font-medium uppercase tracking-wide transition-all duration-300 ease-lux ${
              added
                ? "bg-gold-soft text-forest-deep"
                : "bg-gold text-forest-deep hover:shadow-[0_8px_30px_-8px_rgba(201,168,106,0.55)]"
            }`}
          >
            {added ? "Added ✓" : "Add to cart"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
