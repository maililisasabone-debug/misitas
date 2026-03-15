import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import TickerBanner from "@/components/TickerBanner";

const starterPieces = [
  { id: 1, name: "Silver Bracelet", price: "from €49,95", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80" },
  { id: 2, name: "Gold Bracelet", price: "from €49,95", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" },
  { id: 3, name: "Rose Gold Bracelet", price: "from €59,95", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  { id: 4, name: "Mixed Bracelet", price: "from €59,95", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
];

const objects = [
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=80",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=300&q=80",
  "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=300&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&q=80",
  "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=300&q=80",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=300&q=80",
  "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=300&q=80",
  "https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=300&q=80",
];

const socialProof = [
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", text: "I bought this for a friend's birthday and am so happy with it! 🎉" },
  { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", text: "Worth every penny 💕 #misitas" },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", text: "Highly recommended!! @misitas" },
  { image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80", text: "5 years and still going strong ✨ #misitas" },
];

export default function HomePage() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">
        {/* Left: product image with warm cream bg */}
        <div className="relative bg-cream flex items-center justify-center p-12 overflow-hidden">
          {/* Soft decorative dots */}
          <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-blush opacity-40" />
          <div className="absolute bottom-12 left-8 w-6 h-6 rounded-full bg-terracotta opacity-30" />
          <div className="absolute top-1/3 left-4 w-3 h-3 rounded-full bg-caramel opacity-40" />

          {/* Side ghost images */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 -translate-x-1/3">
            <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=300&q=80" alt="" className="w-40 rounded-sm" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 translate-x-1/3">
            <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=300&q=80" alt="" className="w-40 rounded-sm" />
          </div>

          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80"
            alt="Misitas jewelry"
            className="w-full max-w-sm rounded-sm relative z-10 shadow-2xl"
          />
        </div>

        {/* Right: text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-warm-white">
          {/* Script accent */}
          <p className="font-script text-2xl text-blush mb-3">gevonden met liefde ✦</p>

          <h1 className="font-heading text-4xl md:text-5xl text-ink leading-tight mb-6" style={{ fontStyle: 'italic' }}>
            Poetic nostalgia<br />right on your wrist
          </h1>

          <p className="font-body text-soft-gray text-sm leading-relaxed mb-8 max-w-sm">
            Misitas verzamelt unieke objecten via mensen onderweg. Elk stuk gekozen op vorm, materiaal en gevoel. Geen massaproductie. Nooit.
          </p>

          {/* Steps */}
          <div className="mb-10">
            <p className="font-body text-xs tracking-widest uppercase text-soft-gray mb-5">How does it work?</p>
            <div className="flex flex-col gap-4">
              {[
                { num: "01", text: "Kies je starterstuk — zilver, goud of rosé goud" },
                { num: "02", text: "Selecteer de objecten die jij mooi vindt" },
                { num: "03", text: "Breng het stuk naar huis" },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="font-script text-xl text-blush flex-shrink-0 leading-tight">{step.num}</span>
                  <p className="font-body text-sm text-ink leading-snug">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/shop" className="bg-ink text-warm-white font-body text-xs tracking-widest uppercase py-4 px-10 hover:bg-terracotta transition-colors text-center w-fit rounded-sm">
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* TICKER */}
      <TickerBanner />

      {/* SOCIAL PROOF */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-script text-3xl text-center text-blush mb-10">wat anderen zeggen ✦</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialProof.map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-sm">
                <div className="aspect-[3/4] overflow-hidden bg-cream">
                  <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-body text-xs text-white leading-snug">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT SECTION */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-center text-ink mb-3" style={{ fontStyle: 'italic' }}>
            The perfect gift with a love one...
          </h2>
          <p className="font-script text-2xl text-center text-caramel mb-16">or just to treat yourself! ✦</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col items-center text-center">
              <div className="w-52 h-52 overflow-hidden bg-sand rounded-sm mb-6 relative">
                <img src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80" alt="Gift" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl text-ink mb-3">Geef een curated object cadeau</h3>
              <p className="font-body text-sm text-soft-gray leading-relaxed mb-6">
                Koop het object online en wij versturen het als een mooi cadeau. Perfect voor elke gelegenheid.
              </p>
              <Link href="/shop" className="bg-ink text-warm-white font-body text-xs tracking-widest uppercase py-3 px-8 hover:bg-terracotta transition-colors rounded-sm">
                BUY A GIFT VOUCHER
              </Link>
            </div>

            <div className="aspect-square overflow-hidden bg-border rounded-sm">
              <img src="https://images.unsplash.com/photo-1558171813-84e80d5f4f54?w=600&q=80" alt="Gift packaging" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="font-heading text-xl text-ink mb-3" style={{ fontStyle: 'italic' }}>Get yours now</h3>
              <p className="font-body text-sm text-soft-gray leading-relaxed mb-6">
                Weet je precies wat je wil? Koop het direct online. Nog niet zeker? Neem contact op — we helpen je het perfecte stuk vinden.
              </p>
              <Link href="/shop" className="bg-terracotta text-white font-body text-xs tracking-widest uppercase py-3 px-8 hover:bg-ink transition-colors rounded-sm">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR STARTER PIECE */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-script text-2xl text-caramel text-center mb-2">begin hier ✦</p>
          <h2 className="font-heading text-3xl text-center text-ink mb-14">
            Choose your starter piece!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {starterPieces.map((piece, i) => {
              const colors = ["#F5EFE6", "#EDE4D8", "#F0E8E0", "#E8DDD4"];
              return (
                <Link key={piece.id} href={`/shop/${piece.id}`} className="group text-center hover-lift">
                  <div className="aspect-square overflow-hidden rounded-sm mb-4 relative" style={{ backgroundColor: colors[i] }}>
                    <img src={piece.image} alt={piece.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-body text-sm text-ink mb-1">{piece.name}</p>
                  <p className="font-body text-sm text-soft-gray">{piece.price}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR OBJECTS */}
      <section className="py-20 px-6 bg-sand">
        <div className="max-w-7xl mx-auto">
          <p className="font-script text-2xl text-ink text-center mb-2">jouw stijl ✦</p>
          <h2 className="font-heading text-3xl text-center text-ink mb-4">
            Choose your favorite objects
          </h2>
          <p className="font-body text-center text-soft-gray text-sm mb-12">Misitas — from €29,95</p>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {objects.map((img, i) => (
              <Link key={i} href="/shop" className="group text-center hover-lift">
                <div className="aspect-square overflow-hidden bg-cream border-2 border-transparent group-hover:border-blush transition-colors rounded-sm">
                  <img src={img} alt={`#${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="font-body text-xs text-soft-gray mt-1">#{i + 1}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-ink border-2 border-ink px-10 py-3 hover:bg-ink hover:text-white transition-colors rounded-sm">
              VIEW ALL OBJECTS <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* SOCIAL FEED */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl text-center text-ink mb-2">
            Share your
          </h2>
          <p className="font-script text-3xl text-blush text-center mb-10">#Misitas ✦</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {[
              "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
              "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80",
              "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
              "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden bg-cream group cursor-pointer rounded-sm">
                <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
