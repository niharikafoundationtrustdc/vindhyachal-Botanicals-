import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronDown, ArrowRight, Layers, Package, ShieldCheck, FileCheck, Send, HelpCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface PrivateLabelPageProps {
  onRequestQuote: () => void;
}

export const PrivateLabelPage: React.FC<PrivateLabelPageProps> = ({ onRequestQuote }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const productCategories = [
    {
      title: 'Single Essential Oil Lines',
      desc: 'Pure botanical essential oils (Lavender, Tea Tree, Eucalyptus, Lemongrass, etc.) bottled with tamper-evident caps and branded labels.',
      moq: '500 units per SKU',
    },
    {
      title: 'Carrier & Facial Oil Serums',
      desc: 'Antioxidant-rich organic cold-pressed lipid formulations (Jojoba, Rosehip, Argan, Sweet Almond) in luxury treatment droppers.',
      moq: '300 units per SKU',
    },
    {
      title: 'Targeted Wellness Blends',
      desc: 'Therapeutic synergy formulations for sleep support, stress relief, focus, and respiratory clarity with rollerball applicators.',
      moq: '500 units per SKU',
    },
    {
      title: 'Herbal Hair Growth Elixirs',
      desc: 'Traditional Ayurvedic and botanical root infusions (Rosemary, Castor, Bhringraj, Onion Seed) in glass dropper pipettes.',
      moq: '500 units per SKU',
    },
    {
      title: 'Floral Hydrosols & Facial Mists',
      desc: 'Steam-distilled pure floral waters (Rose, Lavender, Neroli, Witch Hazel) with fine-mist spray atomizers.',
      moq: '300 units per SKU',
    },
    {
      title: 'Aromatherapy Diffuser Sets',
      desc: 'Curated box sets containing multiple complementary 10ml amber bottles in bespoke rigid presentation gift cartons.',
      moq: '250 sets',
    },
  ];

  const faqs = [
    {
      q: 'What is the standard Minimum Order Quantity (MOQ) for private label?',
      a: 'For single essential oils in standard amber glass bottles with custom labels, our typical starting MOQ is 500 units per SKU. For premium facial serums or customized glass formats, we can accommodate pilot runs starting at 300 units.',
    },
    {
      q: 'Do you provide label design and regulatory compliance check?',
      a: 'Yes. Our internal design and regulatory compliance team can review your label layout, ensure required botanical nomenclature (INCI), net volume markers, safety warnings, and batch coding match destination market regulations (FDA, EU Cosmetics Regulation, BIS).',
    },
    {
      q: 'Can you formulate custom proprietary oil blends?',
      a: 'Yes. Our laboratory can develop custom aroma profiles and botanical synergy blends tailored to your exact sensory target, therapeutic positioning, or benchmark sample.',
    },
    {
      q: 'What quality testing documents are provided with my private label batch?',
      a: 'Every production batch is accompanied by a comprehensive Certificate of Analysis (COA), GC-MS test results, Safety Data Sheet (MSDS), microbial clearance test, and stability confirmation.',
    },
    {
      q: 'What is the standard turnaround lead time?',
      a: 'Standard private label orders are typically fulfilled and dispatched within 3 to 4 weeks following final artwork and packaging approval. Repeat production runs can often be dispatched in 10 to 14 days.',
    },
    {
      q: 'Do you ship finished private label goods internationally?',
      a: 'Yes. We export finished goods door-to-door via DHL/FedEx Express air freight or LCL/FCL ocean cargo with complete customs documentation, export invoices, and Certificate of Origin.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#202723]">
      
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-[#183C32] text-[#F7F4EC] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B79A62_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#B79A62] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHITE LABEL &amp; OEM MANUFACTURING</span>
          </div>
          <h1 className="font-serif-brand text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Turnkey Private Label Botanical Solutions
          </h1>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-6" />
          <p className="mt-6 text-base sm:text-lg text-[#F7F4EC]/80 max-w-2xl mx-auto font-light leading-relaxed">
            From raw botanical extraction to certified shelf-ready finished goods. We help indie brands, luxury spas, and cosmetic houses launch world-class natural products under their own label.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs uppercase tracking-widest rounded-full transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Start Your Private Label Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              YOUR MANUFACTURING PARTNER
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Why Launch With Vindhyachal Botanicals
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E9E2D3] shadow-xs">
              <span className="font-serif-brand text-2xl font-bold text-[#B79A62] block mb-2">01</span>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32] mb-2">
                Accessible MOQs
              </h4>
              <p className="text-xs text-[#202723]/70 font-light leading-relaxed">
                Pilot production batches starting at 300–500 units, making it effortless to test new concepts without tieing up excessive capital.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E9E2D3] shadow-xs">
              <span className="font-serif-brand text-2xl font-bold text-[#B79A62] block mb-2">02</span>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32] mb-2">
                Pure Formulation Integrity
              </h4>
              <p className="text-xs text-[#202723]/70 font-light leading-relaxed">
                Direct manufacturing control guarantees zero synthetic cuts, adulterants, or mineral oil dilution. Pure therapeutic quality.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E9E2D3] shadow-xs">
              <span className="font-serif-brand text-2xl font-bold text-[#B79A62] block mb-2">03</span>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32] mb-2">
                Custom Packaging Suite
              </h4>
              <p className="text-xs text-[#202723]/70 font-light leading-relaxed">
                Extensive bottle catalog: amber, frosted, cobalt, dropper pipettes, aluminum canisters, and luxury embossed gift boxes.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E9E2D3] shadow-xs">
              <span className="font-serif-brand text-2xl font-bold text-[#B79A62] block mb-2">04</span>
              <h4 className="font-serif-brand font-bold text-lg text-[#183C32] mb-2">
                Global Regulatory Dossier
              </h4>
              <p className="text-xs text-[#202723]/70 font-light leading-relaxed">
                Complete batch-specific COA, MSDS, GC-MS fingerprint, and export clearance documentation for frictionless cross-border entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Product Categories */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              WHAT WE MANUFACTURE
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Private Label Product Formats
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <div
                key={i}
                className="bg-[#F7F4EC] rounded-2xl p-8 border border-[#E9E2D3] flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-serif-brand font-bold text-xl text-[#183C32] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202723]/75 font-light leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E9E2D3] flex items-center justify-between text-xs">
                  <span className="text-[#496B52] font-semibold">Minimum Run:</span>
                  <span className="font-serif-brand font-bold text-[#183C32]">{cat.moq}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step OEM Workflow */}
      <section className="py-20 md:py-28 bg-[#183C32] text-[#F7F4EC] border-b border-[#204e41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B79A62]">
              COLLABORATIVE PROCESS
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#F7F4EC] mt-2">
              The 6-Step Private Label Journey
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">01</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Product Consultation</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Review your target concept, active botanical preferences, desired aroma profile, and volume goals.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">02</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Sample Formulation</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Receive laboratory prototype samples to evaluate tactile skinfeel, aroma dry-down, and packaging compatibility.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">03</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Packaging &amp; Artwork</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Select bottles, closures, and submit your label artwork for technical die-line proofing and regulatory review.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">04</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Automated Clean Batching</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Precision clean-room automated batch filling with nitrogen headspace purging to protect sensitive oils.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">05</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Quality Release &amp; COA</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Comprehensive quality inspection: fill volume weight check, seal leak test, and batch GC-MS verification.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-[#B79A62] font-serif-brand font-bold text-3xl">06</span>
              <h4 className="font-serif-brand font-bold text-lg text-white mt-2 mb-1">Worldwide Logistics</h4>
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed">
                Safely boxed and palletized finished products dispatched directly to your warehouse, 3PL, or retail fulfillment center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label FAQs */}
      <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              TRANSPARENT DETAILS
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#183C32] mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E9E2D3] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-serif-brand font-bold text-base sm:text-lg text-[#183C32]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B79A62] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#202723]/80 font-light leading-relaxed border-t border-[#E9E2D3]/50 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Consult With Private Label Specialists</span>
              <ArrowRight className="w-4 h-4 text-[#B79A62]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
