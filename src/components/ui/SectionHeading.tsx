import SplitHeading from "@/components/motion/SplitHeading";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className ?? ""}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <SplitHeading
        text={title}
        as="h2"
        triggerOnScroll
        className="font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl"
      />
    </div>
  );
}
