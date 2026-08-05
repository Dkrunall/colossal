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
    <>
      <section className="pb-20 pt-36 md:pb-28 md:pt-44">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="eyebrow text-gold">
                {brand.kind} {brand.city !== "Upcoming" && `· ${brand.city}`}
              </span>
            </div>

            <SplitHeading
              text={brand.name}
              as="h1"
              className="font-display text-5xl italic leading-[1.05] text-ink sm:text-6xl lg:text-7xl xl:text-8xl"
            />

            <Reveal delay={0.15} className="mt-6 max-w-[48ch] text-xl font-medium text-gold italic">
              &ldquo;{brand.tagline}&rdquo;
            </Reveal>

            <Reveal delay={0.25} className="mt-6 max-w-[54ch] text-base leading-relaxed text-ink-muted">
              {brand.description}
            </Reveal>

            {/* Quick Venue Key Details Grid */}
            <Reveal delay={0.3} className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-bg-raised p-5 max-w-lg shadow-sm">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">Location</p>
                <p className="font-display text-base font-semibold text-ink mt-0.5">{brand.city}</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">Concept Type</p>
                <p className="font-display text-base font-semibold text-ink mt-0.5">{brand.kind}</p>
              </div>
              <div className="mt-2 border-t border-line/60 pt-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">Status</p>
                <p className="text-xs font-semibold text-gold mt-0.5 uppercase tracking-wider">
                  {isUpcoming ? "Upcoming Concept" : "Active Venue"}
                </p>
              </div>
              <div className="mt-2 border-t border-line/60 pt-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink-faint">Reservations</p>
                <p className="text-xs font-semibold text-ink mt-0.5">Concierge Available</p>
              </div>
            </Reveal>

            <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/reservations" variant="gold">
                Reserve Table →
              </Button>
              <Button href="/contact" variant="outline">
                Private Events Inquiry
              </Button>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-5" y={30}>
            <Plate
              tone={brand.tone}
              imageSrc={brand.imageSrc}
              ratio="aspect-[4/5]"
              label={brand.name}
              caption={isUpcoming ? "Coming Soon" : "Featured Venue"}
              className="shadow-2xl"
            />
          </Reveal>
        </Container>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="border-t border-line bg-bg-sunken py-20 md:py-28">
        <Container>
          <div className="flex items-center justify-between border-b border-line pb-6 mb-10">
            <div>
              <p className="eyebrow text-gold">Portfolio</p>
              <h2 className="font-display text-2xl italic text-ink md:text-3xl">Explore Other Rooms</h2>
            </div>
            <Link href="/brands" className="text-xs font-semibold uppercase tracking-[0.12em] text-gold hover:underline">
              View All 6 Brands →
            </Link>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {otherBrands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-line bg-bg-raised p-3 transition-all duration-300 group-hover:border-gold-soft group-hover:shadow-lg">
                  <Plate tone={b.tone} imageSrc={b.imageSrc} label={b.name} ratio="aspect-[4/3]" />
                  <div className="mt-4 px-2 pb-2">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-xl text-ink transition-colors group-hover:text-gold">{b.name}</p>
                      <span className="text-sm text-ink-muted transition-transform group-hover:translate-x-1">→</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">{b.kind} · {b.city}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

