import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { ContourDivider, Topography } from "@/components/topography";
import { MountainMark, LabelFrame } from "@/components/mountain";
import { JsonLd } from "@/components/json-ld";
import { PRODUCTS, INGREDIENTS } from "@/lib/products";
import { BRAND } from "@/lib/brand";
import { productSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={productSchema()} />
      <Hero />

      {/* ── Provenance statement ──────────────────────────── */}
      <section className="relative border-t border-forest-line bg-forest px-5 py-28 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-editorial text-center">
          <Reveal>
            <p className="eyebrow">Provenance</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-line mx-auto mt-7 max-w-4xl text-balance text-[2rem] text-bone sm:text-[3.25rem]">
              For generations, Himalayan herders cured cheese hard enough to
              outlast the longest winter. Their dogs have been chewing it{" "}
              <span className="italic text-gold">ever since.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-bone/60">
              We didn&apos;t invent The Original Chew. We held it to the standard
              it deserves — sourcing the milk, slowing the cure, and ageing each
              bar until it earns the name.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The product — real chhurpi ────────────────────── */}
      <section className="relative overflow-hidden bg-forest-deep px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure className="group relative aspect-[5/4] overflow-hidden rounded-2xl border border-forest-line">
              <Image
                src="/images/chhurpi-hard.jpg"
                alt="Hard cured chhurpi cheese — The Original Chew"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 data text-bone/80">
                Hard cured chhurpi · The Himalayan original
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">The Original Chew</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-line mt-6 text-[2.25rem] text-bone sm:text-[3rem]">
                One of the hardest cheeses on earth.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-bone/60">
                Churpi is yak and cow milk cured with a little salt and lime
                juice, then smoke-dried and aged for weeks until it sets dense as
                seasoned wood. It softens at the tip as your dog works it, then
                re-hardens between sittings — hours of safe, contented chewing
                that never splinters like bone or rawhide.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {INGREDIENTS.map((ing) => (
                  <li key={ing} className="flex items-center gap-2.5 text-bone/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="font-serif text-lg">{ing}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.4}>
              <Link href="/shop" className="btn-gold mt-10">
                Shop the Reserve
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Heritage — the dogs of the high country ───────── */}
      <section className="relative overflow-hidden bg-forest px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow">The high country</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-line mt-6 text-[2.25rem] text-bone sm:text-[3.5rem]">
                A chew worthy of the dogs
                <span className="italic text-gold"> it was made for.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-bone/65">
                From the great guardian breeds of the Himalaya to the companion
                at your feet — every dog deserves a chew with nothing to hide and
                everything to earn. This is the one shepherds have trusted for
                centuries.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex gap-10">
                <div>
                  <div className="font-serif text-3xl text-gold">100%</div>
                  <div className="data mt-1 text-bone/45">Natural</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-gold">3</div>
                  <div className="data mt-1 text-bone/45">Ingredients</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-gold">0</div>
                  <div className="data mt-1 text-bone/45">Additives</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2">
            <figure className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-forest-line">
              <Image
                src="/images/herder-dog.jpg"
                alt="A Himalayan herder with his Tibetan Mastiff above a glacial lake in Nepal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 ease-lux group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 data text-bone/85">
                Guardian of the high pastures · Nepal
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ContourDivider className="bg-forest pb-16" />

      {/* ── The three tiers ───────────────────────────────── */}
      <section className="relative bg-forest px-5 pb-28 sm:px-8 sm:pb-32">
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

      {/* ── Composition + dairy honesty (cream) ───────────── */}
      <section className="relative overflow-hidden bg-bone px-5 py-28 text-forest-deep sm:px-8 sm:py-36">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            {/* Dairy photo */}
            <Reveal>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-forest/15">
                <Image
                  src="/images/cowportrait.jpg"
                  alt="A clean, healthy dairy cow grazing in a green highland meadow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.04]"
                />
                <figcaption className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-data text-bone/90">
                  Pasture-grazed · Single origin
                </figcaption>
              </figure>
            </Reveal>

            {/* Declaration */}
            <div>
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-data text-gold-deep">
                  Composition · Full Disclosure
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display-line mt-6 text-balance text-[2.5rem] text-forest-deep sm:text-[3.5rem]">
                  Three ingredients.
                  <br />
                  <span className="italic text-gold-deep">Nothing to hide.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <LabelFrame tone="forest" className="mt-9 bg-bone-soft p-8 sm:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-data text-gold-deep">
                    Declaration of Contents
                  </p>
                  <div className="mt-6 divide-y divide-forest/15">
                    {INGREDIENTS.map((ing, i) => (
                      <div key={ing} className="flex items-baseline justify-between gap-6 py-4">
                        <span className="font-serif text-2xl text-forest-deep sm:text-[1.75rem]">
                          {ing}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-data text-forest/45">
                          {["The body", "The cure", "The set"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-forest/15 pt-5 font-mono text-[10px] uppercase tracking-data text-forest/50">
                    <span>Batch {BRAND.batch}</span>
                    <span>Cured {BRAND.curedDays} days</span>
                    <span>Grain-free</span>
                  </div>
                </LabelFrame>
              </Reveal>
            </div>
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
