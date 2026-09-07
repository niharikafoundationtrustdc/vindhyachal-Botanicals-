import React from 'react';
import { Award, ShieldCheck, Sprout, CheckCircle2, FileCheck, RefreshCw } from 'lucide-react';

interface QualitySustainabilityProps {
  onRequestCOA: () => void;
}

export const QualitySustainability: React.FC<QualitySustainabilityProps> = ({ onRequestCOA }) => {
  const pillars = [
    {
      icon: Sprout,
      title: 'Responsible Sourcing',
      subtitle: 'Ethically sourced botanical raw materials',
      description: 'We partner directly with sustainable growers, cooperative farmers, and certified botanical reserves across India. Raw herbs, seeds, and flowers are harvested at peak volatile oil maturity to guarantee high therapeutic compound yield.',
      points: [
        'Direct farm relationships without intermediary dilution',
        'Seasonal harvesting calendar aligned with natural rhythms',
        'Biodiversity preservation & regenerative field care',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Quality Control',
      subtitle: 'Consistent processing and quality checks',
      description: 'Every distillation batch is monitored with precision thermal sensors and analyzed via GC-MS (Gas Chromatography-Mass Spectrometry), refractive index, and optical rotation to ensure strict IP, BP, and USP pharmacopoeia compliance.',
      points: [
        'Batch-specific Certificate of Analysis (COA) provided',
        'GC-MS testing for pesticide and heavy metal clearance',
        'ISO 9001:2015 & GMP compliant facility protocols',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Sustainable Practices',
      subtitle: 'Responsible manufacturing and environmental care',
      description: 'Our closed-loop distillation condensers recycle process water, while spent botanical marc is composted back into agricultural soil enhancement. Packaging incorporates recyclable amber glass, aluminum canisters, and reusable steel drums.',
      points: [
        'Closed-loop water recycling condensers',
        'Zero chemical effluent discharge during steam distillation',
        'Eco-conscious recyclable & bulk packaging formats',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            OUR DEDICATION TO EXCELLENCE
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            Quality Without Compromise
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
            At Vindhyachal Botanicals, every stage—from sourcing to extraction, processing and packaging—is approached with rigorous attention to quality.
          </p>
        </div>

        {/* Three Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E9E2D3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7F4EC] border border-[#B79A62]/30 flex items-center justify-center text-[#183C32] mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif-brand font-bold text-xl sm:text-2xl text-[#183C32]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-wider text-[#B79A62] mt-1 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#202723]/75 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-[#E9E2D3] text-xs text-[#183C32]">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A62] shrink-0 mt-0.5" />
                      <span className="font-light">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certified Quality Seals Showcase Bar */}
        <div className="bg-[#183C32] text-[#F7F4EC] rounded-2xl p-8 sm:p-10 border border-[#B79A62]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B79A62]/20 text-[#B79A62] text-[11px] font-semibold tracking-widest uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Audited Manufacturing Credentials</span>
              </div>

              <h4 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#F7F4EC]">
                ISO 9001:2015 &amp; GMP Certified Operations
              </h4>

              <p className="text-xs sm:text-sm text-[#F7F4EC]/80 font-light leading-relaxed max-w-2xl">
                Our extraction facility operates strictly under internationally recognized quality management systems and Good Manufacturing Practices. Batch samples, MSDS documents, and technical dossiers are available on demand for regulatory verification.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4">
              <button
                onClick={onRequestCOA}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs tracking-widest uppercase rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <FileCheck className="w-4 h-4" />
                <span>Request Sample &amp; COA</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
