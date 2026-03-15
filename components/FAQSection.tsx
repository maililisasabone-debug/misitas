"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Wat is een Misitas object?", a: "Elk Misitas object is een uniek stuk gevonden door onze curators tijdens reizen over de wereld. Geen massaproductie — elk item is handgemaakt of ambachtelijk vervaardigd door lokale makers." },
  { q: "Waar worden de objecten gevonden?", a: "Onze curators reizen naar plekken zoals Lissabon, Marrakech, Istanbul, Kyoto en meer. Ze bezoeken lokale ateliers, markten en kleine makers die je normaal niet online tegenkomt." },
  { q: "Zijn alle objecten uniek?", a: "Ja. We werken in kleine batches — per drop zijn er maximaal 15 stuks beschikbaar. Als het weg is, is het weg." },
  { q: "Hoe werkt de verzending?", a: "We versturen binnen 2-3 werkdagen na aankoop. Alle objecten worden zorgvuldig ingepakt. Je ontvangt een track & trace zodra je pakket onderweg is." },
  { q: "Kan ik een object retourneren?", a: "Ja, binnen 14 dagen na ontvangst kun je het object retourneren mits het in originele staat is. Neem contact op via hello@misitas.com." },
  { q: "Hoe kan ik curator worden?", a: "Reis je en houd je van bijzondere objecten ontdekken? Ga naar onze 'Become a Curator' pagina en neem contact met ons op." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-editorial text-3xl text-center text-[#1C1C1C] mb-12">FAQ</h2>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E8E0D4]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm text-[#1C1C1C]">{faq.q}</span>
                {open === i
                  ? <Minus size={16} className="text-[#8A8A8A] flex-shrink-0" />
                  : <Plus size={16} className="text-[#8A8A8A] flex-shrink-0" />
                }
              </button>
              {open === i && (
                <p className="text-sm text-[#8A8A8A] leading-relaxed pb-5">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
