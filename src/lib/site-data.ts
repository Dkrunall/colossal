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


// Intentionally empty — the discovery doc names this section but supplies no
// actual award list or certificates. Inventing entries here would put false
// claims on a real business's site, so the Awards page renders a pending
// state instead until the client provides real recognitions.
export const awards: { year: string; title: string; body: string }[] = [];

export const careerTracks = [
  { title: "Culinary & Kitchen", body: "Chefs de partie through to head chef, across every brand and city." },
  { title: "Front of House", body: "Restaurant managers, sommeliers, hosts — the people guests remember." },
  { title: "Events & Operations", body: "Banquet, private-events, and live-entertainment production roles." },
  { title: "Corporate & Growth", body: "Marketing, finance, and expansion roles at the Colossal group level." },
];
