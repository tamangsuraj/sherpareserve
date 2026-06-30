/**
 * Schema.org structured-data builders. Centralised so every page emits
 * consistent, cross-linked entities (via stable `@id`s) — which is what lets
 * search engines and AI answer engines resolve "Sherpa Reserve", "The Original
 * Chew" and "churpi" into a single connected knowledge graph.
 */
import { SITE, SITE_URL, absoluteUrl } from "./seo";
import { PRODUCTS, INGREDIENTS, formatNPR } from "./products";
import { FAQ } from "./faq";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PRODUCT_ID = `${SITE_URL}/#the-original-chew`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
    image: absoluteUrl("/images/chhurpi-hard.jpg"),
    description: SITE.description,
    email: SITE.email,
    slogan: SITE.tagline,
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: { "@type": "Country", name: SITE.address.countryName },
    sameAs: SITE.social,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * The Original Chew, modelled as one Product with three size variants as
 * Offers. Prices are NPR. No ratings are claimed (we don't fabricate reviews).
 */
export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": PRODUCT_ID,
    name: "The Original Chew — Himalayan Churpi Dog Chew",
    alternateName: [
      "Churpi dog chew",
      "Yak cheese dog chew",
      "Himalayan yak milk chew",
    ],
    description:
      "A 100% natural Himalayan churpi (yak & cow milk cheese) dog chew, cured and aged the traditional Sherpa way. Made from milk, salt and lime juice — nothing else. Long-lasting, grain-free, gluten-free and splinter-free.",
    image: [
      absoluteUrl("/images/chhurpi-hard.jpg"),
      absoluteUrl("/images/chhurpi-make.jpg"),
    ],
    brand: { "@type": "Brand", name: SITE.name },
    category: "Pet Supplies > Dog Treats & Chews",
    material: INGREDIENTS.join(", "),
    audience: { "@type": "PeopleAudience", suggestedMinAge: 0 },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Ingredients", value: INGREDIENTS.join(", ") },
      { "@type": "PropertyValue", name: "Grain free", value: "Yes" },
      { "@type": "PropertyValue", name: "Gluten free", value: "Yes" },
      { "@type": "PropertyValue", name: "Preservatives", value: "None" },
      { "@type": "PropertyValue", name: "Origin", value: "Solukhumbu, Nepal" },
    ],
    offers: PRODUCTS.map((p) => ({
      "@type": "Offer",
      name: `${p.name} — ${p.weightRange}`,
      sku: p.id,
      price: p.priceNPR,
      priceCurrency: "NPR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/shop"),
      priceSpecification: {
        "@type": "PriceSpecification",
        price: p.priceNPR,
        priceCurrency: "NPR",
        valueAddedTaxIncluded: true,
      },
      itemCondition: "https://schema.org/NewCondition",
      description: `${p.breedGuidance}. ${formatNPR(p.priceNPR)}.`,
    })),
    seller: { "@id": ORG_ID },
  };
}

/** FAQPage built from the site FAQ — eligible for FAQ rich results & AI answers. */
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/faq")}#faqpage`,
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Reusable FAQ schema from an arbitrary Q&A list (used by blog posts). */
export function faqSchemaFrom(
  faqs: { question: string; answer: string }[],
  id?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
