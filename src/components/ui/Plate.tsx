import Image from "next/image";

const TONES: Record<string, [string, string]> = {
  espresso: ["#2b1c16", "#150e0a"],
  walnut: ["#3a261d", "#1f140f"],
  bronze: ["#8c5a2b", "#331f10"],
  champagne: ["#c99a5f", "#5a3c22"],
};

const GRAIN =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>";

type PlateProps = {
  tone?: keyof typeof TONES;
  label?: string;
  caption?: string;
  ratio?: string; // tailwind aspect-* value, e.g. "aspect-[4/5]"
  className?: string;
  pending?: boolean;
  rounded?: boolean;
  imageSrc?: string;
};

export default function Plate({
  tone = "espresso",
  label,
  caption,
  ratio = "aspect-[4/5]",
  className,
  pending = true,
  rounded = true,
  imageSrc,
}: PlateProps) {
  const [from, to] = TONES[tone] || TONES.espresso;

  return (
    <div
      className={`group/plate relative overflow-hidden transition-all duration-500 ${
        rounded ? "rounded-2xl" : ""
      } ${ratio} ${className ?? ""}`}
      style={{
        background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={label ?? "Colossal Hospitality Visual"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover/plate:scale-105"
        />
      )}

      {/* Dark overlay gradient if image exists */}
      {imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      )}

      {/* Texture grain overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-30 transition-opacity duration-500 group-hover/plate:opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${GRAIN}")`, backgroundSize: "140px" }}
        aria-hidden
      />
      
      {/* Light sheen */}
      {!imageSrc && (
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover/plate:scale-110"
          style={{
            background:
              "radial-gradient(110% 80% at 20% 0%, rgba(255,255,255,0.18), transparent 60%)",
          }}
          aria-hidden
        />
      )}

      {/* Inner architectural border frame */}
      <div className="absolute inset-3 rounded-xl border border-white/15 transition-colors duration-500 group-hover/plate:border-white/30 pointer-events-none" aria-hidden />

      {/* Decorative corner marks */}
      <div className="absolute left-4 top-4 h-2 w-2 border-l border-t border-white/30" aria-hidden />
      <div className="absolute right-4 bottom-4 h-2 w-2 border-r border-b border-white/30" aria-hidden />

      {label && (
        <span className="font-display absolute bottom-6 left-6 text-2xl italic tracking-wide text-white transition-transform duration-500 group-hover/plate:translate-x-1 md:text-3xl z-10">
          {label}
        </span>
      )}

      {pending && (
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md z-10">
          {caption ?? (imageSrc ? "Featured Venue" : "Photography pending")}
        </span>
      )}
    </div>
  );
}


