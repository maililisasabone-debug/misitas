import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#F5F0E8] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <p className="font-editorial text-3xl tracking-[0.15em] mb-4">MISITAS</p>
          <p className="text-sm text-[#8A8A8A] leading-relaxed max-w-xs">
            Curated jewelry & small objects. Gevonden via mensen onderweg.
            Geen massaproductie. Geen haast.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8A8A8A] mb-6">Navigatie</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/shop", label: "Shop" },
              { href: "/drops", label: "Drops" },
              { href: "/about", label: "About" },
              { href: "/become-a-curator", label: "Become a Curator" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#8A8A8A] hover:text-[#F5F0E8] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8A8A8A] mb-6">Stay close to new drops</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Jouw e-mailadres"
              className="bg-transparent border border-[#3A3A3A] text-[#F5F0E8] px-4 py-3 text-sm placeholder:text-[#5A5A5A] focus:outline-none focus:border-[#C4956A] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C4956A] text-[#1C1C1C] text-xs tracking-widest uppercase py-3 hover:bg-[#D4714A] transition-colors"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-start gap-4">
        <p className="text-xs text-[#5A5A5A]">© 2026 Misitas. Alle rechten voorbehouden.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors">Privacy</Link>
          <Link href="#" className="text-xs text-[#5A5A5A] hover:text-[#8A8A8A] transition-colors">Algemene voorwaarden</Link>
        </div>
      </div>
    </footer>
  );
}
