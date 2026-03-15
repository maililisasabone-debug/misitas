export default function TickerBanner() {
  const items = ["Unique gift", "Made with love", "Lasts a life-time", "Curated with care", "Found by travelers"];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#FAF7F2] border-y border-[#E8E0D4] py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6 text-sm text-[#8A8A8A]">
            <span className="text-[#C4956A]">♡</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
