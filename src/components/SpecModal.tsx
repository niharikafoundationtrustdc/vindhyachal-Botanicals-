import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Download, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_DETAILS } from '../data/products';

interface SpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const SpecModal: React.FC<SpecModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [docType, setDocType] = useState<'COA' | 'TDS' | 'MSDS' | 'ALL'>('ALL');
  const [requested, setRequested] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequested(true);

    const message = `*Technical Dossier Request - Vindhyachal Botanicals*\n` +
      `• Product: ${product.name} (${product.botanicalName || 'N/A'})\n` +
      `• Documents Requested: ${docType} (COA / Technical Spec / MSDS)\n` +
      `• Name: ${name}\n` +
      `• Company: ${company}\n` +
      `• Email: ${email}`;

    const waUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#F7F4EC] rounded-3xl border border-[#E9E2D3] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#183C32] text-[#F7F4EC] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#B79A62] text-[10px] font-semibold uppercase tracking-widest mb-2">
            <FileText className="w-3 h-3 text-[#B79A62]" />
            <span>Technical Documentation</span>
          </div>

          <h3 className="font-serif-brand text-2xl font-bold">
            Request Specification &amp; COA
          </h3>
          <p className="text-xs text-white/80 font-light mt-1">
            {product.name} <span className="italic">({product.botanicalName})</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {requested ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#183C32] text-[#B79A62] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif-brand text-xl font-bold text-[#183C32]">
                Specification Request Logged
              </h4>
              <p className="text-xs text-[#202723]/75 max-w-sm mx-auto font-light leading-relaxed">
                The technical dossier (COA, Gas Chromatography profile, and Material Safety Data Sheet) for <strong>{product.name}</strong> will be emailed to <strong>{email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-[#183C32] text-[#F7F4EC] rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white p-3.5 rounded-xl border border-[#E9E2D3] text-xs space-y-1">
                <span className="font-semibold text-[#183C32] block">Current Standard Batch Details:</span>
                <div className="grid grid-cols-2 gap-2 text-[#202723]/70 text-[11px] pt-1">
                  <div>Extraction: {product.extractionMethod}</div>
                  <div>Origin: {product.origin || 'India'}</div>
                  <div>Appearance: {product.colorAppearance || 'Standard liquid'}</div>
                  <div>Pharmacopoeia: IP / BP / USP Grade</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                  Required Dossier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['ALL', 'COA', 'MSDS'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setDocType(type)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        docType === type
                          ? 'bg-[#183C32] text-[#F7F4EC] border-[#183C32]'
                          : 'bg-white text-[#202723] border-[#E9E2D3] hover:bg-[#F7F4EC]'
                      }`}
                    >
                      {type === 'ALL' ? 'Complete Dossier' : type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                  Your Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Arthur Bell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                  Company / Organization <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aether Wellness Labs"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#183C32] mb-1">
                  Corporate Email for Delivery <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="qa-head@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E9E2D3] rounded-xl text-xs text-[#202723] focus:outline-hidden focus:border-[#183C32]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-xl text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#B79A62]" />
                <span>Transmit Specification Dossier</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-white border-t border-[#E9E2D3] flex items-center gap-2 text-[11px] text-[#496B52]">
          <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
          <span>Includes verified Gas Chromatography &amp; Mass Spectrometry peak graphs.</span>
        </div>

      </div>
    </div>
  );
};
