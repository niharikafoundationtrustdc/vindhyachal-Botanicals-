import React, { useState } from 'react';
import { Product, PackOption } from '../types';
import { 
  X, 
  ShoppingBag, 
  FileCheck, 
  ShieldCheck, 
  MapPin, 
  FlaskConical, 
  Sparkles,
  Check,
  Send
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onAddToCart: (product: Product, pack: PackOption, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
}) => {
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentPack = product.packOptions[selectedPackIndex] || product.packOptions[0];
  const unitPrice = currency === 'INR' ? currentPack.priceINR : currentPack.priceUSD;

  const handleAdd = () => {
    onAddToCart(product, currentPack, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleDirectWhatsAppInquiry = () => {
    const text = `*Inquiry for ${product.name} - Vindhyachal Botanicals*\n` +
      `• Pack Size: ${currentPack.size}\n` +
      `• Quantity: ${quantity}\n` +
      `• Botanical: ${product.botanicalName || 'Natural Extract'}\n` +
      `Please provide batch analysis (COA) and bulk shipping charges to my location.`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/80 hover:bg-white text-stone-600 rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Visual & Key Attributes */}
          <div className="md:col-span-5 bg-stone-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-stone-200 mb-4 shadow-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-600 pb-1.5 border-b border-stone-200">
                  <span className="font-semibold text-stone-800 flex items-center gap-1">
                    <FlaskConical className="w-3.5 h-3.5 text-emerald-700" />
                    Extraction:
                  </span>
                  <span>{product.extractionMethod}</span>
                </div>

                {product.plantPart && (
                  <div className="flex items-center justify-between text-stone-600 pb-1.5 border-b border-stone-200">
                    <span className="font-semibold text-stone-800">Part Used:</span>
                    <span>{product.plantPart}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-stone-600 pb-1.5 border-b border-stone-200">
                  <span className="font-semibold text-stone-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    Origin:
                  </span>
                  <span>{product.origin || 'Datia, MP, India'}</span>
                </div>

                {product.pharmaGrade && (
                  <div className="bg-emerald-50 text-emerald-900 p-2 rounded-xl border border-emerald-200 text-[11px] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Meets IP / BP Pharmacopoeial Standards</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 text-center">
              <span className="text-[11px] text-stone-500 block">
                Batch Analysis &amp; MSDS available upon request
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Product Specs & Ordering */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div>
                <span className="text-[11px] font-bold text-[#0e632b] uppercase tracking-wider">
                  {product.categoryLabel}
                </span>
                <h2 className="font-brand-serif font-bold text-2xl text-stone-900 mt-0.5">
                  {product.name}
                </h2>
                {product.botanicalName && (
                  <p className="text-xs text-stone-500 italic mt-0.5">
                    Botanical: {product.botanicalName}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Aroma & Sensory Characteristics */}
              {product.aromaProfile && (
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
                  <strong className="text-stone-900 block mb-1">Aroma Profile:</strong>
                  <span className="text-stone-600">{product.aromaProfile}</span>
                </div>
              )}

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Key Properties &amp; Applications:
                </h4>
                <div className="grid grid-cols-2 gap-1.5">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e632b] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pack Selector */}
              <div className="pt-2 border-t border-stone-100">
                <label className="block text-xs font-bold text-stone-800 mb-2">
                  Select Packaging Unit:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.packOptions.map((pack, idx) => {
                    const isSelected = selectedPackIndex === idx;
                    const price = currency === 'INR' ? `₹${pack.priceINR}` : `$${pack.priceUSD}`;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedPackIndex(idx)}
                        className={`p-2 rounded-xl text-left border text-xs transition-all ${
                          isSelected
                            ? 'bg-emerald-50 border-[#0e632b] ring-1 ring-[#0e632b]'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <span className="font-semibold text-stone-900 block truncate">
                          {pack.size}
                        </span>
                        <span className="text-[#0e632b] font-bold mt-0.5 block">
                          {price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500">Unit Price:</span>
                  <p className="text-xl font-bold text-[#0e632b]">
                    {currency === 'INR' ? `₹${unitPrice.toLocaleString('en-IN')}` : `$${unitPrice.toFixed(2)}`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-600 font-medium">Qty:</span>
                  <input
                    type="number"
                    min="1"
                    max="999"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-14 px-2 py-1 text-xs font-bold text-center border border-stone-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleAdd}
                  className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#0e632b] hover:bg-[#09471e] text-white'
                  }`}
                >
                  {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{isAdded ? 'Added to Cart' : 'Add to Order'}</span>
                </button>

                <button
                  onClick={handleDirectWhatsAppInquiry}
                  className="py-3 px-4 rounded-xl border border-stone-300 hover:border-[#25D366] text-stone-800 hover:text-stone-900 bg-stone-50 hover:bg-[#25D366]/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Specs</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
