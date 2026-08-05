type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number; // seconds per loop
};

/** Infinite horizontal ribbon — used for press mentions and the awards strip. */
export default function Marquee({ items, className, speed = 32 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`group relative overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max items-center gap-16 will-change-transform motion-safe:animate-[marquee_var(--marquee-speed)_linear_infinite] motion-safe:group-hover:[animation-play-state:paused]"
        style={{ ["--marquee-speed" as string]: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl italic text-ink-muted whitespace-nowrap md:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
