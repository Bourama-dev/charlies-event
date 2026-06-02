'use client';

import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Prêt à créer<br />votre prochain événement?</h2>
        <p className="cta-subtitle">Nos experts vous accompagnent de l'idée à la réalisation</p>
        <button className="cta-large">Demander un devis gratuit</button>
      </div>
    </section>
  );
}
