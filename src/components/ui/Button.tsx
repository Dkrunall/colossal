import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "text" | "gold";
  className?: string;
  external?: boolean;
};

export default function Button({ href, children, variant = "solid", className, external }: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300";
  const styles: Record<string, string> = {
    solid:
      "rounded-full border border-[#5c1626] bg-[#2b0710] px-6 py-3 text-[#f4e0b5] font-bold hover:border-[#dfc18a] hover:bg-[#3d0a18] hover:text-white hover:-translate-y-0.5",
    gold:
      "rounded-full border border-[#dfc18a] bg-[#dfc18a] px-6 py-3 text-black font-bold hover:bg-[#faf5ec] hover:scale-[1.02]",
    outline:
      "rounded-full border border-[#38141d] bg-[#14060a] px-6 py-3 text-[#faf5ee] hover:border-[#dfc18a] hover:text-[#dfc18a] hover:-translate-y-0.5",
    text: "text-[#dfc18a] border-b border-[#dfc18a]/50 pb-1 hover:border-[#dfc18a] hover:text-white",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className ?? ""}`} {...props}>
      <span>{children}</span>
    </Link>
  );
}

