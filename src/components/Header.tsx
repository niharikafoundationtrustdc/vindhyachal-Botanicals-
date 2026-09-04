import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  FileText, 
  Sparkles,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuote: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuote,
  currency,
  onToggleCurrency,
  searchQuery,
  onSearchChange,
  activeCategory,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Announcements & Contact Strip */}
      <div className="bg-[#151833] text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              Pure Botanical Extracts & Essential Oils Direct From MPC, India
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-300">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Datia, Madhya Pradesh
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.emails[0]}`} 
              className="hover:text-amber-400 transition-colors hidden sm:flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>{COMPANY_DETAILS.emails[0]}</span>
            </a>
            <button
              onClick={onToggleCurrency}
              className="px-2 py-0.5 rounded-sm bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-[11px] transition-colors border border-stone-700"
              title="Change Currency"
            >
              Currency: {currency === 'INR' ? '₹ INR' : '$ USD'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center hover:opacity-95 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search essential oils, hydrosols, carrier oils..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 hover:bg-stone-100/80 focus:bg-white border border-stone-300 rounded-full focus:outline-hidden focus:ring-2 focus:ring-[#0e632b]/30 focus:border-[#0e632b] transition-all"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Links & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('products-section')}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0e632b] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0e632b] transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('private-labeling')}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0e632b] transition-colors"
            >
              Private Labeling
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0e632b] transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-[#0e632b] transition-colors"
            >
              Contact
            </button>

            {/* Request Wholesale Quote Button */}
            <button
              onClick={onOpenQuote}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0e632b] border border-[#0e632b] rounded-full hover:bg-[#0e632b] hover:text-white transition-all shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5" />
              Wholesale RFQ
            </button>

            {/* Cart & Quote Drawer Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#0e632b] rounded-full transition-all border border-emerald-200"
              aria-label="View Order & Quote"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setSearchExpanded(!searchExpanded)}
              className="p-2 text-stone-600 hover:text-stone-900"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#0e632b]"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {searchExpanded && (
          <div className="pt-3 pb-1 lg:hidden">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search oils, hydrosols, extracts..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-stone-100 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0e632b]"
                autoFocus
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Category Quick Bar */}
        <div className="hidden md:flex items-center gap-1.5 pt-2.5 pb-0.5 border-t border-stone-100 mt-2 overflow-x-auto text-xs text-stone-600 scrollbar-none">
          <span className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] mr-2">
            Categories:
          </span>
          {[
            { id: 'all', label: 'All Products' },
            { id: 'hydrosols', label: 'Hydrosols' },
            { id: 'essential_oils', label: 'Essential Oils' },
            { id: 'carrier_oils', label: 'Carrier Oils' },
            { id: 'special_ingredients', label: 'Special Ingredients' },
            { id: 'pharma_grade', label: 'Pharma Grade (IP/BP)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                scrollToSection('products-section');
              }}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0e632b] text-white font-medium shadow-2xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-5 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button
              onClick={() => {
                onSelectCategory('all');
                scrollToSection('products-section');
              }}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b]"
            >
              Explore Products
            </button>
            <button
              onClick={() => {
                onSelectCategory('hydrosols');
                scrollToSection('products-section');
              }}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b] pl-3 border-l-2 border-emerald-600"
            >
              Hydrosols (Floral Waters)
            </button>
            <button
              onClick={() => {
                onSelectCategory('essential_oils');
                scrollToSection('products-section');
              }}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b] pl-3 border-l-2 border-emerald-600"
            >
              Natural Essential Oils
            </button>
            <button
              onClick={() => {
                onSelectCategory('carrier_oils');
                scrollToSection('products-section');
              }}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b] pl-3 border-l-2 border-emerald-600"
            >
              Cold Pressed Carrier Oils
            </button>
            <button
              onClick={() => {
                onSelectCategory('special_ingredients');
                scrollToSection('products-section');
              }}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b] pl-3 border-l-2 border-emerald-600"
            >
              Special Active Ingredients
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b]"
            >
              Our Certification
            </button>
            <button
              onClick={() => scrollToSection('private-labeling')}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b]"
            >
              Private Labeling & Packaging
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b]"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-left py-2 text-stone-800 hover:text-[#0e632b]"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2.5 px-4 bg-[#0e632b] text-white rounded-lg text-sm font-semibold text-center shadow-xs"
            >
              Request Wholesale Quote
            </button>
            <div className="flex items-center justify-between text-xs text-stone-500 pt-2">
              <span>Currency: {currency}</span>
              <button 
                onClick={onToggleCurrency}
                className="text-[#0e632b] font-semibold underline"
              >
                Switch to {currency === 'INR' ? 'USD ($)' : 'INR (₹)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
