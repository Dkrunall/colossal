import Link from "next/link";
import Plate from "@/components/ui/Plate";
import type { Brand } from "@/lib/site-data";

export default function BrandTile({ brand }: { brand: Brand }) {
  const isUpcoming = brand.status === "upcoming";

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-raised/70 p-4 transition-all duration-500 hover:border-gold-soft hover:bg-bg-raised hover:shadow-xl hover:-translate-y-1"
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
                ? "border border-gold/40 bg-gold/20 text-gold"
                : "border border-white/20 bg-black/40 text-white/90"
            }`}
          >
            {isUpcoming ? "Upcoming Concept" : brand.city}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col justify-between px-1 pb-1">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-gold">
              {brand.name}
            </h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg-sunken text-ink-muted transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
              →
            </span>
          </div>

          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            {brand.kind} {brand.city !== "Upcoming" && `· ${brand.city}`}
          </p>

          <p className="mt-3 text-sm text-ink-muted line-clamp-2">{brand.tagline}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-[0.72rem] font-medium uppercase tracking-wider text-gold">
          <span>Explore Venue</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">View Details</span>
        </div>
      </div>
    </Link>
  );
}

