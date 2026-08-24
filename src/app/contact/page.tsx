import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us · Colossal Hospitality Group",
  description: "Get in touch with Colossal Hospitality Group for inquiries, partnerships, banquets, and group careers across Mumbai & Pune.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#050505] text-[#f7f3eb]">
      
      {/* Contact Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center border-b border-[#1c1916]">
        <Image
          src="/images/fine_dining.png"
          alt="Contact Colossal Concierge"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#dfc18a]/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#0e0d0c]/80 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              GROUP CONCIERGE
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            LET'S BUILD A CONVERSATION.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#b0a89d] leading-relaxed">
            For venue reservations, private dining suites, press inquiries, or corporate partnerships — connect directly with our group directors below.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <section className="py-24 md:py-32 border-b border-[#1c1916]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Form Block */}
          <div className="lg:col-span-7 rounded-[2.5rem] border border-[#26221c] bg-[#11100f] p-8 sm:p-12 shadow-2xl">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              DIRECT INQUIRY
            </span>
            <h2 className="font-luxury text-3xl font-normal text-[#f7f3eb] mt-1 mb-8">
              SEND A MESSAGE
            </h2>
            <ContactForm />
          </div>

          {/* Concierge Info Side Card */}
          <div className="lg:col-span-5 rounded-[2.5rem] border border-[#26221c] bg-[#11100f] p-8 sm:p-10 shadow-2xl space-y-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#38332c] bg-[#171513]">
              <Image
                src="/images/live_stage.png"
                alt="Administrative Offices"
                fill
                className="object-cover object-center brightness-90"
              />
            </div>

            <div className="space-y-6 text-sm">
              <div className="border-b border-[#26221c] pb-5">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a]">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="font-luxury text-xl font-normal text-[#f7f3eb] mt-1">
                  COLOSSAL HOSPITALITY GROUP
                </h3>
                <p className="mt-1 text-xs text-[#b0a89d] font-light">
                  Mumbai &amp; Pune Administrative Offices · India
                </p>
              </div>

              <div className="border-b border-[#26221c] pb-5">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a]">
                  DIRECT CHANNELS
                </span>
                <p className="mt-2 text-xs sm:text-sm text-[#b0a89d] font-light">
                  General Inquiries: <span className="text-[#f7f3eb] font-normal">info@colossalhospitality.com</span>
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#b0a89d] font-light">
                  Press &amp; Media: <span className="text-[#f7f3eb] font-normal">press@colossalhospitality.com</span>
                </p>
              </div>

              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#dfc18a]">
                  CONCIERGE HOURS
                </span>
                <p className="mt-2 text-xs sm:text-sm text-[#b0a89d] font-light">
                  Monday – Saturday: 10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


