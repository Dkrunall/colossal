import Link from "next/link";
import Plate from "@/components/ui/Plate";
import type { Brand } from "@/lib/site-data";

export default function BrandTile({ brand }: { brand: Brand }) {
  const isUpcoming = brand.status === "upcoming";

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#38141d] bg-[#14060a] p-4 transition-all duration-500 hover:border-[#dfc18a]/60 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Plate
          tone={brand.tone}
          label={brand.name}
          imageSrc={brand.imageSrc}
          caption={isUpcoming ? "Coming Soon" : "Outlet"}
          ratio="aspect-[4/5]"
          className="transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge Overlay */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md ${
              isUpcoming
                ? "border border-[#dfc18a]/40 bg-[#16060c]/85 text-[#dfc18a]"
                : "border border-white/20 bg-black/60 text-white/90"
            }`}
          >
            {isUpcoming ? "Upcoming Concept" : brand.city}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col justify-between px-1 pb-1">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-luxury text-2xl font-normal text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">
              {brand.name}
            </h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#38141d] bg-[#1d0810] text-[#dfc18a] transition-all duration-300 group-hover:border-[#dfc18a] group-hover:bg-[#dfc18a] group-hover:text-black">
              →
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#78656b]">
            {brand.kind} {brand.city !== "Upcoming" && `· ${brand.city}`}
          </p>

          <p className="mt-3 text-sm text-[#baa89f] font-light line-clamp-2">{brand.tagline}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#38141d] pt-3 text-[0.72rem] font-bold uppercase tracking-wider text-[#dfc18a]">
          <span>Explore Venue</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">View Details</span>
        </div>
      </div>
    </Link>
  );
}

