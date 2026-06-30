import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
  title: {
    default: "Sherpa Reserve — The Original Chew",
    template: "%s · Sherpa Reserve",
  },
  description:
    "A natural Himalayan churpi dog chew from Nepal. Milk, salt, lime juice — nothing else. Cured, smoked and aged the way Sherpa communities have for centuries.",
  keywords: [
    "churpi",
    "dog chew",
    "Himalayan dog chew",
    "Nepal",
    "natural dog treat",
    "yak cheese chew",
  ],
  openGraph: {
    title: "Sherpa Reserve — The Original Chew",
    description:
      "A natural Himalayan churpi dog chew from Nepal. Milk, salt, lime juice — nothing else.",
    type: "website",
  },
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
