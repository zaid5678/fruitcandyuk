export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What actually is freeze-dried candy?",
    answer: "Freeze-drying removes the moisture from sweets using a process called sublimation — we freeze them solid, then reduce the pressure so the ice turns straight into vapour without going through a liquid stage. What you're left with is a puffed-up, lighter version of the original sweet that keeps all the flavour but trades the chew for a satisfying crunch. It changes the texture completely. Most people say it also intensifies the flavour, which is why they're so addictive.",
  },
  {
    id: 2,
    question: "How long does delivery take?",
    answer: "We typically dispatch within 1–2 working days of receiving your order. Royal Mail First Class takes 1–2 days after dispatch, so you're usually looking at 2–4 working days from order to delivery. We'll send you a confirmation when your order goes out. If something's running slower (e.g. high demand weeks or bank holidays), we'll let you know.",
  },
  {
    id: 3,
    question: "How much does shipping cost?",
    answer: "Flat rate of £2.99 for standard shipping on all UK orders. Orders over £25 get free shipping automatically — no code needed. We ship via Royal Mail First Class.",
  },
  {
    id: 4,
    question: "Do you ship outside the UK?",
    answer: "Not currently, no. We're UK-only for now. International shipping is something we're looking into — follow us on TikTok or Instagram (@fruitcandy.uk) for updates. We'll shout when it's available.",
  },
  {
    id: 5,
    question: "Are your products suitable for people with allergies?",
    answer: "This depends on the specific product. All our products are made in a kitchen that handles nuts, gluten, and dairy — so we can't guarantee they're safe for people with severe allergies. Each product page has a full ingredients and allergens section. If you've got a specific question, drop us an email at fruitcandyuk@gmail.com and we'll give you a straight answer.",
  },
  {
    id: 6,
    question: "How long do the sweets keep?",
    answer: "Freeze-dried sweets have a surprisingly long shelf life — typically 6–12 months in the sealed pouch. Once opened, moisture is their enemy, so seal the pouch back up between snacking sessions and keep them somewhere cool and dry. Don't leave them on a humid windowsill. Realistically though, they're usually gone within the day.",
  },
  {
    id: 7,
    question: "Can I collect from East London?",
    answer: "Not something we offer as a formal service at the moment — we're a home operation and don't have a shop front. That said, if you're local and want to sort something, drop us a DM on Instagram and we'll see what we can do. No promises, but we're friendly.",
  },
  {
    id: 8,
    question: "Do you do wholesale?",
    answer: "We're open to it. If you run a shop, market stall, café or other retail business and want to stock Fruit Candy UK products, email fruitcandyuk@gmail.com with 'wholesale' in the subject. Tell us a bit about your setup and what you're interested in and we'll get back to you.",
  },
  {
    id: 9,
    question: "How should I store my sweets?",
    answer: "Keep them in the sealed pouch in a cool, dry place — a kitchen cupboard is ideal. Away from direct sunlight and away from humidity. Don't put them in the fridge (the moisture will make them go soft and lose the crunch). The freezer is fine if you want to keep them longer, but honestly they're best fresh.",
  },
  {
    id: 10,
    question: "What's your returns policy?",
    answer: "If your order arrives damaged or there's something wrong, get in touch within 7 days of delivery and we'll sort it — either a replacement or a refund, your choice. Just email fruitcandyuk@gmail.com with your order details and a photo of the issue. Because these are food products, we can't accept returns on opened items unless they're faulty. Unopened, undamaged items can be returned within 14 days for a full refund (you cover the postage back to us).",
  },
];
