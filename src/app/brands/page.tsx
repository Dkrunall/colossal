import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Brands · Colossal Hospitality Group",
  description: "The full Colossal Hospitality portfolio — live and upcoming addresses across Mumbai, Pune & Dubai.",
};

export default function BrandsPage() {
  const live = brands.filter((b) => b.status === "live");
  const upcoming = brands.filter((b) => b.status === "upcoming");

  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Brands Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/fine_dining.png"
          alt="Colossal Portfolio Brands"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays with Maroon Ambient Hue */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#16060c]/85 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              OUR PORTFOLIO
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            DISTINCT ROOMS. ONE GROWING PORTFOLIO.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            Each brand below keeps its own identity, its own city, its own crowd. Select one to preview its story and explore its culinary and acoustic profile.
          </p>
        </div>
      </section>

      {/* Live Brands Showcase Section */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              LIVE DESTINATIONS
            </span>
            <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
              ACTIVE ADDRESSES
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {live.map((brand, idx) => {
              const imageSrc = brand.imageSrc || (idx % 2 === 0 ? "/images/hero_bg.png" : "/images/fine_dining.png");
              return (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-[2.2rem] border border-[#38141d] bg-[#14060a] transition-all duration-500 hover:border-[#dfc18a]/70 hover:-translate-y-1"
                >
                  <Image
                    src={imageSrc}
                    alt={brand.name}
                    fill
                    className="object-cover object-center brightness-[0.80] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0407] via-[#0e0407]/40 to-transparent opacity-95" />

                  <div className="absolute top-6 left-6">
                    <span className="rounded-full border border-[#dfc18a]/35 bg-[#140408]/80 px-4 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#faf5ee] backdrop-blur-md">
                      {brand.city}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                    <h3 className="font-luxury text-2xl sm:text-3xl font-normal tracking-[0.04em] text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#baa89f] line-clamp-2 leading-relaxed font-light">
                      {brand.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#dfc18a] transition-all group-hover:text-white">
                      <span>Explore Address →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Upcoming Brands Section */}
      {upcoming.length > 0 && (
        <section className="bg-[#0c0407] py-24 md:py-32 border-b border-[#2d1118]">
          <div className="mx-auto max-w-[1560px] px-6 md:px-12">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
                EXPANSION PIPELINE
              </span>
              <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient mt-2">
                COMING SOON
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((brand) => (
                <div
                  key={brand.slug}
                  className="group relative aspect-[3/4] overflow-hidden rounded-[2.2rem] border border-[#38141d] bg-[#14060a] transition-all duration-500 opacity-90"
                >
                  <Image
                    src={brand.imageSrc || "/images/live_stage.png"}
                    alt={brand.name}
                    fill
                    className="object-cover object-center brightness-[0.70]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0407] via-[#0e0407]/50 to-transparent opacity-95" />

                  <div className="absolute top-6 left-6">
                    <span className="rounded-full border border-[#dfc18a]/40 bg-[#16060c]/80 px-4 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a] backdrop-blur-md">
                      Upcoming
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                    <h3 className="font-luxury text-2xl sm:text-3xl font-normal tracking-[0.04em] text-[#faf5ee]">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#baa89f] line-clamp-2 leading-relaxed font-light">
                      {brand.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

