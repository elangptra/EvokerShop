export interface Edition {
    id: "standard" | "deluxe" | "premium";
    name: string;
    tagline: string;
    price: number;
    highlight?: boolean;
    perks: string[];
}

export const EDITIONS: Edition[] = [
  {
    id: "standard",
    name: "STANDARD EDITION",
    tagline: "The base experience. Welcome to S.E.E.S.",
    price: 729000,
    perks: [
      "Persona 3 Reload — full game",
      "Steam digital activation key",
      "Instant email delivery",
      "Standard launch wallpaper pack",
    ],
  },
  {
    id: "deluxe",
    name: "DIGITAL DELUXE",
    tagline: "Suit up. Extra gear for the Dark Hour.",
    price: 1049000,
    highlight: true,
    perks: [
      "Everything in Standard",
      "Digital Artbook + Mini Soundtrack",
      "Persona 4 Golden BGM Set",
      "Persona 5 Royal BGM Set",
    ],
  },
  {
    id: "premium",
    name: "DIGITAL PREMIUM",
    tagline: "The complete S.E.E.S dossier.",
    price: 1319000,
    perks: [
      "Everything in Deluxe",
      "Expansion Pass (Episode Aigis)",
      "P3R Velvet Costume + BGM Set",
      "All cosmetic add-on packs",
    ],
  },
];

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);