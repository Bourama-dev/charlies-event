'use client';

import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/logo-new.svg" alt="Charlie's Events" className="footer-logo" />
          <p>Agence événementielle premium spécialisée en animations, spectacles et événements. L'excellence à chaque instant.</p>
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/a-propos">À Propos</Link></li>
            <li><Link href="/prestations">Prestations</Link></li>
            <li><Link href="/concepts">Concepts</Link></li>
            <li><Link href="/realisations">Réalisations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Prestations</h4>
          <ul>
            <li><Link href="/prestations#centres-commerciaux">Centres Commerciaux</Link></li>
            <li><Link href="/prestations#collectivites">Collectivités</Link></li>
            <li><Link href="/prestations#entreprises">Entreprises</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Légal</h4>
          <ul>
            <li><Link href="/legal/mentions-legales">Mentions Légales</Link></li>
            <li><Link href="/legal/politique-confidentialite">Politique de Confidentialité</Link></li>
            <li><Link href="/legal/conditions-generales">Conditions Générales</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Charlie's Events. Tous droits réservés. | Licences Producteur de Spectacles n° 2-1073209 & 2-1073210</p>
      </div>
    </footer>
  );
}
