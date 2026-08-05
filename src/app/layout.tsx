import type { Metadata } from "next";
import { fraunces, manrope } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import FloatingThemeToggle from "@/components/ui/FloatingThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Colossal Hospitality — A Portfolio of Experiences",
    template: "%s · Colossal Hospitality",
  },
  description:
    "Colossal Hospitality is a hospitality and entertainment group building distinct, design-led brands across dining, bars, and live experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg font-body text-ink">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingThemeToggle />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
