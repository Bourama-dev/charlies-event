'use client';

import './ConceptsSection.css';

const concepts = [
  {
    image: '/images/concepts/mascotte.jpg',
    alt: 'La Ferme d\'Arthus et Zora',
    title: 'La Ferme d\'Arthus et Zora',
    description: 'Un univers fantastique et convivial pour les familles. Animation immersive combinant rencontres animales, ateliers créatifs et spectacles magiques.'
  },
  {
    icon: '🌱',
    title: 'Développement Durable',
    description: 'Événements responsables intégrant sensibilisation environnementale, matériaux éco-responsables et animations pédagogiques pour tous.'
  },
  {
    image: '/images/concepts/technique-escape.jpg',
    alt: 'Dans les Étoiles',
    title: 'Dans les Étoiles',
    description: 'Spectacles de haut niveau mêlant technologies modernes, production musicale et mise en scène professionnelle pour un impact inoubliable.'
  }
];

export default function ConceptsSection() {
  return (
    <section className="concepts-section">
      <div className="container">
        <h2 className="section-title">Nos Concepts Signature</h2>
        <div className="concepts-grid">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-card">
              {concept.image ? (
                <img
                  src={concept.image}
                  alt={concept.alt}
                  className="concept-image"
                />
              ) : (
                <div className="concept-icon">{concept.icon}</div>
              )}
              <h3>{concept.title}</h3>
              <p>{concept.description}</p>
              <a href="#" className="concept-link">Découvrir →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
