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

        {/* Product Cards Grid - Clean layout displaying only the Product Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onViewProduct(product)}
              className="group bg-white rounded-2xl border border-[#E9E2D3] overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#183C32]/40 cursor-pointer flex flex-col"
            >
              {/* Product Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#F7F4EC]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Name Only */}
              <div className="p-5 sm:p-6 text-center flex-1 flex flex-col justify-center">
                <h3 className="font-serif-brand font-bold text-lg sm:text-xl text-[#183C32] group-hover:text-[#496B52] transition-colors">
                  {product.name}
                </h3>
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
