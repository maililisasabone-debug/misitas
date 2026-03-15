import Link from "next/link";
import { ArrowRight, Globe, Camera, Package, DollarSign } from "lucide-react";

export default function BecomeACuratorPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600&q=80"
          alt="Become a Curator"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/70 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-[#E8C4B8] mb-6">Open positie</p>
              <h1 className="font-editorial text-5xl md:text-7xl text-[#FDFAF5] mb-6 leading-tight">
                Become a<br />Curator
              </h1>
              <p className="text-base text-[#FDFAF5]/70 leading-relaxed mb-10 max-w-sm">
                Reis je en hou je ervan om bijzondere objecten te ontdekken?
                Dan zoeken we jou.
              </p>
              <a
                href="mailto:hello@misitas.com"
                className="inline-flex items-center gap-3 bg-[#FDFAF5] text-[#1C1C1C] text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#E8C4B8] transition-colors"
              >
                Get in touch <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* What it involves */}
        <div className="py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-12 text-center">Wat het inhoudt</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe size={24} className="text-[#C4956A]" />,
                title: "Lokale makers bezoeken",
                text: "Je zoekt contact met ambachtslieden en kleine makers op jouw reisbestemming. Ateliers, markten, achterkamertjes.",
              },
              {
                icon: <Package size={24} className="text-[#C4956A]" />,
                title: "Selecties samenstellen",
                text: "Je kiest een kleine collectie van 8 tot 15 objecten op basis van kwaliteit, verhaal en gevoel. Misitas begeleidt je hierin.",
              },
              {
                icon: <Camera size={24} className="text-[#C4956A]" />,
                title: "Het proces vastleggen",
                text: "Foto en video van de reis, de plek, de maker. Dit wordt onderdeel van de drop-pagina en het verhaal van Misitas.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="font-editorial text-xl text-[#1C1C1C] mb-4">{item.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Misitas offers */}
        <div className="py-16 border-t border-[#E8E0D4]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-12 text-center">Wat Misitas biedt</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              "Inkoopbudget voor de objecten",
              "Persoonlijke vergoeding voor jouw werk",
              "Duidelijke kaders en begeleiding",
              "Jouw verhaal op de Misitas website",
              "Een langdurige samenwerking bij goede match",
              "Creatieve vrijheid binnen het Misitas concept",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 p-5 border border-[#E8E0D4] hover:border-[#C4956A] transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4956A] flex-shrink-0" />
                <p className="text-sm text-[#1C1C1C]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-6">Interesse?</p>
          <h2 className="font-editorial text-4xl text-[#1C1C1C] mb-6">
            Vertel ons over jouw reis.
          </h2>
          <p className="text-sm text-[#8A8A8A] mb-10 max-w-sm mx-auto leading-relaxed">
            Stuur een berichtje naar hello@misitas.com. Vertel waar je heen gaat, wat je zoekt en waarom je denkt dat het past.
          </p>
          <a
            href="mailto:hello@misitas.com"
            className="inline-flex items-center gap-3 bg-[#1C1C1C] text-[#F5F0E8] text-xs tracking-widest uppercase px-12 py-5 hover:bg-[#C4956A] transition-colors"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
