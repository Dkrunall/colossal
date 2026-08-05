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
      <div className="rounded-3xl border border-line bg-bg-raised p-10 text-center shadow-lg">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-2xl text-gold">
          ✓
        </div>
        <h3 className="font-display mt-4 text-3xl italic text-ink">Inquiry Submitted</h3>
        <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-ink-muted">
          Thank you for reaching out to Colossal Hospitality Group. Our team will respond to your request within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-line px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink hover:border-gold hover:text-gold"
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
      className="rounded-3xl border border-line bg-bg-raised p-8 md:p-10 shadow-lg space-y-8"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Select Topic
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {INQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] transition-all duration-300 ${
                selectedType === type
                  ? "bg-gold text-white shadow-sm"
                  : "border border-line bg-bg-sunken/50 text-ink-muted hover:border-gold-soft hover:text-ink"
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
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="How can we assist your dining or partnership experience?"
          className="mt-2 w-full rounded-2xl border border-line bg-bg-sunken/40 px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-gold focus:bg-bg-raised"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gold py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:bg-gold-soft hover:shadow-lg hover:-translate-y-0.5"
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
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-line bg-bg-sunken/40 px-4 py-3.5 text-sm text-ink placeholder:text-ink-faint/60 outline-none transition-colors focus:border-gold focus:bg-bg-raised"
      />
    </div>
  );
}

