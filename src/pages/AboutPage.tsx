import React from 'react';
import { Award, ShieldCheck, Sprout, Leaf, CheckCircle2, Globe, FileCheck, ArrowRight, HeartHandshake, RefreshCw, Factory } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface AboutPageProps {
  onRequestQuote: () => void;
  onNavigateToProducts: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRequestQuote, onNavigateToProducts }) => {
  return (
    <div className="bg-[#FFFFFF] text-[#202723]">
      
      {/* Page Header / Hero Banner */}
      <section className="relative py-24 md:py-32 bg-[#183C32] text-[#F7F4EC] overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#B79A62_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#B79A62]">
            OUR HERITAGE &amp; ETHOS
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-6xl font-bold mt-3 tracking-tight">
            Pure Nature. Thoughtfully Extracted.
          </h1>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-6" />
          <p className="mt-6 text-base sm:text-lg text-[#F7F4EC]/80 max-w-2xl mx-auto font-light leading-relaxed">
            Rooted in India's rich botanical biodiversity, Vindhyachal Botanicals bridges time-honored distillation craftsmanship with analytical excellence.
          </p>
        </div>
      </section>

      {/* Brand Story Editorial Section */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                ESTABLISHED EXCELLENCE
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] tracking-tight">
                Our Story: From Native Flora to Global Formulations
              </h2>
              <div className="w-12 h-0.5 bg-[#B79A62]" />

              <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
                Vindhyachal Botanicals was founded with a singular purpose: to extract and preserve the purest aromatic compounds of nature without compromise. Operating our dedicated processing unit in Datia, Madhya Pradesh, we sit strategically near prime cultivation regions for lemongrass, peppermint, eucalyptus, and wild-crafted medicinal flora.
              </p>

              <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
                Over the years, we have transitioned from regional distillers into an internationally trusted B2B partner. Today, formulators in wellness, luxury cosmetics, personal care, and aromatherapy rely on our pure single-origin extracts, cold-pressed seed oils, and tailor-made white-label contract solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E9E2D3]">
                <div>
                  <span className="font-serif-brand text-3xl font-bold text-[#183C32]">90+</span>
                  <p className="text-xs text-[#202723]/70 font-medium uppercase tracking-wider mt-1">
                    Botanical Products
                  </p>
                </div>
                <div>
                  <span className="font-serif-brand text-3xl font-bold text-[#183C32]">100%</span>
                  <p className="text-xs text-[#202723]/70 font-medium uppercase tracking-wider mt-1">
                    Purity Guaranteed
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden shadow-xl border border-[#E9E2D3]">
                <img
                  src="https://images.unsplash.com/photo-1547793548-7a0e7dfdb24f?auto=format&fit=crop&w=1200&q=80"
                  alt="Herbal botanical leaves and natural extraction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#183C32]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-xs text-[#183C32] border border-[#B79A62]/30 text-xs font-serif-brand">
                  Sustainable harvesting practices in collaboration with regional farming families.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-[#F7F4EC] rounded-2xl p-8 sm:p-10 border border-[#E9E2D3] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#183C32] text-[#B79A62] flex items-center justify-center mb-6">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-2xl text-[#183C32] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
                  To supply the world's most authentic, chemically verifiable natural essential oils and botanical ingredients through ethical agricultural partnerships, eco-conscious extraction techniques, and unwavering batch transparency.
                </p>
              </div>
              <ul className="mt-6 space-y-2 pt-4 border-t border-[#E9E2D3] text-xs text-[#183C32]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Absolute adulterant-free integrity in every lot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Fair pricing and long-term farmer empowerment</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F7F4EC] rounded-2xl p-8 sm:p-10 border border-[#E9E2D3] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#183C32] text-[#B79A62] flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-2xl text-[#183C32] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
                  To be recognized across Europe, North America, Asia-Pacific and the Middle East as India's premier benchmark for pure botanical oils and seamless private label contract manufacturing.
                </p>
              </div>
              <ul className="mt-6 space-y-2 pt-4 border-t border-[#E9E2D3] text-xs text-[#183C32]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>State-of-the-art analytical testing facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                  <span>Frictionless cross-border export logistics</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Philosophy & Accreditations */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              ANALYTICAL RIGOR
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Audited Standards &amp; Certifications
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
            <p className="mt-4 text-sm sm:text-base text-[#202723]/75 font-light leading-relaxed">
              Every production cycle adheres to the stringent quality criteria set forth by international regulatory authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D3] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] text-[#183C32] flex items-center justify-center mx-auto mb-4 border border-[#B79A62]/30">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32]">
                ISO 9001:2015
              </h4>
              <p className="text-xs text-[#202723]/70 font-light mt-2 leading-relaxed">
                Audited Quality Management System ensuring consistent processing, batch tracking, and procedural governance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D3] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] text-[#183C32] flex items-center justify-center mx-auto mb-4 border border-[#B79A62]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32]">
                GMP Compliance
              </h4>
              <p className="text-xs text-[#202723]/70 font-light mt-2 leading-relaxed">
                Good Manufacturing Practices standard clean-room handling, sanitization protocols, and air filtration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D3] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] text-[#183C32] flex items-center justify-center mx-auto mb-4 border border-[#B79A62]/30">
                <FileCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32]">
                GC-MS Analyzed
              </h4>
              <p className="text-xs text-[#202723]/70 font-light mt-2 leading-relaxed">
                Gas Chromatography Mass Spectrometry verification to identify optical purity and confirm active chemical fingerprints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9E2D3] shadow-xs text-center">
              <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] text-[#183C32] flex items-center justify-center mx-auto mb-4 border border-[#B79A62]/30">
                <Leaf className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32]">
                100% Pure &amp; Cruelty-Free
              </h4>
              <p className="text-xs text-[#202723]/70 font-light mt-2 leading-relaxed">
                Zero synthetic diluents, paraben-free, solvent-free supercritical and steam distilled fractions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Manufacturing Facility & Capabilities */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                PLANT &amp; INFRASTRUCTURE
              </span>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32]">
                Our Extraction &amp; Production Facility
              </h2>
              <div className="w-12 h-0.5 bg-[#B79A62]" />

              <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
                Located in Datia, Madhya Pradesh ({COMPANY_DETAILS.address}), our facility incorporates both traditional hydro-steam distillation vessels crafted from 316-grade stainless steel and modern hydraulic cold-press expellers.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#183C32]">
                <div className="flex items-start gap-3">
                  <Factory className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Multiple stainless steel distillation reactors with continuous vacuum recovery.</span>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Closed-loop condenser system recirculating 98% of thermal cooling water.</span>
                </div>
                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <span>Dedicated clean-room automated filling line for bottles ranging from 5ml to 5000ml.</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onRequestQuote}
                  className="px-6 py-3 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Request Facility Dossier &amp; COA
                </button>
                <button
                  onClick={onNavigateToProducts}
                  className="px-6 py-3 border border-[#183C32] text-[#183C32] hover:bg-[#183C32] hover:text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Explore Ingredients
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E9E2D3] bg-[#F7F4EC] p-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial laboratory quality verification"
                  className="rounded-2xl w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#183C32] text-[#F7F4EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold">
            Partner With Vindhyachal Botanicals
          </h3>
          <p className="text-xs sm:text-sm text-[#F7F4EC]/80 font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Let us supply high-purity botanical raw materials or manufacture finished private label collections for your brand.
          </p>
          <div className="mt-8">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs uppercase tracking-widest rounded-full transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Request Wholesale Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
