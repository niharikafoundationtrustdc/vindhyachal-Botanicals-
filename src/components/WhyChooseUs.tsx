import React from 'react';
import { Sprout, Award, Package, Layers, Sparkles, Globe } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      number: '01',
      icon: Sprout,
      title: 'Natural Sourcing',
      desc: 'Responsibly cultivated and harvested botanicals obtained directly from regional growers and sustainably managed agrarian reserves.',
    },
    {
      number: '02',
      icon: Award,
      title: 'Consistent Quality',
      desc: 'Rigorous batch standardization backed by gas chromatography, optical density tests, and ISO 9001:2015 audited quality procedures.',
    },
    {
      number: '03',
      icon: Package,
      title: 'Flexible Bulk Supply',
      desc: 'Scalable supply tiers from 1kg sample canisters to full container loads (FCL) of 200kg drums with stable contract pricing.',
    },
    {
      number: '04',
      icon: Layers,
      title: 'Private Label Expertise',
      desc: 'Comprehensive formulation, blending, and white-label manufacturing built specifically to empower indie beauty and wellness brands.',
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'Custom Packaging',
      desc: 'Broad spectrum of container profiles, amber glass, luxury droppers, aluminum canisters, tamper seals, and bespoke labels.',
    },
    {
      number: '06',
      icon: Globe,
      title: 'Global Supply Support',
      desc: 'Experienced export dispatch teams preparing complete COA, MSDS, customs clearance documents, and reliable worldwide freight coordination.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            OUR CORE COMPETITIVE ADVANTAGE
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            Why Brands Choose Vindhyachal Botanicals
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
            Combining scientific botanical extraction discipline with personalized B2B service for global personal care, cosmetics, and aromatherapy brands.
          </p>
        </div>

        {/* Six Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#F7F4EC] rounded-2xl p-8 border border-[#E9E2D3] hover:border-[#B79A62]/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E9E2D3] flex items-center justify-center text-[#183C32] group-hover:text-[#B79A62] transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="font-serif-brand font-bold text-2xl text-[#B79A62] tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-serif-brand font-bold text-xl text-[#183C32] group-hover:text-[#496B52] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#202723]/75 mt-3 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E9E2D3] flex items-center gap-1.5 text-[11px] font-semibold text-[#496B52] uppercase tracking-wider">
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
