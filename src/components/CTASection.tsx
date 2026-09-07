import React from 'react';
import { ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface CTASectionProps {
  onRequestQuote: () => void;
  onTalkToTeam: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onRequestQuote,
  onTalkToTeam,
}) => {
  return (
    <section className="py-20 md:py-24 bg-[#183C32] text-[#F7F4EC] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial from-[#496B52]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B79A62]/40 text-[#B79A62] text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>COLLABORATIVE BOTANICAL PARTNERSHIPS</span>
        </div>

        <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F4EC] tracking-tight leading-tight">
          Let's Create Something <br />
          <span className="italic font-normal text-[#E9E2D3]">Naturally Exceptional.</span>
        </h2>

        <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-6 mb-6" />

        <p className="text-base sm:text-lg md:text-xl text-[#F7F4EC]/85 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you need bulk natural oils, private-label products or customized packaging, our team is ready to help bring your vision to life.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestQuote}
            className="w-full sm:w-auto px-8 py-4 bg-[#F7F4EC] hover:bg-white text-[#183C32] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-[#183C32] transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onTalkToTeam}
            className="w-full sm:w-auto px-8 py-4 border border-[#B79A62] hover:border-white bg-[#183C32]/50 hover:bg-[#183C32] text-[#F7F4EC] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#B79A62]" />
            <span>Talk to Our Team</span>
          </button>
        </div>

        {/* Quick Contact hotline note */}
        <p className="mt-8 text-xs text-[#A8B7A1]">
          Direct Factory Hotline: <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-white hover:text-[#B79A62] underline underline-offset-4">{COMPANY_DETAILS.phoneFormatted}</a> (WhatsApp Available)
        </p>

      </div>
    </section>
  );
};
