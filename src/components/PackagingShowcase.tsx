import React from 'react';
import { ArrowRight, Package, Droplets, Box, Tag, Layers, Check } from 'lucide-react';

interface PackagingShowcaseProps {
  onDiscussPackaging: () => void;
}

export const PackagingShowcase: React.FC<PackagingShowcaseProps> = ({ onDiscussPackaging }) => {
  const packagingOptions = [
    {
      title: 'Amber Glass Bottles',
      size: '10ml, 15ml, 30ml, 50ml, 100ml',
      description: 'Pharmaceutical-grade UV-filtering amber glass with orifice reducers and tamper-evident caps.',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80',
      category: 'Retail & Essential Oils',
    },
    {
      title: 'Precision Treatment Droppers',
      size: '15ml, 30ml, 50ml Dropper Pipettes',
      description: 'Matte black, brushed gold, or natural bamboo collars with glass pipettes for facial and hair serums.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80',
      category: 'Cosmetic Serums',
    },
    {
      title: 'Aluminum Bottles & Jars',
      size: '100ml, 250ml, 500ml, 1000ml',
      description: 'Epoxy-phenolic lined aluminum bottles ideal for light-sensitive volatile distillates and air freight.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
      category: 'Aromatherapy & Salon',
    },
    {
      title: 'Industrial Bulk Export Drums',
      size: '5kg Carboys, 25kg HDPE, 180kg-200kg Drums',
      description: 'UN-certified heavy-duty HDPE containers and epoxy-lined steel drums for worldwide bulk manufacturing.',
      image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=700&q=80',
      category: 'Bulk Export',
    },
    {
      title: 'Custom Brand Labels & Printing',
      size: 'Water-resistant, Oil-proof, Foil Stamped',
      description: 'Matte, gloss, metallic gold foil and clear poly labels tested rigorously against oil contact leakage.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=80',
      category: 'Label Finishes',
    },
    {
      title: 'Outer Unit Cartons & Shipping Boxes',
      size: 'Custom Die-Cut Recyclable Kraft & Rigid Boxes',
      description: 'FSC-certified eco-friendly paperboard boxes with custom internal dividers for maximum transport safety.',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80',
      category: 'Box Packaging',
    },
  ];

  const capabilities = [
    { title: 'Bottle Selection', desc: 'Amber, cobalt blue, flint glass & aluminum' },
    { title: 'Label Design', desc: 'Oil-resistant metallic foil, matte & transparent' },
    { title: 'Logo Integration', desc: 'Screen printing, hot stamping & embossing' },
    { title: 'Packaging Sizes', desc: 'From 5ml sample vials to 200kg industrial drums' },
    { title: 'Custom Branding', desc: 'Bespoke closure caps, droppers, pumps & mist sprayers' },
    { title: 'Bulk Packaging', desc: 'UN-rated export drums with tamper-proof seal valves' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            PACKAGING SOLUTIONS
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            Custom Packaging, Designed Around Your Brand
          </h2>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#202723]/80 font-light leading-relaxed">
            Experience personalized excellence with customized packaging, logo integration and packaging labels tailored to your product requirements.
          </p>
        </div>

        {/* 6 Capabilities Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl p-4 text-center hover:border-[#B79A62]/40 transition-colors"
            >
              <h4 className="font-serif-brand font-bold text-sm text-[#183C32] mb-1">
                {cap.title}
              </h4>
              <p className="text-[11px] text-[#202723]/70 font-light leading-snug">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Card Showcase (6 visual examples) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packagingOptions.map((pkg, idx) => (
            <div
              key={idx}
              className="group bg-[#F7F4EC] rounded-2xl overflow-hidden border border-[#E9E2D3] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-[#E9E2D3]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#183C32]/85 text-[#F7F4EC] backdrop-blur-xs">
                    {pkg.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif-brand font-bold text-xl text-[#183C32]">
                    {pkg.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#B79A62] block mt-1">
                    {pkg.size}
                  </span>
                  <p className="text-xs sm:text-sm text-[#202723]/75 mt-2.5 font-light leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-transparent">
                <div className="pt-3 border-t border-[#E9E2D3] flex items-center justify-between text-xs text-[#496B52]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#B79A62]" />
                    Custom artwork ready
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <button
            onClick={onDiscussPackaging}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Discuss Custom Packaging</span>
            <ArrowRight className="w-4 h-4 text-[#B79A62]" />
          </button>
        </div>

      </div>
    </section>
  );
};
