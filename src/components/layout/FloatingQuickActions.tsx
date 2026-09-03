"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingQuickActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Fade in after initial mount and slight scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(true); // Always visible for easy booking access
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Hospitality Actions"
      className={`fixed right-3.5 sm:right-6 bottom-20 sm:bottom-24 z-30 flex flex-col items-end gap-2.5 sm:gap-3.5 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Floating Action Cluster Container */}
      <div className="flex flex-col items-end gap-2.5 sm:gap-3">
        
        {/* 1. Direct Phone Call Floating Button */}
        <a
          href="tel:+919999999999"
          aria-label="Call Colossal Concierge Hotline"
          className="group relative flex h-11.5 w-11.5 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#dfc18a] bg-gradient-to-tr from-[#dfc18a] via-[#f4e0b5] to-[#dfc18a] text-black shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#faf5ec] active:scale-95"
        >
          {/* Tooltip on hover (desktop) */}
          <span className="pointer-events-none absolute right-full mr-3.5 hidden rounded-full border border-[#dfc18a]/60 bg-[#2a0712] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#dfc18a] shadow-xl whitespace-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 md:block">
            Call Concierge →
          </span>
          {/* Phone Receiver SVG Icon */}
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
          </svg>
        </a>

        {/* 2. WhatsApp Concierge Floating Button */}
        <a
          href="https://wa.me/919999999999?text=Hello%20Colossal%20Hospitality,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Concierge on WhatsApp"
          className="group relative flex h-11.5 w-11.5 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#781d34] bg-[#420d1a]/95 p-2.5 sm:p-3 text-[#f4e0b5] backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 active:scale-95"
        >
          {/* Tooltip on hover (desktop) */}
          <span className="pointer-events-none absolute right-full mr-3.5 hidden rounded-full border border-[#781d34] bg-[#2a0712] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#dfc18a] shadow-xl whitespace-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 md:block">
            WhatsApp Concierge
          </span>
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.761 0-3.414-.46-4.857-1.265l-5.143 1.329 1.359-4.969c-.896-1.488-1.359-3.187-1.359-5.095 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
          </svg>
        </a>

        {/* 3. Instagram Profile Floating Button */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Colossal Instagram Profile"
          className="group relative flex h-11.5 w-11.5 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#781d34] bg-[#420d1a]/95 p-2.5 sm:p-3 text-[#f4e0b5] backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#dfc18a] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:scale-110 active:scale-95"
        >
          {/* Tooltip on hover (desktop) */}
          <span className="pointer-events-none absolute right-full mr-3.5 hidden rounded-full border border-[#781d34] bg-[#2a0712] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#dfc18a] shadow-xl whitespace-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 md:block">
            Instagram @colossal
          </span>
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

      </div>
    </aside>
  );
}
