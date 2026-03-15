import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

const drops = [
  {
    slug: "lisbon-daniel",
    city: "Lisbon",
    country: "Portugal",
    traveler: "Daniel",
    maker: "Abdul",
    date: "Maart 2026",
    items: 12,
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
  },
  {
    slug: "marrakech-sara",
    city: "Marrakech",
    country: "Marokko",
    traveler: "Sara",
    maker: "Hassan",
    date: "Februari 2026",
    items: 8,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
  },
  {
    slug: "kyoto-lena",
    city: "Kyoto",
    country: "Japan",
    traveler: "Lena",
    maker: "Yuki",
    date: "Januari 2026",
    items: 10,
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
  },
  {
    slug: "istanbul-marco",
    city: "Istanbul",
    country: "Turkije",
    traveler: "Marco",
    maker: "Emine",
    date: "December 2025",
    items: 15,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
  },
  {
    slug: "oaxaca-julia",
    city: "Oaxaca",
    country: "Mexico",
    traveler: "Julia",
    maker: "Rosa",
    date: "November 2025",
    items: 9,
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
  },
  {
    slug: "athens-noah",
    city: "Athens",
    country: "Griekenland",
    traveler: "Noah",
    maker: "Nikos",
    date: "Oktober 2025",
    items: 11,
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
  },
];

export default function DropsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-[#E8E0D4]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-4">Traveler drops</p>
        <h1 className="font-editorial text-5xl text-[#1C1C1C] mb-6">Drops</h1>
        <p className="text-sm text-[#8A8A8A] max-w-md mx-auto leading-relaxed">
          Elke drop is een kleine collectie gevonden via één reiziger op één plek.
          Gelimiteerd. Niet herhaalbaar.
        </p>
      </div>

      {/* Drops grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drops.map((drop) => (
            <Link key={drop.slug} href={`/drops/${drop.slug}`} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-[#F5F0E8] mb-5 relative">
                <img
                  src={drop.image}
                  alt={`${drop.city} drop`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs tracking-widest uppercase text-[#F5F0E8]">
                    {drop.items} objecten
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-editorial text-2xl text-[#1C1C1C] mb-1">
                    {drop.city}
                  </h2>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin size={10} className="text-[#C4956A]" />
                    <p className="text-xs text-[#C4956A] tracking-wider">{drop.country}</p>
                  </div>
                  <p className="text-sm text-[#8A8A8A]">
                    via {drop.traveler} — gemaakt door {drop.maker}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#8A8A8A]">
                  <Calendar size={10} />
                  <p className="text-xs">{drop.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
