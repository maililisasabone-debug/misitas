import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import NewsletterForm from "@/components/NewsletterForm";

const featuredProducts = [
  {
    id: 1,
    name: "Hammered Silver Ring",
    price: "€42",
    origin: "Marrakech",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    id: 2,
    name: "Ceramic Pendant",
    price: "€38",
    origin: "Lisbon",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
  },
  {
    id: 3,
    name: "Woven Brass Bracelet",
    price: "€55",
    origin: "Istanbul",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
  },
  {
    id: 4,
    name: "Stone Drop Earrings",
    price: "€48",
    origin: "Athens",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
  },
];

const latestDrop = {
  city: "Lisbon",
  traveler: "Daniel",
  maker: "Abdul",
  date: "Maart 2026",
  image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
  description: "Een selectie gevonden tijdens een reis door de oude schilderwijken van Lissabon.",
};

// Next drop date: April 1, 2026
const nextDropDate = new Date("2026-04-01T12:00:00");

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/40" />

        <div className="relative z-10 text-center text-[#FDFAF5] px-6 animate-fade-in">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 text-[#E8C4B8]">
            Curated jewelry & small objects
          </p>
          <h1 className="font-editorial text-7xl md:text-9xl tracking-[0.1em] mb-8">
            MISITAS
          </h1>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-[#E8C4B8] mb-3">
              Volgende drop
            </p>
            <CountdownTimer targetDate={nextDropDate} />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="bg-[#FDFAF5] text-[#1C1C1C] text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#E8C4B8] transition-colors"
            >
              Explore collection
            </Link>
            <Link
              href="/drops"
              className="border border-[#FDFAF5]/60 text-[#FDFAF5] text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#FDFAF5]/10 transition-colors"
            >
              Bekijk drops
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#FDFAF5]/60">
          <div className="w-px h-12 bg-[#FDFAF5]/40 animate-pulse" />
        </div>
      </section>

      {/* Intro block */}
      <section className="py-28 px-6 max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Het concept</p>
        <h2 className="font-editorial text-4xl md:text-5xl text-[#1C1C1C] leading-tight mb-8">
          Misitas verzamelt kleine objecten<br />
          <em>via mensen onderweg.</em>
        </h2>
        <p className="text-[#8A8A8A] text-base leading-relaxed max-w-xl mx-auto">
          Sieraden en items gekozen op vorm, materiaal en gevoel.
          Geen massaproductie. Geen haast. Elk object heeft een verhaal,
          een plek, een maker.
        </p>
      </section>

      {/* Featured products */}
      <section className="py-16 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-3">Selectie</p>
              <h2 className="font-editorial text-3xl text-[#1C1C1C]">Uitgelichte objecten</h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors"
            >
              Alle producten <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-[#E8E0D4] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <MapPin size={10} className="text-[#C4956A]" />
                  <p className="text-xs text-[#C4956A] tracking-wider">{product.origin}</p>
                </div>
                <p className="text-sm text-[#1C1C1C] mb-1">{product.name}</p>
                <p className="text-sm text-[#8A8A8A]">{product.price}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/shop" className="text-xs tracking-widest uppercase text-[#8A8A8A] underline underline-offset-4">
              Alle producten
            </Link>
          </div>
        </div>
      </section>

      {/* Latest drop */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={latestDrop.image}
              alt={`Found in ${latestDrop.city}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#1C1C1C] text-[#F5F0E8] flex flex-col justify-center px-12 py-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-6">Laatste drop</p>
            <h2 className="font-editorial text-5xl mb-4">
              Found in {latestDrop.city}
            </h2>
            <p className="text-sm text-[#8A8A8A] mb-2">
              via {latestDrop.traveler} — gemaakt door {latestDrop.maker}
            </p>
            <p className="text-xs text-[#5A5A5A] mb-8">{latestDrop.date}</p>
            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-10 max-w-sm">
              {latestDrop.description}
            </p>
            <Link
              href="/drops/lisbon-daniel"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-[#F5F0E8] border border-[#F5F0E8]/30 px-8 py-4 hover:bg-[#F5F0E8]/10 transition-colors w-fit"
            >
              Bekijk de drop <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Hoe het werkt</p>
          <h2 className="font-editorial text-4xl text-[#1C1C1C] mb-16">
            Van reis naar jouw handen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discover",
                text: "Onze curators reizen en ontdekken bijzondere makers en objecten op unieke plekken over de wereld.",
              },
              {
                step: "02",
                title: "Select",
                text: "Elk item wordt zorgvuldig geselecteerd op vorm, materiaal, gevoel en het verhaal erachter.",
              },
              {
                step: "03",
                title: "Bring home",
                text: "De objecten komen in kleine batches naar Misitas en zijn beschikbaar via onze drops.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <p className="font-editorial text-6xl text-[#E8E0D4] mb-4">{item.step}</p>
                <h3 className="font-editorial text-2xl text-[#1C1C1C] mb-4">{item.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-6">Community</p>
          <h2 className="font-editorial text-3xl text-[#1C1C1C] mb-4">
            Stay close to new drops.
          </h2>
          <p className="text-sm text-[#8A8A8A] mb-8">
            Schrijf je in en ontvang als eerste bericht over nieuwe drops, makers en verhalen.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
