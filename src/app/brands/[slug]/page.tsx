import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Button from "@/components/ui/Button";
import { brands } from "@/lib/site-data";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return {};
  return {
    title: `${brand.name}${brand.city !== "Upcoming" ? ` — ${brand.city}` : ""}`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  const isUpcoming = brand.status === "upcoming";
  const otherBrands = brands.filter((b) => b.slug !== brand.slug).slice(0, 3);

  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44 border-b border-[#2d1118]">
        {/* Ambient Maroon Glow */}
        <div
          className="absolute top-10 right-1/4 h-96 w-96 rounded-full opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(104, 21, 42, 0.5) 0%, rgba(223, 193, 138, 0.15) 50%, transparent 75%)",
          }}
          aria-hidden
        />

        <Container className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#16060c]/85 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a]" />
              <span className="eyebrow text-[#dfc18a]">
                {brand.kind} {brand.city !== "Upcoming" && `· ${brand.city}`}
              </span>
            </div>

            <SplitHeading
              text={brand.name}
              as="h1"
              className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.08] text-gold-gradient"
            />

            <Reveal delay={0.15} className="mt-6 max-w-[48ch] text-xl font-normal text-[#dfc18a]">
              &ldquo;{brand.tagline}&rdquo;
            </Reveal>

            <Reveal delay={0.25} className="mt-6 max-w-[54ch] text-base leading-relaxed text-[#baa89f] font-light">
              {brand.description}
            </Reveal>

            {/* Quick Venue Key Details Grid */}
            <Reveal delay={0.3} className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-[#38141d] bg-[#14060a] p-5 max-w-lg">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#78656b]">Location</p>
                <p className="font-luxury text-base font-semibold text-[#faf5ee] mt-0.5">{brand.city}</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#78656b]">Concept Type</p>
                <p className="font-luxury text-base font-semibold text-[#faf5ee] mt-0.5">{brand.kind}</p>
              </div>
              <div className="mt-2 border-t border-[#38141d] pt-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#78656b]">Status</p>
                <p className="text-xs font-semibold text-[#dfc18a] mt-0.5 uppercase tracking-wider">
                  {isUpcoming ? "Upcoming Concept" : "Active Venue"}
                </p>
              </div>
              <div className="mt-2 border-t border-[#38141d] pt-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-[#78656b]">Reservations</p>
                <p className="text-xs font-semibold text-[#faf5ee] mt-0.5">Concierge Available</p>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/reservations"
                className="rounded-full border border-[#dfc18a] bg-[#dfc18a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#faf5ec] hover:scale-[1.02]"
              >
                Reserve Table →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#38141d] bg-[#1a070e] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#faf5ee] transition-all hover:border-[#dfc18a] hover:text-[#dfc18a]"
              >
                Private Events Inquiry
              </Link>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" y={30}>
            <div className="overflow-hidden rounded-[2rem] border border-[#38141d] bg-[#14060a] p-3">
              <Plate
                tone={brand.tone}
                imageSrc={brand.imageSrc}
                ratio="aspect-[4/5]"
                label={brand.name}
                caption={isUpcoming ? "Coming Soon" : "Featured Venue"}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="border-t border-[#2d1118] bg-[#0c0407] py-20 md:py-28">
        <Container>
          <div className="flex items-center justify-between border-b border-[#38141d] pb-6 mb-10">
            <div>
              <p className="eyebrow text-[#dfc18a]">Portfolio</p>
              <h2 className="font-luxury text-2xl md:text-3xl font-normal text-[#faf5ee]">Explore Other Rooms</h2>
            </div>
            <Link href="/brands" className="text-xs font-bold uppercase tracking-[0.14em] text-[#dfc18a] hover:text-[#fff5dc]">
              View All Brands →
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {otherBrands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-[#38141d] bg-[#14060a] p-3 transition-all duration-300 group-hover:border-[#dfc18a]/60">
                  <Plate tone={b.tone} imageSrc={b.imageSrc} label={b.name} ratio="aspect-[4/3]" />
                  <div className="mt-4 px-2 pb-2">
                    <div className="flex items-center justify-between">
                      <p className="font-luxury text-xl font-normal text-[#faf5ee] transition-colors group-hover:text-[#dfc18a]">{b.name}</p>
                      <span className="text-sm text-[#baa89f] transition-transform group-hover:translate-x-1">→</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#78656b]">{b.kind} · {b.city}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

