import React, { useState } from 'react';
import { MessageCircle, Phone, FileText, ChevronUp, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface FloatingActionsProps {
  onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onRequestQuote }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Options */}
      {isExpanded && (
        <div className="flex flex-col items-end gap-2 mb-1 animate-fadeIn">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className="flex items-center gap-2.5 px-3.5 py-2 bg-white text-[#183C32] rounded-full shadow-lg border border-[#E9E2D3] hover:border-[#B79A62] text-xs font-semibold tracking-wider transition-all group"
            title="Call Vindhyachal Botanicals"
          >
            <span className="hidden sm:inline font-sans-brand text-[11px] text-[#202723]">
              Call Plant: {COMPANY_DETAILS.phoneFormatted}
            </span>
            <div className="w-8 h-8 rounded-full bg-[#F7F4EC] flex items-center justify-center text-[#183C32] group-hover:bg-[#183C32] group-hover:text-[#F7F4EC] transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              'Hello Vindhyachal Botanicals, I would like to inquire about wholesale natural essential oils and private label capabilities.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3.5 py-2 bg-white text-[#183C32] rounded-full shadow-lg border border-[#E9E2D3] hover:border-emerald-600 text-xs font-semibold tracking-wider transition-all group"
            title="Chat on WhatsApp"
          >
            <span className="hidden sm:inline font-sans-brand text-[11px] text-[#202723]">
              Instant WhatsApp Desk
            </span>
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
          </a>

          {/* Quick Quote Button */}
          <button
            onClick={() => {
              setIsExpanded(false);
              onRequestQuote();
            }}
            className="flex items-center gap-2.5 px-3.5 py-2 bg-[#183C32] text-[#F7F4EC] rounded-full shadow-lg border border-[#B79A62] text-xs font-semibold tracking-wider uppercase transition-all hover:bg-[#204e41] cursor-pointer"
          >
            <span className="font-sans-brand text-[11px]">Request Wholesale Quote</span>
            <div className="w-8 h-8 rounded-full bg-[#B79A62] text-[#183C32] flex items-center justify-center">
              <FileText className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRequestQuote}
          className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] rounded-full shadow-lg border border-[#B79A62]/50 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#B79A62]" />
          <span>Quick Quote</span>
        </button>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
            isExpanded
              ? 'bg-[#202723] text-white rotate-90'
              : 'bg-[#183C32] text-[#B79A62] hover:scale-105 border border-[#B79A62]/40'
          }`}
          aria-label="Toggle contact channels"
          title="Contact channels"
        >
          {isExpanded ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <MessageCircle className="w-5 h-5 text-[#B79A62]" />
          )}
        </button>
      </div>
    </aside>
  );
};
