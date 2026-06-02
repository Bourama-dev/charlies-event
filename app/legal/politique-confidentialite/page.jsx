'use client';

import '../legal.css';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Politique de Confidentialité</h1>
          <p className="hero-subtitle">Protection de vos données personnelles</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <h2>Politique de Confidentialité</h2>

            <h3>Collecte des données</h3>
            <p>Charlie's Events collecte les données personnelles que vous fournissez volontairement via les formulaires de contact et de devis présents sur le site. Ces données incluent notamment votre nom, adresse email, numéro de téléphone et message.</p>

            <h3>Utilisation des données</h3>
            <p>Vos données personnelles sont utilisées exclusivement pour :</p>
            <ul style={{ marginLeft: '20px', color: 'var(--text-secondary)' }}>
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous proposer nos services et prestations</li>
              <li>Améliorer notre communication</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h3>Durée de conservation</h3>
            <p>Vos données personnelles sont conservées pour la durée nécessaire au traitement de votre demande et conformément aux délais légaux applicables.</p>

            <h3>Sécurité</h3>
            <p>Charlie's Events met en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification ou destruction non autorisés.</p>

            <h3>Droits d'accès et de rectification</h3>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à contact@charliesevents.com.</p>

            <h3>Partage des données</h3>
            <p>Vos données ne sont jamais partagées avec des tiers sans votre consentement, sauf si cela est exigé par la loi.</p>

            <h3>Modification de la politique</h3>
            <p>Cette politique peut être modifiée à tout moment. Les modifications seront publiées sur cette page.</p>

            <h3>Contact</h3>
            <p>Pour toute question relative à notre politique de confidentialité, veuillez nous contacter : contact@charliesevents.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
