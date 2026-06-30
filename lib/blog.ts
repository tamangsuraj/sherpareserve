/**
 * The Journal — long-form, search-optimised editorial.
 *
 * Posts are stored as structured content blocks (not raw HTML) so they can be
 * rendered consistently, fed into JSON-LD, and kept free of unsafe markup.
 * Inline `**bold**` and `[label](/path)` links are supported by the renderer.
 *
 * Each post targets a concrete search intent (informational or commercial) and
 * is written to earn featured snippets and AI-Overview citations: clear H2
 * questions, concise lead answers, scannable lists, and an FAQ block that emits
 * FAQPage schema.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title?: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Optional <title>/OG override when the H1 is long. */
  metaTitle?: string;
  description: string;
  excerpt: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingTimeMin: number;
  category: string;
  heroImage: string;
  heroAlt: string;
  body: Block[];
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
};

export const BLOG: BlogPost[] = [
  {
    slug: "what-is-churpi-himalayan-yak-cheese-dog-chew",
    title: "What Is Churpi? The Himalayan Yak-Cheese Dog Chew, Explained",
    description:
      "Churpi (chhurpi) is a traditional hard cheese from the Himalaya made into one of the longest-lasting natural dog chews. Here's what it is, how it's made, and why dogs love it.",
    excerpt:
      "Churpi is a rock-hard Himalayan cheese cured for centuries by Sherpa communities — and one of the most natural, long-lasting dog chews on earth. Here's the full story.",
    keywords: [
      "what is churpi",
      "what is chhurpi",
      "churpi dog chew",
      "yak cheese dog chew",
      "Himalayan dog chew",
      "yak chew for dogs",
    ],
    datePublished: "2026-03-04",
    dateModified: "2026-06-12",
    readingTimeMin: 6,
    category: "Churpi 101",
    heroImage: "/images/chhurpi-hard.jpg",
    heroAlt: "Blocks of hard cured Himalayan churpi yak cheese",
    body: [
      {
        type: "p",
        text: "**Churpi** (also spelled **chhurpi**) is a traditional hard cheese from the Himalaya of Nepal, Tibet and Bhutan, made from yak and cow milk. In its hardest form it is one of the densest cheeses on earth — and that same block, cured and aged, has become one of the most natural and longest-lasting dog chews you can give your pet.",
      },
      {
        type: "p",
        text: "If you've searched for a chew that lasts for hours, won't splinter like bone, and doesn't hide a label full of ingredients you can't pronounce, churpi is the answer Sherpa communities arrived at centuries ago.",
      },
      { type: "h2", text: "What is churpi made of?" },
      {
        type: "p",
        text: "Authentic hard churpi has just three ingredients. At [Sherpa Reserve](/shop) that's all we use, too:",
      },
      {
        type: "ul",
        items: [
          "**Himalayan yak & cow milk** — richer and higher in protein because the animals graze cold, high pasture.",
          "**Salt** — a small amount to season and help preserve.",
          "**Lime juice** — a natural acid that gently curdles the milk, replacing rennet.",
        ],
      },
      {
        type: "p",
        text: "There are no preservatives, binders, grains, gluten, artificial flavours or colours. That short ingredient list is exactly why churpi is so gentle on sensitive stomachs.",
      },
      { type: "h2", text: "How is churpi made into a dog chew?" },
      {
        type: "ol",
        items: [
          "The milk is gently curdled with a little lime juice and lightly salted.",
          "The curds are pressed to force out moisture.",
          "The pressed blocks are smoke-dried over weeks.",
          "They are aged until they set hard as seasoned wood — a process that removes water and concentrates protein.",
        ],
      },
      {
        type: "p",
        text: "What time removes is moisture. What it leaves behind is a dense, mineral-rich bar a dog can work for hours. Read the full process on [our story page](/story).",
      },
      { type: "h2", text: "Why do dogs love churpi chews?" },
      {
        type: "p",
        text: "Churpi was never invented for dogs — it was food for people crossing high passes who needed something that wouldn't spoil. Herders simply noticed their dogs loved it, and that it kept them busy for hours. As your dog chews, the tip softens slightly into a savoury, cheesy layer, then re-hardens between sessions. It's tasty, satisfying, and it lasts.",
      },
      {
        type: "callout",
        title: "The zero-waste finish",
        text: "Don't bin the final nub. Microwave it for 30–60 seconds and it puffs into a light, crunchy cheese popcorn — a safe edible treat that finishes the bar.",
      },
      { type: "h2", text: "Churpi vs other dog chews" },
      {
        type: "p",
        text: "Unlike rawhide, churpi isn't a chemically processed by-product and doesn't swell dangerously in the gut. Unlike cooked bones, it doesn't splinter. And unlike most supermarket chews, the entire ingredient list fits in one sentence. For a full breakdown see [Churpi vs Rawhide vs Bones](/blog/churpi-vs-rawhide-vs-bones).",
      },
    ],
    faqs: [
      {
        question: "Is churpi the same as chhurpi?",
        answer:
          "Yes. Churpi and chhurpi are two English spellings of the same traditional Himalayan cheese. You may also see it called yak cheese or Himalayan cheese chew.",
      },
      {
        question: "Is churpi just yak cheese?",
        answer:
          "Churpi is traditionally made from yak milk, cow milk, or a blend of both. Sherpa Reserve uses Himalayan yak and cow milk cured with salt and lime juice — nothing else.",
      },
      {
        question: "How long does a churpi dog chew last?",
        answer:
          "Anywhere from a few hours for a small dog to well over ten hours of cumulative chewing for a large one, because the cured cheese is extremely dense and hard.",
      },
    ],
    relatedSlugs: [
      "are-yak-cheese-dog-chews-safe",
      "churpi-vs-rawhide-vs-bones",
    ],
  },

  {
    slug: "are-yak-cheese-dog-chews-safe",
    title: "Are Yak Cheese & Churpi Dog Chews Safe? A Practical Guide",
    description:
      "Yak cheese (churpi) chews are among the safest long-lasting dog chews — grain-free, low-lactose and splinter-free. Here's how to use them safely, plus when to take one away.",
    excerpt:
      "Yak cheese chews are widely considered one of the safest long-lasting options — but safe use still matters. Here's the practical, no-hype guide.",
    keywords: [
      "are yak cheese dog chews safe",
      "is churpi safe for dogs",
      "yak cheese chew safety",
      "safe long lasting dog chew",
      "low lactose dog chew",
    ],
    datePublished: "2026-03-22",
    dateModified: "2026-06-18",
    readingTimeMin: 7,
    category: "Safety",
    heroImage: "/images/dog.jpg",
    heroAlt: "A healthy dog resting after chewing",
    body: [
      {
        type: "p",
        text: "**Yes — yak cheese (churpi) chews are widely considered one of the safest long-lasting dog chews available**, because they're made from a very short list of natural ingredients, they don't splinter like cooked bone, and the aging process makes them naturally low in lactose. As with any chew, a few simple precautions keep them safe.",
      },
      { type: "h2", text: "Why churpi is considered a safe chew" },
      {
        type: "ul",
        items: [
          "**No splintering.** Unlike cooked bones or antlers, cured cheese wears down gradually rather than cracking into sharp shards.",
          "**Short, natural ingredient list.** Milk, salt and lime juice — no rawhide chemicals, no preservatives, no artificial additives.",
          "**Naturally low in lactose and fat.** Aging breaks down much of the lactose, which is gentler on digestion than fresh dairy.",
          "**Grain-free and gluten-free.** A good fit for dogs with grain sensitivities.",
        ],
      },
      { type: "h2", text: "How to give a yak cheese chew safely" },
      {
        type: "ol",
        items: [
          "**Pick the right size for your dog.** The chew should be too large to swallow whole. Use our [size guide](/blog/dog-chew-size-guide-by-breed) or the [breed table on the shop page](/shop).",
          "**Supervise chewing**, especially the first time, so you learn how your dog approaches it.",
          "**Keep fresh water nearby** — natural chewing makes dogs thirsty.",
          "**Take it away once it's small enough to swallow whole.** Save that last nub for cheese popcorn instead.",
          "**Introduce it gradually** if your dog has never had a dairy chew, to let their stomach adjust.",
        ],
      },
      {
        type: "callout",
        title: "When to check with your vet",
        text: "If your dog has a diagnosed dairy allergy, pancreatitis, or a strict prescription diet, ask your vet before introducing any new chew — including churpi.",
      },
      { type: "h2", text: "Are yak chews safe for puppies?" },
      {
        type: "p",
        text: "Hard churpi is best for adult dogs with full adult teeth. For puppies and senior dogs with more delicate teeth, offer a softer chew or supervise closely and only allow gentle gnawing rather than hard cracking. When in doubt, choose a size your dog can lick and gnaw but not crunch through quickly.",
      },
      { type: "h2", text: "What about the calories?" },
      {
        type: "p",
        text: "Cheese is energy-dense, so a churpi chew is a treat, not a meal replacement. Because dogs work a bar slowly over hours, the amount actually ingested in one sitting is small — but factor it into your dog's daily treat allowance, especially for smaller breeds.",
      },
    ],
    faqs: [
      {
        question: "Can dogs eat churpi every day?",
        answer:
          "Most dogs can enjoy churpi regularly, but because it's energy-dense, treat it as part of their daily treat allowance rather than an unlimited snack. Smaller dogs need smaller, less frequent portions.",
      },
      {
        question: "Is churpi safe for dogs with sensitive stomachs?",
        answer:
          "Churpi is one of the gentlest long-lasting chews because of its short ingredient list and naturally low lactose. Introduce it gradually, and consult your vet if your dog has a diagnosed dietary condition.",
      },
      {
        question: "Can a yak cheese chew break my dog's teeth?",
        answer:
          "Any very hard chew carries some risk for aggressive crackers. Choose the right size, supervise, and steer your dog toward gnawing the softening tip rather than trying to crack the whole bar at once.",
      },
    ],
    relatedSlugs: [
      "what-is-churpi-himalayan-yak-cheese-dog-chew",
      "dog-chew-size-guide-by-breed",
    ],
  },

  {
    slug: "best-long-lasting-dog-chews-aggressive-chewers",
    title: "The Best Long-Lasting Dog Chews for Aggressive Chewers",
    description:
      "Power chewer destroys everything in minutes? Here are the longest-lasting natural dog chews for aggressive chewers — and why hard Himalayan churpi outlasts most of them.",
    excerpt:
      "If your dog demolishes every chew in minutes, you need density and durability without the splinter risk. Here's what actually lasts.",
    keywords: [
      "best long lasting dog chew",
      "long lasting dog chew for aggressive chewers",
      "dog chew for heavy chewers",
      "durable dog chew",
      "natural dog chew that lasts",
    ],
    datePublished: "2026-04-10",
    dateModified: "2026-06-20",
    readingTimeMin: 6,
    category: "Buying Guide",
    heroImage: "/images/herder-dog.jpg",
    heroAlt: "A strong Himalayan guardian dog in the high country",
    body: [
      {
        type: "p",
        text: "**For aggressive chewers, the longest-lasting natural options are hard yak-cheese (churpi) chews, followed by large root woods and nylon alternatives** — but only churpi combines extreme hardness with a fully edible, splinter-free, single-source-dairy makeup. If your dog destroys soft chews in minutes, density is what you're really shopping for.",
      },
      { type: "h2", text: "What makes a chew last?" },
      {
        type: "ul",
        items: [
          "**Density.** The harder and more compressed the material, the slower a dog can wear it down.",
          "**Size.** A correctly sized bar can't be gulped, so your dog has to work it.",
          "**Texture that rewards gnawing, not gulping.** Churpi softens at the tip, so dogs settle into steady chewing rather than racing to crunch it.",
        ],
      },
      { type: "h2", text: "Long-lasting chews, ranked for power chewers" },
      {
        type: "h3",
        text: "1. Hard Himalayan churpi (yak cheese) — best overall",
      },
      {
        type: "p",
        text: "Cured and aged until it's dense as seasoned wood, churpi gives heavy chewers hours of work without splintering. It's edible, grain-free, and made from just milk, salt and lime juice. Match the [Large Reserve](/shop) to big, determined jaws.",
      },
      { type: "h3", text: "2. Root wood (e.g. coffee or heather root)" },
      {
        type: "p",
        text: "Very durable and low-odour, but not edible and can fracture into splinters as it wears — supervision required.",
      },
      { type: "h3", text: "3. Nylon / synthetic chews" },
      {
        type: "p",
        text: "Long-lasting, but inedible and made from plastic; small ingested pieces can cause issues. Many owners prefer a natural alternative.",
      },
      { type: "h3", text: "4. Antlers and horns" },
      {
        type: "p",
        text: "Long-lasting but among the most likely to crack teeth, because they're rigid with no give. Use with caution for aggressive crackers.",
      },
      {
        type: "callout",
        title: "Why we'd skip rawhide for power chewers",
        text: "Rawhide is chemically processed and can be torn into large chunks that swell in the gut. For heavy chewers it's one of the higher-risk options. More in our [churpi vs rawhide comparison](/blog/churpi-vs-rawhide-vs-bones).",
      },
      { type: "h2", text: "How to make any chew last longer" },
      {
        type: "ol",
        items: [
          "Size up — choose the largest safe size for your dog.",
          "Ration it: give the chew for set sessions rather than leaving it down all day.",
          "Store it between sessions so it stays hard and dry.",
        ],
      },
      {
        type: "p",
        text: "Not sure which size fits your dog? Start with the [dog chew size guide](/blog/dog-chew-size-guide-by-breed).",
      },
    ],
    faqs: [
      {
        question: "What is the longest-lasting dog chew?",
        answer:
          "Among natural, edible options, hard Himalayan churpi (yak cheese) is one of the longest-lasting because it's cured and aged until extremely dense. A correctly sized bar can give a large dog ten or more hours of cumulative chewing.",
      },
      {
        question: "What's the best chew for an aggressive chewer that won't splinter?",
        answer:
          "Hard churpi is a strong choice: it's dense enough to withstand heavy chewing yet wears down gradually instead of cracking into sharp shards like cooked bone or antler.",
      },
    ],
    relatedSlugs: [
      "churpi-vs-rawhide-vs-bones",
      "dog-chew-size-guide-by-breed",
    ],
  },

  {
    slug: "churpi-vs-rawhide-vs-bones",
    title: "Churpi vs Rawhide vs Bones vs Antlers: The Safest Dog Chew Compared",
    description:
      "A clear, honest comparison of churpi (yak cheese), rawhide, bones and antlers — on safety, digestibility, ingredients and how long each lasts.",
    excerpt:
      "Rawhide, bones, antlers or yak cheese? Here's an honest side-by-side on safety, digestibility and how long each one really lasts.",
    keywords: [
      "churpi vs rawhide",
      "yak cheese vs rawhide",
      "safest dog chew",
      "rawhide alternative",
      "are bones safe for dogs",
    ],
    datePublished: "2026-05-02",
    dateModified: "2026-06-22",
    readingTimeMin: 7,
    category: "Comparison",
    heroImage: "/images/chhurpi-make.jpg",
    heroAlt: "Traditional churpi being made and cured",
    body: [
      {
        type: "p",
        text: "**The short version: hard churpi (yak cheese) is generally the safest long-lasting chew of the four** — it's fully edible, doesn't splinter, and has a three-ingredient label. Rawhide carries processing and swelling risks, cooked bones can splinter, and antlers are the most likely to crack teeth. Here's the honest breakdown.",
      },
      { type: "h2", text: "Churpi (yak cheese)" },
      {
        type: "ul",
        items: [
          "**Ingredients:** milk, salt, lime juice. No preservatives or additives.",
          "**Digestible?** Yes — fully edible and naturally low in lactose.",
          "**Splinter risk:** very low; wears down gradually.",
          "**Lasts:** hours to 10+ hours depending on dog size.",
          "**Watch for:** energy density (it's cheese) and very hard cracking by power chewers — pick the right size.",
        ],
      },
      { type: "h2", text: "Rawhide" },
      {
        type: "ul",
        items: [
          "**Ingredients:** animal hide, often chemically treated, bleached and glued.",
          "**Digestible?** Poorly — softened chunks can swell and cause blockages.",
          "**Splinter risk:** can be torn into large swallowable pieces.",
          "**Lasts:** variable; soft types disappear fast.",
          "**Watch for:** choking and intestinal blockage; a common reason owners switch to a [rawhide alternative](/blog/best-long-lasting-dog-chews-aggressive-chewers).",
        ],
      },
      { type: "h2", text: "Bones (cooked and raw)" },
      {
        type: "ul",
        items: [
          "**Cooked bones:** brittle and prone to splintering into sharp fragments — widely advised against.",
          "**Raw bones:** more pliable but carry bacterial and tooth-fracture risks and need strict hygiene.",
          "**Lasts:** variable.",
          "**Watch for:** splinters, broken teeth, gut injury.",
        ],
      },
      { type: "h2", text: "Antlers and horns" },
      {
        type: "ul",
        items: [
          "**Digestible?** No.",
          "**Splinter risk:** can shard as they wear.",
          "**Lasts:** very long.",
          "**Watch for:** the highest tooth-fracture risk of the four because they have almost no give.",
        ],
      },
      {
        type: "callout",
        title: "Our take",
        text: "No chew is risk-free, and supervision always matters. But if you want long-lasting and edible with the shortest, cleanest ingredient list, hard churpi is hard to beat. See [what churpi is](/blog/what-is-churpi-himalayan-yak-cheese-dog-chew) and how we make it.",
      },
    ],
    faqs: [
      {
        question: "Is churpi better than rawhide?",
        answer:
          "For most dogs, yes. Churpi is fully digestible with a three-ingredient label, while rawhide is chemically processed and can swell or cause blockages if swallowed in chunks.",
      },
      {
        question: "What is the safest long-lasting dog chew?",
        answer:
          "Hard Himalayan churpi (yak cheese) is widely considered one of the safest long-lasting chews because it's edible, splinter-resistant and made from milk, salt and lime juice only — used at the correct size and under supervision.",
      },
    ],
    relatedSlugs: [
      "are-yak-cheese-dog-chews-safe",
      "best-long-lasting-dog-chews-aggressive-chewers",
    ],
  },

  {
    slug: "dog-chew-size-guide-by-breed",
    title: "Dog Chew Size Guide: Choosing the Right Chew by Breed & Weight",
    description:
      "How to choose the right dog chew size by breed and weight, so it lasts without becoming a choking risk. Includes a small/medium/large breed chart.",
    excerpt:
      "The right chew size is the difference between hours of safe chewing and a swallowing risk. Here's how to match the bar to your dog.",
    keywords: [
      "dog chew size guide",
      "what size dog chew",
      "dog chew by breed",
      "dog chew for small dogs",
      "dog chew for large breeds",
    ],
    datePublished: "2026-05-20",
    dateModified: "2026-06-24",
    readingTimeMin: 5,
    category: "Buying Guide",
    heroImage: "/images/pasture.jpg",
    heroAlt: "Open Himalayan pasture where the milk is sourced",
    body: [
      {
        type: "p",
        text: "**Choose a chew that's too big for your dog to fit fully in their mouth.** The right size lasts for hours and never becomes a swallowing hazard. Match the chew to your dog's body weight and chewing style rather than their age alone.",
      },
      { type: "h2", text: "Quick size chart" },
      {
        type: "ul",
        items: [
          "**Small (toy & small breeds, up to ~10 kg):** Shih Tzu, Pomeranian, Lhasa Apso, Pug, Terrier — a 30–45 g bar.",
          "**Medium (~10–25 kg):** Beagle, Cocker Spaniel, Border Collie, indie/street dogs — a 70–110 g bar.",
          "**Large & giant (25 kg+):** Labrador, German Shepherd, Rottweiler, Tibetan Mastiff, Golden Retriever — a 120–200 g bar.",
        ],
      },
      {
        type: "p",
        text: "These map directly to the three tiers of [The Original Chew](/shop): Small, Medium and Large Reserve.",
      },
      { type: "h2", text: "How to pick the right size in 3 steps" },
      {
        type: "ol",
        items: [
          "**Weigh your dog** (or use a known breed average) and find the band above.",
          "**Account for chewing style.** A determined power chewer can size up one tier for longevity and safety.",
          "**Re-check as it wears.** When the bar gets small enough to swallow whole, take it away and save the nub.",
        ],
      },
      {
        type: "callout",
        title: "Between two sizes?",
        text: "Size up. A slightly-too-large chew simply lasts longer; a slightly-too-small one becomes a choking risk faster.",
      },
      { type: "h2", text: "Does age change the size I should pick?" },
      {
        type: "p",
        text: "Hard chews suit adult dogs with full adult teeth. Puppies and seniors should be supervised closely and steered toward gentle gnawing. If your dog is a heavy cracker, read our notes on [chew safety](/blog/are-yak-cheese-dog-chews-safe) before sizing down.",
      },
    ],
    faqs: [
      {
        question: "What size dog chew should I buy?",
        answer:
          "Pick a chew too large for your dog to fit entirely in their mouth, sized to their body weight: roughly 30–45 g for dogs under 10 kg, 70–110 g for 10–25 kg, and 120–200 g for dogs over 25 kg.",
      },
      {
        question: "Should I size up or down if my dog is between sizes?",
        answer:
          "Size up. A larger chew lasts longer and is safer, while a too-small chew becomes a swallowing hazard much sooner.",
      },
    ],
    relatedSlugs: [
      "best-long-lasting-dog-chews-aggressive-chewers",
      "are-yak-cheese-dog-chews-safe",
    ],
  },

  {
    slug: "churpi-cheese-popcorn-last-piece",
    title: "Don't Throw Away the Last Piece: Turn Churpi Into Cheese Popcorn",
    description:
      "The little-known trick every churpi owner should know: microwave the last small piece of a yak cheese chew and it puffs into crunchy cheese popcorn.",
    excerpt:
      "There's a zero-waste finish to every yak cheese chew. Microwave the last nub and it puffs into crunchy cheese popcorn your dog will love.",
    keywords: [
      "churpi cheese popcorn",
      "yak cheese popcorn",
      "puff churpi",
      "last piece of yak chew",
      "churpi microwave",
    ],
    datePublished: "2026-06-08",
    dateModified: "2026-06-26",
    readingTimeMin: 3,
    category: "Tips",
    heroImage: "/images/chhurpi-make.jpg",
    heroAlt: "Churpi cheese ready to be puffed into popcorn",
    body: [
      {
        type: "p",
        text: "Here's the trick most new churpi owners don't know: **the last small piece of a yak cheese chew puffs up into light, crunchy cheese popcorn when you microwave it** — a safe, edible treat that finishes the bar with zero waste.",
      },
      { type: "h2", text: "How to make churpi cheese popcorn" },
      {
        type: "ol",
        items: [
          "Wait until the chew is too small to keep giving safely (about the size of a large coin).",
          "Place the piece on a microwave-safe plate.",
          "Microwave in 30-second bursts, up to about 60 seconds total, until it puffs and crisps.",
          "Let it cool completely — it comes out hot — then offer it as a treat.",
        ],
      },
      {
        type: "callout",
        title: "Why it works",
        text: "Cured churpi still holds a little moisture deep inside. Microwaving flashes that moisture to steam, which expands the protein structure — the same principle as pork crackling or puffed cheese snacks.",
      },
      { type: "h2", text: "Tips for the perfect puff" },
      {
        type: "ul",
        items: [
          "Smaller pieces puff more evenly than large ones.",
          "Microwaves vary — start with 30 seconds and add time in short bursts.",
          "Always cool fully before giving it to your dog.",
          "Humans can enjoy it too — it's just cheese.",
        ],
      },
      {
        type: "p",
        text: "It's the perfect end to a [hard churpi chew](/blog/what-is-churpi-himalayan-yak-cheese-dog-chew): nothing wasted, and one more happy treat. Stock up on [The Original Chew](/shop).",
      },
    ],
    faqs: [
      {
        question: "How do you puff churpi into cheese popcorn?",
        answer:
          "Microwave the last small piece of a churpi chew in 30-second bursts, up to about 60 seconds, until it expands and crisps. Let it cool fully before serving.",
      },
      {
        question: "Is puffed churpi safe for dogs?",
        answer:
          "Yes. Puffed churpi is the same natural cheese, just expanded — a light, crunchy, edible treat. Let it cool completely first so it isn't hot.",
      },
    ],
    relatedSlugs: [
      "what-is-churpi-himalayan-yak-cheese-dog-chew",
      "are-yak-cheese-dog-chews-safe",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG.find((p) => p.slug === slug);
}

/** Newest-first ordering for the index. */
export function allPostsSorted(): BlogPost[] {
  return [...BLOG].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished),
  );
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
