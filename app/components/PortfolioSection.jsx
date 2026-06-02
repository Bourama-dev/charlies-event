'use client';

import { useState } from 'react';
import './PortfolioSection.css';

const portfolioItems = [
  {
    category: 'animations',
    title: 'Animation Artiste - Spectacle Immersif',
    subtitle: 'Performance artistique captivante',
    image: '/images/portfolio/artiste.jpg',
    alt: 'Spectacle artiste'
  },
  {
    category: 'spectacles',
    title: 'Spectacle Musical - Bulle Magique',
    subtitle: 'Expérience interactive enchantée',
    image: '/images/portfolio/artiste-bulle.jpg',
    alt: 'Spectacle bulle magique'
  },
  {
    category: 'animations',
    title: 'Animation Noël - Événement Festif',
    subtitle: 'Réjouissances hivernales inoubliables',
    image: '/images/portfolio/noel.jpg',
    alt: 'Animation Noël'
  },
  {
    category: 'events',
    title: 'Événement Corporate - Team-building',
    subtitle: 'Animation d\'entreprise créative',
    gradient: 'linear-gradient(135deg, #FF6B6B 0%, #C92A2A 100%)',
    placeholder: 'Événement Corporate'
  },
  {
    category: 'spectacles',
    title: 'Spectacle pour Enfants - Collectivité',
    subtitle: 'Fête communale annuelle',
    gradient: 'linear-gradient(135deg, #FFD93D 0%, #F4A100 100%)',
    placeholder: 'Spectacle Enfants'
  },
  {
    category: 'events',
    title: 'Gala d\'Entreprise - Événement Prestige',
    subtitle: 'Lancement de produit premium',
    gradient: 'linear-gradient(135deg, #95E1D3 0%, #38A169 100%)',
    placeholder: 'Gala d\'Entreprise'
  }
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Nos Réalisations</h2>
        <div className="portfolio-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          <button
            className={`filter-btn ${filter === 'animations' ? 'active' : ''}`}
            onClick={() => setFilter('animations')}
          >
            Animations
          </button>
          <button
            className={`filter-btn ${filter === 'spectacles' ? 'active' : ''}`}
            onClick={() => setFilter('spectacles')}
          >
            Spectacles
          </button>
          <button
            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            Événements
          </button>
        </div>
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="portfolio-image"
                />
              ) : (
                <div
                  className="portfolio-image portfolio-placeholder"
                  style={{ background: item.gradient }}
                >
                  <span className="placeholder-text">{item.placeholder}</span>
                </div>
              )}
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
