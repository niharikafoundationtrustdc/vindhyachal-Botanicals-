import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onRequestQuote,
}) => {
  const scrollToNext = () => {
    const el = document.getElementById('trust-strip');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#183C32] text-[#F7F4EC] overflow-hidden pt-28 pb-20">
      {/* Background Editorial Botanical Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=2200&q=85"
          alt="Natural essential oil extraction and botanicals"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse-slow filter brightness-[0.82] contrast-[1.05]"
        />
        {/* Deep Forest Green Gradient Overlay matching Prompt #6 & #3 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#183C32]/95 via-[#183C32]/85 to-[#183C32]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#183C32]/40 to-[#183C32]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B79A62]/40 bg-[#183C32]/60 backdrop-blur-md text-[#B79A62] text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase mb-6 sm:mb-8 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B79A62]" />
          <span>NATURAL INGREDIENTS • PRIVATE LABEL • GLOBAL SUPPLY</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F7F4EC] max-w-4xl leading-[1.12]">
          Nature's Purest Essence, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E9E2D3]">Crafted for Your Brand.</span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#F7F4EC]/85 max-w-2xl font-light leading-relaxed">
          Premium natural essential oils, carrier oils and botanical extracts manufactured with purity, consistency and care. Direct from India to global personal-care and wellness enterprises.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreProducts}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7F4EC] hover:bg-white text-[#183C32] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 text-[#183C32] transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 border border-[#B79A62] hover:border-white bg-[#183C32]/40 hover:bg-[#183C32]/80 backdrop-blur-xs text-[#F7F4EC] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request a Quote</span>
          </button>
        </div>

        {/* Origin & Purity Subtle Bar */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A8B7A1] border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
            <span>ISO 9001:2015 &amp; GMP Audited Manufacturing</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#B79A62]/60" />
          <div>
            <span>Direct Extraction Works • Datia, MP, India</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#B79A62]/60" />
          <div>
            <span>Batch-Tested GC-MS &amp; COA Standard</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-[#B79A62] transition-colors focus:outline-hidden group"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.28em] uppercase font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-[#B79A62]" />
      </button>
    </section>
  );
};
