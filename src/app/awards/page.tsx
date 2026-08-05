import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import RevealGroup from "@/components/motion/RevealGroup";
import NoteBand from "@/components/ui/NoteBand";
import { awards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Awards & Recognitions",
  description: "Recognition for Colossal Hospitality brands.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero eyebrow="Awards & Recognitions" title="Recognition, brand by brand." />

      {awards.length > 0 ? (
        <section className="py-20 md:py-28">
          <Container>
            <RevealGroup className="divide-y divide-line border-y border-line" stagger={0.08}>
              {awards.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="font-display shrink-0 text-2xl italic text-gold">{a.year}</span>
                  <div>
                    <p className="text-lg text-ink">{a.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{a.body}</p>
                  </div>
                </div>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : (
        <>
          <NoteBand>
            No awards or certifications are listed yet — this page is ready to populate as soon
            as the client shares confirmed recognitions and supporting assets.
          </NoteBand>
          <section className="py-24 text-center md:py-32">
            <Container>
              <p className="font-display text-2xl italic text-ink-muted md:text-3xl">
                Nothing published here yet.
              </p>
            </Container>
          </section>
        </>
      )}
    </>
  );
}
