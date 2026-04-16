export interface Review {
  id: number;
  title: string;
  body: string;
  author: string;
  city: string;
  date: string;
  rating: number;
  productSlug: string;
  productName: string;
  verified: boolean;
  hasPhoto?: boolean;
}

export const reviews: Review[] = [
  {
    id: 1,
    title: "I CANNOT STOP EATING THESE",
    body: "Saw the Skittles on someone's TikTok, ordered same day. They arrived in two days and I genuinely sat on the sofa and ate half the bag in one go. The texture is so addictive — that crunch then the flavour just explodes. My partner is now obsessed too. We're on our third order.",
    author: "Aisha",
    city: "Hackney",
    date: "12 Mar 2026",
    rating: 5,
    productSlug: "freeze-dried-skittles",
    productName: "Freeze-Dried Skittles",
    verified: true,
  },
  {
    id: 2,
    title: "The sour ones nearly killed me (in a good way)",
    body: "I ordered the Sour Bundle thinking I could handle it. I could not. The Sour Patch Crunch is genuinely on another level of sour. My jaw actually ached. I've already recommended them to six people. Brilliant product, fast delivery, proper East London energy.",
    author: "Marcus",
    city: "Stratford",
    date: "8 Mar 2026",
    rating: 5,
    productSlug: "sour-patch-crunch",
    productName: "Sour Patch Crunch",
    verified: true,
    hasPhoto: true,
  },
  {
    id: 3,
    title: "Wish the pouch was bigger!",
    body: "Starburst are my absolute favourite sweets so obviously I had to try the freeze-dried version. They're incredible — the texture is like nothing else and the flavour is so much more intense. Only complaint is the bag is finished in about five minutes. Worth it though, I'll just order more.",
    author: "Priya",
    city: "Bethnal Green",
    date: "3 Mar 2026",
    rating: 4,
    productSlug: "freeze-dried-starburst",
    productName: "Freeze-Dried Starburst",
    verified: true,
  },
  {
    id: 4,
    title: "These are genuinely special",
    body: "I'm not usually a sweets person — I eat chocolate usually. But the chocolate cherries have changed my mind completely. The tartness of the cherry against the dark chocolate is properly good. Not overly sweet. Actually sophisticated? I gave some to my mum and she wants me to order more for her.",
    author: "Tom",
    city: "Dalston",
    date: "28 Feb 2026",
    rating: 5,
    productSlug: "chocolate-coated-cherries",
    productName: "Choc-Covered Freeze-Dried Cherries",
    verified: true,
    hasPhoto: true,
  },
  {
    id: 5,
    title: "The mix bag is the perfect intro",
    body: "Bought the 4 pack as a 'try everything' situation. The Skittles and Millions were my favourites. Good value, well packaged, came with a little card which was a nice touch. Will be ordering the sour ones next.",
    author: "Jade",
    city: "Walthamstow",
    date: "24 Feb 2026",
    rating: 5,
    productSlug: "mix-bag-bundle",
    productName: "The Mix Bag — 4 Pack Bundle",
    verified: true,
  },
  {
    id: 6,
    title: "Millions are the most underrated one",
    body: "Everyone talks about the Skittles but the Millions are doing something completely different. The way they puff up into those tiny crispy tubes is just mad. Very light, very fruity. I've been putting them on top of yoghurt and it's actually brilliant.",
    author: "Kofi",
    city: "Leyton",
    date: "19 Feb 2026",
    rating: 5,
    productSlug: "freeze-dried-millions",
    productName: "Freeze-Dried Millions",
    verified: false,
  },
  {
    id: 7,
    title: "Fast delivery, quality product",
    body: "Ordered on a Thursday, arrived Saturday. Everything was well sealed and in good condition. The Jolly Ranchers are properly intense — the watermelon ones especially. Very happy with the order.",
    author: "Sophie",
    city: "Bow",
    date: "15 Feb 2026",
    rating: 5,
    productSlug: "freeze-dried-jolly-ranchers",
    productName: "Freeze-Dried Jolly Ranchers",
    verified: true,
  },
  {
    id: 8,
    title: "Ordered for a party, massive hit",
    body: "Got the mega bundle for a birthday thing and put them all out in bowls. People kept asking where they were from. Went through all six bags in about an hour. The variety is great — you get to see the contrast between the different textures. Would highly recommend for a party situation.",
    author: "Nadia",
    city: "Shoreditch",
    date: "10 Feb 2026",
    rating: 5,
    productSlug: "mega-bundle",
    productName: "The Mega Bundle — 6 Pack",
    verified: true,
    hasPhoto: true,
  },
  {
    id: 9,
    title: "Properly nostalgic",
    body: "The cola bottles took me right back to being a kid. The freeze-drying thing just amplifies everything — it's like a more intense version of the original. My nine-year-old tried one and said 'this is the best crisp I've ever had' (he thought they were crisps). Can't argue with that review.",
    author: "Danny",
    city: "Newham",
    date: "5 Feb 2026",
    rating: 4,
    productSlug: "freeze-dried-cola-bottles",
    productName: "Freeze-Dried Cola Bottles",
    verified: true,
  },
  {
    id: 10,
    title: "Peach rings are underrated",
    body: "Picked these on a whim because I love peach rings normally. Really glad I did. They're lighter than the other products and the flavour is more subtle, but that's a good thing. Sometimes you don't want the full-on Skittles experience. These are easy to snack on without going overboard. Well, easier.",
    author: "Fatima",
    city: "Forest Gate",
    date: "1 Feb 2026",
    rating: 5,
    productSlug: "freeze-dried-peach-rings",
    productName: "Freeze-Dried Peach Rings",
    verified: false,
  },
  {
    id: 11,
    title: "Great quality, small business love",
    body: "Love that this is a proper small business doing something genuinely interesting. The packaging is clean, the product is quality, and they replied to my DM about an allergy question within an hour. The sour worms are excellent. Will keep coming back.",
    author: "Ben",
    city: "Clapton",
    date: "26 Jan 2026",
    rating: 5,
    productSlug: "sour-worms-freeze-dried",
    productName: "Freeze-Dried Sour Worms",
    verified: true,
  },
  {
    id: 12,
    title: "The sour bundle is dangerously good",
    body: "Three bags of sour sweets — what could go wrong? Everything and nothing. My teeth hurt. My brain loved it. The sour worms are my personal highlight. Already planning next order. Tell my dentist I said sorry.",
    author: "Yemi",
    city: "Tottenham",
    date: "20 Jan 2026",
    rating: 5,
    productSlug: "sour-bundle",
    productName: "The Sour Bundle — 3 Pack",
    verified: true,
  },
];

export const ratingDistribution = {
  5: 10,
  4: 2,
  3: 0,
  2: 0,
  1: 0,
};

export const averageRating = 4.9;
export const totalReviews = 247;
