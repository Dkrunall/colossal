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
      "rounded-full bg-ink px-6 py-3 text-bg shadow-sm hover:bg-gold hover:text-white hover:shadow-md hover:-translate-y-0.5",
    gold:
      "rounded-full bg-gold px-6 py-3 text-white shadow-md hover:bg-gold-soft hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "rounded-full border border-line-strong bg-bg-raised/40 px-6 py-3 text-ink backdrop-blur-sm hover:border-gold hover:bg-gold/5 hover:text-gold hover:-translate-y-0.5",
    text: "text-ink border-b border-gold/40 pb-1 hover:border-gold hover:text-gold",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className ?? ""}`} {...props}>
      <span>{children}</span>
    </Link>
  );
}

