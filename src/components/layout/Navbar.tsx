"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 bottom-6 sm:bottom-8 z-50 px-4 flex justify-center transition-all duration-500">
      <div className="flex items-center gap-1.5 sm:gap-2 rounded-[1.4rem] border border-[#dfc18a]/40 bg-[#0c0b0a]/95 p-2 sm:p-2.5 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_20px_rgba(223,193,138,0.15)] max-w-full overflow-x-auto custom-scrollbar transition-all duration-500 hover:border-[#dfc18a]/70">
        
        {/* Leftmost Logo Box (C. / COLOSSAL style) */}
        <Link
          href="/"
          className="flex items-center justify-center rounded-xl border border-[#dfc18a]/40 bg-[#0e0d0c] px-4 py-2.5 text-xs sm:text-sm font-extrabold tracking-[0.16em] text-[#dfc18a] font-luxury transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#181613] hover:shadow-[0_0_15px_rgba(223,193,138,0.3)] shadow-md flex-shrink-0"
        >
          <span>C.</span>
        </Link>

        {/* Middle Nav Items as individual rounded dark boxes */}
        <nav className="flex items-center gap-1.5 flex-shrink-0">
          {primaryNav.slice(0, 6).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl border px-3.5 sm:px-4 py-2 text-[0.72rem] sm:text-[0.76rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? "border-[#dfc18a] bg-[#dfc18a] text-black font-extrabold shadow-[0_0_18px_rgba(223,193,138,0.45)]"
                    : "border-[#38332c]/70 bg-[#1c1a17]/90 text-[#c5a670] hover:border-[#dfc18a]/60 hover:bg-[#282420] hover:text-[#f2dbab] hover:shadow-[0_0_12px_rgba(223,193,138,0.2)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Rightmost Contrast Light Button (Book Table) */}
        <Link
          href="/reservations"
          className="flex items-center justify-center rounded-xl border border-white bg-[#f7f3eb] px-4 sm:px-5 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-black shadow-lg transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:shadow-[0_0_25px_rgba(223,193,138,0.5)] hover:scale-[1.02] flex-shrink-0 font-luxury"
        >
          <span>Book Table</span>
        </Link>

      </div>
    </header>
  );
}








