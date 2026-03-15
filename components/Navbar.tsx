"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFAF5]/90 backdrop-blur-sm border-b border-[#E8E0D4]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
            Shop
          </Link>
          <Link href="/drops" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
            Drops
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-editorial text-2xl tracking-[0.15em] text-[#1C1C1C]">
          MISITAS
        </Link>

        {/* Right nav */}
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          <Link href="/about" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
            About
          </Link>
          <Link href="/become-a-curator" className="text-xs tracking-widest uppercase text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
            Curators
          </Link>
          <button className="text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">
            <Search size={16} />
          </button>
          <button className="text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors relative">
            <ShoppingBag size={16} />
          </button>
        </nav>

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
        <div className="md:hidden bg-[#FDFAF5] border-t border-[#E8E0D4] py-8 px-6">
          <nav className="flex flex-col gap-6">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/drops", label: "Drops" },
              { href: "/about", label: "About" },
              { href: "/become-a-curator", label: "Become a Curator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#1C1C1C]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
