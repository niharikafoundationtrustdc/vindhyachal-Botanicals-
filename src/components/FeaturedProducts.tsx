import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowRight, FileText, Send, Sparkles, Filter } from 'lucide-react';

interface FeaturedProductsProps {
  onViewProduct: (product: Product) => void;
  onRequestBulkPricing: (product: Product) => void;
  onRequestSpecification: (product: Product) => void;
  onExploreAll: () => void;
}

// 10 key featured natural ingredients requested explicitly in Prompt #10
const FEATURED_BOTANICALS: Product[] = [
  {
    id: 'lavender-essential-oil',
    name: 'Lavender Essential Oil',
    botanicalName: 'Lavandula angustifolia',
    category: 'essential_oils',
    categoryLabel: 'Essential Oil',
    description: 'Steam-distilled pure botanical essence containing high linalool and linalyl acetate. Soothing, floral and harmonizing profile.',
    extractionMethod: 'Steam Distillation',
    plantPart: 'Fresh Flowering Tops',
    origin: 'Kashmir / Central India',
    colorAppearance: 'Pale yellow to transparent liquid',
    aromaProfile: 'Sweet, floral, herbaceous and relaxing',
    keyBenefits: ['Calms nervous tension', 'Balances skin moisture', 'Promotes restful sleep', 'Natural perfumery heart note'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '180kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    badge: 'Global Bestseller',
  },
  {
    id: 'peppermint-essential-oil',
    name: 'Peppermint Essential Oil',
    botanicalName: 'Mentha piperita',
    category: 'essential_oils',
    categoryLabel: 'Essential Oil',
    description: 'High-purity distillation rich in natural L-menthol. Provides exhilarating cooling freshness and sharp clarity.',
    extractionMethod: 'Steam Distillation',
    plantPart: 'Leaves and Stems',
    origin: 'Madhya Pradesh / UP, India',
    colorAppearance: 'Clear colourless to pale greenish liquid',
    aromaProfile: 'Intensely sharp, penetrating, minty aroma',
    keyBenefits: ['Instant cooling sensation', 'Respiratory clarity', 'Digestive aromatherapy', 'Stimulates hair roots'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '180kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    badge: 'IP / BP Grade',
  },
  {
    id: 'tea-tree-oil',
    name: 'Tea Tree Oil',
    botanicalName: 'Melaleuca alternifolia',
    category: 'essential_oils',
    categoryLabel: 'Essential Oil',
    description: 'Natural antiseptic standard with over 38% Terpinen-4-ol. Trusted universally for blemish care and scalp health.',
    extractionMethod: 'Steam Distillation',
    plantPart: 'Twigs and Foliage',
    origin: 'Certified Indian Farms',
    colorAppearance: 'Colorless to pale straw liquid',
    aromaProfile: 'Fresh, warm, spicy, camphoraceous',
    keyBenefits: ['Potent antibacterial agent', 'Clears acne blemishes', 'Controls scalp flakes', 'Purifies surfaces'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '200kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    badge: 'Standardized 38%+',
  },
  {
    id: 'rosemary-oil',
    name: 'Rosemary Oil',
    botanicalName: 'Rosmarinus officinalis',
    category: 'essential_oils',
    categoryLabel: 'Essential Oil',
    description: 'Crisp invigorating oil with balanced 1,8-cineole and camphor. Renowned as the premier botanical for hair density.',
    extractionMethod: 'Steam Distillation',
    plantPart: 'Flowering Aerial Herb',
    origin: 'Himalayan Foothills, India',
    colorAppearance: 'Clear, pale yellow liquid',
    aromaProfile: 'Strong, woody-herbaceous, minty forest',
    keyBenefits: ['Stimulates hair follicles', 'Improves mental focus', 'Antioxidant skin protector', 'Natural preservative synergy'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    badge: 'Haircare Essential',
  },
  {
    id: 'eucalyptus-oil',
    name: 'Eucalyptus Oil',
    botanicalName: 'Eucalyptus globulus',
    category: 'essential_oils',
    categoryLabel: 'Essential Oil',
    description: 'Purifying cineole-dominant essential oil. Clean, penetrating aroma used widely in rubs, diffusers, and vapor therapies.',
    extractionMethod: 'Steam Distillation',
    plantPart: 'Fresh Mature Leaves',
    origin: 'Nilgiri / Central India',
    colorAppearance: 'Colorless to faintly yellow liquid',
    aromaProfile: 'Piercing, camphoraceous, fresh herbaceous',
    keyBenefits: ['Decongests breathing channels', 'Soothes muscle stiffness', 'Clarifies air quality', 'Natural insect repellent'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '180kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'jojoba-oil',
    name: 'Golden Jojoba Oil',
    botanicalName: 'Simmondsia chinensis',
    category: 'carrier_oils',
    categoryLabel: 'Carrier Oil',
    description: 'Cold-pressed virgin liquid wax ester that closely mimics human sebum. Exceptional stability, non-comedogenic hydration.',
    extractionMethod: 'Cold Pressed',
    plantPart: 'Golden Seeds',
    origin: 'Western / Central India',
    colorAppearance: 'Clear golden yellow liquid wax',
    aromaProfile: 'Subtle nutty, neutral aroma',
    keyBenefits: ['Biomimetic sebum balance', 'Deep rapid skin absorption', 'Strengthens moisture barrier', 'Non-comedogenic base'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '190kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    badge: '100% Virgin Wax',
  },
  {
    id: 'sweet-almond-oil',
    name: 'Sweet Almond Oil',
    botanicalName: 'Prunus amygdalus dulcis',
    category: 'carrier_oils',
    categoryLabel: 'Carrier Oil',
    description: 'Refined and virgin grades of cold-pressed sweet almond kernels. Loaded with Vitamin E, squalene, and oleic fatty acids.',
    extractionMethod: 'Cold Pressed',
    plantPart: 'Ripe Almond Kernels',
    origin: 'Kashmir, India',
    colorAppearance: 'Pale straw yellow transparent oil',
    aromaProfile: 'Light, delicate marzipan-nutty aroma',
    keyBenefits: ['Velvety skin slip for massage', 'Soothes eczema & dryness', 'Enriched with Vitamin E & A', 'Universal carrier base'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '190kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'virgin-coconut-oil',
    name: 'Virgin Coconut Oil',
    botanicalName: 'Cocos nucifera',
    category: 'carrier_oils',
    categoryLabel: 'Carrier Oil',
    description: 'Centrifuge cold-extracted from fresh mature coconut milk. High in lauric acid (C12), providing antimicrobial nourishment.',
    extractionMethod: 'Cold Pressed',
    plantPart: 'Fresh Wet Endosperm',
    origin: 'Coastal India',
    colorAppearance: 'Water-clear liquid (>24°C) / Pure white solid',
    aromaProfile: 'Fresh sweet tropical coconut aroma',
    keyBenefits: ['Rich in lauric fatty acids', 'Strengthens hair protein', 'Natural skin barrier shield', 'Edible & cosmetic grade'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg Bucket', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '190kg Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'castor-oil',
    name: 'Cold Pressed Castor Oil',
    botanicalName: 'Ricinus communis',
    category: 'carrier_oils',
    categoryLabel: 'Carrier Oil',
    description: 'Viscous virgin castor oil rich in ricinoleic acid (90%+). Renowned worldwide for thick eyebrow, eyelash and hair serum formulations.',
    extractionMethod: 'Cold Pressed',
    plantPart: 'Castor Bean Seeds',
    origin: 'Gujarat / Madhya Pradesh, India',
    colorAppearance: 'Pale amber clear viscous liquid',
    aromaProfile: 'Characteristic mild oily aroma',
    keyBenefits: ['Intense hair strand thickening', 'Deep humectant hydration', 'High ricinoleic content', 'Soap lather stabilizer'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg HDPE Drum', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '200kg Steel Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'argan-oil',
    name: 'Pure Virgin Argan Oil',
    botanicalName: 'Argania spinosa',
    category: 'carrier_oils',
    categoryLabel: 'Carrier Oil',
    description: 'Cold-pressed virgin kernel oil rich in omega-6 linoleic acid, oleic acid, and polyphenols. The gold standard for liquid gold hair serums.',
    extractionMethod: 'Cold Pressed',
    plantPart: 'Selected Nut Kernels',
    origin: 'Pure Virgin Grade',
    colorAppearance: 'Golden yellow transparent liquid',
    aromaProfile: 'Subtle nutty, rich botanical profile',
    keyBenefits: ['Transforms brittle hair into silk', 'Imparts instant luminous glow', 'Rich in natural squalene & tocopherols', 'Non-greasy dry-oil feel'],
    packOptions: [
      { size: '1 Litre Can', priceINR: 0, priceUSD: 0 },
      { size: '5 Litre Carboy', priceINR: 0, priceUSD: 0, isBulk: true },
      { size: '25kg Drum', priceINR: 0, priceUSD: 0, isBulk: true },
    ],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    badge: 'Liquid Gold',
  },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onViewProduct,
  onRequestBulkPricing,
  onRequestSpecification,
  onExploreAll,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'essential_oils' | 'carrier_oils'>('all');

  const filteredProducts = activeFilter === 'all'
    ? FEATURED_BOTANICALS
    : FEATURED_BOTANICALS.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E2D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              <Sparkles className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>CORE BOTANICAL PORTFOLIO</span>
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
              Our Natural Ingredients
            </h2>
            <div className="w-16 h-0.5 bg-[#B79A62] mt-4" />
            <p className="mt-3 text-sm sm:text-base text-[#202723]/70 font-light max-w-xl leading-relaxed">
              Batch-certified pure botanical oils supplied directly from source in export-compliant drums, canisters and custom private-label containers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#183C32] text-[#F7F4EC]'
                  : 'bg-[#F7F4EC] text-[#202723]/80 hover:bg-[#E9E2D3]'
              }`}
            >
              All 10 Signatures
            </button>
            <button
              onClick={() => setActiveFilter('essential_oils')}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeFilter === 'essential_oils'
                  ? 'bg-[#183C32] text-[#F7F4EC]'
                  : 'bg-[#F7F4EC] text-[#202723]/80 hover:bg-[#E9E2D3]'
              }`}
            >
              Essential Oils
            </button>
            <button
              onClick={() => setActiveFilter('carrier_oils')}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeFilter === 'carrier_oils'
                  ? 'bg-[#183C32] text-[#F7F4EC]'
                  : 'bg-[#F7F4EC] text-[#202723]/80 hover:bg-[#E9E2D3]'
              }`}
            >
              Carrier Oils
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#F7F4EC] rounded-2xl border border-[#E9E2D3] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-[#B79A62]/50"
            >
              <div>
                {/* Product Image Box */}
                <div
                  onClick={() => onViewProduct(product)}
                  className="relative aspect-4/3 overflow-hidden bg-[#E9E2D3] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#183C32]/85 text-[#F7F4EC] backdrop-blur-xs border border-white/10">
                    {product.categoryLabel}
                  </span>

                  {product.badge && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#B79A62] text-[#183C32]">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Meta & Description */}
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#496B52] font-semibold">
                      {product.extractionMethod}
                    </span>
                    <span className="text-[11px] text-[#202723]/60">
                      Origin: {product.origin?.split(',')[0]}
                    </span>
                  </div>

                  <h3
                    onClick={() => onViewProduct(product)}
                    className="font-serif-brand font-bold text-xl sm:text-2xl text-[#183C32] mt-1.5 cursor-pointer group-hover:text-[#496B52] transition-colors"
                  >
                    {product.name}
                  </h3>

                  <p className="font-serif-brand italic text-xs text-[#B79A62] font-medium mt-0.5">
                    {product.botanicalName}
                  </p>

                  <p className="text-xs sm:text-sm text-[#202723]/75 mt-3 font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Available Supply Formats */}
                  <div className="mt-4 pt-3 border-t border-[#E9E2D3]">
                    <span className="text-[10px] uppercase tracking-wider text-[#202723]/60 font-semibold block mb-1.5">
                      Available Supply Formats:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.packOptions.map((pack, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E9E2D3] text-[#202723]/80"
                        >
                          {pack.size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* B2B Action Buttons - Explicitly required by Prompt #10 */}
              <div className="p-6 pt-0 border-t border-transparent space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onRequestBulkPricing(product)}
                    className="w-full py-2.5 px-3 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#B79A62]" />
                    <span>Bulk Pricing</span>
                  </button>

                  <button
                    onClick={() => onRequestSpecification(product)}
                    className="w-full py-2.5 px-3 border border-[#183C32]/30 hover:border-[#183C32] bg-white hover:bg-[#F7F4EC] text-[#183C32] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#496B52]" />
                    <span>Specification</span>
                  </button>
                </div>

                <button
                  onClick={() => onViewProduct(product)}
                  className="w-full py-1.5 text-center text-xs font-medium text-[#496B52] hover:text-[#183C32] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>View Technical Profile &amp; Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View Full Catalog CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            <span>Explore Complete 90+ Botanical Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#B79A62]" />
          </button>
        </div>

      </div>
    </section>
  );
};
