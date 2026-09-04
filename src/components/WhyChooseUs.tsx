import React from 'react';
import { 
  Store, 
  Monitor, 
  Droplet, 
  BadgePercent, 
  CalendarClock, 
  PackageCheck 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Store,
      title: 'Create Your Brand',
      desc: 'Seamless end-to-end guidance from oil selection to brand registration support.',
    },
    {
      icon: Monitor,
      title: 'Design and Order Packaging',
      desc: 'Expert vector graphics, waterproof labels, and custom amber/blue glass bottles.',
    },
    {
      icon: Droplet,
      title: 'Pure and Natural Essential Oils',
      desc: '100% steam-distilled and cold-pressed botanical extracts with zero synthetic dilution.',
    },
    {
      icon: BadgePercent,
      title: 'Best Quality with Best Prices',
      desc: 'Direct manufacturer pricing from Madhya Pradesh without middlemen markups.',
    },
    {
      icon: CalendarClock,
      title: 'Timely Delivery',
      desc: 'Streamlined logistics with rapid dispatch and guaranteed batch schedules.',
    },
    {
      icon: PackageCheck,
      title: 'Fulfill Orders',
      desc: 'Flexible batch scales from small boutique orders to international 200kg drums.',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#faf9f6] border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title matching Screenshot 7 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-brand-serif text-3xl sm:text-4xl md:text-5xl text-[#78350f] font-bold tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-[#78350f]/30 mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Cards Grid matching user screenshot 7 layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-red-200/80 hover:border-red-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
              >
                {/* Icon matching red/coral stroke in screenshot 7 */}
                <div className="w-12 h-12 rounded-lg bg-red-50/60 text-[#dc2626] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                  {item.title}
                </h3>

                {/* Micro Description */}
                <p className="text-[11px] text-stone-500 mt-2 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Standards Banner */}
        <div className="mt-14 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Commitment to Quality and Sustainability
            </span>
            <h4 className="font-brand-serif font-bold text-xl text-stone-900 mt-1">
              Ethically Sourced • Rigorously Batch Tested • ISO / GMP Compliant
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-2xl">
              At Vindhyachal Botanicals, quality is non-negotiable. We uphold rigorous standards throughout our extraction process, ensuring that every drop of oil embodies the richness and potency of its origin.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              GC-MS Tested
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-bold border border-stone-200">
              Zero Hexane
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
