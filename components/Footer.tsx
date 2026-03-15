import Link from "next/link";
import { Instagram, Gift, Truck, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Icon bar */}
      <div className="border-t border-[#E8E0D4] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Gift size={20} />, label: "Gift Cards" },
            { icon: <Truck size={20} />, label: "Delivery" },
            { icon: <MapPin size={20} />, label: "Store Locator" },
            { icon: <Mail size={20} />, label: "Contact Us" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors cursor-pointer">
              {item.icon}
              <p className="text-xs tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#FAF7F2] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Customer support */}
          <div>
            <p className="text-sm font-medium text-[#1C1C1C] mb-6">Customer support</p>
            <nav className="flex flex-col gap-3">
              {["Shipping & Delivery", "Returns & Refund", "Privacy Policy", "Terms of Service", "FAQ", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-sm text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div>
            <p className="text-sm font-medium text-[#1C1C1C] mb-6">Information</p>
            <nav className="flex flex-col gap-3">
              {["Care Guide", "Size Guide", "About Misitas", "Become a Curator", "Collaborations"].map((item) => (
                <Link key={item} href="#" className="text-sm text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors">{item}</Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm font-medium text-[#1C1C1C] mb-2">Newsletter</p>
            <p className="text-sm text-[#8A8A8A] mb-6">Subscribe to get special offers and new drops first.</p>
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Name" className="border-b border-[#E8E0D4] bg-transparent py-2 text-sm focus:outline-none focus:border-[#1C1C1C] transition-colors placeholder:text-[#C0B8B0]" />
              <input type="email" placeholder="Email" className="border-b border-[#E8E0D4] bg-transparent py-2 text-sm focus:outline-none focus:border-[#1C1C1C] transition-colors placeholder:text-[#C0B8B0]" />
              <button type="submit" className="bg-[#1C1C1C] text-white text-xs tracking-widest uppercase py-4 hover:bg-[#C4956A] transition-colors mt-2">
                JOIN
              </button>
            </form>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-[#8A8A8A] hover:text-[#1C1C1C] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#FAF7F2] border-t border-[#E8E0D4] py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-xs text-[#8A8A8A]">© Misitas 2026</p>
        </div>
      </div>
    </footer>
  );
}
