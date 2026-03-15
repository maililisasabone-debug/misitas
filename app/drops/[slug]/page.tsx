import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

const drops: Record<string, {
  city: string; country: string; traveler: string; maker: string;
  date: string; heroImage: string; makerImage: string; makerVideo?: string;
  intro: string; makerBio: string; makerHandle: string;
  products: { id: number; name: string; price: string; image: string }[];
}> = {
  "lisbon-daniel": {
    city: "LISBON",
    country: "Portugal",
    traveler: "Daniel",
    maker: "Abdul",
    makerHandle: "@abdul.ceramics",
    date: "Maart 2026",
    heroImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1600&q=80",
    makerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    intro: "Deze selectie werd gevonden door Daniel tijdens een reis door de oude schilderwijken van Lissabon. Hij ontmoette Abdul in zijn kleine atelier in de Alfama.",
    makerBio: "Abdul werkt al meer dan tien jaar met keramiek en zilver. Zijn werk combineert traditionele Portugese technieken met een moderne minimalistische esthetiek. Elke ring, elke hanger — uniek.",
    products: [
      { id: 2, name: "Ceramic Pendant", price: "€38", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
      { id: 5, name: "Handmade Linen Pouch", price: "€29", image: "https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=600&q=80" },
      { id: 9, name: "Resin Ring Stack", price: "€36", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&q=80" },
      { id: 12, name: "Incense Holder", price: "€24", image: "https://images.unsplash.com/photo-1602526219050-b11d7d85f6e2?w=600&q=80" },
    ],
  },
  "marrakech-sara": {
    city: "MARRAKECH",
    country: "Marokko",
    traveler: "Sara",
    maker: "Hassan",
    makerHandle: "@hassan.silver",
    date: "Februari 2026",
    heroImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80",
    makerImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
    intro: "Sara vond Hassan in de souks van Marrakech. Verscholen achter een berg zilver en koper — zijn atelier is zo klein dat je er nauwelijks twee mensen in kwijt kunt.",
    makerBio: "Hassan smeedt al zijn leven zilver. Zijn vader deed het, zijn grootvader ook. Elk stuk wordt met de hand gehamerd — de textuur is altijd anders, altijd uniek.",
    products: [
      { id: 1, name: "Hammered Silver Ring", price: "€42", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" },
      { id: 3, name: "Woven Brass Bracelet", price: "€55", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80" },
      { id: 6, name: "Carved Olive Wood Bowl", price: "€65", image: "https://images.unsplash.com/photo-1612460900697-aaaf44eb1d1b?w=600&q=80" },
      { id: 11, name: "Amber Beaded Necklace", price: "€62", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80" },
    ],
  },
};

export default function DropDetailPage({ params }: { params: { slug: string } }) {
  const drop = drops[params.slug] ?? drops["lisbon-daniel"];

  return (
    <div>
      {/* Bold hero */}
      <div className="relative h-screen overflow-hidden">
        <img src={drop.heroImage} alt={drop.city} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1C1C1C]/50" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8C4B8] mb-4">The drop</p>
            <h1 className="font-display text-[15vw] md:text-[12vw] text-white leading-none mb-4 tracking-wide">
              THE {drop.city}<br />EDITION.
            </h1>
            <p className="text-sm text-white/70">
              via {drop.traveler} — {drop.date}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Link href="/drops" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors mt-10 mb-16">
          <ArrowLeft size={12} /> Alle drops
        </Link>

        {/* Intro */}
        <div className="max-w-2xl mb-20">
          <p className="font-editorial text-2xl text-[#1C1C1C] leading-relaxed italic">{drop.intro}</p>
        </div>

        {/* Products */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Objecten uit deze drop</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {drop.products.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-[#FAF7F2] mb-3">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm text-[#1C1C1C] mb-1">{product.name}</p>
                <p className="text-sm text-[#8A8A8A]">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Meet the maker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-[#E8E0D4] mb-20">
          <div className="aspect-[3/4] overflow-hidden bg-[#FAF7F2] relative">
            <img src={drop.makerImage} alt={drop.maker} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs text-[#8A8A8A]">
              {drop.makerHandle}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-4">Meet the maker</p>
            <h2 className="font-display text-6xl text-[#1C1C1C] mb-4 tracking-wide">
              Meet {drop.maker.toUpperCase()}
            </h2>
            <div className="flex items-center gap-1 mb-8">
              <MapPin size={12} className="text-[#C4956A]" />
              <p className="text-xs text-[#C4956A] tracking-wider">{drop.city}, {drop.country}</p>
            </div>
            <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">{drop.makerBio}</p>
            <p className="text-xs text-[#8A8A8A]">I'm from {drop.country}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
