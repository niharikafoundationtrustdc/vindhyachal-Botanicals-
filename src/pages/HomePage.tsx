import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { AboutIntro } from '../components/AboutIntro';
import { CategoryGrid } from '../components/CategoryGrid';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { QualitySustainability } from '../components/QualitySustainability';
import { PrivateLabelSection } from '../components/PrivateLabelSection';
import { PackagingShowcase } from '../components/PackagingShowcase';
import { ContractManufacturing } from '../components/ContractManufacturing';
import { WellbeingSection } from '../components/WellbeingSection';
import { GlobalReach } from '../components/GlobalReach';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CTASection } from '../components/CTASection';
import { ContactSection } from '../components/ContactSection';
import { Product } from '../types';

interface HomePageProps {
  onNavigateToProducts: () => void;
  onNavigateToAbout: () => void;
  onNavigateToPrivateLabel: () => void;
  onNavigateToPackaging: () => void;
  onNavigateToContact: () => void;
  onRequestQuote: () => void;
  onViewProduct: (product: Product) => void;
  onRequestBulkPricing: (product: Product) => void;
  onRequestSpecification: (product: Product) => void;
  onSelectCategory: (categoryName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToProducts,
  onNavigateToAbout,
  onNavigateToPrivateLabel,
  onNavigateToPackaging,
  onNavigateToContact,
  onRequestQuote,
  onViewProduct,
  onRequestBulkPricing,
  onRequestSpecification,
  onSelectCategory,
}) => {
  return (
    <main className="w-full">
      {/* 1. Hero Section */}
      <Hero
        onExploreProducts={onNavigateToProducts}
        onRequestQuote={onRequestQuote}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About Introduction */}
      <AboutIntro onDiscoverStory={onNavigateToAbout} />

      {/* 4. Product Categories (Asymmetrical Editorial Grid) */}
      <CategoryGrid
        onSelectCategory={(catName) => {
          onSelectCategory(catName);
          onNavigateToProducts();
        }}
      />

      {/* 5. Featured Products Showcase */}
      <FeaturedProducts
        onViewProduct={onViewProduct}
        onRequestBulkPricing={onRequestBulkPricing}
        onRequestSpecification={onRequestSpecification}
        onExploreAll={onNavigateToProducts}
      />

      {/* 6. Quality & Sustainability */}
      <QualitySustainability onRequestCOA={onRequestQuote} />

      {/* 7. Private Label Solutions */}
      <PrivateLabelSection onStartProject={onNavigateToPrivateLabel} />

      {/* 8. Custom Packaging Showcase */}
      <PackagingShowcase onDiscussPackaging={onNavigateToPackaging} />

      {/* 9. Contract Manufacturing Timeline */}
      <ContractManufacturing onTalkToTeam={onRequestQuote} />

      {/* 10. Well-being Section */}
      <WellbeingSection />

      {/* 11. Global Reach */}
      <GlobalReach />

      {/* 12. Why Choose Us */}
      <WhyChooseUs />

      {/* 13. CTA Section */}
      <CTASection
        onRequestQuote={onRequestQuote}
        onTalkToTeam={onNavigateToContact}
      />

      {/* 14. Contact Section */}
      <ContactSection />
    </main>
  );
};
