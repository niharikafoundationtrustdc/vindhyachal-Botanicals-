import React from 'react';
import { Sparkles, Heart, Sun, Feather } from 'lucide-react';

export const WellbeingSection: React.FC = () => {
  const benefits = [
    {
      icon: Feather,
      title: 'Rejuvenate',
      subtitle: 'Restoring Equilibrium',
      desc: 'Steam-distilled aromatic notes harmonizing mind and body in skincare, diffuse aromatherapy, and clinical wellness spaces.',
    },
    {
      icon: Heart,
      title: 'Nourish',
      subtitle: 'Lipid Barrier Radiance',
      desc: 'Bio-compatible virgin carrier oils packed with omega essential fatty acids, phytosterols, and natural fat-soluble vitamins.',
    },
    {
      icon: Sun,
      title: 'Invigorate',
      subtitle: 'Vital Botanical Energy',
      desc: 'Crisp botanical volatiles activating cellular invigoration, soothing muscle fatigue, and elevating sensory formulations.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Calm Editorial Typography & 3 Benefits */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                HOLISTIC BOTANICAL PHILOSOPHY
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight leading-tight">
                Nurturing Well-being, <br />
                <span className="italic font-normal text-[#496B52]">Naturally.</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#B79A62] mt-4 mb-6" />
              <p className="text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
                More than products, our natural extracts are crafted to connect modern lifestyles with the richness of nature.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F7F4EC] transition-colors border border-transparent hover:border-[#E9E2D3]">
                    <div className="w-10 h-10 rounded-full bg-[#F7F4EC] border border-[#B79A62]/30 flex items-center justify-center text-[#183C32] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-serif-brand font-bold text-xl text-[#183C32]">
                        {b.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#B79A62] tracking-wider uppercase mt-0.5 mb-1">
                        {b.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#202723]/70 font-light leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Serene Botanical Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/5 sm:aspect-square rounded-3xl overflow-hidden shadow-xl border border-[#E9E2D3] bg-[#E9E2D3]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Herbal essential oils and natural botanical wellness"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-4 border border-[#B79A62]/30 rounded-2xl pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#183C32]/90 backdrop-blur-md text-[#F7F4EC] border border-white/10">
                <p className="font-serif-brand italic text-sm sm:text-base leading-snug">
                  "In every drop resides the quiet strength of uncompromised botanical life."
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B79A62] font-semibold block mt-1.5">
                  Vindhyachal Botanicals Ethos
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
