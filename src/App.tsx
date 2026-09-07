import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PrivateLabelPage } from './pages/PrivateLabelPage';
import { CustomPackagingPage } from './pages/CustomPackagingPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { SpecModal } from './components/SpecModal';
import { FloatingActions } from './components/FloatingActions';
import { Product } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [initialProductsCategory, setInitialProductsCategory] = useState<string>('All');

  // Modals state
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePreselectedProduct, setQuotePreselectedProduct] = useState<string | undefined>(undefined);

  const [isSpecModalOpen, setIsSpecModalOpen] = useState<boolean>(false);
  const [specProduct, setSpecProduct] = useState<Product | null>(null);

  // Sync with browser hash if user uses anchor or deep-links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'products', 'private-label', 'custom-packaging', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
        setSelectedProduct(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName?: string) => {
    setQuotePreselectedProduct(productName);
    setIsQuoteModalOpen(true);
  };

  const handleOpenSpec = (product: Product) => {
    setSpecProduct(product);
    setIsSpecModalOpen(true);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#202723] flex flex-col font-sans-brand antialiased selection:bg-[#183C32] selection:text-[#F7F4EC]">
      
      {/* Sticky B2B Botanical Header */}
      <Header
        currentPage={selectedProduct ? 'products' : currentPage}
        onNavigate={navigateTo}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Main Routed Page Content */}
      <div className="flex-1 w-full">
        {selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onRequestBulkPricing={(prod) => handleOpenQuote(prod.name)}
            onRequestSpecification={handleOpenSpec}
            onSelectProduct={handleViewProduct}
            onNavigateToPrivateLabel={() => navigateTo('private-label')}
          />
        ) : (
          <>
            {currentPage === 'home' && (
              <HomePage
                onNavigateToProducts={() => navigateTo('products')}
                onNavigateToAbout={() => navigateTo('about')}
                onNavigateToPrivateLabel={() => navigateTo('private-label')}
                onNavigateToPackaging={() => navigateTo('custom-packaging')}
                onNavigateToContact={() => navigateTo('contact')}
                onRequestQuote={() => handleOpenQuote()}
                onViewProduct={handleViewProduct}
                onRequestBulkPricing={(prod) => handleOpenQuote(prod.name)}
                onRequestSpecification={handleOpenSpec}
                onSelectCategory={(cat) => {
                  setInitialProductsCategory(cat);
                  navigateTo('products');
                }}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onRequestQuote={() => handleOpenQuote()}
                onNavigateToProducts={() => navigateTo('products')}
              />
            )}

            {currentPage === 'products' && (
              <ProductsPage
                onViewProduct={handleViewProduct}
                onRequestBulkPricing={(prod) => handleOpenQuote(prod.name)}
                onRequestSpecification={handleOpenSpec}
                initialCategory={initialProductsCategory}
              />
            )}

            {currentPage === 'private-label' && (
              <PrivateLabelPage
                onRequestQuote={() => handleOpenQuote('Private Label Consultation')}
              />
            )}

            {currentPage === 'custom-packaging' && (
              <CustomPackagingPage
                onRequestQuote={() => handleOpenQuote('Custom Packaging Inquiry')}
              />
            )}

            {currentPage === 'contact' && <ContactPage />}
          </>
        )}
      </div>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* RFQ / Wholesale Quotation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedProduct={quotePreselectedProduct}
      />

      {/* Specification & COA Download Modal */}
      <SpecModal
        isOpen={isSpecModalOpen}
        onClose={() => {
          setIsSpecModalOpen(false);
          setSpecProduct(null);
        }}
        product={specProduct}
      />

      {/* Subtle Floating Contact & Quote Actions */}
      <FloatingActions onRequestQuote={() => handleOpenQuote()} />

    </div>
  );
}
