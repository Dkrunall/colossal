import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { careerTracks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Group Careers · Colossal Hospitality Group",
  description: "Build the next room with Colossal Hospitality across culinary, operations, management, and corporate roles.",
};

export default function CareersPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Careers Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/live_stage.png"
          alt="Colossal Careers"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#16060c]/85 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              JOIN THE TEAM
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            COME BUILD THE NEXT ROOM WITH US.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            Colossal is expanding — across kitchens, floor service, mixology, banquets, and corporate leadership across Mumbai &amp; Pune.
          </p>
        </div>
      </section>

      {/* Career Tracks Grid */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              DEPARTMENTS &amp; ROLES
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
              WHERE PEOPLE JOIN
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {careerTracks.map((track) => (
              <div
                key={track.title}
                className="group flex flex-col justify-between rounded-[2.2rem] border border-[#38141d] bg-[#14060a] p-8 transition-all duration-500 hover:border-[#dfc18a]/60"
              >
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a]">
                    CAREER TRACK
                  </span>
                  <h3 className="font-luxury text-2xl font-normal text-[#faf5ee] mt-3 transition-colors group-hover:text-[#dfc18a]">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#baa89f] leading-relaxed font-light">
                    {track.body}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#38141d] pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    <span>Apply for Track →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Direct Resume Box */}
          <div className="mt-20 rounded-[2.5rem] border border-[#38141d] bg-[#14060a] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
                GENERAL APPLICATIONS
              </span>
              <h3 className="font-luxury text-2xl sm:text-4xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
                DON'T SEE YOUR TRACK LISTED?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#baa89f] font-light max-w-xl">
                Send your portfolio or CV directly to our talent team — we are hiring continuously across all brands as we launch new addresses.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#faf5ec] hover:scale-[1.02] flex-shrink-0"
            >
              <span>Submit Portfolio</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

