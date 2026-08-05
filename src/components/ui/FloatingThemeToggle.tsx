"use client";

import { useEffect, useState } from "react";

export default function FloatingThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle light or dark theme mode"
        className="group relative flex items-center gap-2.5 rounded-full border border-gold/40 bg-bg-raised/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-gold hover:bg-bg-raised hover:scale-105 hover:shadow-gold/20"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-sm transition-transform duration-300 group-hover:rotate-45">
          {theme === "light" ? "🌙" : "☀️"}
        </span>
        <span className="font-semibold text-gold">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    </div>
  );
}
