"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "@/lib/brand";

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Full-bleed origin photograph */}
      <Image
        src="/images/himalaya.jpg"
        alt="The high Himalaya of Nepal at dawn"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Legibility scrim — keeps the mood dark and confident */}
      <div className="absolute inset-0 bg-forest-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest/45 to-forest-deep" />
      <div className="absolute inset-0 grain opacity-40" />

      {/* Corner provenance */}
      <motion.div
        {...rise(1)}
        className="pointer-events-none absolute inset-x-5 top-[88px] z-10 hidden justify-between sm:flex lg:inset-x-10"
      >
        <span className="data text-bone/55">{BRAND.coordinates}</span>
        <span className="data text-bone/55">EST · {BRAND.established}</span>
      </motion.div>
      <motion.div
        {...rise(1)}
        className="pointer-events-none absolute inset-x-5 bottom-7 z-10 hidden justify-between sm:flex lg:inset-x-10"
      >
        <span className="data text-bone/55">{BRAND.origin}</span>
        <span className="data text-bone/55">ELEV · {BRAND.elevation}</span>
      </motion.div>

      {/* Centre lock-up */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.p {...rise(0.2)} className="data text-gold">
          <span className="mr-3 inline-block h-px w-7 -translate-y-1 bg-gold/60 align-middle" />
          Himalayan Churpi · Single Origin
          <span className="ml-3 inline-block h-px w-7 -translate-y-1 bg-gold/60 align-middle" />
        </motion.p>

        <h1 className="mt-7">
          <motion.span
            {...rise(0.34)}
            className="wordmark block pl-[0.46em] text-[14vw] leading-[0.92] tracking-[0.2em] text-bone sm:text-7xl sm:tracking-seal lg:text-8xl lg:tracking-wordmark"
          >
            Sherpa
          </motion.span>
          <motion.span
            {...rise(0.44)}
            className="wordmark mt-1 block pl-[0.46em] text-[14vw] leading-[0.92] tracking-[0.2em] text-brass sm:text-7xl sm:tracking-seal lg:text-8xl lg:tracking-wordmark"
          >
            Reserve
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.6)}
          className="mx-auto mt-9 max-w-xl text-pretty font-serif text-xl font-light italic leading-snug text-bone/90 sm:text-2xl"
        >
          The Original Chew — one bar of cured Himalayan churpi.
          Milk, salt, lime juice. Nothing else.
        </motion.p>

        <motion.div
          {...rise(0.76)}
          className="mt-11 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <Link href="/shop" className="btn-gold w-full sm:w-auto">
            Shop the Reserve
          </Link>
          <Link href="/story" className="btn-ghost w-full border-bone/30 text-bone hover:border-bone hover:bg-bone/5 sm:w-auto">
            Read the Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:flex"
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
