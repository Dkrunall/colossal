import { Cinzel, Cormorant_Garamond, Italiana, Manrope, Fraunces } from "next/font/google";

// Primary Luxury Serif Headline font — exact match for luxury hospitality Roman titles
export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

// Classical Editorial Serif
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Ultra-tall elegant serif font
export const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

// Editorial Display serif
export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body/utility sans — clean, modern, architectural
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});



