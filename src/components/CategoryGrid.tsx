import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'essential-oils',
      name: 'Essential Oils',
      description: 'Pure therapeutic steam-distilled volatile essences for perfumery, skincare, and aromatherapy formulations.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80',
      span: 'lg:col-span-8', // Asymmetrical larger editorial feature card
      tag: 'Featured Distillation',
    },
    {
      id: 'carrier-oils',
      name: 'Carrier Oils',
      description: 'Cold-pressed virgin seed and nut lipids rich in fatty acids, ideal base oils for cosmetics and massage.',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4',
      tag: 'Cold Pressed',
    },
    {
      id: 'natural-extracts',
      name: 'Natural Extracts',
      description: 'Potent botanical hydrosols, floral waters, and concentrated active phytochemicals extracted with clinical care.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4',
      tag: 'Hydrosols & Extracts',
    },
    {
      id: 'botanical-oils',
      name: 'Botanical Oils',
      description: 'Specialty infused and therapeutic botanical oils formulated for advanced cosmeceutical applications.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4',
      tag: 'Specialty Lipids',
    },
    {
      id: 'aromatherapy-ingredients',
      name: 'Aromatherapy Ingredients',
      description: 'Harmonious aromatic notes crafted to uplift environments, spas, luxury hospitality, and holistic wellness rituals.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4',
      tag: 'Holistic Blends',
    },
    {
      id: 'custom-formulations',
      name: 'Custom Formulations',
      description: 'Contract-blended formulas, proprietary botanical concentrates, and targeted active ratios tailored to your brand.',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      span: 'lg:col-span-12', // Wide panoramic finishing card
      tag: 'Contract R&D',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F4EC] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            CATEGORY OVERVIEW
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            Explore Nature's Essence
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#202723]/75 font-light leading-relaxed">
            Discover carefully crafted botanical ingredients designed for modern wellness and personal-care brands.
          </p>
        </div>

        {/* Asymmetrical Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E9E2D3] bg-white flex flex-col justify-end min-h-[320px] sm:min-h-[360px] ${cat.span}`}
            >
              {/* Background Image with gentle zoom on hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9] contrast-[1.02]"
                />
                {/* Subtle dark green / warm gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#183C32]/95 via-[#183C32]/40 to-black/10 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-6 sm:p-8 text-[#F7F4EC] flex flex-col justify-end">
                <span className="inline-block self-start text-[10px] uppercase font-semibold tracking-[0.25em] text-[#B79A62] mb-2 bg-[#183C32]/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs border border-[#B79A62]/30">
                  {cat.tag}
                </span>
                
                <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#F7F4EC] group-hover:text-[#E9E2D3] transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#F7F4EC]/85 mt-2 font-light leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-3">
                  {cat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B79A62] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
