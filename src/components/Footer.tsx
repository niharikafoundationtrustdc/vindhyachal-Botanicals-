import React from 'react';
import { Logo } from './Logo';
import { PageId } from './Header';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#183C32] text-[#F7F4EC] pt-16 sm:pt-20 pb-12 border-t border-[#204e41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-hidden"
              aria-label="Vindhyachal Botanicals Home"
            >
              <Logo variant="horizontal" theme="light" size="md" />
            </button>

            <p className="text-xs sm:text-sm text-[#F7F4EC]/75 font-light leading-relaxed max-w-sm pt-2">
              Natural ingredients crafted with care. Manufacturers, suppliers and exporters of pure essential oils, carrier lipids, floral hydrosols and custom private-label solutions.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#B79A62]">
              <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
              <span className="tracking-wider uppercase text-[11px] font-semibold">
                ISO 9001:2015 &amp; GMP Registered Facility
              </span>
            </div>

            <div className="pt-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <span>Request B2B Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Company Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-[#F7F4EC] tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#F7F4EC]/75">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Quality Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Products (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-[#F7F4EC] tracking-wide">
              Products
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#F7F4EC]/75">
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Essential Oils
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Carrier Oils
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Natural Extracts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Botanical Oils
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions (Col 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-[#F7F4EC] tracking-wide">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#F7F4EC]/75">
              <li>
                <button
                  onClick={() => handleNav('private-label')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Private Label
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('private-label')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Contract Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('custom-packaging')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Custom Packaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#B79A62] transition-colors"
                >
                  Bulk Supply
                </button>
              </li>
            </ul>
          </div>

          {/* Contact (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-brand font-bold text-base text-[#F7F4EC] tracking-wide">
              Contact
            </h4>
            <div className="space-y-2 text-xs font-light text-[#F7F4EC]/75">
              <a
                href={`mailto:${COMPANY_DETAILS.emails[0]}`}
                className="block hover:text-[#B79A62] transition-colors truncate"
              >
                {COMPANY_DETAILS.emails[0]}
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="block hover:text-[#B79A62] transition-colors"
              >
                {COMPANY_DETAILS.phoneFormatted}
              </a>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#B79A62] transition-colors"
              >
                WhatsApp Desk
              </a>
              <p className="text-[11px] text-[#A8B7A1] pt-1">
                Datia, MP - 475661, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EC]/60 font-light">
          <p>
            &copy; {COMPANY_DETAILS.copyrightYear} {COMPANY_DETAILS.name}. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#B79A62] transition-colors"
            >
              Privacy Policy
            </button>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#B79A62] transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Export Clearance Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
