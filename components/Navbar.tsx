"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search, User, ChevronDown } from "lucide-react";

const categories = [
  {
    label: "Category",
    items: [
      { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80" },
      { name: "Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80" },
      { name: "Necklaces", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=80" },
      { name: "Bracelets", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=200&q=80" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#1C1C1C] text-white text-center text-xs py-2 tracking-widest">
        Nieuwe klanten besparen 10% met code <span className="font-semibold">MISITAS10</span>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E0D4]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
                Shop <ChevronDown size={12} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-[#E8E0D4] shadow-lg p-6 w-80 grid grid-cols-2 gap-4 z-50">
                  {categories[0].items.map((item) => (
                    <Link key={item.name} href="/shop" className="group text-center">
                      <div className="aspect-square overflow-hidden bg-[#FAF7F2] mb-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <p className="text-xs text-[#1C1C1C]">{item.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/drops" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
              Drops
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-editorial text-2xl tracking-[0.15em] text-[#1C1C1C]">
            MISITAS
          </Link>

          {/* Right */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <Link href="/about" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
              About us
            </Link>
            <Link href="/become-a-curator" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
              Contact
            </Link>
            <div className="flex items-center gap-4 text-[#8A8A8A]">
              <button className="hover:text-[#1C1C1C] transition-colors"><Search size={16} /></button>
              <button className="hover:text-[#1C1C1C] transition-colors"><User size={16} /></button>
              <button className="hover:text-[#1C1C1C] transition-colors"><ShoppingBag size={16} /></button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <button className="text-[#8A8A8A]"><ShoppingBag size={16} /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#1C1C1C]">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E0D4] py-8 px-6">
            <nav className="flex flex-col gap-6">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/drops", label: "Drops" },
                { href: "/about", label: "About us" },
                { href: "/become-a-curator", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-widest uppercase text-[#1C1C1C]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
