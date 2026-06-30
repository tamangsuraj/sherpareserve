import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE, SITE_URL, ALL_KEYWORDS } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sherpa Reserve — Himalayan Churpi Dog Chew | The Original Chew",
    template: "%s · Sherpa Reserve",
  },
  description:
    "A 100% natural Himalayan churpi (chhurpi / yak cheese) dog chew from Nepal. Milk, salt, lime juice — nothing else. Long-lasting, grain-free and splinter-free, cured the way Sherpa communities have for centuries.",
  keywords: ALL_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Pet Supplies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sherpa Reserve — The Original Himalayan Churpi Dog Chew",
    description:
      "A 100% natural Himalayan churpi (yak cheese) dog chew from Nepal. Milk, salt, lime juice — nothing else.",
    url: SITE_URL,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherpa Reserve — The Original Himalayan Churpi Dog Chew",
    description:
      "A 100% natural Himalayan churpi (yak cheese) dog chew from Nepal. Milk, salt, lime juice — nothing else.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1F1A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-forest">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
