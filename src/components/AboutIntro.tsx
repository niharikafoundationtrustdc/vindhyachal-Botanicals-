import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutIntroProps {
  onDiscoverStory: () => void;
}

export const AboutIntro: React.FC<AboutIntroProps> = ({ onDiscoverStory }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Botanical Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 sm:aspect-3/4 rounded-2xl overflow-hidden shadow-xl border border-[#E9E2D3] bg-[#E9E2D3]">
              <img
                src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
                alt="Carefully harvested botanical ingredients and amber glass pipettes"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle gold accent frame border */}
              <div className="absolute inset-3 border border-[#B79A62]/30 rounded-xl pointer-events-none" />
            </div>

            {/* Overlaid minimal tag */}
            <div className="absolute -bottom-5 -right-4 sm:right-6 bg-[#183C32] text-[#F7F4EC] p-5 rounded-xl shadow-lg border border-[#B79A62]/30 max-w-xs hidden sm:block">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#B79A62] font-semibold block">
                Heritage &amp; Purity
              </span>
              <p className="font-serif-brand text-sm mt-1 leading-relaxed">
                Steam distillation and cold press extraction rooted in central India's botanical corridors.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              <span className="w-6 h-px bg-[#B79A62]" />
              <span>ABOUT VINDHYACHAL BOTANICALS</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] leading-tight">
              Pure Nature. <br />
              <span className="italic font-normal text-[#496B52]">Thoughtfully Extracted.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#202723]/85 font-light leading-relaxed">
              Welcome to Vindhyachal Botanicals, your trusted destination for premium natural oil extracts. As passionate manufacturers, suppliers and exporters, we are dedicated to preserving the inherent vitality of nature through carefully crafted botanical ingredients.
            </p>

            <p className="text-sm sm:text-base text-[#202723]/75 leading-relaxed font-light">
              Our focus is on purity, consistency, quality and responsible sourcing—bringing the essence of nature to brands across personal care, wellness, aromatherapy and related industries.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#183C32]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B79A62] shrink-0" />
                <span>Zero synthetic additives or diluents</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B79A62] shrink-0" />
                <span>Standardized batches with GC-MS profiles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B79A62] shrink-0" />
                <span>Custom contract distillation &amp; packaging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B79A62] shrink-0" />
                <span>Global air &amp; ocean logistics support</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onDiscoverStory}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] font-semibold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#B79A62] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
