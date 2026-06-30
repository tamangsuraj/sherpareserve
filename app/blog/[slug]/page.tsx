import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Prose } from "@/components/prose";
import { FaqAccordion } from "@/components/faq-accordion";
import { MountainMark } from "@/components/mountain";
import { ContourDivider } from "@/components/topography";
import { JsonLd } from "@/components/json-ld";
import { BLOG, getPost, formatPostDate } from "@/lib/blog";
import { breadcrumbSchema, faqSchemaFrom } from "@/lib/schema";
import { absoluteUrl, SITE } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.metaTitle ?? post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: absoluteUrl(post.heroImage), alt: post.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [absoluteUrl(post.heroImage)],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const related = (post.relatedSlugs ?? [])
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.heroImage),
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  const schemas: object[] = [
    articleSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Journal", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
  if (post.faqs?.length) {
    schemas.push(faqSchemaFrom(post.faqs, `${url}#faq`));
  }

  return (
    <article className="bg-forest pt-[72px]">
      <JsonLd data={schemas} />

      {/* Hero */}
      <header className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32">
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest/80 to-forest" />
        <div className="absolute inset-0 vignette" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              {post.category} · {post.readingTimeMin} min read
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-line mt-6 text-balance text-3xl text-bone sm:text-5xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone/65">
              {post.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="data mt-6 text-gold/70">
              Published {formatPostDate(post.datePublished)}
              {post.dateModified !== post.datePublished &&
                ` · Updated ${formatPostDate(post.dateModified)}`}
            </p>
          </Reveal>
        </div>
      </header>

      <ContourDivider className="pb-4" />

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
        <Prose blocks={post.body} />
      </div>

      {/* FAQ */}
      {post.faqs?.length ? (
        <div className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
          <h2 className="display-line mb-6 mt-12 text-2xl text-bone sm:text-3xl">
            Frequently asked
          </h2>
          <FaqAccordion
            items={post.faqs.map((f) => ({
              category: "Ingredients",
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      ) : null}

      {/* CTA */}
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-gold/20 bg-forest-soft/30 px-7 py-12 text-center">
          <MountainMark className="w-10 text-gold/60" strokeWidth={1} />
          <p className="font-serif text-2xl text-bone">
            Give them The Original Chew.
          </p>
          <p className="max-w-md text-sm text-bone/55">
            Himalayan churpi, cured the old way — milk, salt, lime juice, and
            nothing else.
          </p>
          <Link href="/shop" className="btn-gold">
            Shop the Reserve
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <h2 className="eyebrow mb-8 text-center">Keep reading</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group flex gap-5 rounded-2xl border border-forest-line p-4 transition-colors hover:border-gold/40"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={r.heroImage}
                    alt={r.heroAlt}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="eyebrow">{r.category}</p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-bone">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
