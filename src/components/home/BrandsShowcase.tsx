"use client";

import { useState } from "react";
import Link from "next/link";
import { brands, type Brand } from "@/lib/site-data";
import Plate from "@/components/ui/Plate";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const CATEGORIES = ["All", "Fine Dining", "Café & Bar", "Entertainment", "Upcoming"] as const;
type Category = (typeof CATEGORIES)[number];

function BrandCard({ brand }: { brand: Brand }) {
  const isUpcoming = brand.status === "upcoming";
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-bg-raised/70 p-4 transition-all duration-500 hover:border-gold-soft hover:bg-bg-raised hover:shadow-xl hover:-translate-y-1.5"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Plate
          tone={brand.tone}
          label={brand.name}
          imageSrc={brand.imageSrc}
          caption={isUpcoming ? "Coming Soon" : "Active Venue"}
          ratio="aspect-[4/5]"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md ${
              isUpcoming
                ? "border border-gold/40 bg-gold/20 text-gold"
                : "border border-white/20 bg-black/40 text-white"
            }`}
          >
            {isUpcoming ? "Upcoming Concept" : brand.city}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col justify-between px-1 pb-1">
        <div>
          <div className="flex items-center justify-between">
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

        <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-3 text-[0.72rem] font-semibold uppercase tracking-wider text-gold">
          <span>Explore Room</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">View →</span>
        </div>
      </div>
    </Link>
  );
}

export default function BrandsShowcase() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredBrands = brands.filter((brand) => {
    if (activeTab === "All") return true;
    if (activeTab === "Fine Dining") return brand.kind.includes("Fine Dining");
    if (activeTab === "Café & Bar") return brand.kind.includes("Café");
    if (activeTab === "Entertainment") return brand.kind.includes("Entertainment");
    if (activeTab === "Upcoming") return brand.status === "upcoming";
    return true;
  });

  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionHeading eyebrow="Our Portfolio" title="One group, six distinct rooms." />
            <p className="mt-4 max-w-[48ch] text-ink-muted">
              Each brand keeps its own identity — its own room, its own crowd. Select any concept to step through to its dedicated venue site.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gold text-white shadow-md scale-105"
                    : "border border-line bg-bg-raised text-ink-muted hover:border-gold-soft hover:bg-bg-sunken hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className="mt-12 rounded-3xl border border-line bg-bg-raised py-16 text-center text-ink-muted">
            No concepts match the selected filter.
          </div>
        )}
      </Container>
    </section>
  );
}

