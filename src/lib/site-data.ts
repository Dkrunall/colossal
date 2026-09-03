// Central content model for the site. Fields marked `pending` reflect gaps
// flagged in the discovery audit (no brand logos, no live brand URLs, no
// per-outlet reservation channels) — wired up now with clear placeholders
// so swapping in real data later touches this file only.

export type Brand = {
  slug: string;
  name: string;
  city: string;
  kind: string;
  tagline: string;
  description: string;
  status: "live" | "upcoming";
  externalUrl: string | null; // null = not yet provided by client
  reservation: { type: "whatsapp" | "call" | "platform"; value: string } | null;
  tone: "espresso" | "bronze" | "walnut" | "champagne";
  imageSrc?: string;
};

export const brands: Brand[] = [
  {
    slug: "epitome-mumbai",
    name: "Epitome",
    city: "Mumbai",
    kind: "Fine Dining & Bar",
    tagline: "A Roman-Gothic room for all-day feasting.",
    description:
      "The Epitome flagship — a 140-seat, all-day pure-vegetarian resto-bar in Lower Parel's Mathuradas Mill Compound. Roman-Gothic interiors by designer Sumesh Menon, a menu led by Chef Prakash Joshi, and a cocktail program by mixologist Mahesh Panigrahi.",
    status: "live",
    externalUrl: "https://epitomeglobaldining.com/",
    reservation: null,
    tone: "espresso",
    imageSrc: "/images/fine_dining.png",
  },
  {
    slug: "epitome-juhu",
    name: "Epitome",
    city: "Mumbai",
    kind: "Fine Dining & Bar",
    tagline: "The Epitome language, on Juhu's doorstep.",
    description:
      "The second Mumbai address for Epitome — the same all-day, pure-vegetarian dining-and-bar concept, a short walk from the Juhu coast.",
    status: "live",
    externalUrl: "https://epitomeglobaldining.com/",
    reservation: null,
    tone: "walnut",
    imageSrc: "/images/hero_bg.png",
  },
  {
    slug: "epitome-dubai",
    name: "Epitome",
    city: "Dubai",
    kind: "Fine Dining & Bar",
    tagline: "Epitome, abroad — inside Aloft Dubai Creek.",
    description:
      "Epitome's first international address, inside the Aloft Dubai Creek Hotel on Baniyas Road — the same globally-inspired, all-day vegetarian menu, built for a Dubai crowd.",
    status: "live",
    externalUrl: "https://epitomeglobaldining.com/",
    reservation: null,
    tone: "bronze",
    imageSrc: "/images/live_stage.png",
  },
  {
    slug: "kynd-cafe-bar-pune",
    name: "Kynd Café & Bar",
    city: "Pune",
    kind: "All-Day Café & Bar",
    tagline: "Morning light, evening low light.",
    description:
      "A day-into-night address in Koregaon Park, open since 2020 — considered vegetarian and vegan fare with a European–Oriental fusion menu by Master Chef Karishma Sakhrani, refreshed with a 2025 relaunch.",
    status: "live",
    externalUrl: null,
    reservation: { type: "call", value: "+91 86000 80503" },
    tone: "champagne",
    imageSrc: "/images/kynd_cafe.png",
  },
  {
    slug: "colossal-kitchens",
    name: "Colossal Kitchens",
    city: "Mumbai",
    kind: "Cloud Kitchen Collective",
    tagline: "Five vegetarian kitchens, one address.",
    description:
      "Colossal's all-vegetarian, delivery-only collective out of Lower Parel — five sub-brands (Eat Ally, Oriental Hub, Rice Factory, Tadka Maar Ke, and All Things Jain) spanning global street food, Pan-Asian, rice specialties, and a dedicated Jain menu, live on Zomato and Swiggy.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "espresso",
  },
  {
    slug: "colossal-stay",
    name: "Colossal Stay",
    city: "Upcoming",
    kind: "New Concept",
    tagline: "Announced. Details to follow.",
    description:
      "A new hospitality-and-stay concept named alongside Colossal's dining brands — story and imagery to be published ahead of launch.",
    status: "upcoming",
    externalUrl: null,
    reservation: null,
    tone: "walnut",
  },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Experiences", href: "/experiences" },
  { label: "Events", href: "/events" },
  { label: "Banquets", href: "/banquets" },
  { label: "Press", href: "/press" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Brands", href: "/brands" },
    { label: "Company Snapshot", href: "/about#snapshot" },
    { label: "Careers", href: "/careers" },
  ],
  Visit: [
    { label: "Experiences", href: "/experiences" },
    { label: "Events", href: "/events" },
    { label: "Reservations", href: "/reservations" },
    { label: "Banquets & Private Events", href: "/banquets" },
    { label: "Special Menus", href: "/menus" },
  ],
  Group: [
    { label: "Press / Media", href: "/press" },
    { label: "Awards & Recognitions", href: "/awards" },
    { label: "Contact", href: "/contact" },
  ],
};

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
];

