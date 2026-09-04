import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Award, Globe, Leaf, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
  onExplorePrivateLabel: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onRequestQuote,
  onExplorePrivateLabel,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f7f4] via-[#fafbf9] to-[#faf9f6] pt-8 pb-16 md:pt-12 md:pb-24 border-b border-stone-200">
      {/* Decorative ambient botanical blur elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Hero Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-[#0e632b] text-xs font-semibold tracking-wide uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#0e632b]" />
              <span>ISO 9001:2015 &amp; GMP Certified Manufacturers • MPC, India</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-brand-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#151833] font-bold leading-tight tracking-tight">
              Welcome to <span className="text-[#0e632b] underline decoration-[#0e632b]/20 underline-offset-4">Vindhyachal Botanicals</span>
            </h1>

            {/* Subheading from Prompt */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your premier destination for exquisite natural oil extracts in MPC. As passionate manufacturers, suppliers, and exporters of pure natural extracts, we are dedicated to preserving the inherent vitality of the soul, body, and spirit.
            </p>

            {/* Explore Nature's Essence Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-xs border border-stone-200/80 shadow-xs">
              <h2 className="font-brand-serif font-semibold text-lg text-[#0e632b] flex items-center justify-center lg:justify-start gap-2">
                <span>Explore Nature’s Essence</span>
              </h2>
              <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
                Discover the essence of nature distilled into our exceptional range of natural oils. We meticulously extract and curate these oils to ensure they encapsulate the very essence of their source, bringing you unparalleled purity and efficacy.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 rounded-full bg-[#0e632b] hover:bg-[#09471e] text-white font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Browse Oil Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-[#151833] font-semibold text-sm tracking-wide transition-all shadow-xs hover:border-[#0e632b] flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#0e632b]" />
                <span>Request Bulk Wholesale Quote</span>
              </button>

              <button
                onClick={onExplorePrivateLabel}
                className="px-5 py-3 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-medium text-xs tracking-wide transition-all flex items-center gap-1.5"
              >
                <span>Private Labeling & OEM</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-stone-200/80 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0e632b] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">100% Pure</h4>
                  <p className="text-[11px] text-stone-500">No synthetic diluents</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Award className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">IP / BP Standard</h4>
                  <p className="text-[11px] text-stone-500">Tested batches</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <Globe className="w-5 h-5 text-[#151833] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Global Export</h4>
                  <p className="text-[11px] text-stone-500">Direct from MPC</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Centered Brand Emblem, Dropper Bottle & Botanical Accents */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Card Frame */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/80 relative">
                
                {/* Brand Logo Presentation Box */}
                <div className="bg-gradient-to-b from-stone-50 to-[#f3f7f3] rounded-2xl p-6 border border-emerald-100/80 mb-6 shadow-inner">
                  <Logo variant="stacked" size="lg" />
                </div>

                {/* Hero Showcase Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-500 pb-2 border-b border-stone-100">
                    <span className="uppercase tracking-wider">Manufacturing Hub: Datia, MPC</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                      Direct Source
                    </span>
                  </div>

                  {/* Feature list bullets */}
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Hydrosols & Floral Waters:</strong> Pure co-distilled extracts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Essential Oils:</strong> Steam distilled therapeutic & BP grades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Cold Pressed Carrier Oils:</strong> Unrefined nutrient-dense seeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Contract Bottling:</strong> Custom printed labels & dark glass</span>
                    </li>
                  </ul>

                  {/* Fast Contact Callout */}
                  <div className="pt-2 bg-stone-50 rounded-xl p-3.5 border border-stone-200 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-stone-500">Need Bulk Quantities or Samples?</p>
                      <p className="text-xs font-bold text-[#151833]">+91-8881301033</p>
                    </div>
                    <a
                      href="https://wa.me/918881301033?text=Hello%20Vindhyachal%20Botanicals%2C%20I%20am%20interested%20in%20purchasing%20natural%20oils%20and%20botanical%20extracts."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#151833] text-white py-2 px-4 rounded-2xl shadow-lg border border-stone-700 hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold">Ready Stocks • Fast Dispatch</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
