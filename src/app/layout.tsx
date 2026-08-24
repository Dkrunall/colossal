import type { Metadata } from "next";
import { fraunces, manrope, cinzel, cormorant, italiana } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
      <body className="flex min-h-full flex-col bg-[#050505] font-body text-[#f5efe6] selection:bg-[#dfc18a] selection:text-black">
        <SmoothScrollProvider>
          <GsapScrollAnimations />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


