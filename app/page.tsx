import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { ContourDivider, Topography } from "@/components/topography";
import { MountainMark, LabelFrame } from "@/components/mountain";
import { PRODUCTS, INGREDIENTS } from "@/lib/products";
import { BRAND } from "@/lib/brand";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Brand story teaser ────────────────────────────── */}
      <section className="relative border-t border-forest-line bg-forest px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-editorial">
          <Reveal>
            <p className="eyebrow text-center">Provenance</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-line mx-auto mt-7 max-w-4xl text-balance text-center text-[2rem] text-bone sm:text-[3.25rem]">
              For generations, Himalayan herders cured cheese hard enough to
              outlast the longest winter. Their dogs have been chewing it{" "}
              <span className="italic text-gold">ever since.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-9 max-w-2xl text-center text-lg leading-relaxed text-bone/60">
              We didn&apos;t invent The Original Chew. We held it to the standard
              it deserves — sourcing the milk, slowing the cure, and ageing each
              bar until it earns the name.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/story"
                className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-data text-gold transition-colors hover:text-gold-soft"
              >
                Read our story
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Sourcing — photography ────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-deep px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-12">
          {/* Himalaya */}
          <Reveal className="lg:col-span-7">
            <figure className="group relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-forest-line">
              <Image
                src="/images/himalaya.jpg"
                alt="The high Himalaya above Solukhumbu, Nepal — the source region for Sherpa Reserve churpi"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <span className="font-serif text-2xl font-light text-bone sm:text-3xl">
                  Where it begins
                </span>
                <span className="data text-gold/70">{BRAND.elevation} · {BRAND.origin}</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Copy + dairy */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal className="flex-1">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-forest-line bg-forest-soft/30 p-8">
                <p className="eyebrow">From the high pastures</p>
                <h2 className="display-line mt-5 text-[2rem] text-bone sm:text-[2.5rem]">
                  Milk worth the
                  <span className="italic text-gold"> climb.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-bone/60">
                  Our churpi starts with the milk of yak and hill cattle grazed
                  on cold, clean highland grass. Thin air and slow seasons make
                  for richer milk — and a harder, longer-lasting bar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-forest-line">
                <Image
                  src="/images/cowportrait.jpg"
                  alt="A clean, healthy dairy cow grazing in a green highland meadow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 data text-bone/80">
                  Pasture-grazed · Single origin
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <ContourDivider className="bg-forest pb-2" />

      {/* ── The three tiers ───────────────────────────────── */}
      <section className="relative bg-forest px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">The Reserve · Three Tiers</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-line mt-6 text-[2.5rem] text-bone sm:text-[3.5rem]">
                Matched to your dog
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-bone/60">
                From toy breeds to Tibetan mastiffs — the same churpi, sized for
                the jaw that earns it.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                featured={product.id === "medium"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ingredient honesty — composition declaration ──── */}
      <section className="relative overflow-hidden bg-bone px-5 py-28 text-forest-deep sm:px-8 sm:py-36">
        {/* faint contour watermark */}
        <Topography
          rings={8}
          className="pointer-events-none absolute -right-40 top-1/2 hidden h-[700px] w-[700px] -translate-y-1/2 text-forest/[0.06] lg:block"
        />
        <div className="relative mx-auto max-w-editorial">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
            {/* Left — statement */}
            <div>
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-data text-gold-deep">
                  Composition · Full Disclosure
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-line mt-7 text-balance text-[2.75rem] text-forest-deep sm:text-[4rem]">
                  Three ingredients.
                  <br />
                  <span className="italic text-gold-deep">Nothing to hide.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-forest/70">
                  No preservatives. No binders. No grain, no gluten, no
                  additives — and nothing you can&apos;t read aloud. Just cheese,
                  cured slowly into the hardest, longest-lasting chew your dog
                  will ever love.
                </p>
              </Reveal>
            </div>

            {/* Right — back-label declaration */}
            <Reveal delay={0.15}>
              <LabelFrame tone="forest" className="bg-bone-soft p-9 sm:p-11">
                <p className="font-mono text-[11px] uppercase tracking-data text-gold-deep">
                  Declaration of Contents
                </p>
                <div className="mt-7 divide-y divide-forest/15">
                  {INGREDIENTS.map((ing, i) => (
                    <div
                      key={ing}
                      className="flex items-baseline justify-between gap-6 py-5"
                    >
                      <span className="font-serif text-2xl text-forest-deep sm:text-3xl">
                        {ing}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-data text-forest/45">
                        {["The body", "The cure", "The set"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-forest/15 pt-6 font-mono text-[10px] uppercase tracking-data text-forest/50">
                  <span>Batch {BRAND.batch}</span>
                  <span>Cured {BRAND.curedDays} days</span>
                  <span>Grain-free</span>
                </div>
              </LabelFrame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-deep px-5 py-32 text-center sm:px-8 sm:py-40">
        <Topography
          rings={7}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-patina/15"
        />
        <div className="absolute inset-0 vignette" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <div className="flex justify-center">
              <MountainMark className="w-12 text-gold" strokeWidth={1} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-line mt-8 text-balance text-[2.5rem] text-bone sm:text-[4rem]">
              Give them the bar
              <br />
              <span className="italic text-gold">worth waiting for.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-xl text-lg text-bone/60">
              Hours of quiet, contented chewing — and the cleanest ingredient
              list in the bowl.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-11">
              <Link href="/shop" className="btn-gold">
                Shop the Reserve
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
