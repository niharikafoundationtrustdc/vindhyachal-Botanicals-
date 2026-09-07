import React from 'react';
import { Award, Leaf, Layers, Globe2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Rigorous quality standards',
    },
    {
      icon: Leaf,
      title: 'Natural Sourcing',
      description: 'Responsibly sourced botanicals',
    },
    {
      icon: Layers,
      title: 'Private Label',
      description: 'Customized brand solutions',
    },
    {
      icon: Globe2,
      title: 'Global Supply',
      description: 'Serving clients worldwide',
    },
  ];

  return (
    <section id="trust-strip" className="bg-[#F7F4EC] border-b border-[#E9E2D3] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 sm:gap-4 p-2"
              >
                <div className="w-11 h-11 rounded-full bg-[#E9E2D3]/70 border border-[#B79A62]/30 flex items-center justify-center shrink-0 text-[#183C32]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-serif-brand font-bold text-base sm:text-lg text-[#183C32] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202723]/70 mt-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
