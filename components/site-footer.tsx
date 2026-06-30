"use client";

import Link from "next/link";
import { useState } from "react";
import { MountainMark } from "./mountain";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="relative border-t border-forest-line bg-forest-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Sherpa Reserve home">
              <MountainMark className="w-8 text-gold" strokeWidth={1.25} />
              <span className="wordmark text-base text-bone">
                Sherpa<span className="text-brass"> Reserve</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/55">
              The Original Chew. Himalayan churpi, cured and aged the old way —
              milk, salt, lime juice, nothing else.
            </p>

            <form
              className="mt-8 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setJoined(true);
              }}
            >
              <label className="eyebrow mb-3 block">Join the dispatch</label>
              {joined ? (
                <p className="text-sm text-gold">
                  Thank you — you&apos;re on the list. (Demo signup, no email is stored.)
                </p>
              ) : (
                <div className="flex items-center gap-2 border-b border-forest-line pb-2 focus-within:border-gold/60 transition-colors">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent py-1 text-sm text-bone placeholder:text-bone/30 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 font-sans text-xs uppercase tracking-wide text-gold transition-colors hover:text-gold-soft"
                  >
                    Join →
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Explore */}
          <nav className="text-sm">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { href: "/story", label: "Our Story" },
                { href: "/shop", label: "Shop the Reserve" },
                { href: "/blog", label: "Journal" },
                { href: "/faq", label: "FAQ" },
                { href: "/cart", label: "Cart" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="lux-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-sm">
            <h3 className="eyebrow mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-link"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9779800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-link"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a href="mailto:hello@sherpareserve.com" className="lux-link">
                  hello@sherpareserve.com
                </a>
              </li>
              <li className="pt-1 text-bone/40">Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-forest-line pt-8 text-xs text-bone/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Sherpa Reserve. All rights reserved.</p>
          <p className="tracking-wide">
            Demo showcase · No real orders are processed.
          </p>
        </div>
      </div>
    </footer>
  );
}
