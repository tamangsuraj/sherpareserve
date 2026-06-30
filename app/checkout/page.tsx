"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, cartSubtotal } from "@/store/cart";
import { getProduct, formatNPR } from "@/lib/products";
import { MountainMark } from "@/components/mountain";

const DISTRICTS = [
  "Kathmandu",
  "Lalitpur",
  "Bhaktapur",
  "Kavre",
  "Chitwan",
  "Pokhara (Kaski)",
  "Butwal (Rupandehi)",
  "Biratnagar (Morang)",
  "Dharan (Sunsari)",
  "Birgunj (Parsa)",
  "Other district",
];

type Confirmation = {
  orderId: string;
  subtotal: number;
};

export default function CheckoutPage() {
  const { lines, clear } = useCart();
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  useEffect(() => setMounted(true), []);

  const subtotal = cartSubtotal(lines);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      district: form.get("district"),
      address: form.get("address"),
      notes: form.get("notes"),
      lines,
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setConfirmation({ orderId: data.orderId, subtotal: data.subtotal });
      clear();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!mounted) {
    return <div className="min-h-[60vh] bg-forest pt-[72px]" />;
  }

  // ── Confirmation screen ──────────────────────────────
  if (confirmation) {
    return (
      <div className="bg-forest pt-[72px]">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MountainMark className="w-16 text-gold" strokeWidth={1} />
          </motion.div>
          <p className="eyebrow mt-8">Order confirmed</p>
          <h1 className="display-line mt-5 text-4xl text-bone sm:text-5xl">
            Thank you — the Reserve is on its way.
          </h1>
          <p className="mt-6 max-w-md text-lg text-bone/60">
            We&apos;ve received your demo order{" "}
            <span className="text-gold">{confirmation.orderId}</span>. In a live
            store we&apos;d confirm delivery by phone within a day.
          </p>

          <div className="mt-10 w-full rounded-2xl border border-forest-line bg-forest-soft/40 p-7 text-left">
            <div className="flex justify-between">
              <span className="text-bone/55">Order reference</span>
              <span className="font-medium text-bone">{confirmation.orderId}</span>
            </div>
            <div className="mt-3 flex justify-between">
              <span className="text-bone/55">Order total</span>
              <span className="font-serif text-lg text-gold">
                {formatNPR(confirmation.subtotal)}
              </span>
            </div>
            <p className="mt-5 border-t border-forest-line pt-5 text-xs leading-relaxed text-bone/40">
              This is a portfolio demo. No payment was taken, no goods will ship,
              and no personal data was stored.
            </p>
          </div>

          <Link href="/" className="btn-ghost mt-10">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  // ── Empty guard ──────────────────────────────────────
  if (lines.length === 0) {
    return (
      <div className="bg-forest pt-[72px]">
        <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
          <MountainMark className="w-14 text-gold/40" strokeWidth={1} />
          <h1 className="display-line mt-6 text-3xl text-bone">
            Nothing to check out yet
          </h1>
          <p className="mt-3 text-bone/55">
            Add a Reserve to your cart to continue.
          </p>
          <Link href="/shop" className="btn-gold mt-8">
            Shop the Reserve
          </Link>
        </div>
      </div>
    );
  }

  // ── Checkout form ────────────────────────────────────
  return (
    <div className="bg-forest pt-[72px]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="eyebrow">Almost there</p>
        <h1 className="display-line mt-4 text-4xl text-bone sm:text-5xl">
          Checkout
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field label="Full name" name="name" placeholder="Tenzing Sherpa" required />
            <Field
              label="Phone number"
              name="phone"
              type="tel"
              placeholder="+977 98XXXXXXXX"
              required
            />

            <div>
              <label htmlFor="district" className="eyebrow mb-2 block">
                District
              </label>
              <select
                id="district"
                name="district"
                required
                defaultValue=""
                className="w-full rounded-xl border border-forest-line bg-forest-soft/40 px-4 py-3.5 text-bone focus:border-gold/60 focus:outline-none"
              >
                <option value="" disabled>
                  Select your district
                </option>
                {DISTRICTS.map((d) => (
                  <option key={d} value={d} className="bg-forest text-bone">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="address" className="eyebrow mb-2 block">
                Delivery address
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                placeholder="Tole / street, ward no., nearby landmark"
                className="w-full resize-none rounded-xl border border-forest-line bg-forest-soft/40 px-4 py-3.5 text-bone placeholder:text-bone/30 focus:border-gold/60 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="notes" className="eyebrow mb-2 block">
                Notes <span className="text-bone/30">(optional)</span>
              </label>
              <input
                id="notes"
                name="notes"
                placeholder="Delivery timing, gate code, etc."
                className="w-full rounded-xl border border-forest-line bg-forest-soft/40 px-4 py-3.5 text-bone placeholder:text-bone/30 focus:border-gold/60 focus:outline-none"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button type="submit" disabled={submitting} className="btn-gold w-full disabled:opacity-60">
              {submitting ? "Placing order…" : `Place order · ${formatNPR(subtotal)}`}
            </button>

            <p className="text-center text-xs text-bone/40">
              Demo checkout — submitting places a mock order. No payment is taken.
            </p>
          </form>

          {/* Order summary */}
          <aside className="h-fit rounded-2xl border border-forest-line bg-forest-soft/40 p-7">
            <h2 className="font-serif text-2xl text-bone">Your order</h2>
            <ul className="mt-6 space-y-4">
              {lines.map((line) => {
                const product = getProduct(line.id);
                if (!product) return null;
                return (
                  <li key={line.id} className="flex justify-between gap-4 text-sm">
                    <span className="text-bone/75">
                      {product.name}
                      <span className="text-bone/40"> × {line.qty}</span>
                    </span>
                    <span className="text-bone">
                      {formatNPR(product.priceNPR * line.qty)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex justify-between border-t border-forest-line pt-5">
              <span className="font-serif text-lg text-bone">Total</span>
              <span className="font-serif text-lg text-gold">
                {formatNPR(subtotal)}
              </span>
            </div>
            <Link
              href="/cart"
              className="mt-5 block text-center text-sm text-bone/50 transition-colors hover:text-gold"
            >
              Edit cart
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-forest-line bg-forest-soft/40 px-4 py-3.5 text-bone placeholder:text-bone/30 focus:border-gold/60 focus:outline-none"
      />
    </div>
  );
}
