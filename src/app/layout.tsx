import type { Metadata } from "next";
import { fraunces, manrope, cinzel, cormorant, italiana } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingQuickActions from "@/components/layout/FloatingQuickActions";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import GsapScrollAnimations from "@/components/motion/GsapScrollAnimations";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Colossal Hospitality — A Portfolio of Experiences",
    template: "%s · Colossal Hospitality",
  },
  description:
    "Colossal Hospitality is a hospitality and entertainment group building distinct, design-led brands across dining, bars, and live experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${italiana.variable} ${fraunces.variable} ${manrope.variable} h-full antialiased dark`}>
      <body className="flex min-h-full flex-col bg-[#080406] font-body text-[#faf5ee] selection:bg-[#5f1225] selection:text-[#f4e0b5]">
        <SmoothScrollProvider>
          <GsapScrollAnimations />
          <Navbar />
          <FloatingQuickActions />
          <main className="flex-1 pb-28 sm:pb-32">{children}</main>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


