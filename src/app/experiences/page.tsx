import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import RevealGroup from "@/components/motion/RevealGroup";
import Button from "@/components/ui/Button";
import { experiences } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Chef's tables, private rooms, and curated nights across the Colossal portfolio.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Beyond the table."
        lede="The moments that sit above a standard reservation — reserved for the guests who want more of the room."
      />

      <section className="py-20 md:py-28">
        <Container>
          <RevealGroup className="grid gap-x-8 gap-y-16 sm:grid-cols-2" stagger={0.1}>
            {experiences.map((exp) => (
              <div key={exp.title}>
                <Plate tone={exp.tone} ratio="aspect-[16/10]" pending={false} />
                <p className="font-display mt-6 text-2xl text-ink">{exp.title}</p>
                <p className="mt-2 max-w-[46ch] text-ink-muted">{exp.description}</p>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-10">
            <p className="max-w-[42ch] text-ink-muted">
              Planning something specific — a chef&apos;s table, a private room, a full takeover?
            </p>
            <Button href="/contact">Enquire</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
