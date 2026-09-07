import React from 'react';
import { ArrowLeft, CheckCircle2, FileText, Download, ShieldCheck, Package, Layers, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onRequestBulkPricing: (product: Product) => void;
  onRequestSpecification: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onNavigateToPrivateLabel: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBack,
  onRequestBulkPricing,
  onRequestSpecification,
  onSelectProduct,
  onNavigateToPrivateLabel,
}) => {
  const productImage = product.imageUrl || product.image;
  const productApps = product.applications || ['Aromatherapy', 'Cosmetics', 'Skin Care', 'Formulation'];
  const productMoq = product.moq || '1 kg';
  const aroma = product.odorProfile || product.aromaProfile || 'Characteristic pure natural botanical profile';
  const constituents = product.majorConstituents || 'Naturally occurring therapeutic terpenes and bio-actives';

  // Related products from same category
  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <div className="bg-[#FFFFFF] min-h-screen py-12 sm:py-20 text-[#202723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation Breadcrumb */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#496B52] hover:text-[#183C32] mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </button>

        {/* Top Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          
          {/* Left Column: Product Image & Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-4/3 sm:aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#E9E2D3] bg-[#F7F4EC]">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 text-xs uppercase font-semibold tracking-wider px-3 py-1 rounded-full bg-[#183C32]/90 text-[#F7F4EC] backdrop-blur-xs">
                {product.categoryLabel || product.category}
              </span>
            </div>

            {/* Quality Seals Bar under image */}
            <div className="p-4 bg-[#F7F4EC] rounded-2xl border border-[#E9E2D3] flex items-center justify-around text-xs text-[#183C32]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
                <span>100% Pure &amp; Natural</span>
              </div>
              <div className="w-px h-4 bg-[#E9E2D3]" />
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B79A62]" />
                <span>GC-MS Tested</span>
              </div>
              <div className="w-px h-4 bg-[#E9E2D3]" />
              <div className="flex items-center gap-1.5 font-medium">
                <FileText className="w-4 h-4 text-[#B79A62]" />
                <span>COA Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Botanical Spec, Primary Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#B79A62]">
                PHARMACOPOEIA GRADE BOTANICAL
              </span>
              <h1 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[#183C32] mt-1 tracking-tight">
                {product.name}
              </h1>
              {product.botanicalName && (
                <p className="font-serif-brand italic text-lg sm:text-xl text-[#496B52] mt-1">
                  {product.botanicalName}
                </p>
              )}
            </div>

            <p className="text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#183C32]">
                Key Functional Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#202723]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#183C32]">
                Recommended Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {productApps.map((app, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#F7F4EC] text-[#183C32] text-xs font-medium border border-[#E9E2D3]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Bulk Spec Pills */}
            <div className="p-5 bg-[#F7F4EC] rounded-2xl border border-[#E9E2D3] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[#202723]/60 block text-[11px] uppercase tracking-wider">Minimum Order</span>
                <strong className="text-sm font-serif-brand text-[#183C32]">{productMoq}</strong>
              </div>
              <div>
                <span className="text-[#202723]/60 block text-[11px] uppercase tracking-wider">Extraction Method</span>
                <strong className="text-sm font-serif-brand text-[#183C32]">{product.extractionMethod || 'Steam Distilled'}</strong>
              </div>
              <div>
                <span className="text-[#202723]/60 block text-[11px] uppercase tracking-wider">Country of Origin</span>
                <strong className="text-sm font-serif-brand text-[#183C32]">{product.origin || 'India'}</strong>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onRequestBulkPricing(product)}
                className="flex-1 py-4 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors text-center cursor-pointer shadow-md"
              >
                Request Bulk Pricing
              </button>

              <button
                onClick={() => onRequestSpecification(product)}
                className="flex-1 py-4 bg-[#F7F4EC] hover:bg-[#E9E2D3] text-[#183C32] border border-[#B79A62] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#B79A62]" />
                <span>Download Spec &amp; COA</span>
              </button>
            </div>

          </div>

        </div>

        {/* Detailed Technical Specification Table */}
        <div className="bg-[#F7F4EC] rounded-3xl p-8 sm:p-12 border border-[#E9E2D3] mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
              TECHNICAL DOSSIER &amp; BATCH METRICS
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#183C32] mt-1">
              Botanical &amp; Chemical Specifications
            </h3>
            <p className="text-xs sm:text-sm text-[#202723]/70 font-light mt-2 leading-relaxed">
              Every production batch is sampled and tested in our laboratory. Below is the reference baseline for current harvest distillation.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#E9E2D3]">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-[#E9E2D3]">
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] w-1/3 bg-[#F7F4EC]/30">Product Name</td>
                  <td className="py-3.5 px-6 text-[#202723]">{product.name}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Botanical Name</td>
                  <td className="py-3.5 px-6 italic text-[#496B52]">{product.botanicalName || 'Botanical Specimen'}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Plant Part Extracted</td>
                  <td className="py-3.5 px-6 text-[#202723]">{product.plantPart || 'Leaves / Flowers / Seeds'}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Extraction Method</td>
                  <td className="py-3.5 px-6 text-[#202723]">{product.extractionMethod || 'Fractional Steam Distillation'}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Country of Origin</td>
                  <td className="py-3.5 px-6 text-[#202723]">{product.origin || 'India'}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Color &amp; Appearance</td>
                  <td className="py-3.5 px-6 text-[#202723]">{product.colorAppearance || 'Pale yellow to clear liquid'}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Aroma Profile</td>
                  <td className="py-3.5 px-6 text-[#202723]">{aroma}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Major Active Constituents</td>
                  <td className="py-3.5 px-6 text-[#202723]">{constituents}</td>
                </tr>
                <tr className="hover:bg-[#F7F4EC]/50">
                  <td className="py-3.5 px-6 font-semibold text-[#183C32] bg-[#F7F4EC]/30">Quality Compliance</td>
                  <td className="py-3.5 px-6 text-[#202723]">IP / BP / USP Standard, Pesticide &amp; Heavy Metal Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bulk Packaging & Private Label Strip */}
        <div className="bg-[#183C32] text-[#F7F4EC] rounded-3xl p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B79A62]">
                PRIVATE LABEL &amp; OEM PACKAGING
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold">
                Package {product.name} Under Your Brand
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F4EC]/80 font-light leading-relaxed max-w-2xl">
                We can bottle, label, box, and shrink-wrap this oil in 10ml, 15ml, 30ml, 50ml, or 100ml amber dropper bottles with your customized artwork and brand labels. Alternatively, order in bulk 25kg or 200kg drums for in-house cosmetic formulations.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onNavigateToPrivateLabel}
                className="px-6 py-3.5 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] rounded-full text-xs font-semibold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Private Label Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Showcase */}
        {related.length > 0 && (
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
                EXPLORE SIMILAR INGREDIENTS
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#183C32] mt-1">
                Related {product.categoryLabel || product.category}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => {
                const relImage = rel.imageUrl || rel.image;
                return (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E9E2D3] hover:border-[#183C32]/40 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="aspect-4/3 overflow-hidden bg-[#F7F4EC]">
                      <img
                        src={relImage}
                        alt={rel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="font-serif-brand font-bold text-lg text-[#183C32] group-hover:text-[#496B52] transition-colors">
                        {rel.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
