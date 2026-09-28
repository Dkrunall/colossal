import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us · Colossal Hospitality Group",
  description: "Get in touch with Colossal Hospitality Group for inquiries, partnerships, banquets, and group careers across Mumbai & Pune.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#080406] text-[#faf5ee]">
      
      {/* Contact Hero Section */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden bg-[#080406] flex items-center justify-center border-b border-[#2d1118]">
        <Image
          src="/images/Kynd2.jpg"
          alt="Contact Colossal Concierge"
          fill
          priority
          className="object-cover object-center brightness-[0.70] scale-105"
          sizes="100vw"
        />
        
        {/* Luxury Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080406] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#68152a]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/40 bg-[#16060c]/85 px-4 py-1.5 backdrop-blur-xl mb-6 shadow-xl">
            <span className="h-2 w-2 rounded-full bg-[#dfc18a] animate-ping" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#dfc18a]">
              GROUP CONCIERGE
            </span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.02em] leading-[1.12] text-gold-gradient">
            LET'S BUILD A CONVERSATION.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-light text-[#baa89f] leading-relaxed">
            For venue reservations, private dining suites, press inquiries, or corporate partnerships — connect directly with our group directors below.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <section className="py-24 md:py-32 border-b border-[#2d1118]">
        <div className="mx-auto max-w-[1560px] px-6 md:px-12 grid gap-12 lg:grid-cols-12 lg:items-stretch">

          {/* Form Block */}
          <div className="lg:col-span-7 rounded-[2.5rem] border border-[#38141d] bg-[#14060a] p-8 sm:p-12 shadow-2xl">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#dfc18a]">
              DIRECT INQUIRY
            </span>
            <h2 className="font-luxury text-3xl font-normal text-[#faf5ee] mt-1 mb-8">
              SEND A MESSAGE
            </h2>
            <ContactForm />
          </div>

          {/* Concierge Visual */}
          <div className="lg:col-span-5 relative min-h-[420px] w-full overflow-hidden rounded-[2.5rem] border border-[#38141d] bg-[#17060e] shadow-2xl">
            <Image
              src="/images/Kynd3.jpg"
              alt="Colossal Hospitality"
              fill
              className="object-cover object-center brightness-90"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

        </div>
      </section>

    </div>
  );
}


