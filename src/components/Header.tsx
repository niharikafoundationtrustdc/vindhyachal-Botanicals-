import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/products';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'products' 
  | 'product-detail'
  | 'private-label' 
  | 'custom-packaging' 
  | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
  isOverHero?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
  isOverHero = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if header should have light text (when at top over dark hero) or dark text
  const isTransparent = !isScrolled && isOverHero && currentPage === 'home';

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'private-label', label: 'Private Label' },
    { id: 'custom-packaging', label: 'Custom Packaging' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent text-[#F7F4EC] py-5 border-b border-white/10'
          : 'bg-[#F7F4EC]/95 backdrop-blur-md text-[#202723] py-3.5 shadow-sm border-b border-[#E9E2D3]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-hidden group"
          aria-label="Vindhyachal Botanicals Home"
        >
          <Logo
            variant="horizontal"
            theme={isTransparent ? 'light' : 'dark'}
            size="md"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors relative py-1 focus:outline-hidden ${
                  isTransparent
                    ? isActive
                      ? 'text-[#B79A62] font-semibold'
                      : 'text-white/80 hover:text-white'
                    : isActive
                    ? 'text-[#183C32] font-bold'
                    : 'text-[#202723]/80 hover:text-[#183C32]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                      isTransparent ? 'bg-[#B79A62]' : 'bg-[#183C32]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3.5">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className={`hidden xl:inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
              isTransparent ? 'text-white/80 hover:text-white' : 'text-[#496B52] hover:text-[#183C32]'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#B79A62]" />
            <span>{COMPANY_DETAILS.phoneFormatted}</span>
          </a>

          <button
            onClick={onRequestQuote}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-xs focus:outline-hidden ${
              isTransparent
                ? 'bg-[#F7F4EC] hover:bg-white text-[#183C32] hover:shadow-md'
                : 'bg-[#183C32] hover:bg-[#204e41] text-[#F7F4EC] hover:shadow-md'
            }`}
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B79A62]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className={`sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
              isTransparent
                ? 'bg-[#F7F4EC] text-[#183C32]'
                : 'bg-[#183C32] text-[#F7F4EC]'
            }`}
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-hidden ${
              isTransparent ? 'text-white hover:bg-white/10' : 'text-[#183C32] hover:bg-[#E9E2D3]'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen / Drawer Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-[#183C32] text-[#F7F4EC] z-40 flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          <div className="space-y-6 pt-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B79A62] font-semibold border-b border-white/10 pb-3">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between py-2 text-left text-lg font-serif-brand tracking-wide text-[#F7F4EC] hover:text-[#B79A62] transition-colors border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#B79A62]" />
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3.5 bg-[#B79A62] hover:bg-[#a68953] text-[#183C32] font-semibold text-xs tracking-widest uppercase rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Wholesale Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-white/70 space-y-1">
              <p>Email: {COMPANY_DETAILS.emails[0]}</p>
              <p>Direct: {COMPANY_DETAILS.phoneFormatted}</p>
              <p className="text-[#A8B7A1] text-[11px] pt-1">Datia, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
