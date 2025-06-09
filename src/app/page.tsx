
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { NecessitySection } from '@/components/sections/necessity-section';
import { ProductGallerySection } from '@/components/sections/product-gallery-section';
import { AboutUsSection } from '@/components/sections/about-us-section';
import { TechnicalGallerySection } from '@/components/sections/technical-gallery-section';
import { AnimationProvider } from '@/contexts/animation-context';

export default function Home() {
  return (
    <AnimationProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <NecessitySection />
          <ProductGallerySection />
          <AboutUsSection />
          <TechnicalGallerySection />
          {/* Removed Animagic specific sections: FeaturesSection, HowItWorksSection, PricingSection */}
          {/* Contact form is now part of the Footer for FITYZ */}
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

    