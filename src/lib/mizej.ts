export const SHOP = {
  name: "Mizej",
  arabicName: "مزاج",
  tagline: "Coffee shop · Mood",
  address: "P645+XW3, Av. Martyrs, El Mourouj",
  city: "El Mourouj, Tunisia",
  mapsUrl: "https://maps.app.goo.gl/piz1nwDdAejABhcV7",
  mapsEmbed:
    "https://www.google.com/maps?q=Mizej+coffee+shop@36.707476,10.2097652&z=18&output=embed",
  instagram: "https://www.instagram.com/mizej_coffeeshop",
  instagramHandle: "@mizej_coffeeshop",
  tiktok: "https://www.tiktok.com/@mizej_mood",
  tiktokHandle: "@mizej_mood",
  hours: [
    { days: "Monday – Friday", time: "07:00 – 23:00" },
    { days: "Saturday – Sunday", time: "07:00 – 23:00" },
  ],
  wifi: { network: "Mizej", password: "Mizej2026!" },
  rating: 5.0,
  reviewCount: 8,
} as const;

export type Temp = "hot" | "cold" | "food";
export type Swatch = "red" | "blue" | "black" | "yellow" | "clear";

export type MenuItem = { name: string; price: number; swatch?: Swatch };
export type MenuCategory = {
  id: string;
  title: string;
  arabic: string;
  temp: Temp;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    arabic: "قهوة ساخنة",
    temp: "hot",
    items: [
      { name: "Espresso", price: 3.8 },
      { name: "Double Espresso", price: 4.5 },
      { name: "Espresso Macchiato", price: 4.2 },
      { name: "Americano", price: 4.5 },
      { name: "Latte", price: 4.7 },
      { name: "Barraquito", price: 5 },
      { name: "Cappuccino", price: 5.5 },
    ],
  },
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    arabic: "مشروبات ساخنة",
    temp: "hot",
    items: [
      { name: "Hot Chocolate", price: 7.5 },
      { name: "Hot Speculoos", price: 10.5 },
      { name: "Hot Bueno", price: 10.5 },
      { name: "Hot Nutella", price: 11 },
      { name: "Hot Pistachio", price: 12 },
    ],
  },
  {
    id: "ice-coffee",
    title: "Ice Coffee",
    arabic: "قهوة مثلجة",
    temp: "cold",
    items: [
      { name: "Ice Americano", price: 6.5 },
      { name: "Ice Latte", price: 7 },
      { name: "Ice Bueno Macchiato", price: 10.5 },
      { name: "Ice Speculoos Macchiato", price: 10.5 },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    arabic: "مشروبات باردة",
    temp: "cold",
    items: [
      { name: "Ice Speculoos", price: 11 },
      { name: "Ice Bueno", price: 11 },
      { name: "Ice Framboise", price: 11 },
      { name: "Ice Nutella", price: 12 },
      { name: "Ice Pistachio", price: 12.5 },
    ],
  },
  {
    id: "frappuccino",
    title: "Frappuccino",
    arabic: "فرابتشينو",
    temp: "cold",
    items: [
      { name: "Frappuccino Coffee", price: 10.5 },
      { name: "Frappuccino Caramel", price: 11.5 },
      { name: "Frappuccino Speculoos", price: 12.5 },
      { name: "Frappuccino Noisette", price: 12.5 },
    ],
  },
  {
    id: "mojito",
    title: "Mojito",
    arabic: "موهيتو",
    temp: "cold",
    items: [
      { name: "Virgin Mojito", price: 10.5, swatch: "clear" },
      { name: "Red Mojito", price: 11.5, swatch: "red" },
      { name: "Blue Mojito", price: 11.5, swatch: "blue" },
      { name: "Black Mojito", price: 12, swatch: "black" },
    ],
  },
  {
    id: "smoothie",
    title: "Smoothie",
    arabic: "سموذي",
    temp: "cold",
    items: [
      { name: "Blue Smoothie", price: 11, swatch: "blue" },
      { name: "Red Smoothie", price: 12, swatch: "red" },
      { name: "Yellow Smoothie", price: 12, swatch: "yellow" },
      { name: "Black Smoothie", price: 14, swatch: "black" },
    ],
  },
  {
    id: "juice",
    title: "Juices",
    arabic: "عصائر",
    temp: "cold",
    items: [
      { name: "Strawberry Juice", price: 8 },
      { name: "Strawberry Lemon Juice", price: 8 },
      { name: "Mango Juice", price: 9 },
      { name: "Raspberry Juice", price: 10 },
    ],
  },
  {
    id: "ice-tea",
    title: "Ice Tea",
    arabic: "شاي مثلج",
    temp: "cold",
    items: [
      { name: "Mango Iced Tea", price: 8 },
      { name: "Passion Fruit Iced Tea", price: 8 },
    ],
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    arabic: "مشروبات غازية",
    temp: "cold",
    items: [{ name: "Water 1L", price: 3.5 }],
  },
  {
    id: "extra",
    title: "Extra",
    arabic: "إضافات",
    temp: "food",
    items: [
      { name: "Croissant", price: 3.5 },
      { name: "Croissant Mizej", price: 4.5 },
      { name: "Tacos", price: 6 },
      { name: "Croissant Salé", price: 7.5 },
    ],
  },
];

export function formatPrice(price: number) {
  return `${Number.isInteger(price) ? price : price.toFixed(1)} DT`;
}

export const REVIEWS = [
  {
    author: "Nour Raach",
    text: "Tried the caramel frappuccino today and it was so good, not overly sweet and the caramel actually tasted good 👏🏻 As a Frappuccino lover I recommend.",
  },
  { author: "Yahya Imami", text: "Mizej >> barista's." },
  { author: "Hiba Ben Souissi", text: "Food: 5 · Service: 5" },
];
