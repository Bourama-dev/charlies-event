'use client';

import Hero from '../components/Hero';
import SectorsSection from '../components/SectorsSection';

export default function PrestationsPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Nos Prestations</h1>
          <p className="hero-subtitle">Des solutions adaptées à chaque secteur</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <SectorsSection />

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Prêt à créer<br />votre prochain événement?</h2>
          <p className="cta-subtitle">Nos experts vous accompagnent de l'idée à la réalisation</p>
          <button className="cta-large">Demander un devis gratuit</button>
        </div>
      </section>
    </>
  );
}
