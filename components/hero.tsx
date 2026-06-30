"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Topography } from "./topography";
import { ChurpiBar } from "./churpi";
import { BRAND } from "@/lib/brand";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[72px]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_70%_-10%,#16271F_0%,#0F1F1A_44%,#0A1410_100%)]" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 grain opacity-50" />

      {/* Corner provenance — surveyed registration */}
      <motion.div
        {...rise(1.1)}
        className="pointer-events-none absolute inset-x-5 top-[84px] z-10 hidden justify-between sm:flex lg:inset-x-10"
      >
        <span className="data text-gold/50">{BRAND.coordinates}</span>
        <span className="data text-gold/50">EST · {BRAND.established}</span>
      </motion.div>
      <motion.div
        {...rise(1.1)}
        className="pointer-events-none absolute inset-x-5 bottom-7 z-10 hidden justify-between sm:flex lg:inset-x-10"
      >
        <span className="data text-gold/50">{BRAND.origin}</span>
        <span className="data text-gold/50">ELEV · {BRAND.elevation}</span>
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        {/* ── Left: wordmark + statement ── */}
        <div className="text-center lg:text-left">
          <motion.p {...rise(0.2)} className="data text-gold/80">
            <span className="mr-3 inline-block h-px w-7 -translate-y-1 bg-gold/50 align-middle" />
            Himalayan Churpi · Single Origin
          </motion.p>

          <h1 className="mt-6">
            <motion.span
              {...rise(0.32)}
              className="wordmark block pl-[0.46em] text-[14vw] leading-[0.9] tracking-[0.18em] text-bone sm:text-7xl sm:tracking-seal lg:text-[5.5rem] lg:tracking-wordmark"
            >
              Sherpa
            </motion.span>
            <motion.span
              {...rise(0.42)}
              className="wordmark mt-1 block pl-[0.46em] text-[14vw] leading-[0.9] tracking-[0.18em] text-brass sm:text-7xl sm:tracking-seal lg:text-[5.5rem] lg:tracking-wordmark"
            >
              Reserve
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.58)}
            className="mx-auto mt-8 max-w-md text-pretty font-serif text-xl font-light italic leading-snug text-bone/85 sm:text-2xl lg:mx-0"
          >
            The Original Chew — a single bar of cured Himalayan churpi.
            Milk, salt, lime juice. Nothing else.
          </motion.p>

          <motion.div
            {...rise(0.72)}
            className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start"
          >
            <Link href="/shop" className="btn-gold w-full sm:w-auto">
              Shop the Reserve
            </Link>
            <Link href="/story" className="btn-ghost w-full sm:w-auto">
              Read the Story
            </Link>
          </motion.div>
        </div>

        {/* ── Right: the product ── */}
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <Topography
            animate={!reduce}
            className="pointer-events-none absolute h-[125%] w-[125%] text-patina/40"
          />
          <span className="pointer-events-none absolute h-72 w-72 rounded-full bg-gold/15 blur-[80px]" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-md"
          >
            <ChurpiBar
              variant="large"
              className="w-full drop-shadow-[0_34px_42px_rgba(0,0,0,0.55)]"
            />
          </motion.div>

          {/* product caption */}
          <motion.div
            {...rise(1)}
            className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-4 whitespace-nowrap"
          >
            <span className="data text-gold/60">Net 120–200 g</span>
            <span className="h-3 w-px bg-gold/25" />
            <span className="data text-gold/60">Cured {BRAND.curedDays} days</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:flex"
        aria-hidden="true"
      >
        <motion.span
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="h-10 w-px origin-bottom bg-gradient-to-b from-gold/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
