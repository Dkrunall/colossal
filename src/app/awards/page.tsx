import type { Metadata } from "next";
import Image from "next/image";
import { awardsList } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Awards & Recognitions · Colossal Hospitality Group",
  description: "Industry recognition, culinary honors, and hospitality awards across Colossal Hospitality brands.",
};

export default function AwardsPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Awards Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/fine_dining.png"
          alt="Colossal Awards & Recognitions"
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
              HONORS &amp; CERTIFICATIONS
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            RECOGNITION, BRAND BY BRAND.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            From Times Food &amp; Nightlife Awards to architectural dining accolades — celebrating the craftsmanship and culinary leadership across Mumbai &amp; Pune.
          </p>
        </div>
      </section>

      {/* Awards Cards Grid */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          <div className="grid gap-12 lg:grid-cols-2">
            {awardsList.map((award) => (
              <div
                key={award.title}
                className="group flex flex-col justify-between rounded-[2.2rem] border border-[#38141d] bg-[#14060a] p-8 transition-all duration-500 hover:border-[#dfc18a]/60"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#38141d] bg-[#17060e]">
                    <Image
                      src={award.imageSrc}
                      alt={award.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="mt-8 border-l-2 border-[#dfc18a] pl-4">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a]">
                      {award.category} · {award.year}
                    </span>
                    <h3 className="font-luxury text-2xl font-normal text-[#faf5ee] mt-1 transition-colors group-hover:text-[#dfc18a]">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#baa89f]">
                      Recipient: {award.recipient}
                    </p>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#baa89f] leading-relaxed font-light">
                    {award.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

