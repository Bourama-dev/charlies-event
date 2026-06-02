'use client';

import './TrustSection.css';

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="section-subtitle">Nos clients de confiance</h2>
        <div className="clients-grid">
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="white" />
              <ellipse cx="100" cy="100" rx="80" ry="70" fill="#003399" />
              <ellipse cx="100" cy="100" rx="75" ry="65" fill="#FFD700" />
              <text x="100" y="110" fontSize="36" fontWeight="bold" textAnchor="middle" fill="#003399" dominantBaseline="middle" fontFamily="Arial, sans-serif">IKEA</text>
            </svg>
          </div>
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="#DC143C" />
              <text x="100" y="125" fontSize="48" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Georgia, serif" fontStyle="italic" letterSpacing="-2">Coca-Cola</text>
            </svg>
          </div>
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="white" />
              <polygon points="20,120 60,60 100,60 140,120" fill="#FFD700" />
              <rect x="60" y="75" width="20" height="45" fill="#FFD700" />
              <rect x="90" y="75" width="20" height="45" fill="#FFD700" />
              <rect x="120" y="75" width="20" height="45" fill="#CC0000" />
              <rect x="150" y="75" width="20" height="45" fill="#CC0000" />
              <polygon points="150,120 170,75 180,75 160,120" fill="#CC0000" />
              <text x="100" y="155" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#CC0000" dominantBaseline="middle" fontFamily="Arial">CARGLASS</text>
            </svg>
          </div>
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="none" />
              <rect x="30" y="40" width="60" height="60" fill="#EE1C25" />
              <rect x="110" y="40" width="60" height="60" fill="#000" />
              <text x="60" y="95" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Fujitsu</text>
              <text x="140" y="95" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Siemens</text>
              <text x="100" y="160" fontSize="12" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Technology</text>
            </svg>
          </div>
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="none" />
              <rect x="20" y="50" width="160" height="100" fill="none" stroke="#C9A84C" strokeWidth="3" rx="8" />
              <text x="100" y="90" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#C9A84C" dominantBaseline="middle" fontFamily="Arial">Grand Paris</text>
              <text x="100" y="120" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#C9A84C" dominantBaseline="middle" fontFamily="Arial">Seine Ouest</text>
            </svg>
          </div>
          <div className="client-logo">
            <svg viewBox="0 0 200 200" className="brand-logo">
              <rect width="200" height="200" fill="white" />
              <circle cx="100" cy="100" r="75" fill="none" stroke="#333333" strokeWidth="8" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="#333333" strokeWidth="8" />
              <circle cx="100" cy="100" r="35" fill="none" stroke="#333333" strokeWidth="8" />
              <rect x="75" y="85" width="50" height="30" fill="#333333" />
              <text x="100" y="108" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">MARQUES</text>
              <text x="100" y="140" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333333" dominantBaseline="middle" fontFamily="Arial">AVENUE</text>
            </svg>
          </div>
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
