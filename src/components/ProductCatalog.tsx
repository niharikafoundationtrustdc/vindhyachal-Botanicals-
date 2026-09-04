import React, { useState, useMemo } from 'react';
import { Product, PackOption } from '../types';
import { CATEGORIES } from '../data/products';
import { 
  ShoppingBag, 
  Eye, 
  FileText, 
  Sparkles, 
  Check, 
  ArrowUpDown,
  Filter
} from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  currency: 'INR' | 'USD';
  onAddToCart: (product: Product, pack: PackOption, quantity: number) => void;
  onOpenProductModal: (product: Product) => void;
  onRequestQuoteForProduct: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  currency,
  onAddToCart,
  onOpenProductModal,
  onRequestQuoteForProduct,
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'price-asc' | 'price-desc'>('featured');
  const [selectedPacks, setSelectedPacks] = useState<Record<string, number>>({});
  const [addedAnimation, setAddedAnimation] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(18);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const categoryMatch = 
        selectedCategory === 'all' ||
        (selectedCategory === 'pharma_grade' ? product.pharmaGrade : product.category === selectedCategory);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch = !query || 
        product.name.toLowerCase().includes(query) ||
        (product.botanicalName && product.botanicalName.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'price-asc') {
        const pA = currency === 'INR' ? a.packOptions[0].priceINR : a.packOptions[0].priceUSD;
        const pB = currency === 'INR' ? b.packOptions[0].priceINR : b.packOptions[0].priceUSD;
        return pA - pB;
      }
      if (sortBy === 'price-desc') {
        const pA = currency === 'INR' ? a.packOptions[0].priceINR : a.packOptions[0].priceUSD;
        const pB = currency === 'INR' ? b.packOptions[0].priceINR : b.packOptions[0].priceUSD;
        return pB - pA;
      }
      return 0; // featured default
    });
  }, [products, selectedCategory, searchQuery, sortBy, currency]);

  const handlePackChange = (productId: string, packIndex: number) => {
    setSelectedPacks(prev => ({ ...prev, [productId]: packIndex }));
  };

  const handleAddToCartClick = (product: Product) => {
    const packIndex = selectedPacks[product.id] ?? 0;
    const pack = product.packOptions[packIndex] || product.packOptions[0];
    onAddToCart(product, pack, 1);

    setAddedAnimation(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation(prev => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="products-section" className="py-16 md:py-24 bg-[#faf9f6] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0e632b] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Factory Catalog & Pricing
          </div>
          <h2 className="font-brand-serif text-3xl sm:text-4xl md:text-5xl text-[#78350f] font-bold tracking-tight">
            Explore Nature’s Distillations
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Meticulously extracted and curated to encapsulate the pristine purity and potency of botanical origins. Available for retail packaging, private labeling, and bulk export drums.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 pb-4 overflow-x-auto scrollbar-none mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setVisibleCount(18);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#0e632b] text-white border-[#0e632b] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls & Result Count */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs mb-8">
          <div className="text-xs sm:text-sm text-stone-600 font-medium">
            Showing <strong className="text-stone-900">{displayedProducts.length}</strong> of{' '}
            <strong className="text-stone-900">{filteredProducts.length}</strong> pure botanical products
            {searchQuery && (
              <span className="text-emerald-700 ml-1">matching &quot;{searchQuery}&quot;</span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-semibold bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 focus:outline-hidden focus:ring-1 focus:ring-[#0e632b] text-stone-800"
            >
              <option value="featured">Featured Collection</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid matching Screenshots 5, 9 */}
        {displayedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto my-12">
            <Filter className="w-12 h-12 text-stone-300 mx-auto mb-4" />
            <h3 className="font-brand-serif font-bold text-lg text-stone-800">No matching products found</h3>
            <p className="text-xs text-stone-500 mt-2">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-[#0e632b] text-white text-xs font-semibold rounded-xl"
            >
              View All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {displayedProducts.map((product) => {
              const packIndex = selectedPacks[product.id] ?? 0;
              const currentPack = product.packOptions[packIndex] || product.packOptions[0];
              const isAdded = addedAnimation[product.id];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200/90 hover:border-emerald-500/80 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image Container matching screenshot rounded square layout */}
                  <div className="p-3 pb-0 relative">
                    <div 
                      className="aspect-square w-full rounded-xl overflow-hidden bg-stone-50 border border-stone-100 cursor-pointer relative"
                      onClick={() => onOpenProductModal(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Badge if available */}
                      {product.badge && (
                        <div className="absolute top-2 left-2 bg-[#151833]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {product.badge}
                        </div>
                      )}
                      {/* Quick view icon overlay on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/95 text-stone-900 text-xs font-semibold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                          <Eye className="w-3.5 h-3.5 text-[#0e632b]" />
                          Quick Specs
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Micro Tag */}
                      <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider block mb-0.5">
                        {product.categoryLabel}
                      </span>

                      {/* Product Name matching Screenshots 5 & 9 */}
                      <h3 
                        onClick={() => onOpenProductModal(product)}
                        className="font-brand-serif font-bold text-sm sm:text-base text-stone-900 group-hover:text-[#0e632b] transition-colors leading-tight cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h3>

                      {/* Botanical Name */}
                      {product.botanicalName && (
                        <p className="text-[11px] text-stone-500 italic mt-0.5 line-clamp-1">
                          {product.botanicalName}
                        </p>
                      )}
                    </div>

                    {/* Pack Size Selector & Pricing */}
                    <div className="mt-3 pt-3 border-t border-stone-100 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <select
                          value={packIndex}
                          onChange={(e) => handlePackChange(product.id, Number(e.target.value))}
                          className="text-[11px] font-medium bg-stone-50 border border-stone-200 rounded-md py-1 px-1.5 focus:outline-hidden focus:border-[#0e632b] text-stone-700 w-full"
                          aria-label="Select packaging size"
                        >
                          {product.packOptions.map((pack, idx) => (
                            <option key={idx} value={idx}>
                              {pack.size}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Price Display */}
                      <div className="flex items-baseline justify-between pt-0.5">
                        <div>
                          <span className="text-xs text-stone-400 font-normal">Price: </span>
                          <span className="text-sm sm:text-base font-bold text-[#0e632b]">
                            {currency === 'INR' ? `₹${currentPack.priceINR.toLocaleString('en-IN')}` : `$${currentPack.priceUSD.toFixed(2)}`}
                          </span>
                        </div>
                        {currentPack.isBulk && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            Bulk Drum
                          </span>
                        )}
                      </div>

                      {/* Actions: Add to Cart & RFQ Quote */}
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <button
                          onClick={() => handleAddToCartClick(product)}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                            isAdded
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#0e632b] hover:bg-[#09471e] text-white shadow-2xs'
                          }`}
                          title="Add to order"
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" />
                              <span>Order</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => onRequestQuoteForProduct(product)}
                          className="py-1.5 px-2 rounded-lg text-xs font-semibold border border-stone-300 hover:border-[#0e632b] text-stone-700 hover:text-[#0e632b] bg-white hover:bg-stone-50 flex items-center justify-center gap-1 transition-colors"
                          title="Request wholesale quotation or Certificate of Analysis"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Quote</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button matching "Get More" in Screenshot 5 */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 16)}
              className="px-8 py-3 rounded-xl border-2 border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white font-semibold text-sm transition-all duration-200 shadow-2xs hover:shadow-xs inline-flex items-center gap-2"
            >
              <span>Get More Products...</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
