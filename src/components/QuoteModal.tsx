import React, { useState } from 'react';
import { Product } from '../types';
import { X, Send, FileText, CheckCircle2, Building, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct,
}) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('India');
  const [requestedItems, setRequestedItems] = useState(
    prefilledProduct ? `${prefilledProduct.name} - 25kg Drum / 100 Litres` : ''
  );
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*Wholesale RFQ / Proforma Invoice Request*\n` +
      `• Company: ${companyName}\n` +
      `• Contact: ${contactPerson}\n` +
      `• Phone: ${phone}\n` +
      `• Email: ${email}\n` +
      `• Destination Country: ${country}\n` +
      `• Required Products & Quantities:\n  ${requestedItems}\n` +
      `• Additional Requirements: ${notes || 'Standard Export Quality / COA required'}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0e632b] text-xs font-semibold uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            Wholesale RFQ &amp; Export Quotations
          </div>
          <h2 className="font-brand-serif font-bold text-2xl text-stone-900">
            Request Official Factory Quote
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Direct pricing from Vindhyachal Botanicals extraction plant in Datia, MP.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-brand-serif font-bold text-lg text-stone-800">
              Quotation Request Transmitted!
            </h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Our export and manufacturing division has received your request. We will review batch availability and provide our best factory rate along with batch COA and MSDS.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#0e632b] text-white text-xs font-semibold rounded-xl"
            >
              Back to Catalog
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Flora Essences Pvt Ltd"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="procurement@company.com"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 / Country Code + Phone"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Destination Port / Country
              </label>
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Mumbai, India / Hamburg, Germany / Dubai, UAE"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Products and Quantities Needed
              </label>
              <textarea
                required
                rows={2}
                value={requestedItems}
                onChange={(e) => setRequestedItems(e.target.value)}
                placeholder="List required oils, hydrosols, or seeds with desired pack size (e.g. 5kg, 25kg drum, 180kg drum)"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
              />
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                Special Quality / Certificate Requirements
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need GC-MS, Halal, Kosher, IP/BP Grade, Organic Certificate"
                className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl focus:ring-1 focus:ring-[#0e632b]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0e632b] hover:bg-[#09471e] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp RFQ</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
