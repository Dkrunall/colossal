import Image from "next/image";
import { visionaries, type Visionary } from "@/lib/site-data";

export default function VisionariesSection({ people = visionaries }: { people?: Visionary[] }) {
  const gridCols = people.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3 max-w-6xl" : "sm:grid-cols-2 max-w-3xl";

  return (
    <section className="bg-[#080406] py-24 md:py-32 border-b border-[#2d1118]">
      <div className="mx-auto max-w-[1560px] px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfc18a]/60 bg-[#5c1326] px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#f4e0b5] mb-4">
            LEADERSHIP &amp; CULINARY DIRECTORS
          </span>
          <h2 className="font-luxury text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.02em] text-gold-gradient">
            OUR VISIONARIES
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#baa89f]">
            The leadership, creative direction and culinary minds shaping Colossal Hospitality.
          </p>
        </div>

        {/* Portrait Cards Grid */}
        <div className={`grid gap-8 mx-auto ${gridCols}`}>
          {people.map((person) =>
            person.imageSrc ? (
              <div
                key={person.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2.2rem] border border-[#6b162a] bg-gradient-to-b from-[#340916] to-[#120307] transition-all duration-500 hover:border-[#dfc18a]"
              >
                {/* Portrait Photo */}
                <Image
                  src={person.imageSrc}
                  alt={person.name}
                  fill
                  className="object-cover object-top brightness-[0.80] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-95"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Cinematic Bottom Gradient Overlay with Visible Maroon Undertone */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a040b] via-[#1a040b]/50 to-transparent opacity-95" />

                {/* Bottom Information */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col justify-end">
                  <h3 className="font-luxury text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.06em] text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a]">
                    {person.role}
                  </p>
                  {person.bio && (
                    <p className="mt-2 sm:mt-3 text-[0.75rem] sm:text-xs text-[#f4e0b5]/90 line-clamp-2 leading-relaxed opacity-90 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-light">
                      {person.bio}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              // No portrait available — centered monogram card, no empty photo space
              <div
                key={person.name}
                className="group relative flex flex-col items-center overflow-hidden rounded-[2.2rem] border border-[#6b162a] bg-gradient-to-b from-[#340916] to-[#120307] px-6 py-10 text-center transition-all duration-500 hover:border-[#dfc18a] sm:py-12"
              >
                <div className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfc18a]/10 blur-3xl pointer-events-none" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#dfc18a]/40 bg-[#1a040b] transition-colors duration-500 group-hover:border-[#dfc18a]">
                  <span className="font-luxury text-2xl font-normal text-[#dfc18a]">
                    {person.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>

                <h3 className="font-luxury mt-6 text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.06em] text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
                  {person.name}
                </h3>

                <p className="mt-2 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a]">
                  {person.role}
                </p>
                {person.bio && (
                  <p className="mt-3 max-w-[32ch] text-[0.75rem] sm:text-xs text-[#f4e0b5]/90 leading-relaxed font-light">
                    {person.bio}
                  </p>
                )}
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}
