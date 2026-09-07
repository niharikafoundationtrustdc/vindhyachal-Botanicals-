import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productInterest: preselectedProduct || 'Bulk Essential Oils',
    estimatedQuantity: '',
    needsPrivateLabel: false,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*Request for Wholesale Quote - Vindhyachal Botanicals*\n` +
      `• Name: ${formData.name}\n` +
      `• Company: ${formData.companyName}\n` +
      `• Country: ${formData.country || 'Not specified'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Product Requirement: ${formData.productInterest}\n` +
      `• Est. Quantity: ${formData.estimatedQuantity || 'Not specified'}\n` +
      `• Needs Private Label: ${formData.needsPrivateLabel ? 'Yes' : 'No'}\n` +
      `• Message: ${formData.message || 'None'}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F7F4EC] rounded-3xl border border-[#E9E2D3] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#183C32] text-[#F7F4EC] p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#B79A62] text-[11px] font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-3 h-3 text-[#B79A62]" />
            <span>Commercial Inquiries</span>
          </div>

          <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold">
            Request Wholesale Quotation
          </h3>
          <p className="text-xs sm:text-sm text-white/80 font-light mt-1 max-w-lg">
            Direct pricing from manufacturing works with specification sheets and COA for global cosmetic, wellness, and pharmaceutical brands.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#183C32] text-[#B79A62] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif-brand text-2xl font-bold text-[#183C32]">
                Quote Request Dispatched
              </h4>
              <p className="text-xs sm:text-sm text-[#202723]/75 max-w-md mx-auto font-light leading-relaxed">
                Your request has been forwarded to our commercial pricing desk. An export specialist will prepare your custom tariff and dispatch schedule.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#183C32] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Contact Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Luminary Botanics Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Corporate Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Phone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Destination Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. United States, Germany"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Product / Ingredient of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lavender Essential Oil, Jojoba Oil"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                    Estimated Batch Volume
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 x 25kg Drums or 2,000 finished units"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="needsPrivateLabel"
                  checked={formData.needsPrivateLabel}
                  onChange={(e) => setFormData({ ...formData, needsPrivateLabel: e.target.checked })}
                  className="rounded border-[#E9E2D3] text-[#183C32] focus:ring-[#183C32]"
                />
                <label htmlFor="needsPrivateLabel" className="text-xs text-[#183C32] font-medium cursor-pointer">
                  Require Custom Private Label Packaging / Finished Goods
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                  Specific Requirements / Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention target specifications, certifications needed, or sample requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs sm:text-sm text-[#202723] focus:outline-hidden focus:border-[#183C32] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-4 h-4 text-[#B79A62]" />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#E9E2D3] flex items-center justify-between text-[11px] text-[#202723]/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B79A62]" />
            <span>Guaranteed privacy under strict B2B NDA standards.</span>
          </div>
          <button onClick={onClose} className="hover:underline">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};
