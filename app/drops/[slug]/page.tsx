import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

const drops: Record<string, {
  city: string; country: string; traveler: string; maker: string;
  date: string; heroImage: string; makerImage: string;
  intro: string; makerBio: string;
  products: { id: number; name: string; price: string; image: string }[];
}> = {
  "lisbon-daniel": {
    city: "Lisbon",
    country: "Portugal",
    traveler: "Daniel",
    maker: "Abdul",
    date: "Maart 2026",
    heroImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&q=80",
    makerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    intro: "Deze selectie werd gevonden door Daniel tijdens een reis door de oude schilderwijken van Lissabon. Hij ontmoette Abdul in zijn kleine atelier in de Alfama — een plek waar je bijna langs zou lopen.",
    makerBio: "Abdul werkt al meer dan tien jaar met keramiek en zilver. Zijn werk combineert traditionele Portugese technieken met een moderne minimalistische esthetiek. Elke ring, elke hanger — uniek.",
    products: [
      { id: 2, name: "Ceramic Pendant", price: "€38", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
      { id: 5, name: "Handmade Linen Pouch", price: "€29", image: "https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=600&q=80" },
      { id: 9, name: "Resin Ring Stack", price: "€36", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&q=80" },
      { id: 12, name: "Incense Holder", price: "€24", image: "https://images.unsplash.com/photo-1602526219050-b11d7d85f6e2?w=600&q=80" },
    ],
  },
};

export default function DropDetailPage({ params }: { params: { slug: string } }) {
  const drop = drops[params.slug] ?? drops["lisbon-daniel"];

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img src={drop.heroImage} alt={drop.city} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 via-[#1C1C1C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8C4B8] mb-3">Drop — {drop.date}</p>
            <h1 className="font-editorial text-6xl md:text-8xl text-[#FDFAF5] mb-4">
              Found in {drop.city}
            </h1>
            <p className="text-sm text-[#FDFAF5]/70">
              via {drop.traveler} — gemaakt door {drop.maker}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/drops"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors mt-10 mb-16"
        >
          <ArrowLeft size={12} /> Alle drops
        </Link>

        {/* Intro */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-[#8A8A8A] leading-relaxed text-lg">{drop.intro}</p>
        </div>

        {/* Products */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Objecten uit deze drop</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {drop.products.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-[#F5F0E8] mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-[#1C1C1C] mb-1">{product.name}</p>
                <p className="text-sm text-[#8A8A8A]">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Meet the maker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-[#E8E0D4] mb-20">
          <div className="aspect-[3/4] overflow-hidden bg-[#F5F0E8]">
            <img src={drop.makerImage} alt={drop.maker} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-4">Meet the maker</p>
            <h2 className="font-editorial text-4xl text-[#1C1C1C] mb-6">{drop.maker}</h2>
            <div className="flex items-center gap-1 mb-8">
              <MapPin size={12} className="text-[#C4956A]" />
              <p className="text-xs text-[#C4956A] tracking-wider">{drop.city}, {drop.country}</p>
            </div>
            <p className="text-sm text-[#8A8A8A] leading-relaxed">{drop.makerBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
