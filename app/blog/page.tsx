import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ContourDivider } from "@/components/topography";
import { JsonLd } from "@/components/json-ld";
import { allPostsSorted, formatPostDate } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl, SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "The Journal — Churpi, Yak Cheese & Dog Chew Guides",
  description:
    "Guides and answers on churpi (chhurpi), yak-cheese dog chews, chew safety, durability and sizing — from the makers of The Original Chew.",
  keywords: [
    "churpi guide",
    "yak cheese dog chew blog",
    "dog chew safety",
    "long lasting dog chew",
    "Himalayan dog chew",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Journal · Sherpa Reserve",
    description:
      "Guides and answers on churpi, yak-cheese dog chews, safety, durability and sizing.",
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = allPostsSorted();
  const [featured, ...rest] = posts;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog")}#blog`,
    name: "The Sherpa Reserve Journal",
    description:
      "Guides and answers on churpi, yak-cheese dog chews, safety, durability and sizing.",
    url: absoluteUrl("/blog"),
    publisher: { "@id": `${SITE.url}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <div className="bg-forest pt-[72px]">
      <JsonLd
        data={[
          collectionSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
          ]),
        ]}
      />

      <header className="px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">The Journal</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-line mx-auto mt-6 max-w-3xl text-balance text-4xl text-bone sm:text-6xl">
            Everything worth knowing about churpi
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bone/60">
            Plain-language guides on the Himalayan yak-cheese chew — what it is,
            why it&apos;s safe, how long it lasts, and how to choose the right
            size for your dog.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        {/* Featured post */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-forest-line transition-colors hover:border-gold/40 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.heroImage}
                alt={featured.heroAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
              <p className="eyebrow">
                {featured.category} · {featured.readingTimeMin} min read
              </p>
              <h2 className="display-line text-2xl text-bone sm:text-4xl">
                {featured.title}
              </h2>
              <p className="text-bone/60">{featured.excerpt}</p>
              <span className="data text-gold/80">
                {formatPostDate(featured.datePublished)}
              </span>
            </div>
          </Link>
        </Reveal>
      </div>

      <ContourDivider className="py-12" />

      {/* Grid of the rest */}
      <div className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest-line transition-colors hover:border-gold/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-lux group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="eyebrow">
                    {post.category} · {post.readingTimeMin} min
                  </p>
                  <h3 className="font-serif text-xl leading-snug text-bone">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-bone/55">
                    {post.excerpt}
                  </p>
                  <span className="data mt-auto pt-2 text-gold/70">
                    {formatPostDate(post.datePublished)}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
