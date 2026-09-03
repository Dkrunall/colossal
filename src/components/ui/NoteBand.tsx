export default function NoteBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y border-[#38141d] bg-[#14060a]">
      <div className="mx-auto flex max-w-[1400px] items-start gap-3 px-6 py-4 md:px-10">
        <span className="mt-0.5 text-[#dfc18a]">＊</span>
        <p className="text-sm text-[#baa89f] font-light">{children}</p>
      </div>
    </div>
  );
}
