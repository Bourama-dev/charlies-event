'use client';

import './TrustSection.css';

const clientLogos = [
  {
    src: '/images/clients/ikea.webp',
    alt: 'IKEA'
  },
  {
    src: '/images/clients/logo1.png',
    alt: 'Client 1'
  },
  {
    src: '/images/clients/logo2.png',
    alt: 'Client 2'
  }
];

const svgClients = [
  {
    viewBox: "0 0 200 200",
    content: (
      <>
        <rect width="200" height="200" fill="none" />
        <rect x="30" y="40" width="60" height="60" fill="#EE1C25" />
        <rect x="110" y="40" width="60" height="60" fill="#000" />
        <text x="60" y="95" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Fujitsu</text>
        <text x="140" y="95" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Siemens</text>
        <text x="100" y="160" fontSize="12" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">Technology</text>
      </>
    )
  },
  {
    viewBox: "0 0 200 200",
    content: (
      <>
        <rect width="200" height="200" fill="none" />
        <rect x="20" y="50" width="160" height="100" fill="none" stroke="#C9A84C" strokeWidth="3" rx="8" />
        <text x="100" y="90" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#C9A84C" dominantBaseline="middle" fontFamily="Arial">Grand Paris</text>
        <text x="100" y="120" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#C9A84C" dominantBaseline="middle" fontFamily="Arial">Seine Ouest</text>
      </>
    )
  },
  {
    viewBox: "0 0 200 200",
    content: (
      <>
        <rect width="200" height="200" fill="white" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="#333333" strokeWidth="8" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#333333" strokeWidth="8" />
        <circle cx="100" cy="100" r="35" fill="none" stroke="#333333" strokeWidth="8" />
        <rect x="75" y="85" width="50" height="30" fill="#333333" />
        <text x="100" y="108" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial">MARQUES</text>
        <text x="100" y="140" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#333333" dominantBaseline="middle" fontFamily="Arial">AVENUE</text>
      </>
    )
  }
];

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <h2 className="trust-subtitle">Nos clients de confiance</h2>
        <div className="clients-grid">
          {clientLogos.map((logo, index) => (
            <div key={`logo-${index}`} className="client-logo">
              <img src={logo.src} alt={logo.alt} className="brand-logo" />
            </div>
          ))}
          {svgClients.map((svgClient, index) => (
            <div key={`svg-${index}`} className="client-logo">
              <svg viewBox={svgClient.viewBox} className="brand-logo">
                {svgClient.content}
              </svg>
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
