export default function NoteBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y border-line bg-bg-sunken">
      <div className="mx-auto flex max-w-[1400px] items-start gap-3 px-6 py-4 md:px-10">
        <span className="mt-0.5 text-gold">＊</span>
        <p className="text-sm text-ink-muted">{children}</p>
      </div>
    </div>
  );
}
