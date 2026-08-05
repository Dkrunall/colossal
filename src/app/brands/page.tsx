import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import RevealGroup from "@/components/motion/RevealGroup";
import BrandTile from "@/components/brands/BrandTile";
import { brands } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Brands",
  description: "The full Colossal Hospitality portfolio — live and upcoming.",
};

export default function BrandsPage() {
  const live = brands.filter((b) => b.status === "live");
  const upcoming = brands.filter((b) => b.status === "upcoming");

  return (
    <>
      <PageHero
        eyebrow="Our Brands"
        title="Six rooms. One growing portfolio."
        lede="Each brand below keeps its own identity, its own city, its own crowd. Select one to preview its story, then step through to its dedicated site."
      />

      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {live.map((brand) => (
              <BrandTile key={brand.slug} brand={brand} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-line bg-bg-sunken py-20 md:py-28">
        <Container>
          <p className="eyebrow mb-10">Coming Soon</p>
          <RevealGroup className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {upcoming.map((brand) => (
              <BrandTile key={brand.slug} brand={brand} />
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
