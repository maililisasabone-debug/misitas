import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import FAQSection from "@/components/FAQSection";
import TickerBanner from "@/components/TickerBanner";

const starterPieces = [
  { id: 1, name: "Never-Ending Silver Bracelet", price: "from €49,95", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80" },
  { id: 2, name: "Never-Ending Gold Bracelet", price: "from €49,95", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" },
  { id: 3, name: "Never-Ending Rose Gold Bracelet", price: "from €59,95", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  { id: 4, name: "Never-Ending Mixed Bracelet", price: "from €59,95", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
];

const objects = [
  { id: 1, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=80", label: "#1" },
  { id: 2, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=300&q=80", label: "#2" },
  { id: 3, image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=300&q=80", label: "#3" },
  { id: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80", label: "#4" },
  { id: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&q=80", label: "#5" },
  { id: 6, image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=300&q=80", label: "#6" },
  { id: 7, image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&q=80", label: "#7" },
  { id: 8, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=300&q=80", label: "#8" },
  { id: 9, image: "https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=300&q=80", label: "#9" },
];

const socialProof = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", text: "I bought this for a friend's birthday and am so happy with it" },
  { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", text: "Worth every penny #misitas" },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", text: "Highly recommended! @misitas" },
  { image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80", text: "5 years ♡ #misitas" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        {/* Left: images */}
        <div className="relative bg-[#F5E6E0] flex items-center justify-center p-12 overflow-hidden">
          <div className="relative w-full max-w-sm">
            {/* Background repeat image */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-40 scale-75">
              <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80" alt="" className="w-48 rounded-sm" />
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-40 scale-75">
              <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80" alt="" className="w-48 rounded-sm" />
            </div>
            {/* Main image */}
            <img
              src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80"
              alt="Misitas jewelry"
              className="w-full rounded-sm relative z-10 shadow-xl"
            />
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col justify-center px-12 py-16 bg-white">
          <h1 className="font-editorial text-4xl md:text-5xl text-[#1C1C1C] leading-tight mb-6">
            Poetic nostalgia<br />
            <em>right on your wrist</em>
          </h1>
          <p className="text-sm text-[#8A8A8A] leading-relaxed mb-8 max-w-sm">
            Misitas verzamelt kleine objecten via mensen onderweg. Sieraden en items gekozen op vorm, materiaal en gevoel. Elk stuk heeft een verhaal.
          </p>

          <div className="mb-10">
            <p className="text-xs tracking-widest uppercase text-[#8A8A8A] mb-6">How does it work?</p>
            <div className="flex flex-col gap-4">
              {[
                "Choose your piece: Starter bracelet, brushed, shiny, gold",
                "Pick the objects you love",
                "Bring it home",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E8E0D4] flex items-center justify-center flex-shrink-0 text-xs text-[#8A8A8A]">
                    {i + 1}
                  </div>
                  <p className="text-sm text-[#1C1C1C] leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/shop"
            className="bg-[#1C1C1C] text-white text-xs tracking-widest uppercase py-4 px-10 hover:bg-[#C4956A] transition-colors text-center w-fit"
          >
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* Ticker */}
      <TickerBanner />

      {/* Social proof */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialProof.map((item, i) => (
              <div key={i} className="relative group overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-[#FAF7F2]">
                  <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1C1C1C]/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent">
                    <p className="text-xs text-white leading-snug">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift section */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-3xl md:text-4xl text-center text-[#1C1C1C] mb-16">
            The perfect gift with a love one...<br />
            <em>or just to treat yourself!</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left product image */}
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 overflow-hidden bg-[#F5E6E0] rounded-sm mb-6">
                <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80" alt="Gift" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-editorial text-xl text-[#1C1C1C] mb-3">Get a curated object as a gift</h3>
              <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                Simply buy the object online and we will ship it as a beautiful gift card. Perfect for any occasion.
              </p>
              <Link href="/shop" className="bg-[#1C1C1C] text-white text-xs tracking-widest uppercase py-3 px-8 hover:bg-[#C4956A] transition-colors">
                BUY A GIFT VOUCHER
              </Link>
            </div>

            {/* Center image */}
            <div className="aspect-square overflow-hidden bg-[#E8E0D4]">
              <img src="https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=600&q=80" alt="Gift packaging" className="w-full h-full object-cover" />
            </div>

            {/* Right */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-editorial text-xl text-[#1C1C1C] mb-3">Get yours now</h3>
              <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                You can buy yourself jewelry! If you know the exact piece you want, you can already buy the object online. Not sure yet? Simply reach out and we will help.
              </p>
              <Link href="/shop" className="bg-[#1C1C1C] text-white text-xs tracking-widest uppercase py-3 px-8 hover:bg-[#C4956A] transition-colors">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Choose your starter piece */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-3xl text-center text-[#1C1C1C] mb-12">
            Choose your starter piece!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {starterPieces.map((piece) => (
              <Link key={piece.id} href={`/shop/${piece.id}`} className="group text-center">
                <div className="aspect-square overflow-hidden bg-[#FAF7F2] mb-4 relative">
                  <img src={piece.image} alt={piece.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Dotted line connector */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 border-l border-dashed border-[#C4956A]" />
                </div>
                <p className="text-sm text-[#1C1C1C] mb-1">{piece.name}</p>
                <p className="text-sm text-[#8A8A8A]">{piece.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your objects */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-3xl text-center text-[#1C1C1C] mb-4">
            Choose your favorite objects
          </h2>
          <p className="text-center text-sm text-[#8A8A8A] mb-12">Misitas — from €29,95</p>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {objects.map((obj) => (
              <Link key={obj.id} href="/shop" className="group text-center">
                <div className="aspect-square overflow-hidden bg-white border border-[#E8E0D4] group-hover:border-[#C4956A] transition-colors">
                  <img src={obj.image} alt={obj.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-xs text-[#8A8A8A] mt-1">{obj.label}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/shop" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#1C1C1C] border border-[#1C1C1C] px-10 py-3 hover:bg-[#1C1C1C] hover:text-white transition-colors">
              VIEW ALL OBJECTS <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Social feed */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-2xl text-center text-[#1C1C1C] mb-10">
            Share your <span className="italic">#Misitas</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
              "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80",
              "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
              "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-[#FAF7F2] group cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
