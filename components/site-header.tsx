"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, cartCount } from "@/store/cart";
import { MountainMark } from "./mountain";

const NAV = [
  { href: "/story", label: "Our Story" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lines = useCart((s) => s.lines);
  const count = cartCount(lines);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${
        scrolled
          ? "border-b border-forest-line/70 bg-forest/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Wordmark */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Sherpa Reserve home">
          <MountainMark className="w-7 text-gold transition-transform duration-500 ease-lux group-hover:-translate-y-0.5" strokeWidth={1.25} />
          <span className="wordmark text-[13px] text-bone sm:text-[15px]">
            Sherpa<span className="text-brass"> Reserve</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-[11px] uppercase tracking-data transition-colors duration-300 ${
                  active ? "text-gold" : "text-bone/65 hover:text-gold"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="group relative flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-data text-bone/75 transition-colors hover:text-gold"
          >
            <span className="hidden sm:inline">Cart</span>
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-forest-line group-hover:border-gold/50 transition-colors">
              <BagIcon />
              <AnimatePresence>
                {mounted && count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[11px] font-medium text-forest-deep"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-bone md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-forest-line bg-forest/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-forest-line/60 py-4 font-serif text-2xl text-bone/90 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function BagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 7h12l-1 13H7L6 7Z" strokeLinejoin="round" />
      <path d="M9 7a3 3 0 0 1 6 0" strokeLinecap="round" />
    </svg>
  );
}
