import React from 'react';
import { Check } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Main Title matching user screenshot 3 & 10 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-brand-serif text-2xl sm:text-3xl md:text-4xl text-[#78350f] font-bold tracking-tight">
            Natural Essential oils manufacturers in india
          </h2>
          <div className="w-20 h-1 bg-[#b45309]/40 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Pillars Grid with Checkmark matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          
          {/* Pillar 1: Trending Products */}
          <div className="flex flex-col space-y-3 p-6 rounded-2xl bg-stone-50/60 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-md bg-amber-100 text-[#78350f] flex items-center justify-center font-bold text-lg shrink-0">
                <Check className="w-5 h-5 stroke-[3]" />
              </span>
              <h3 className="font-sans font-bold text-stone-900 tracking-wider text-sm uppercase">
                TRENDING PRODUCTS
              </h3>
            </div>
            <p className="text-sm font-medium text-stone-700 italic">
              “Discover Vindhyachal’s hottest oil seeds—flavorful, versatile, and in high demand!”
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Explore our trending line of oil seeds from Vindhyachal, featuring sought-after varieties that are currently in high demand. From versatile seeds for cosmetic and wellness use to those prized for their rich oil content, our trending selection offers the latest favorites in the market.
            </p>
          </div>

          {/* Pillar 2: Quality Products */}
          <div className="flex flex-col space-y-3 p-6 rounded-2xl bg-stone-50/60 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-md bg-amber-100 text-[#78350f] flex items-center justify-center font-bold text-lg shrink-0">
                <Check className="w-5 h-5 stroke-[3]" />
              </span>
              <h3 className="font-sans font-bold text-stone-900 tracking-wider text-sm uppercase">
                QUALITY PRODUCTS
              </h3>
            </div>
            <p className="text-sm font-medium text-stone-700 italic">
              “Uncompromising excellence: Our seeds boast top-tier quality, purity, and freshness.”
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Vindhyachal Botanicals takes pride in delivering superior quality products. Our seeds and botanical herbs undergo stringent quality checks and are sourced and processed to ensure the highest standards of purity, freshness, and active potency. Expect nothing less than excellence.
            </p>
          </div>

          {/* Pillar 3: Trusted Resource */}
          <div className="flex flex-col space-y-3 p-6 rounded-2xl bg-stone-50/60 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-md bg-amber-100 text-[#78350f] flex items-center justify-center font-bold text-lg shrink-0">
                <Check className="w-5 h-5 stroke-[3]" />
              </span>
              <h3 className="font-sans font-bold text-stone-900 tracking-wider text-sm uppercase">
                TRUSTED RESOURCE
              </h3>
            </div>
            <p className="text-sm font-medium text-stone-700 italic">
              “Your reliable source for premium oil seeds—count on us for authenticity!”
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              Count on Vindhyachal Botanicals as your trusted resource for premium-quality seeds, essential oils, and hydrosols. With a legacy of reliability and consistency, our commitment to integrity and customer satisfaction makes us the trusted choice among discerning global buyers.
            </p>
          </div>

        </div>

        {/* Who We Are Block matching screenshot 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf9f6] p-8 sm:p-10 rounded-3xl border border-stone-200">
          <div className="lg:col-span-3">
            <h3 className="font-brand-serif text-2xl sm:text-3xl text-[#78350f] font-bold">
              Who we are
            </h3>
            <div className="w-12 h-1 bg-[#0e632b] mt-2 rounded-full" />
          </div>

          <div className="lg:col-span-9 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-stone-800">
              <strong>Vindhyachal Botanicals:</strong> Your trusted source for premium quality essential oils, carrier oils, spice oils, mint oils, and hydrosols. Expertly extracted and rigorously tested to ensure unparalleled purity and potency.
            </p>
            <p className="text-stone-600">
              Cultivating the power of nature’s finest essences. As leading manufacturers and exporters of premium essential oils, carrier oils, spice oils, and hydrosols, we harness the transformative properties of plants to deliver unparalleled quality and efficacy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
