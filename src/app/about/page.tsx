import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VisionariesSection from "@/components/home/VisionariesSection";
import Snapshot from "@/components/home/Snapshot";

export const metadata: Metadata = {
  title: "About Us · Colossal Hospitality Group",
  description: "The vision, scale, and people behind Colossal Hospitality Group across Mumbai & Pune.",
};

const pillars = [
  { title: "PREMIUM", body: "Every room is built to a standard, not a budget.", code: "01" },
  { title: "EXPERIENTIAL", body: "We design for how a night unfolds, not just how a room looks.", code: "02" },
  { title: "CONTEMPORARY", body: "Current without chasing trends — spaces built to age well.", code: "03" },
  { title: "VISIONARY", body: "Each brand is a bet on a concept we believe deserves to exist.", code: "04" },
  { title: "LIFESTYLE-LED", body: "Guests, not covers. We design around how people actually live.", code: "05" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* About Page Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/hero_bg.png"
          alt="Colossal Hospitality Group"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays with Maroon Ambient Hue */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5]">
              ABOUT COLOSSAL
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            A HOSPITALITY GROUP, BUILT LIKE A PORTFOLIO.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            Colossal Hospitality establishes and grows a portfolio of hospitality and entertainment brands — each distinct, each held to the same standard of design and experience.
          </p>
        </div>
      </section>

      {/* Group Position & Narrative Section */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid gap-14 lg:grid-cols-12 lg:items-center">
          
          {/* Left Widescreen Image Plate */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2.2rem] overflow-hidden border border-[#6b162a] bg-[#250711] shadow-2xl group">
            <Image
              src="/images/fine_dining.png"
              alt="Group Dining Room"
              fill
              className="object-cover object-center brightness-90 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140207]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-xs text-[#dfc18a] font-luxury tracking-widest uppercase">
              EPITOME FINE DINING · MUMBAI
            </div>
          </div>

          {/* Right Editorial Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-4">
              OUR GROUP POSITION
            </span>

            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient mt-1">
              CORPORATE CREDIBILITY. LIFESTYLE INSTINCTS.
            </h2>

            <div className="mt-8 space-y-5 text-sm sm:text-base font-light text-[#baa89f] leading-relaxed">
              <p>
                The parent brand balances the trust and professionalism guests, partners, and investors expect from a hospitality group with the design sensibility and cultural fluency of a <span className="text-[#dfc18a] font-medium">lifestyle brand</span>.
              </p>
              <p>
                We lead with the group — its vision, its scale, its standards — while giving every individual brand room to keep its own identity. <span className="text-[#faf5ee] font-normal">Colossal is the frame; each brand is its own picture.</span>
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/brands"
                className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02]"
              >
                <span>Explore Brands</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5 Pillars Blueprint Section - Visible Velvet Maroon Atmosphere */}
      <section className="bg-gradient-to-b from-[#2a0712] via-[#1a040b] to-[#0c0205] py-24 md:py-32 border-b border-[#63182b] relative overflow-hidden">
        {/* Ambient Maroon Spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-[radial-gradient(ellipse,_rgba(195,35,75,0.35)_0%,_transparent_70%)] pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-[1560px] px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-4">
              OUR CORE BLUEPRINT
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
              WHAT WE STAND FOR
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#f4e0b5]/85 font-light max-w-xl mx-auto">
              Five non-negotiable principles that guide every space, menu, and experience we create.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-[#6b162a] bg-gradient-to-b from-[#380a17] to-[#1a040b] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a] hover:-translate-y-1"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-[#dfc18a]">
                    PILLAR {p.code}
                  </span>
                  <h3 className="font-luxury mt-4 text-2xl font-normal tracking-[0.04em] text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#baa89f] font-light">
                    {p.body}
                  </p>
                </div>
                <div className="mt-8 h-0.5 w-10 bg-[#6b162a] transition-all duration-500 group-hover:w-full group-hover:bg-[#dfc18a]" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership & Visionaries Grid */}
      <VisionariesSection />

      {/* Group Snapshot Numbers */}
      <Snapshot />

      {/* Careers Call to Action */}
      <section className="py-24 text-center md:py-32 bg-gradient-to-b from-[#1c040b] to-[#0c0205] border-t border-[#63182b]">
        <div className="mx-auto max-w-4xl px-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-5">
            CAREERS &amp; CULTURE
          </span>
          <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] leading-tight text-gold-gradient">
            COME BUILD THE NEXT ROOM WITH US
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-[#baa89f] font-light">
            We are actively expanding across culinary, operations, management, and corporate roles.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02]"
            >
              <span>View Openings</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}


