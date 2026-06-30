/**
 * Central SEO / site configuration.
 *
 * `SITE_URL` is the single source of truth for the production origin. Change it
 * here (or via NEXT_PUBLIC_SITE_URL at build time) and every canonical URL,
 * sitemap entry, Open Graph tag and JSON-LD `@id` updates with it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sherpareserve.com"
).replace(/\/$/, "");

export const SITE = {
  name: "Sherpa Reserve",
  legalName: "Sherpa Reserve",
  tagline: "The Original Chew",
  url: SITE_URL,
  /** Used as the OG/Twitter default and brand description. */
  description:
    "Sherpa Reserve makes The Original Chew — a 100% natural Himalayan churpi (yak-cheese) dog chew from Nepal. Three ingredients: milk, salt, lime juice. Long-lasting, grain-free and splinter-free.",
  locale: "en_US",
  twitter: "@sherpareserve",
  email: "hello@sherpareserve.com",
  phone: "+9779800000000",
  address: {
    locality: "Kathmandu",
    region: "Bagmati",
    country: "NP",
    countryName: "Nepal",
  },
  social: [
    "https://instagram.com",
    "https://wa.me/9779800000000",
  ],
} as const;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * High-value keyword set, grouped by intent. Used to seed page-level keyword
 * metadata. Search engines weight content far above this tag, but it keeps the
 * targeting explicit and consistent across pages.
 */
export const KEYWORDS = {
  core: [
    "churpi",
    "chhurpi",
    "churpi dog chew",
    "chhurpi dog chew",
    "yak cheese dog chew",
    "yak milk dog chew",
    "Himalayan dog chew",
    "Himalayan cheese chew",
    "yak chew for dogs",
    "Nepal dog chew",
    "Sherpa dog chew",
  ],
  benefit: [
    "natural dog chew",
    "long lasting dog chew",
    "long lasting dog chew for aggressive chewers",
    "grain free dog chew",
    "gluten free dog treat",
    "healthy dog chew",
    "odourless dog chew",
    "single ingredient dog treat",
    "no rawhide dog chew",
    "safe dog chew",
    "dog chew for heavy chewers",
  ],
  brand: ["Sherpa Reserve", "The Original Chew", "yak cheese bar for dogs"],
} as const;

export const ALL_KEYWORDS: string[] = [
  ...KEYWORDS.core,
  ...KEYWORDS.benefit,
  ...KEYWORDS.brand,
];
