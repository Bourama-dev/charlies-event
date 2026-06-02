'use client';

import './TrustSection.css';

const clients = [
  { name: 'IKEA' },
  { name: 'Client 1' },
  { name: 'Client 2' },
  { name: 'Fujitsu & Siemens' },
  { name: 'Grand Paris Seine Ouest' },
  { name: 'Marques Avenue' }
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="trust-subtitle">Nos clients de confiance</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <div className="client-name">{client.name}</div>
            </div>
          ))}
        </div>
        <div className="trust-badges">
          <div className="badge">
            <span className="badge-number">20+</span>
            <span className="badge-label">ans d'expertise</span>
          </div>
          <div className="badge">
            <span className="badge-number">500+</span>
            <span className="badge-label">événements réalisés</span>
          </div>
          <div className="badge">
            <span className="badge-number">Licences</span>
            <span className="badge-label">Producteur de spectacles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
