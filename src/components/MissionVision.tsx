import React from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface MissionVisionProps {
  onGetMoreInfo: () => void;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ onGetMoreInfo }) => {
  return (
    <section className="py-16 md:py-24 bg-[#fcfbfa] border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Our Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Text Left */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78350f]">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Core Purpose</span>
            </div>
            
            <h2 className="font-brand-serif text-3xl sm:text-4xl text-[#78350f] font-bold tracking-tight">
              Our Mission
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              At Vindhyachal Botanicals, our mission is to harness the essence of nature to craft premium-quality natural extracts. As dedicated manufacturers, suppliers, and exporters, we strive to cultivate a synergy between nature’s bounty and modern innovation. Our commitment lies in delivering products that rejuvenate the soul, nourish the body, and uplift the spirit. With a steadfast focus on sustainability and purity, we aim to provide globally sought-after natural oils while preserving the integrity of our environment.
            </p>

            <button
              onClick={onGetMoreInfo}
              className="px-6 py-2.5 rounded-xl border-2 border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white font-semibold text-sm transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              Get More Info...
            </button>
          </div>

          {/* Image Right (Amber dropper bottle with warm sunlight matching user screenshot 4) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-4/5 rounded-3xl overflow-hidden border border-stone-300/80 shadow-lg bg-stone-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
                  alt="Vindhyachal Botanicals Amber Dropper Bottle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-black/40 backdrop-blur-xs p-2.5 rounded-xl">
                  100% Pure Steam Distilled & Cold Pressed Extracts
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Our Vision Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Image Left (Amber essential oil dropper bottles in soft sunlight) */}
          <div className="md:col-span-5 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm">
              <div className="aspect-4/5 rounded-3xl overflow-hidden border border-stone-300/80 shadow-lg bg-stone-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
                  alt="Pure Essential Oil Bottles with Dropper"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium bg-black/40 backdrop-blur-xs p-2.5 rounded-xl">
                  Sustainable Sourcing & Traditional Ayurvedic Purity
                </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="md:col-span-7 space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78350f]">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              <span>Forward Journey</span>
            </div>

            <h2 className="font-brand-serif text-3xl sm:text-4xl text-[#78350f] font-bold tracking-tight">
              Our Vision
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Our vision at Vindhyachal Botanicals is rooted in the belief that the richness of nature holds boundless potential for human well-being. We envision becoming pioneers in the extraction and distribution of nature’s gifts, fostering a world where everyone can access the purest, most authentic natural extracts. By upholding the highest standards of quality, ethical practices, and innovation, we aspire to be the catalysts for a healthier, more harmonious world. Through our endeavors, we seek to inspire a profound connection between individuals and the healing power of nature’s oils.
            </p>

            <button
              onClick={onGetMoreInfo}
              className="px-6 py-2.5 rounded-xl border-2 border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white font-semibold text-sm transition-all duration-200 shadow-2xs hover:shadow-xs"
            >
              Get More Info...
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
