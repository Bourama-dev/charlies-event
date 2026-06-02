'use client';

import './SectorsSection.css';

const sectors = [
  {
    title: 'Centres Commerciaux',
    description: 'Animations d\'accès augmentez la fréquentation et transformez vos espaces en lieux de vie',
    features: [
      'Animations enfants & familles',
      'Shows & spectacles',
      'Événements saisonniers',
      'Jeux interactifs'
    ]
  },
  {
    title: 'Collectivités',
    description: 'Événements publics fédérateurs et mémorables pour vos administrés',
    features: [
      'Fêtes publiques',
      'Spectacles gratuits',
      'Événements culturels',
      'Animations communales'
    ]
  },
  {
    title: 'Entreprises',
    description: 'Événements corporate : séminaires, teambuilding et événements de prestige',
    features: [
      'Team-building créatif',
      'Séminaires & conférences',
      'Lancement de produits',
      'Gala & événements prestige'
    ]
  }
];

export default function SectorsSection() {
  return (
    <section className="sectors-section">
      <div className="container">
        <h2 className="section-title">Nos Prestations par Secteur</h2>
        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
              <ul className="sector-features">
                {sector.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
