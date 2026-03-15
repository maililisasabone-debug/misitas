export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
          alt="Misitas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E8C4B8] mb-6">Over ons</p>
            <h1 className="font-editorial text-6xl md:text-8xl text-[#FDFAF5]">Misitas</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        {/* Intro */}
        <div className="py-24 text-center">
          <p className="font-editorial text-3xl md:text-4xl text-[#1C1C1C] leading-relaxed">
            Misitas bestaat omdat mooie dingen<br />
            <em>niet altijd vindbaar zijn.</em>
          </p>
        </div>

        {/* Why */}
        <div className="pb-20 border-b border-[#E8E0D4]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Waarom</p>
          <p className="text-base text-[#8A8A8A] leading-relaxed mb-6">
            We leven in een wereld vol producten — maar weinig dingen voelen nog écht. Misitas is ontstaan uit een verlangen naar objecten met een verhaal. Dingen die ergens vandaan komen. Gemaakt door iemand. Gevonden op een plek.
          </p>
          <p className="text-base text-[#8A8A8A] leading-relaxed">
            Geen algorithm. Geen trendcyclus. Gewoon: mensen die reizen en ogen open houden.
          </p>
        </div>

        {/* How */}
        <div className="py-20 border-b border-[#E8E0D4]">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Hoe we werken</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Reizigers",
                text: "We werken met een selecte groep curators — mensen die reizen en oog hebben voor bijzondere makers.",
              },
              {
                title: "Kleine makers",
                text: "Elk object komt van een ambachtsman of -vrouw die werkt in kleine batches, met aandacht.",
              },
              {
                title: "Kleine batches",
                text: "Nooit grote aantallen. Elk drop is gelimiteerd. Als het weg is, is het weg.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-editorial text-xl text-[#1C1C1C] mb-4">{item.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="py-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-8">Filosofie</p>
          <blockquote className="font-editorial text-2xl text-[#1C1C1C] leading-relaxed border-l-2 border-[#C4956A] pl-8 mb-8">
            "Rust, selectie en aandacht. Elk object bewust gekozen."
          </blockquote>
          <p className="text-base text-[#8A8A8A] leading-relaxed">
            Misitas is geen marketplace. Het is een punt van vertrouwen — tussen reiziger, maker en jou. We nemen de tijd om te kiezen. We kiezen weinig. We kiezen goed.
          </p>
        </div>
      </div>

      {/* Team image */}
      <div className="bg-[#F5F0E8] py-24 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C4956A] mb-6">Het begin</p>
        <p className="font-editorial text-3xl text-[#1C1C1C] max-w-xl mx-auto leading-relaxed">
          Opgericht met één koffer vol objecten en een grote overtuiging.
        </p>
      </div>
    </div>
  );
}
