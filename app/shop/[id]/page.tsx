import Link from "next/link";
import { MapPin, ArrowLeft, Plus } from "lucide-react";

const products: Record<string, {
  id: number; name: string; price: string; origin: string;
  maker: string; material: string; category: string;
  description: string; images: string[];
}> = {
  "1": {
    id: 1,
    name: "Hammered Silver Ring",
    price: "€42",
    origin: "Marrakech",
    maker: "Hassan",
    material: "Sterling zilver, handgesmeed",
    category: "Jewelry",
    description: "Handgesmeed door Hassan in zijn atelier in de medina van Marrakech. Elk stuk is uniek door het hammerproces — de textuur valt altijd iets anders uit. Gedragen als stapelring of solo.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
  },
  "2": {
    id: 2,
    name: "Ceramic Pendant",
    price: "€38",
    origin: "Lisbon",
    maker: "Abdul",
    material: "Keramiek, zijden koord",
    category: "Jewelry",
    description: "Gemaakt door Abdul in zijn studio in de Alfama wijk. Het keramiek heeft een matte afwerking en een organische vorm die bij elk stuk anders is.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1609923838001-3b5e51a9f067?w=800&q=80",
    ],
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id] ?? products["1"];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors mb-12"
        >
          <ArrowLeft size={12} /> Terug naar shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Images */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, i) => (
              <div key={i} className={`overflow-hidden bg-[#F5F0E8] ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={img} alt={product.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="md:sticky md:top-24 self-start py-4">
            <div className="flex items-center gap-1 mb-4">
              <MapPin size={12} className="text-[#C4956A]" />
              <p className="text-xs text-[#C4956A] tracking-wider">{product.origin}</p>
            </div>

            <h1 className="font-editorial text-4xl text-[#1C1C1C] mb-4">{product.name}</h1>
            <p className="text-2xl text-[#1C1C1C] mb-8">{product.price}</p>

            <button className="w-full bg-[#1C1C1C] text-[#F5F0E8] text-xs tracking-widest uppercase py-5 hover:bg-[#C4956A] transition-colors flex items-center justify-center gap-3 mb-4">
              <Plus size={14} /> Add to cart
            </button>

            <div className="border-t border-[#E8E0D4] pt-8 mt-8">
              <h3 className="text-xs tracking-widest uppercase text-[#8A8A8A] mb-6">Over dit item</h3>
              <p className="text-sm text-[#1C1C1C] leading-relaxed mb-8">{product.description}</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Maker", value: product.maker },
                  { label: "Gevonden in", value: product.origin },
                  { label: "Materiaal", value: product.material },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-[#E8E0D4] pb-3">
                    <span className="text-[#8A8A8A]">{item.label}</span>
                    <span className="text-[#1C1C1C]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
