'use client';

import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Nous Contacter</h1>
          <p className="hero-subtitle">Exprimez-nous vos besoins, nous trouverons la solution</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <ContactSection />
    </>
  );
}