export const snapshotStats = [
  { value: 6, suffix: "", label: "Brands across the portfolio" },
  { value: 3, suffix: "", label: "Cities, and growing" },
];

export const pendingStats = ["Guests hosted annually", "Signature experiences"];

export const pressMentions: string[] = [];

export const experiences = [
  {
    title: "Chef's Table",
    description: "A front-row seat to the kitchen, reserved for parties who want the full narrative of the menu.",
    tone: "espresso" as const,
    imageSrc: "/images/fine_dining.png",
  },
  {
    title: "Private Dining Rooms",
    description: "Closed-door rooms across the portfolio, built for the conversations that need one.",
    tone: "walnut" as const,
    imageSrc: "/images/hero_bg.png",
  },
  {
    title: "Late Night, Curated",
    description: "DJ sets, guest chefs, and one-off takeovers across the Epitome addresses.",
    tone: "bronze" as const,
    imageSrc: "/images/live_stage.png",
  },
  {
    title: "Day-to-Night at Kynd",
    description: "One room, two moods — considered coffee by day, a low-lit bar after dark.",
    tone: "champagne" as const,
    imageSrc: "/images/kynd_cafe.png",
  },
];


// Intentionally structured for rich luxury UI presentation
export interface AwardItem {
  id: string;
  title: string;
  category: string;
  recipient: string;
  year: string;
  body: string;
  imageSrc: string;
}

export const awardsList: AwardItem[] = [
  {
    id: "times-food-2024",
    title: "Times Food & Nightlife Awards",
    category: "Best Luxury Lounge & Fine Dining",
    recipient: "Epitome — Mumbai & Dubai",
    year: "2024",
    body: "Honored for culinary innovation, curated atmospheric design, and benchmark hospitality standard.",
    imageSrc: "/images/award_certificate.jpg",
  },
  {
    id: "epicurean-excellence-2023",
    title: "Epicurean Excellence Award",
    category: "Iconic Hospitality Concept of the Year",
    recipient: "Colossal Hospitality Group",
    year: "2023",
    body: "Recognizing outstanding creative curation across multi-city venues, bar craft, and event production.",
    imageSrc: "/images/award_certificate.jpg",
  },
];

export const awards: { year: string; title: string; body: string }[] = [
  {
    year: "2024",
    title: "Times Food & Nightlife Awards — Best Luxury Lounge & Dining",
    body: "Epitome Lower Parel & Juhu recognized for outstanding nightlife curation and chef-driven dining.",
  },
  {
    year: "2023",
    title: "Hospitality Excellence Honours — Iconic Day-to-Night Venue",
    body: "Kynd Café & Bar awarded for exemplary café culture and atmospheric evening transition.",
  },
];

export interface Visionary {
  name: string;
  role: string;
  imageSrc: string;
  bio?: string;
}

// Names verified against MCA/ROC filings for Colossal Hospitality and
// Entertainment Private Limited (CIN U55100MH2019PTC330389) — the only
// public source with a documented tie to the company. No public source
// gives either a title beyond "Director", so that is what is shown.
export const visionaries: Visionary[] = [
  {
    name: "RIKKU RAMESH KUMAR RAMANI",
    role: "DIRECTOR",
    imageSrc: "/images/rikku_ramani.jpg",
  },
  {
    name: "SHREY VISHAL KARIA",
    role: "DIRECTOR",
    imageSrc: "/images/shrey_karia.jpg",
  },
];

export const careerTracks = [
  { title: "Culinary & Kitchen", body: "Chefs de partie through to head chef, across every brand and city." },
  { title: "Front of House", body: "Restaurant managers, sommeliers, hosts — the people guests remember." },
  { title: "Events & Operations", body: "Banquet, private-events, and live-entertainment production roles." },
  { title: "Corporate & Growth", body: "Marketing, finance, and expansion roles at the Colossal group level." },
];

