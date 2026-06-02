'use client';

import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ConceptsSection from './components/ConceptsSection';
import SectorsSection from './components/SectorsSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ConceptsSection />
      <SectorsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
