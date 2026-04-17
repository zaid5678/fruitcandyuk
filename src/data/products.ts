export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  description: string[];
  price: number;
  category: 'classics' | 'sour' | 'chocolate' | 'bundles';
  image: string;
  images?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewCount: number;
  ingredients: string;
}

export const products: Product[] = [
  {
    slug: 'freeze-dried-skittles',
    name: 'Freeze-Dried Skittles',
    shortDesc: 'All the flavour, maximum crunch. These bad boys puff up like nothing else.',
    description: [
      "We took a bag of classic Skittles and put them through our freeze-drying process — all the moisture gone, all the flavour stays. What comes out is a puffed-up, shatteringly crunchy version that hits you with the same rainbow fruit flavours you know, just louder. Proper loud.",
      "Each bag is made to order in our East London kitchen. We seal them fresh so you get them at peak crunch. Once you try freeze-dried Skittles, the regular ones feel a bit... wet.",
      "Great as a snack on their own, or crumble them over ice cream if you're feeling fancy. Either way, they go fast."
    ],
    price: 5.99,
    category: 'classics',
    image: '/logo.jpg',
    images: [
      '/logo.jpg',
      '/logo.jpg',
      '/logo.jpg',
    ],
    isBestseller: true,
    rating: 5.0,
    reviewCount: 84,
    ingredients: 'Skittles (sugar, corn syrup, hydrogenated palm kernel oil, citric acid, artificial flavours, colours). May contain traces of nuts. Processed in a kitchen that handles nuts and gluten.',
  },
  {
    slug: 'freeze-dried-starburst',
    name: 'Freeze-Dried Starburst',
    shortDesc: 'Chewy no more — these crunch like crisps and melt in your mouth.',
    description: [
      "Starburst are already one of the great fruity sweets. Freeze-dry them and something magical happens — the chewy texture turns into a light, airy crunch that dissolves the moment it hits your tongue. The strawberry, lemon, orange and cherry flavours taste somehow even more concentrated.",
      "These are properly addictive. We made a test batch for friends and they were gone in twenty minutes. You've been warned.",
      "Made fresh in our East London kitchen. Sealed in resealable pouches so you can save some for later (you won't, but the option is there)."
    ],
    price: 5.99,
    category: 'classics',
    image: '/logo.jpg',
    images: [
      '/logo.jpg',
      '/logo.jpg',
      '/logo.jpg',
    ],
    isBestseller: true,
    rating: 4.9,
    reviewCount: 61,
    ingredients: 'Starburst (sugar, glucose syrup, palm fat, citric acid, natural and artificial flavours, colours). May contain traces of milk.',
  },
  {
    slug: 'freeze-dried-millions',
    name: 'Freeze-Dried Millions',
    shortDesc: 'Tiny but mighty. These little tubes go absolutely massive in the freeze dryer.',
    description: [
      "Millions are already an East London classic — tiny, fruity, chewy. Put them through the freeze dryer and they puff up into little crispy tubes that crunch and then dissolve into a cloud of fruity flavour. It's honestly a bit surreal.",
      "We do them in strawberry and raspberry. Each bag has a proper mix. The texture is unlike anything else in the range — really light and fragile, almost like popcorn.",
      "One of our most popular things to show people who've never had freeze-dried sweets before. The 'wait, what?' face is half the fun."
    ],
    price: 4.99,
    category: 'classics',
    image: '/logo.jpg',
    isNew: true,
    rating: 4.8,
    reviewCount: 29,
    ingredients: 'Millions (sugar, glucose syrup, citric acid, artificial flavours and colours). Suitable for vegetarians.',
  },
  {
    slug: 'freeze-dried-jolly-ranchers',
    name: 'Freeze-Dried Jolly Ranchers',
    shortDesc: 'Hard sweets reimagined as crispy, explosive flavour grenades.',
    description: [
      "Jolly Ranchers are already intense. Freeze-dry them and they shatter. Each piece crunches apart with a sharp crack and then floods your mouth with concentrated watermelon, blue raspberry, cherry, or green apple. It's A Lot.",
      "These took us the longest to perfect — the freeze-drying time is really precise or you end up with something too brittle. We got it right eventually. Worth the effort.",
      "American import originals, processed in our East London kitchen. Classic flavour assortment in every bag."
    ],
    price: 6.49,
    category: 'classics',
    image: '/logo.jpg',
    isBestseller: true,
    rating: 4.9,
    reviewCount: 47,
    ingredients: 'Jolly Ranchers (corn syrup, sugar, malic acid, natural and artificial flavours, colours). Contains no major allergens.',
  },
  {
    slug: 'sour-patch-crunch',
    name: 'Sour Patch Crunch',
    shortDesc: 'If regular sour patch wasn\'t enough, we made it crunchier and sourer.',
    description: [
      "We freeze-dry Sour Patch Kids and the result is one of our most divisive products — in the best possible way. The sourness gets so concentrated it almost fizzes. If you're a sour head, these are your new favourite thing.",
      "They're soft and chewy no more — completely airy and crunchy, with that classic sour-then-sweet flavour curve but way more intense. Some people can only eat a few at a time. Others eat the whole bag.",
      "Fair warning: these are genuinely sour. Not 'a little bit tangy.' Properly sour. You've been told."
    ],
    price: 5.99,
    category: 'sour',
    image: '/logo.jpg',
    isNew: true,
    rating: 4.7,
    reviewCount: 38,
    ingredients: 'Sour Patch Kids (sugar, invert sugar, corn syrup, modified corn starch, tartaric acid, citric acid, natural and artificial flavours, colours).',
  },
  {
    slug: 'sour-worms-freeze-dried',
    name: 'Freeze-Dried Sour Worms',
    shortDesc: 'The classic sour worm, crunched up and ready to destroy your taste buds.',
    description: [
      "Sour worms are a staple. Freeze-dried sour worms are something else entirely. All the coating sugar and citric acid becomes this intensely sour shell around a light, crunchy centre. They're shaped like worms still but they crumble apart in the best way.",
      "These are great for sharing — everyone always wants to try them once, and then immediately wants more. We sell a lot of these to people who bought them 'for the kids'. Sure.",
      "Sealed fresh in our East London kitchen. Resealable pouch."
    ],
    price: 5.49,
    category: 'sour',
    image: '/logo.jpg',
    rating: 4.8,
    reviewCount: 22,
    ingredients: 'Sour worms (sugar, glucose syrup, gelatin, citric acid, malic acid, artificial colours and flavours). Not suitable for vegetarians (contains gelatin).',
  },
  {
    slug: 'chocolate-coated-cherries',
    name: 'Choc-Covered Freeze-Dried Cherries',
    shortDesc: 'Freeze-dried sour cherries dipped in dark chocolate. Genuinely unreal.',
    description: [
      "This one surprised even us. Freeze-dried sour cherries have this intense, concentrated tartness that cuts right through dark chocolate. Each piece has a proper snap, then crunch, then the flavour just opens up.",
      "We use 60% dark chocolate and dry the cherries ourselves. No syrupy glace cherries or any of that. Just real freeze-dried fruit, properly crunchy, coated in a thin layer of good chocolate.",
      "These make a proper gift. Or don't share them — we're not judging."
    ],
    price: 7.99,
    category: 'chocolate',
    image: '/logo.jpg',
    isNew: true,
    rating: 5.0,
    reviewCount: 18,
    ingredients: 'Dark chocolate (cocoa mass, sugar, cocoa butter, vanilla extract), freeze-dried sour cherries. May contain traces of milk, nuts, and gluten.',
  },
  {
    slug: 'mix-bag-bundle',
    name: 'The Mix Bag — 4 Pack Bundle',
    shortDesc: 'One of each classic: Skittles, Starburst, Millions, and a surprise flavour.',
    description: [
      "Can't decide? Don't. The Mix Bag gives you four bags: Freeze-Dried Skittles, Freeze-Dried Starburst, Freeze-Dried Millions, and a rotating surprise bag (currently Jolly Ranchers — check our Instagram to see what's in stock).",
      "This is our most popular option for first-timers — a proper intro to what freeze-drying does to sweets. Every single one is different and it's genuinely fun comparing them.",
      "Also great as a gift. Comes in a plain outer bag (ideal if you want to wrap it yourself) or DM us on Instagram for gift wrapping. We can usually sort that."
    ],
    price: 19.99,
    category: 'bundles',
    image: '/logo.jpg',
    isBestseller: true,
    rating: 4.9,
    reviewCount: 53,
    ingredients: 'Assorted (see individual product listings for full ingredient information). Contains multiple allergens — not suitable for severe allergy sufferers without checking each product.',
  },
  {
    slug: 'sour-bundle',
    name: 'The Sour Bundle — 3 Pack',
    shortDesc: 'All three sour products. For people who like punishment.',
    description: [
      "Sour Patch Crunch, Freeze-Dried Sour Worms, and a bag of Sour Belts — all three together. If you've got a sour tooth, this is the one for you.",
      "We put this together after loads of people kept ordering the sour stuff separately. Just made sense to bundle it. Saves a bit of money too.",
      "We usually include a little note in sour bundles that just says 'you asked for this'. You did."
    ],
    price: 14.99,
    category: 'bundles',
    image: '/logo.jpg',
    rating: 4.8,
    reviewCount: 31,
    ingredients: 'Assorted sour sweets. See individual products for full allergen info.',
  },
  {
    slug: 'freeze-dried-peach-rings',
    name: 'Freeze-Dried Peach Rings',
    shortDesc: 'Peachy, crunchy, a little bit chewy in the middle. Brilliant.',
    description: [
      "Peach rings don't get enough credit. The sugary outer coating plus the soft peach-flavoured gummy — it's a great combo. Freeze-dry that and you get something with a crispy sugar shell and a slightly chewy core that just works.",
      "These are lighter than most of our products. The peach flavour is really delicate and the freeze-drying brings it forward. They're also quite pretty — pale orange and cream — if that matters.",
      "A firm favourite with people who aren't usually 'sweets people'. The flavour isn't as intense as the sour range, so these are a good starting point."
    ],
    price: 4.99,
    category: 'classics',
    image: '/logo.jpg',
    rating: 4.7,
    reviewCount: 16,
    ingredients: 'Peach rings (sugar, glucose syrup, starch, citric acid, peach flavour, colours). May contain traces of gluten and soya.',
  },
  {
    slug: 'freeze-dried-cola-bottles',
    name: 'Freeze-Dried Cola Bottles',
    shortDesc: 'The classic gummy shape, shatteringly crunchy. Cola flavour hits different frozen.',
    description: [
      "Everyone loves a cola bottle. The cola flavour gets really concentrated in the freeze-dryer — slightly tangy, with that distinctive cola taste that's hard to describe but you know when you taste it.",
      "These go from chewy to completely airy. They're fragile — they crumble if you press too hard — but that's the point. Bite into one and it just dissolves.",
      "A proper nostalgic one. Good for people who grew up on penny sweets from the corner shop. We know we're not the only ones."
    ],
    price: 4.99,
    category: 'classics',
    image: '/logo.jpg',
    isNew: true,
    rating: 4.6,
    reviewCount: 11,
    ingredients: 'Cola bottles (sugar, glucose syrup, gelatine, citric acid, natural flavours, colours). Not suitable for vegetarians.',
  },
  {
    slug: 'mega-bundle',
    name: 'The Mega Bundle — 6 Pack',
    shortDesc: 'Six bags, you pick the flavours. Best value in the shop.',
    description: [
      "Build your own box — pick any six bags from the full range and we'll sort the rest. Best value way to buy if you know what you like, or if you're buying for a group.",
      "Order via the note field at checkout (or DM us on Instagram with your choices). We'll confirm before packing. If you can't decide, just say 'surprise me' and we'll sort something good.",
      "This is also how most of our wholesale enquiries start. If you're thinking bigger quantities, pop an email to fruitcandyuk@gmail.com."
    ],
    price: 27.99,
    category: 'bundles',
    image: '/logo.jpg',
    isBestseller: true,
    rating: 5.0,
    reviewCount: 27,
    ingredients: 'Assorted. See individual product listings.',
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find(p => p.slug === slug);

export const getRelatedProducts = (slug: string, count = 4): Product[] =>
  products.filter(p => p.slug !== slug).slice(0, count);

export const CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'classics', label: 'Freeze-Dried Classics' },
  { value: 'sour', label: 'Sour' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'bundles', label: 'Bundles' },
] as const;
