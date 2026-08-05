import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import NoteBand from "@/components/ui/NoteBand";
import Button from "@/components/ui/Button";
import { brands } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Events",
  description: "Live entertainment, guest chefs, and one-off nights across Colossal brands.",
};

export default function EventsPage() {
  const liveBrand = brands.find((b) => b.slug === "epitome-live");

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="What's on, across the portfolio."
        lede="DJ sets, guest chefs, and takeovers under the Epitome Live banner — plus one-off nights at every brand."
      />

      <NoteBand>
        This section is designed to run on a live events calendar once the CMS is connected —
        no events are scheduled here yet.
      </NoteBand>

      <section className="py-24 text-center md:py-32">
        <Container>
          <p className="font-display text-2xl italic text-ink-muted md:text-3xl">
            No events scheduled right now.
          </p>
          <p className="mx-auto mt-4 max-w-[46ch] text-ink-muted">
            Check back soon, or follow {liveBrand?.name ?? "Epitome Live"} for announcements as
            they&apos;re confirmed.
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <Button href="/brands/epitome-live">Epitome Live</Button>
            <Button href="/banquets" variant="outline">
              Book a Private Event
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
