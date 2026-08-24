import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Curated Experiences · Colossal Hospitality Group",
  description: "Chef's tables, private rooms, acoustic evenings, and curated nights across the Colossal portfolio.",
};

export default function ExperiencesPage() {
  return (
    <div className="bg-[#050505] text-[#f7f3eb]">
      
      {/* Experiences Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center border-b border-[#1c1916]">
        <Image
          src="/images/live_stage.png"
          alt="Curated Experiences"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#dfc18a]/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#0e0d0c]/80 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              CURATED EXPERIENCES
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            BEYOND THE STANDARD TABLE.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#b0a89d] leading-relaxed">
            The moments that sit above a standard reservation — reserved for guests who want the full sensory story of culinary craftsmanship and acoustic live performances.
          </p>
        </div>
      </section>

      {/* Experience Showcase Grid */}
      <section className="py-24 md:py-32 border-b border-[#1c1916]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
          
          <div className="grid gap-10 sm:grid-cols-2">
            {experiences.map((exp, idx) => {
              const imageSrc = idx % 2 === 0 ? "/images/fine_dining.png" : "/images/live_stage.png";
              return (
                <div
                  key={exp.title}
                  className="group relative flex flex-col justify-between rounded-[2.2rem] border border-[#26221c] bg-[#11100f] p-6 sm:p-8 transition-all duration-500 hover:border-[#dfc18a]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#1c1916]">
                      <Image
                        src={imageSrc}
                        alt={exp.title}
                        fill
                        className="object-cover object-center brightness-[0.88] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="mt-8">
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a]">
                        EXCLUSIVE EXPERIENCE
                      </span>
                      <h3 className="font-luxury text-2xl sm:text-3xl font-normal tracking-[0.04em] text-[#f7f3eb] transition-colors group-hover:text-[#dfc18a] mt-2">
                        {exp.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-[#b0a89d] leading-relaxed font-light">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#26221c] pt-5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      <span>Inquire Experience →</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Custom Concierge Banner */}
          <div className="mt-20 rounded-[2.5rem] border border-[#26221c] bg-[#11100f] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
                CUSTOM CONCIERGE
              </span>
              <h3 className="font-luxury text-2xl sm:text-4xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
                PLANNING A PRIVATE TAKEOVER?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#b0a89d] font-light max-w-xl">
                Planning something specific — a chef's table, private dining room, or brand collaboration? Our concierge team will tailor every detail.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-lg transition-all duration-300 hover:bg-[#f2dbab] hover:scale-[1.02] flex-shrink-0"
            >
              <span>Contact Concierge</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

