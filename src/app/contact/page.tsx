import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import Plate from "@/components/ui/Plate";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Colossal Hospitality Group for inquiries, partnerships, banquets, and careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build a conversation."
        lede="For outlet reservations, visit our Reservations portal. For partnerships, banquet bookings, press inquiries, or group careers — connect with our team below."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-line bg-bg-raised p-6 shadow-md">
              <Plate tone="walnut" ratio="aspect-[16/9]" caption="Map & HQ Location" />
              
              <div className="mt-6 space-y-6 text-sm">
                <div className="border-b border-line pb-4">
                  <p className="eyebrow text-gold">Corporate Headquarters</p>
                  <p className="font-display mt-2 text-xl font-normal text-ink">Colossal Hospitality Group</p>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                    Mumbai &amp; Pune Administrative Offices · India
                  </p>
                </div>

                <div className="border-b border-line pb-4">
                  <p className="eyebrow text-gold">Direct Channels</p>
                  <p className="mt-2 text-sm text-ink-muted">General: info@colossalhospitality.com</p>
                  <p className="mt-1 text-sm text-ink-muted">Press &amp; Media: press@colossalhospitality.com</p>
                </div>

                <div>
                  <p className="eyebrow text-gold">Operating Hours</p>
                  <p className="mt-2 text-sm text-ink-muted">Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

