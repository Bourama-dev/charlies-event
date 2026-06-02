'use client';

import ConceptsSection from '../components/ConceptsSection';

export default function ConceptsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Nos Concepts Signature</h1>
          <p className="hero-subtitle">Des univers uniques et mémorables</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <ConceptsSection />

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Intéressé par l'un de nos concepts?</h2>
          <p className="cta-subtitle">Contactez-nous pour plus de détails</p>
          <button className="cta-large">Nous contacter</button>
        </div>
      </section>
    </>
  );
}
