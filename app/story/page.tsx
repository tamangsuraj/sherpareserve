import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { MountainMark } from "@/components/mountain";
import { ContourDivider } from "@/components/topography";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The heritage and sourcing behind Sherpa Reserve — churpi cured the old way in the Himalaya of Nepal.",
};

export default function StoryPage() {
  return (
    <article className="bg-forest pt-[72px]">
      {/* Editorial hero — photographic */}
      <header className="relative overflow-hidden px-5 py-32 text-center sm:px-8 sm:py-44">
        <Image
          src="/images/himalaya.jpg"
          alt="Mount Everest and the high Himalaya of Nepal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/80 via-forest/75 to-forest" />
        <div className="absolute inset-0 vignette" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow">Our Story · {BRAND.origin}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-line mt-7 text-balance text-4xl text-bone sm:text-7xl">
              A recipe older than the roads that reach it.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-bone/60">
              High in the valleys of the Nepali Himalaya, churpi has been made
              the same patient way for centuries. This is where The Original
              Chew comes from — and why we refused to change a thing.
            </p>
          </Reveal>
        </div>
      </header>

      <ContourDivider className="pb-6" />

      {/* Editorial body — large type, generous whitespace, scroll reveals */}
      <div className="mx-auto max-w-3xl px-5 pb-28 sm:px-8 sm:pb-40">
        <StorySection
          kicker="The source"
          heading="It begins with the milk."
          body={[
            "Our churpi starts where the grass is thin and the air is cold — with the milk of yak and hill cattle grazed in the high pastures of Nepal. Cold seasons and slow living make for richer milk, and richer milk makes for a harder, longer-lasting bar.",
            "We work with highland families who have made cheese this way for generations. There is no shortcut here, and we have never looked for one.",
          ]}
        />

        <Reveal>
          <figure className="my-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-forest-line">
              <Image
                src="/images/cow.jpg"
                alt="Dairy cattle grazing in open highland pasture at golden hour"
                fill
                sizes="(max-width: 768px) 100vw, 48rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>
            <figcaption className="mt-3 data text-bone/45">
              Hill cattle on open pasture — the first ingredient.
            </figcaption>
          </figure>
        </Reveal>

        <StorySection
          kicker="The craft"
          heading="Three ingredients, a great deal of patience."
          body={[
            "The milk is gently curdled with a little lime juice, pressed, lightly salted, and then smoke-dried over weeks until it sets hard as seasoned wood. That is the entire process — no preservatives, no machinery dressed up as tradition.",
            "What time removes is moisture. What it leaves behind is a dense, mineral-rich block that a dog can work for hours without it ever splintering the way a bone or rawhide does.",
          ]}
        />

        <StorySection
          kicker="The standard"
          heading="We didn't invent it. We held it to account."
          body={[
            "Churpi was never created for dogs — it was created for people crossing high passes who needed food that would not spoil. Somewhere along the way, those same people noticed their dogs loved it just as much, and it lasted them far longer.",
            "Sherpa Reserve exists to give that humble, honest chew the care it deserves: consistent sizing, careful curing, and a name on the bar that stands for something.",
          ]}
        />

        <Reveal>
          <figure className="my-16 border-y border-forest-line py-12 text-center">
            <MountainMark className="mx-auto mb-7 w-10 text-gold/60" strokeWidth={1} />
            <blockquote className="font-serif text-2xl font-light italic leading-snug text-bone/90 sm:text-3xl">
              &ldquo;Milk, salt, lime juice — and the patience to do nothing
              else.&rdquo;
            </blockquote>
          </figure>
        </Reveal>

        <StorySection
          kicker="The promise"
          heading="Good for them. Honest with you."
          body={[
            "Every bar is grain-free, gluten-free, naturally low in fat and lactose, and made of ingredients you could find in your own kitchen. We tell you exactly what is inside because there is nothing we would rather keep quiet.",
            "This site is a showcase for now — but the chew is real, and so is the standard behind it.",
          ]}
        />

        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <p className="font-serif text-2xl font-light text-bone">
              Meet the three tiers of the Reserve.
            </p>
            <Link href="/shop" className="btn-gold">
              Shop the Reserve
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function StorySection({
  kicker,
  heading,
  body,
}: {
  kicker: string;
  heading: string;
  body: string[];
}) {
  return (
    <section className="border-t border-forest-line py-14 first:border-t-0">
      <Reveal>
        <p className="eyebrow">{kicker}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-line mt-5 text-3xl text-bone sm:text-4xl">
          {heading}
        </h2>
      </Reveal>
      <div className="mt-7 space-y-5">
        {body.map((para, i) => (
          <Reveal key={i} delay={0.15 + i * 0.08}>
            <p className="text-lg leading-relaxed text-bone/65">{para}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
