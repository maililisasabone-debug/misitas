"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search, User, ChevronDown } from "lucide-react";

const categories = [
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&q=80" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=80" },
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=200&q=80" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-warm-white text-center text-xs py-2 tracking-widest font-body font-semibold">
        Nieuwe klanten besparen 10% met code <span className="underline underline-offset-2">MISITAS10</span>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 text-xs tracking-widest uppercase font-body text-soft-gray hover:text-ink transition-colors">
                Shop <ChevronDown size={12} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-border shadow-xl p-6 w-72 grid grid-cols-2 gap-4 z-50">
                  {categories.map((item) => (
                    <Link key={item.name} href="/shop" className="group text-center">
                      <div className="aspect-square overflow-hidden bg-cream mb-2 rounded-sm">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <p className="text-xs font-body text-ink">{item.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/drops" className="text-xs tracking-widest uppercase font-body text-soft-gray hover:text-ink transition-colors">Drops</Link>
          </nav>

          {/* Logo — speels script font */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-script text-3xl text-ink hover:text-blush transition-colors" style={{ letterSpacing: '0.05em' }}>
            Misitas
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <Link href="/about" className="text-xs tracking-widest uppercase font-body text-soft-gray hover:text-ink transition-colors">About</Link>
            <Link href="/become-a-curator" className="text-xs tracking-widest uppercase font-body text-soft-gray hover:text-ink transition-colors">Contact</Link>
            <div className="flex items-center gap-4 text-soft-gray">
              <button className="hover:text-ink transition-colors"><Search size={16} /></button>
              <button className="hover:text-ink transition-colors"><User size={16} /></button>
              <button className="hover:text-ink transition-colors"><ShoppingBag size={16} /></button>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <button className="text-soft-gray"><ShoppingBag size={16} /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-ink">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border py-8 px-6">
            <nav className="flex flex-col gap-6">
              {[{ href: "/shop", label: "Shop" }, { href: "/drops", label: "Drops" }, { href: "/about", label: "About" }, { href: "/become-a-curator", label: "Contact" }].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm tracking-widest uppercase font-body text-ink">{link.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
