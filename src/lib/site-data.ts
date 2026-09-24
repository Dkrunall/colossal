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
  logoSrc?: string; // real brand logo/wordmark, distinct from the venue photography in imageSrc
  gallery?: string[]; // additional venue photography for gallery grids
};

// "Epitome" is shared across three portfolio entries (Mumbai, Pune,
// Live) — disambiguate wherever a brand name stands alone in UI copy
// (CTAs, modals) so "Epitome Mumbai" and "Epitome Pune" don't both
// collapse to the same label.
export function brandDisplayName(brand: Brand): string {
  return brand.name === "Epitome" ? `${brand.name} ${brand.city}` : brand.name;
}

export const brands: Brand[] = [
  {
    slug: "epitome-mumbai",
    name: "Epitome",
    city: "Mumbai",
    kind: "Fine Dining & Lounge",
    tagline: "The standard the rest of the portfolio is measured against.",
    description:
      "Colossal's flagship fine-dining and lounge address. Architectural interiors, a chef-led tasting menu and a room built for slow, considered evenings — Epitome Mumbai set the standard the rest of the portfolio is measured against.",
    status: "live",
    externalUrl: "https://epitomeglobaldining.com/",
    reservation: null,
    tone: "espresso",
    imageSrc: "/images/EpiMum1.png",
    logoSrc: "/images/logo-epitome.png",
    gallery: [
      "/images/EpiMum2.png",
      "/images/EpiMum3.png",
      "/images/EpiMum4.png",
      "/images/EpiMum5.png",
      "/images/EpiMum6.png",
      "/images/EpiMum7.png",
      "/images/EpiMum8.png",
      "/images/EpiMum9.png",
      "/images/EpiMum10.png",
      "/images/EpiMum11.png",
    ],
  },
  {
    slug: "epitome-pune",
    name: "Epitome",
    city: "Pune",
    kind: "Fine Dining & Lounge",
    tagline: "Same kitchen standard, same architectural language, reimagined for Pune.",
    description:
      "The second Epitome address, carrying the same editorial precision to a new skyline and a new crowd. Same kitchen standard, same architectural language, reimagined for Pune.",
    status: "live",
    externalUrl: "https://epitomeglobaldining.com/",
    reservation: null,
    tone: "bronze",
    imageSrc: "/images/EpiPuneHero.png",
    logoSrc: "/images/logo-epitome.png",
    gallery: [
      "/images/EpiPune2.png",
      "/images/EpiPune3.png",
      "/images/EpiPune4.png",
      "/images/EpiPune5.png",
      "/images/EpiPune6.png",
      "/images/EpiPune7.png",
    ],
  },
  {
    slug: "kynd-cafe-bar-pune",
    name: "Kynd Café & Bar",
    city: "Pune",
    kind: "All-Day Café & Bar",
    tagline: "Built for guests who don't want to choose between the two.",
    description:
      "A day-into-night address in one continuous room — considered coffee and all-day dining by morning, a low-lit bar after dark. Built for guests who don't want to choose between the two.",
    status: "live",
    externalUrl: null,
    reservation: { type: "call", value: "+91 86000 80503" },
    tone: "champagne",
    imageSrc: "/images/Kynd1.png",
    logoSrc: "/images/logo-kynd.png",
    gallery: [
      "/images/Kynd2.png",
      "/images/Kynd3.png",
      "/images/Kynd4.png",
      "/images/Kynd5.png",
      "/images/Kynd6.png",
      "/images/Kynd7.png",
      "/images/Kynd8.png",
      "/images/Kynd9.png",
    ],
  },
  {
    slug: "epitome-live",
    name: "Epitome Live",
    city: "Multi-city",
    kind: "Entertainment & Events",
    tagline: "Ticketed nights, curated DJ line-ups, and one-off takeovers.",
    description:
      "The live-entertainment arm of the Epitome name — ticketed nights, curated DJ line-ups and one-off takeovers across the portfolio's addresses in Mumbai and Pune.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "walnut",
    imageSrc: "/images/EpitomeLive.jpg",
    logoSrc: "/images/logo-epitome.png",
    gallery: ["/images/EpitomeLive2.png", "/images/EpitomeLounge1.png"],
  },
  {
    slug: "naia",
    name: "Naia",
    city: "Upcoming",
    kind: "New Concept",
    tagline: "Launch TBA.",
    description:
      "A new concept joining the Colossal portfolio. Brand story, imagery and location to follow ahead of launch.",
    status: "upcoming",
    externalUrl: null,
    reservation: null,
    tone: "espresso",
    imageSrc: "/images/hero_bg.png",
  },
  {
    slug: "khufe",
    name: "Khufè",
    city: "Upcoming",
    kind: "New Concept",
    tagline: "Launch TBA.",
    description:
      "A new concept joining the Colossal portfolio. Brand story, imagery and location to follow ahead of launch.",
    status: "upcoming",
    externalUrl: null,
    reservation: null,
    tone: "walnut",
    imageSrc: "/images/fine_dining.png",
    logoSrc: "/images/logo-khufe.png",
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
  { value: 2, suffix: "", label: "Cities, and growing" },
];

export const pendingStats = ["Guests hosted annually", "Signature experiences"];

export interface PressMention {
  outlet: string;
  url: string;
  topic?: string;
}

export const pressMentions: PressMention[] = [
  { outlet: "The Gourmet Edit", url: "https://www.instagram.com/p/DZrVCWoE4uW/" },
  {
    outlet: "Curly Tales",
    url: "https://www.instagram.com/p/DZrb5mqCkh7/?img_index=5&igsh=MXdoeGt1cGExYTFtOA%3D%3D",
  },
  {
    outlet: "Free Press Journal",
    url: "https://www.freepressjournal.in/lifestyle/fathers-day-2026-in-mumbai-from-pizza-making-to-boozy-brunches-heres-where-to-take-your-dad",
    topic: "Father's Day 2026",
  },
  {
    outlet: "LBB Mumbai",
    url: "https://www.instagram.com/p/DaClYYcF2r1/?img_index=1&igsh=MWZwc2EydDFvaGV1NA==",
  },
  {
    outlet: "Femina",
    url: "https://www.femina.in/travel/domestic/mothers-day-2026-24-best-mumbai-restaurants-for-brunch-lunch-dinner-290051-1.html",
    topic: "Mother's Day 2026",
  },
  {
    outlet: "The Gourmet Edit",
    url: "https://thegourmetedit.com/best-monsoon-menus-across-india/",
    topic: "Monsoon Menu",
  },
  {
    outlet: "The Chaptre Mag",
    url: "https://www.instagram.com/p/Dac--dGCM6K/?img_index=7&igsh=YXo5amVwaDNpMWk5",
    topic: "World Chocolate Day",
  },
  {
    outlet: "Story Board",
    url: "https://www.instagram.com/p/Dae0yCXjBGD/?img_index=1&igsh=MThxYmtwNjhqMmNqcg==",
    topic: "World Chocolate Day",
  },
  {
    outlet: "Unstumbled",
    url: "https://theunstumbled.com/monsoon-special-menus-in-mumbai-restaurants-you-can-try-this-season/",
    topic: "Monsoon Menu",
  },
  {
    outlet: "News18",
    url: "https://www.news18.com/lifestyle/food/world-chocolate-day-mumbai-restaurants-to-visit-where-chocolate-takes-centre-stage-10182498.html",
    topic: "World Chocolate Day",
  },
  {
    outlet: "Luxebook",
    url: "https://luxebook.in/world-chocolate-day-all-about-artisanal-chocolate/",
    topic: "World Chocolate Day",
  },
  {
    outlet: "The Blended Stories",
    url: "https://www.instagram.com/p/DbaN1R_jYN3/?img_index=19&igsh=MW1rdjlmc3BrbmhsYw==",
  },
];

export const experiences = [
  {
    title: "Chef's Table",
    description: "A front-row seat to the kitchen, for parties who want the full narrative behind the menu.",
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
    description: "DJ sets, guest chefs and one-off takeovers under the Epitome Live banner.",
    tone: "bronze" as const,
    imageSrc: "/images/EpitomeLive.jpg",
  },
  {
    title: "Day-to-Night at Kynd",
    description: "One room, two moods — considered coffee by day, a low-lit bar after dark.",
    tone: "champagne" as const,
    imageSrc: "/images/Kynd1.png",
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
    recipient: "Epitome, Mumbai & Pune",
    year: "2024",
    body: "Recognized for culinary innovation and design-led hospitality, including Best Luxury Lounge & Fine Dining, Times Food & Nightlife Awards 2024 — awarded to Epitome, Mumbai & Pune.",
    imageSrc: "/images/award_certificate.jpg",
  },
];

export const awards: { year: string; title: string; body: string }[] = [
  {
    year: "2024",
    title: "Times Food & Nightlife Awards — Best Luxury Lounge & Fine Dining",
    body: "Awarded to Epitome, Mumbai & Pune.",
  },
];

export interface Visionary {
  name: string;
  role: string;
  imageSrc?: string;
  bio?: string;
}

// Per the client-supplied website copy, the Home page and About page
// "Our Visionaries" sections list different people — reproduced here
// as two separate lists rather than reconciled into one.
export const visionaries: Visionary[] = [
  {
    name: "JIGAR SANGHVI",
    role: "DIRECTOR",
  },
  {
    name: "KRIPESH SANGHVI",
    role: "DIRECTOR",
  },
];

export const aboutVisionaries: Visionary[] = [
  {
    name: "SHILPA SHETTY KUNDRA",
    role: "CO-FOUNDER",
  },
  {
    name: "RANJIT BINDRA",
    role: "FOUNDER & CEO",
  },
  {
    name: "CHEF SAURABH",
    role: "EXECUTIVE PARTNER & CHEF",
  },
];

export const careerTracks = [
  { title: "Culinary & Kitchen", body: "Chefs de partie through to head chef, across every brand and city." },
  { title: "Front of House", body: "Restaurant managers, sommeliers, hosts — the people guests remember." },
  { title: "Events & Operations", body: "Banquet, private-events, and live-entertainment production roles." },
  { title: "Corporate & Growth", body: "Marketing, finance, and expansion roles at the Colossal group level." },
];

