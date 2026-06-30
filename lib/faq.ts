export type FaqItem = {
  category: "Safety" | "Durability" | "Ingredients" | "Delivery";
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
];
