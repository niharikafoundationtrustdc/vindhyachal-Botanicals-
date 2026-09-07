import React from 'react';
import { ArrowRight, ChevronRight, Clock, ShieldAlert, Sparkles, Truck } from 'lucide-react';

interface ContractManufacturingProps {
  onTalkToTeam: () => void;
}

export const ContractManufacturing: React.FC<ContractManufacturingProps> = ({ onTalkToTeam }) => {
  const timelineSteps = [
    { title: 'Concept', desc: 'Define active targets & market positioning' },
    { title: 'Product Selection', desc: 'Pure essential oils, hydrosols, or lipid bases' },
    { title: 'Customization', desc: 'Aroma profiling, viscosity & batch scaling' },
    { title: 'Packaging', desc: 'Container matching, capping & label proofing' },
    { title: 'Quality Assurance', desc: 'GC-MS validation & microbial clearance' },
    { title: 'Bulk Production', desc: 'Precision industrial automated batch filling' },
    { title: 'Dispatch', desc: 'Customs-ready air/sea logistics dispatch' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            END-TO-END CONTRACT PRODUCTION
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            From Concept to Finished Product
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
            Whether you are launching a new wellness brand or expanding an existing product line, our contract manufacturing capabilities provide a streamlined path from concept to finished product.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mb-16">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E9E2D3] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-[#E9E2D3] text-center flex flex-col items-center justify-between shadow-xs hover:border-[#B79A62]/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#183C32] text-[#B79A62] font-serif-brand font-bold text-sm flex items-center justify-center mb-3 shadow-xs">
                  {idx + 1}
                </div>

                <div>
                  <h4 className="font-serif-brand font-bold text-base text-[#183C32] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-[#202723]/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 text-[#B79A62] text-[10px] uppercase font-semibold tracking-wider">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities & Capacities Strip */}
        <div className="bg-white rounded-2xl p-8 border border-[#E9E2D3] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left mb-12">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold">
              Manufacturing Capacity
            </span>
            <p className="font-serif-brand text-2xl font-bold text-[#183C32]">
              Over 2,500 kg / Month
            </p>
            <p className="text-xs text-[#202723]/70 font-light">
              High-yield fractional steam distillation and cold press capacity.
            </p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#E9E2D3] pt-4 md:pt-0 md:pl-6">
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold">
              Fill &amp; Seal Automation
            </span>
            <p className="font-serif-brand text-2xl font-bold text-[#183C32]">
              5ml to 200kg Scale
            </p>
            <p className="text-xs text-[#202723]/70 font-light">
              Clean-room volumetric filling line with nitrogen purging.
            </p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#E9E2D3] pt-4 md:pt-0 md:pl-6">
            <span className="text-[11px] uppercase tracking-widest text-[#B79A62] font-semibold">
              Regulatory Dossiers
            </span>
            <p className="font-serif-brand text-2xl font-bold text-[#183C32]">
              Global Export Ready
            </p>
            <p className="text-xs text-[#202723]/70 font-light">
              COA, MSDS, Certificate of Origin, Allergen Reports, Phytosanitary certification.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onTalkToTeam}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Talk to Our Manufacturing Team</span>
            <ArrowRight className="w-4 h-4 text-[#B79A62]" />
          </button>
        </div>

      </div>
    </section>
  );
};
