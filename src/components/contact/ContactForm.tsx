"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  "General Inquiry",
  "Reservations",
  "Banquets & Events",
  "Press & Media",
  "Careers",
];

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState("General Inquiry");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#38141d] bg-[#14060a] p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#dfc18a]/10 border border-[#dfc18a]/40 text-2xl text-[#dfc18a]">
          ✓
        </div>
        <h3 className="font-luxury mt-4 text-3xl font-normal text-[#faf5ee]">Inquiry Submitted</h3>
        <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#baa89f] font-light mx-auto">
          Thank you for reaching out to Colossal Hospitality Group. Our team will respond to your request within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-[#dfc18a]/50 bg-[#1d0810] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#dfc18a] hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-8"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#dfc18a]">
          Select Topic
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer ${
                selectedType === type
                  ? "border border-[#dfc18a] bg-[#dfc18a] text-black font-bold"
                  : "border border-[#38141d] bg-[#1d0810] text-[#f4e0b5] hover:border-[#dfc18a]/60 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" required placeholder="e.g. Alexander Vance" />
        <Field label="Email Address" name="email" type="email" required placeholder="alexander@domain.com" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
        <Field label="Preferred Outlet / City" name="outlet" placeholder="e.g. Epitome Mumbai" />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-[#dfc18a]">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="How can we assist your dining or partnership experience?"
          className="mt-2 w-full rounded-2xl border border-[#38141d] bg-[#100407] px-4 py-3.5 text-sm text-[#faf5ee] placeholder:text-[#78656b] outline-none transition-colors focus:border-[#dfc18a] focus:bg-[#18050c]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full border border-[#dfc18a] bg-[#dfc18a] py-4 text-xs font-bold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#faf5ec] hover:scale-[1.01] cursor-pointer"
      >
        Submit Inquiry →
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#dfc18a]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#38141d] bg-[#100407] px-4 py-3.5 text-sm text-[#faf5ee] placeholder:text-[#78656b] outline-none transition-colors focus:border-[#dfc18a] focus:bg-[#18050c]"
      />
    </div>
  );
}

