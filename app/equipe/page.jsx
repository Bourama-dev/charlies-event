'use client';

import './team.css';

const teamMembers = [
  {
    name: 'Coordinatrice générale',
    description: 'Pilote l\'agence avec vision et leadership, assure la satisfaction des clients et l\'excellence des projets'
  },
  {
    name: 'Chefs de projets',
    description: 'Orchestrent vos événements de A à Z : conception, organisation, suivi et réalisation'
  },
  {
    name: 'Créatifs et Designers',
    description: 'Donnent vie à vos idées avec des concepts originaux et des visuels impactants'
  },
  {
    name: 'Techniciens',
    description: 'Garantissent la qualité technique : son, lumière, vidéo et installations'
  },
  {
    name: 'Animateurs',
    description: 'Créent la magie et l\'interactivité, incarnent l\'esprit de votre événement'
  },
  {
    name: 'Administratifs',
    description: 'Assurent le suivi administratif, la facturation et la gestion administrative'
  }
];

export default function EquipePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Notre Équipe</h1>
          <p className="hero-subtitle">Les talents qui créent vos événements inoubliables</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <section className="team-members-section">
        <div className="container">
          <h2 className="section-title">Nos Professionnels</h2>
          <p className="section-lead">Chaque membre de notre équipe apporte son expertise et sa passion à vos projets</p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-avatar">
                  <span>{index + 1}</span>
                </div>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Travaillez avec nous</h2>
          <p className="cta-subtitle">Découvrez comment notre équipe peut transformer votre événement</p>
          <button className="cta-large">Demander un devis</button>
        </div>
      </section>
    </>
  );
}
