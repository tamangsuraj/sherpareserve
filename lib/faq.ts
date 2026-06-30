export type FaqItem = {
  category:
    | "Safety"
    | "Durability"
    | "Ingredients"
    | "Delivery"
    | "International"
    | "Bulk & Wholesale";
  question: string;
  answer: string;
};

export const FAQ: FaqItem[] = [
  {
    category: "Ingredients",
    question: "What exactly is churpi?",
    answer:
      "Churpi is a traditional hard cheese from the Himalaya, made by Sherpa and highland communities for centuries. We cure yak and cow milk with a touch of salt and lime juice, then smoke-dry and age it into a dense, long-lasting bar. That's the whole recipe.",
  },
  {
    category: "Ingredients",
    question: "Is there really nothing else inside?",
    answer:
      "Nothing. Milk, salt, and lime juice — no preservatives, no binders, no additives, no artificial flavour or colour. If you can't pronounce it, it isn't in our chew.",
  },
  {
    category: "Safety",
    question: "Is The Original Chew safe for my dog?",
    answer:
      "Yes. It is grain-free, gluten-free, and naturally low in fat and lactose thanks to the aging process. As with any chew, give it under supervision and provide fresh water. Once a piece becomes small enough to swallow whole, take it away.",
  },
  {
    category: "Safety",
    question: "My dog has a sensitive stomach — is this okay?",
    answer:
      "Churpi is one of the gentlest long-lasting chews available because of its short, natural ingredient list and low lactose. Still, every dog is different. Introduce it gradually and consult your vet if your dog has specific dietary conditions.",
  },
  {
    category: "Durability",
    question: "How long does one chew last?",
    answer:
      "It depends on your dog's size and determination — anywhere from a few hours for small breeds to well over ten hours of cumulative chewing for large ones. The bar softens slightly at the tip as your dog works it, then re-hardens between sessions.",
  },
  {
    category: "Durability",
    question: "What do I do with the last small piece?",
    answer:
      "Don't throw it away. Microwave the final nub for 30–60 seconds and it puffs up into a light, crunchy cheese popcorn — a safe, edible treat that finishes the bar with zero waste.",
  },
  {
    category: "Delivery",
    question: "Where do you deliver?",
    answer:
      "We deliver across Nepal. Kathmandu Valley orders typically arrive within 1–2 days; other districts within 3–5 days depending on courier reach. This showcase site places demo orders only — no payment is taken.",
  },
  {
    category: "Delivery",
    question: "How should I store it?",
    answer:
      "Keep it in a cool, dry place. Because it's fully cured and aged, The Original Chew needs no refrigeration and stays good for up to a year unopened.",
  },
  {
    category: "International",
    question: "Do you ship to the United States?",
    answer:
      "Yes — we ship The Original Chew to dog owners across the United States. For US orders, current rates and timelines, message us on WhatsApp or email hello@sherpareserve.com and we'll set you up.",
  },
  {
    category: "International",
    question: "Do you ship internationally outside the US and Nepal?",
    answer:
      "We ship worldwide, including the UK, Canada, Australia, Europe and the Gulf. Reach out with your country and quantity and we'll confirm shipping options and delivery time.",
  },
  {
    category: "International",
    question: "What currency are your prices in?",
    answer:
      "List prices on the shop page are shown in Nepali Rupees (NPR). For US (USD) and other international orders, we'll quote the total — including shipping — in your local currency when you contact us.",
  },
  {
    category: "International",
    question: "How long does international delivery take?",
    answer:
      "It depends on the destination and courier. As a guide, most international orders arrive within 1–3 weeks. Because churpi is fully cured and shelf-stable, it travels well and needs no refrigeration in transit.",
  },
  {
    category: "International",
    question: "Will yak cheese chews clear customs?",
    answer:
      "Hard, fully-cured cheese chews are widely imported as commercial pet products, but rules vary by country. We declare every shipment accurately; if your country has specific dairy or pet-import restrictions, let us know and we'll advise before you order.",
  },
  {
    category: "Bulk & Wholesale",
    question: "Can I order in bulk?",
    answer:
      "Yes. Whether you have a multi-dog household or want to stock up, we offer bulk packs at better per-unit pricing. Tell us the sizes and quantities you need and we'll put together an order.",
  },
  {
    category: "Bulk & Wholesale",
    question: "Do you offer wholesale pricing for pet stores and retailers?",
    answer:
      "We do. Pet shops, groomers, vets and online retailers can stock The Original Chew at wholesale rates. Email hello@sherpareserve.com with your business details and expected volume for a wholesale price list.",
  },
  {
    category: "Bulk & Wholesale",
    question: "Is there a minimum order quantity for wholesale?",
    answer:
      "Minimums depend on the destination and mix of sizes. We keep them low so new stockists can trial the product — get in touch and we'll find a starting order that works for you.",
  },
  {
    category: "Bulk & Wholesale",
    question: "Do you offer private label or custom packaging?",
    answer:
      "For larger wholesale partners we can discuss private-label and custom-packaging options. Reach out with your requirements and projected volumes and we'll talk through what's possible.",
  },
  {
    category: "Bulk & Wholesale",
    question: "I run a breeder or rescue — can I get a bulk rate?",
    answer:
      "Absolutely. Breeders, kennels, trainers and rescues with several dogs are a great fit for bulk packs. Message us with your numbers and we'll sort out fair bulk pricing.",
  },
];
