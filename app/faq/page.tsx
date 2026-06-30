import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { MountainMark } from "@/components/mountain";
import { JsonLd } from "@/components/json-ld";
import { FAQ, type FaqItem } from "@/lib/faq";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Churpi Dog Chew FAQ — Safety, Ingredients & Delivery",
  description:
    "Answers on safety, durability, ingredients and delivery for The Original Chew — the natural Himalayan churpi (yak cheese) dog chew by Sherpa Reserve.",
  keywords: [
    "churpi dog chew faq",
    "is churpi safe for dogs",
    "yak cheese chew questions",
    "how long does churpi last",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ · Sherpa Reserve",
    description:
      "Answers on safety, durability, ingredients and delivery for The Original Chew.",
    url: absoluteUrl("/faq"),
    type: "website",
  },
};

const CATEGORIES: FaqItem["category"][] = [
  "Ingredients",
  "Safety",
  "Durability",
  "Delivery",
];

export default function FaqPage() {
  return (
    <div className="bg-forest pt-[72px]">
      <JsonLd
        data={[
          faqPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <header className="px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">Questions, answered</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-line mt-6 text-4xl text-bone sm:text-6xl">
            Frequently asked
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-bone/60">
            Everything on safety, durability, ingredients and delivery — in
            plain language.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        {CATEGORIES.map((category, ci) => {
          const items = FAQ.filter((f) => f.category === category);
          if (items.length === 0) return null;
          return (
            <Reveal key={category} delay={ci * 0.05} className="mb-14">
              <h2 className="eyebrow mb-4">{category}</h2>
              <FaqAccordion items={items} />
            </Reveal>
          );
        })}

        {/* Contact prompt */}
        <Reveal>
          <div className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-gold/20 bg-forest-soft/30 px-7 py-12 text-center">
            <MountainMark className="w-10 text-gold/60" strokeWidth={1} />
            <p className="font-serif text-2xl text-bone">
              Still wondering something?
            </p>
            <p className="max-w-md text-sm text-bone/55">
              Reach us on WhatsApp or Instagram and we&apos;ll get back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Message on WhatsApp
              </a>
              <Link href="/shop" className="btn-ghost">
                Shop the Reserve
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
