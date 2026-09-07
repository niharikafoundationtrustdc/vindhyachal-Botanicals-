import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, FileText, Sparkles, Droplets, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product } from '../types';

interface ProductsPageProps {
  onViewProduct: (product: Product) => void;
  onRequestBulkPricing: (product: Product) => void;
  onRequestSpecification: (product: Product) => void;
  initialCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onViewProduct,
  onRequestBulkPricing,
  onRequestSpecification,
  initialCategory = 'All',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedApplication, setSelectedApplication] = useState<string>('All');

  const categories = ['All', 'Essential Oils', 'Carrier Oils', 'Natural Extracts', 'Hydrosols & Waters'];

  const applicationFilters = [
    'All',
    'Aromatherapy',
    'Skincare',
    'Haircare',
    'Personal Care',
    'Fragrance',
    'Wellness',
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const catStr = (product.categoryLabel || product.category || '').toLowerCase();
      const matchesCategory =
        selectedCategory === 'All' ||
        catStr.includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Hydrosols & Waters' && (catStr.includes('hydrosol') || catStr.includes('water')));

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const apps = product.applications || ['Cosmetics', 'Aromatherapy', 'Wellness', 'Skincare'];
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        (product.botanicalName && product.botanicalName.toLowerCase().includes(q)) ||
        product.description.toLowerCase().includes(q) ||
        product.keyBenefits.some((b) => b.toLowerCase().includes(q)) ||
        apps.some((a) => a.toLowerCase().includes(q));

      // Application filter
      const matchesApplication =
        selectedApplication === 'All' ||
        apps.some((app) => app.toLowerCase().includes(selectedApplication.toLowerCase()));

      return matchesCategory && matchesSearch && matchesApplication;
    });
  }, [selectedCategory, searchQuery, selectedApplication]);

  return (
    <div className="bg-[#F7F4EC] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#496B52]">
            AUTHENTIC BOTANICAL EXTRACTS
          </span>
          <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold text-[#183C32] mt-2 tracking-tight">
            Wholesale Botanical Ingredients Catalog
          </h1>
          <div className="w-16 h-0.5 bg-[#B79A62] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#202723]/80 font-light leading-relaxed">
            Pure single-origin essential oils, unrefined cold-pressed lipid carriers, and pure floral distillates. Directly extracted for cosmetics, personal care, and therapeutic manufacturing.
          </p>
        </div>

        {/* Filters and Search Control Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E9E2D3] shadow-xs mb-12 space-y-6">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#496B52] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by ingredient name, botanical species (e.g. Lavandula, Simmondsia), or benefit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#F7F4EC] border border-[#E9E2D3] rounded-xl text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#202723]/60 hover:text-[#183C32] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#E9E2D3] pb-5">
            <span className="text-xs font-semibold text-[#183C32] uppercase tracking-wider mr-2 hidden sm:inline">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#183C32] text-[#F7F4EC] shadow-xs'
                    : 'bg-[#F7F4EC] text-[#202723]/75 hover:bg-[#E9E2D3] hover:text-[#183C32]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Application Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-[#183C32] uppercase tracking-wider mr-2 hidden sm:inline">
              Application:
            </span>
            {applicationFilters.map((app) => (
              <button
                key={app}
                onClick={() => setSelectedApplication(app)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedApplication === app
                    ? 'bg-[#B79A62] text-[#183C32] font-semibold'
                    : 'bg-[#F7F4EC] text-[#202723]/70 hover:bg-[#E9E2D3]'
                }`}
              >
                {app}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter & B2B Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-xs text-[#202723]/70">
          <p>
            Showing <strong>{filteredProducts.length}</strong> botanical products matching your criteria.
          </p>
          <div className="flex items-center gap-2 text-[#496B52] bg-white px-3 py-1.5 rounded-full border border-[#E9E2D3]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A62]" />
            <span>All lots available in Bulk Drums (25kg - 200kg) &amp; Custom Bottling</span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-[#E9E2D3]">
            <Droplets className="w-12 h-12 text-[#B79A62] mx-auto mb-4 stroke-[1.5]" />
            <h3 className="font-serif-brand font-bold text-2xl text-[#183C32]">
              No Matching Botanical Ingredients Found
            </h3>
            <p className="text-xs sm:text-sm text-[#202723]/70 max-w-md mx-auto mt-2 font-light">
              We extract and source over 90+ botanical species. If you don't see your required extract, our laboratory team can custom distill or source it to order.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedApplication('All');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#183C32] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const productImage = product.imageUrl || product.image;

              return (
                <div
                  key={product.id}
                  onClick={() => onViewProduct(product)}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E9E2D3] hover:border-[#183C32]/40 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#F7F4EC]">
                    <img
                      src={productImage}
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
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
