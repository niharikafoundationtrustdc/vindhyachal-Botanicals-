import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { MissionVision } from './components/MissionVision';
import { ProductCatalog } from './components/ProductCatalog';
import { PrivateLabeling } from './components/PrivateLabeling';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';

import { PRODUCTS, COMPANY_DETAILS } from './data/products';
import { Product, PackOption, CartItem } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Cart state with localStorage fallback
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('vb_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Currency selection: INR (₹) default, USD ($) for international export
  const [currency, setCurrency] = useState<'INR' | 'USD'>(() => {
    try {
      const saved = localStorage.getItem('vb_currency');
      return saved === 'USD' ? 'USD' : 'INR';
    } catch {
      return 'INR';
    }
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [prefilledQuoteProduct, setPrefilledQuoteProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vb_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Persist currency
  useEffect(() => {
    try {
      localStorage.setItem('vb_currency', currency);
    } catch (e) {
      console.error('Failed to save currency to localStorage', e);
    }
  }, [currency]);

  // Cart actions
  const handleAddToCart = (product: Product, pack: PackOption, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedPack.size === pack.size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedPack: pack, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, packSize: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId, packSize);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedPack.size === packSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, packSize: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedPack.size === packSize))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 flex flex-col font-sans selection:bg-[#0e632b]/20 selection:text-[#0e632b]">
      {/* Top Main Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuote={() => {
          setPrefilledQuoteProduct(null);
          setIsQuoteOpen(true);
        }}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products-section')}
          onRequestQuote={() => {
            setPrefilledQuoteProduct(null);
            setIsQuoteOpen(true);
          }}
          onExplorePrivateLabel={() => scrollToSection('private-labeling')}
        />

        {/* Natural Essential oils manufacturers in India & Who We Are */}
        <WhoWeAre />

        {/* Our Mission & Our Vision */}
        <MissionVision
          onGetMoreInfo={() => {
            setPrefilledQuoteProduct(null);
            setIsQuoteOpen(true);
          }}
        />

        {/* Complete Product Catalog & Pricing */}
        <ProductCatalog
          products={PRODUCTS}
          selectedCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          currency={currency}
          onAddToCart={handleAddToCart}
          onOpenProductModal={(prod) => setSelectedProductModal(prod)}
          onRequestQuoteForProduct={(prod) => {
            setPrefilledQuoteProduct(prod);
            setIsQuoteOpen(true);
          }}
        />

        {/* Private Labeling & Custom Packaging */}
        <PrivateLabeling />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onSelectCategory={setActiveCategory}
        onOpenQuote={() => {
          setPrefilledQuoteProduct(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Cart & Wholesale Quote Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenQuoteModal={() => {
          setIsCartOpen(false);
          setPrefilledQuoteProduct(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Product Detail Specifications Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
      />

      {/* Bulk Wholesale RFQ Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledProduct={prefilledQuoteProduct}
      />

      {/* Floating Instant WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Vindhyachal%20Botanicals%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20pure%20natural%20oils%20and%20private%20labeling.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Factory Team
        </span>
      </a>
    </div>
  );
}
