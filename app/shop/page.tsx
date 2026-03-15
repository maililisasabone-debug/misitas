"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, SlidersHorizontal, X } from "lucide-react";

const categories = ["Alles", "Jewelry", "Objects", "Textiles"];

const products = [
  { id: 1, name: "Hammered Silver Ring", price: "€42", origin: "Marrakech", category: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" },
  { id: 2, name: "Ceramic Pendant", price: "€38", origin: "Lisbon", category: "Jewelry", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  { id: 3, name: "Woven Brass Bracelet", price: "€55", origin: "Istanbul", category: "Jewelry", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80" },
  { id: 4, name: "Stone Drop Earrings", price: "€48", origin: "Athens", category: "Jewelry", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
  { id: 5, name: "Handmade Linen Pouch", price: "€29", origin: "Kyoto", category: "Textiles", image: "https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=600&q=80" },
  { id: 6, name: "Carved Olive Wood Bowl", price: "€65", origin: "Tunis", category: "Objects", image: "https://images.unsplash.com/photo-1612460900697-aaaf44eb1d1b?w=600&q=80" },
  { id: 7, name: "Terracotta Vase", price: "€72", origin: "Oaxaca", category: "Objects", image: "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=600&q=80" },
  { id: 8, name: "Hand-dyed Silk Scarf", price: "€88", origin: "Tehran", category: "Textiles", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80" },
  { id: 9, name: "Resin Ring Stack", price: "€36", origin: "Copenhagen", category: "Jewelry", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&q=80" },
  { id: 10, name: "Macramé Wall Hanging", price: "€95", origin: "Bali", category: "Textiles", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80" },
  { id: 11, name: "Amber Beaded Necklace", price: "€62", origin: "Warsaw", category: "Jewelry", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80" },
  { id: 12, name: "Incense Holder", price: "€24", origin: "Kyoto", category: "Objects", image: "https://images.unsplash.com/photo-1602526219050-b11d7d85f6e2?w=600&q=80" },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("Alles");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = activeCategory === "Alles"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-[#E8E0D4]">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-4">Collectie</p>
        <h1 className="font-editorial text-5xl text-[#1C1C1C]">Shop</h1>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-40 bg-[#FDFAF5]/95 backdrop-blur-sm border-b border-[#E8E0D4]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-[#1C1C1C] text-[#F5F0E8]"
                    : "text-[#8A8A8A] hover:text-[#1C1C1C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-xs text-[#8A8A8A] mb-10 tracking-wider">
          {filtered.length} objecten
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[#F5F0E8] mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/10 transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-1 mb-1.5">
                <MapPin size={10} className="text-[#C4956A]" />
                <p className="text-xs text-[#C4956A] tracking-wider">{product.origin}</p>
              </div>
              <p className="text-sm text-[#1C1C1C] mb-1 leading-snug">{product.name}</p>
              <p className="text-sm text-[#8A8A8A]">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
