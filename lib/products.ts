export type ProductTier = {
  id: "small" | "medium" | "large";
  name: string;
  tagline: string;
  weightRange: string;
  priceNPR: number;
  breedGuidance: string;
  breedExamples: string[];
  chewTime: string;
  description: string;
};

export const INGREDIENTS = ["Himalayan yak & cow milk", "Salt", "Lime juice"] as const;

export const PRODUCTS: ProductTier[] = [
  {
    id: "small",
    name: "Small Reserve",
    tagline: "For the little summiteers",
    weightRange: "30–45g",
    priceNPR: 450,
    breedGuidance: "Toy & small breeds up to ~10kg",
    breedExamples: ["Shih Tzu", "Pomeranian", "Lhasa Apso", "Pug", "Terrier"],
    chewTime: "3–6 hours of quiet focus",
    description:
      "A perfectly proportioned bar for smaller jaws. Hard, slow, and lasting — sized so your companion works it down without ever feeling overwhelmed.",
  },
  {
    id: "medium",
    name: "Medium Reserve",
    tagline: "The everyday classic",
    weightRange: "70–110g",
    priceNPR: 750,
    breedGuidance: "Medium breeds ~10–25kg",
    breedExamples: ["Beagle", "Cocker Spaniel", "Border Collie", "Bully", "Indie / Street dogs"],
    chewTime: "6–10 hours over several sittings",
    description:
      "Our most-loved tier. Substantial enough to last, refined enough to disappear cleanly — the bar most dogs grow up on.",
  },
  {
    id: "large",
    name: "Large Reserve",
    tagline: "Built for the big mountain dogs",
    weightRange: "120–200g",
    priceNPR: 1200,
    breedGuidance: "Large & giant breeds 25kg+",
    breedExamples: ["Labrador", "German Shepherd", "Rottweiler", "Tibetan Mastiff", "Golden Retriever"],
    chewTime: "10+ hours of serious commitment",
    description:
      "A formidable block of cured churpi for powerful chewers. Dense, mineral-hard, and engineered to hold its ground against the strongest jaws.",
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatNPR(amount: number) {
  return `NPR ${amount.toLocaleString("en-IN")}`;
}
