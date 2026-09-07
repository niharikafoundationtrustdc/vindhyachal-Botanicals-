import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface PrivateLabelSectionProps {
  onStartProject: () => void;
}

export const PrivateLabelSection: React.FC<PrivateLabelSectionProps> = ({ onStartProject }) => {
  const steps = [
    {
      step: '01',
      title: 'Choose Product',
      description: 'Select from our catalog of 90+ pure essential oils, carrier lipids, hydrosols, or base serums.',
    },
    {
      step: '02',
      title: 'Customize Formula',
      description: 'Tailor botanical active ratios, aroma balance, viscosity, and natural therapeutic synergies.',
    },
    {
      step: '03',
      title: 'Design Packaging',
      description: 'Select container formats: amber glass, treatment droppers, aluminum cans, or cosmetic jars.',
    },
    {
      step: '04',
      title: 'Apply Your Brand',
      description: 'Integrate your brand identity, custom water-resistant foil labels, and bespoke unit cartons.',
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Rigorous stability batch testing, fill volume precision, sealing integrity, and COA sign-off.',
    },
    {
      step: '06',
      title: 'Ready for Market',
      description: 'Finished retail-ready or salon-grade products packaged safely for global air and sea distribution.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#183C32] text-[#F7F4EC] relative overflow-hidden border-b border-[#204e41]">
      {/* Background subtle botanical watermarking */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B79A62_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B79A62]/40 text-[#B79A62] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B79A62]" />
            <span>OEM &amp; WHITE LABEL MANUFACTURING</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EC] tracking-tight">
            Build Your Brand With Our Private Label Solutions
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#F7F4EC]/80 font-light leading-relaxed">
            From premium natural oils to finished packaging, Vindhyachal Botanicals helps businesses bring their botanical product concepts to market.
          </p>
        </div>

        {/* 6-Step Visual Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#204e41]/60 hover:bg-[#204e41] rounded-2xl p-7 border border-white/10 hover:border-[#B79A62]/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-brand font-bold text-3xl text-[#B79A62] tracking-wider">
                    {item.step}
                  </span>
                  <span className="w-8 h-px bg-[#B79A62]/30 group-hover:w-12 transition-all" />
                </div>

                <h3 className="font-serif-brand font-bold text-xl text-[#F7F4EC] group-hover:text-[#E9E2D3] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F7F4EC]/75 mt-2.5 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#A8B7A1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A62]" />
                <span>Standard Operating Procedure</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-serif-brand text-xl sm:text-2xl font-bold text-white">
              Launch Your Custom Formulation
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-xl">
              Low minimum order quantities (MOQs) tailored for emerging indie beauty brands and high-capacity batch manufacturing for established wellness houses.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="px-8 py-4 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl shrink-0 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Start Your Private Label Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
