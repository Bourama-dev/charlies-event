'use client';

import './Hero.css';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Créez l'Événement<br />qui marquera vos esprits</h1>
        <p className="hero-subtitle">20 ans d'expertise en animations, spectacles et événements premium</p>
        <div className="hero-ctas">
          <button className="cta-primary">Demander un devis</button>
          <button className="cta-secondary">Prendre rendez-vous</button>
        </div>
      </div>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
    </header>
  );
}
