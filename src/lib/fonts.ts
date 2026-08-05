import { Fraunces, Manrope } from "next/font/google";

// Display serif — carries the "Editorial Luxury" voice across headlines.
export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body/utility sans — quiet, architectural, does the reading work.
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
