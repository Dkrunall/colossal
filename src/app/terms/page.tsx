import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import NoteBand from "@/components/ui/NoteBand";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Colossal Hospitality website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <NoteBand>
        Placeholder page. Full terms — covering site use, reservation redirects to third-party
        brand and booking platforms, and content ownership — need legal review before launch.
      </NoteBand>
      <section className="py-20 md:py-28">
        <Container className="max-w-[68ch] space-y-5 text-ink-muted">
          <p>
            This placeholder exists so the footer link resolves during development. Replace with
            counsel-reviewed terms before the site goes live.
          </p>
        </Container>
      </section>
    </>
  );
}
