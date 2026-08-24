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
    kind: "Fine Dining & Lounge",
    tagline: "A study in restraint, after dark.",
    description:
      "Colossal's flagship fine-dining and lounge concept — architectural interiors, a chef-led menu, and a room built for slow evenings.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "espresso",
    imageSrc: "/images/fine_dining.png",
  },
  {
    slug: "epitome-pune",
    name: "Epitome",
    city: "Pune",
    kind: "Fine Dining & Lounge",
    tagline: "The Epitome language, reset for Pune.",
    description:
      "The second Epitome address — the same editorial precision, adapted to a new skyline and a new crowd.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "walnut",
    imageSrc: "/images/hero_bg.png",
  },
  {
    slug: "kynd-cafe-bar-pune",
    name: "Kynd Café & Bar",
    city: "Pune",
    kind: "All-Day Café & Bar",
    tagline: "Morning light, evening low light.",
    description:
      "A day-into-night address — considered coffee by morning, a low-lit bar by night, in one continuous room.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "champagne",
    imageSrc: "/images/kynd_cafe.png",
  },
  {
    slug: "epitome-live",
    name: "Epitome Live",
    city: "Multi-city",
    kind: "Entertainment & Events",
    tagline: "Where the Epitome stage travels.",
    description:
      "The entertainment and live-events arm of the Epitome name — ticketed nights, curated line-ups, one-off takeovers.",
    status: "live",
    externalUrl: null,
    reservation: null,
    tone: "bronze",
    imageSrc: "/images/live_stage.png",
  },
  {
    slug: "naia",
    name: "Naia",
    city: "Upcoming",
    kind: "New Concept",
    tagline: "Announced. Details to follow.",
    description:
      "A new concept joining the Colossal portfolio — brand story and imagery to be published ahead of launch.",
    status: "upcoming",
    externalUrl: null,
    reservation: null,
    tone: "espresso",
  },
  {
    slug: "khufe",
    name: "Khufè",
    city: "Upcoming",
    kind: "New Concept",
    tagline: "Announced. Details to follow.",
    description:
      "A new concept joining the Colossal portfolio — brand story and imagery to be published ahead of launch.",
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
  { value: 2, suffix: "", label: "Cities, and growing" },
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
    description: "DJ sets, guest chefs, and one-off takeovers under the Epitome Live banner.",
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
    recipient: "Epitome — Mumbai & Pune",
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
    body: "Epitome Lower Parel & Pune recognized for outstanding nightlife curation and chef-driven dining.",
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

export const visionaries: Visionary[] = [
  {
    name: "SHILPA SHETTY KUNDRA",
    role: "CO-FOUNDER",
    imageSrc: "/images/visionary_founder.jpg",
    bio: "Championing wellness, modern hospitality vision, and experiential dining culture across the brand portfolio.",
  },
  {
    name: "RANJIT BINDRA",
    role: "FOUNDER & CEO",
    imageSrc: "/images/visionary_director.jpg",
    bio: "Guiding the architectural vision, expansion strategy, and high-standard operations across Mumbai & Pune.",
  },
  {
    name: "CHEF SAURABH",
    role: "EXECUTIVE PARTNER & CHEF",
    imageSrc: "/images/visionary_partner.jpg",
    bio: "Crafting progressive culinary narratives, signature menus, and curated tasting rooms across every venue.",
  },
];

export const careerTracks = [
  { title: "Culinary & Kitchen", body: "Chefs de partie through to head chef, across every brand and city." },
  { title: "Front of House", body: "Restaurant managers, sommeliers, hosts — the people guests remember." },
  { title: "Events & Operations", body: "Banquet, private-events, and live-entertainment production roles." },
  { title: "Corporate & Growth", body: "Marketing, finance, and expansion roles at the Colossal group level." },
];

