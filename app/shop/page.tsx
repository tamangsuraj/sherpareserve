import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { ContourDivider } from "@/components/topography";
import { PRODUCTS, INGREDIENTS } from "@/lib/products";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Three breed-size tiers of The Original Chew — Small, Medium and Large. Pricing in NPR with breed-size guidance.",
};

export default function ShopPage() {
  return (
    <div className="bg-forest pt-[72px]">
      {/* Header */}
      <header className="px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">The Reserve · Batch {BRAND.batch}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-line mt-6 text-4xl text-bone sm:text-6xl">
            Choose your dog&apos;s size
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone/60">
            Same churpi, same three ingredients — sized so the bar lasts without
            ever becoming a swallowing risk. Not sure? Use the guide below.
          </p>
        </Reveal>
      </header>

      {/* Cards */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              featured={product.id === "medium"}
            />
          ))}
        </div>
      </section>

      <ContourDivider className="py-16" />

      {/* Breed-size guidance table */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="display-line text-center text-3xl text-bone sm:text-4xl">
              Breed-size guidance
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-forest-line">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-forest-line bg-forest-soft/40 font-mono text-[10px] uppercase tracking-data text-gold/80">
                    <th className="px-5 py-4 font-medium">Tier</th>
                    <th className="px-5 py-4 font-medium">Weight</th>
                    <th className="hidden px-5 py-4 font-medium sm:table-cell">
                      Best for
                    </th>
                    <th className="px-5 py-4 font-medium">Example breeds</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-forest-line/60 last:border-0 transition-colors hover:bg-forest-soft/30"
                    >
                      <td className="px-5 py-5 align-top">
                        <span className="font-serif text-lg text-bone">
                          {p.name}
                        </span>
                      </td>
                      <td className="px-5 py-5 align-top text-bone/70">
                        {p.weightRange}
                      </td>
                      <td className="hidden px-5 py-5 align-top text-bone/70 sm:table-cell">
                        {p.breedGuidance}
                      </td>
                      <td className="px-5 py-5 align-top text-bone/70">
                        {p.breedExamples.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Ingredients reassurance */}
          <Reveal delay={0.15}>
            <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-[1.1fr_1fr]">
              <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-forest-line sm:aspect-auto">
                <Image
                  src="/images/chhurpi-hard.jpg"
                  alt="Hard cured chhurpi cheese — The Original Chew"
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 to-transparent" />
                <figcaption className="absolute bottom-4 left-5 data text-bone/85">
                  Hard cured chhurpi
                </figcaption>
              </figure>
              <div className="flex flex-col justify-center rounded-2xl border border-gold/20 bg-forest-soft/30 px-7 py-8">
                <p className="eyebrow">Every tier, the same recipe</p>
                <p className="mt-3 font-serif text-2xl text-bone">
                  {INGREDIENTS.join(" · ")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-bone/55">
                  Grain-free, gluten-free, no preservatives or additives.
                  Supervise chewing and keep fresh water nearby.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
