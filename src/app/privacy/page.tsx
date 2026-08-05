import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import NoteBand from "@/components/ui/NoteBand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Colossal Hospitality handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <NoteBand>
        Placeholder page. A full privacy policy — covering the inquiry, banquet, and contact
        forms on this site, and compliant with India&apos;s DPDP Act 2023 — needs legal review
        before launch.
      </NoteBand>
      <section className="py-20 md:py-28">
        <Container className="max-w-[68ch] space-y-5 text-ink-muted">
          <p>
            This placeholder exists so the footer link resolves during development. Replace with
            counsel-reviewed copy covering what data this site collects (inquiry forms, banquet
            requests, careers submissions), how it&apos;s stored, who it&apos;s shared with, and
            how users can request deletion — before the site accepts real submissions.
          </p>
        </Container>
      </section>
    </>
  );
}
