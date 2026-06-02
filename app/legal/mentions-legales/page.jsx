'use client';

import '../legal.css';

export default function MentionsLegales() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Mentions Légales</h1>
          <p className="hero-subtitle">Informations légales sur Charlie's Events</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <h2>Informations Légales</h2>

            <h3>Éditeur du site</h3>
            <p>
              <strong>Raison sociale:</strong> Charlie's Events<br />
              <strong>Statut juridique:</strong> SARL<br />
              <strong>Localisation:</strong> Cergy, Île-de-France<br />
              <strong>Téléphone:</strong> +33 (0)X XX XX XX XX<br />
              <strong>Email:</strong> contact@charliesevents.com
            </p>

            <h3>Licences Producteur de Spectacles</h3>
            <p>Charlie's Events est titulaire des licences Producteur de Spectacles n° 2-1073209 et 2-1073210.</p>

            <h3>Directeur de la publication</h3>
            <p>Le présent site internet est édité et administré par Charlie's Events.</p>

            <h3>Hébergement</h3>
            <p>Ce site est hébergé par une plateforme fiable offrant une disponibilité optimale.</p>

            <h3>Propriété intellectuelle</h3>
            <p>Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont la propriété exclusive de Charlie's Events ou de ses partenaires. Toute reproduction ou représentation, intégrale ou partielle, est interdite sans autorisation préalable.</p>

            <h3>Données personnelles</h3>
            <p>Les données collectées via ce site sont traitées conformément à la politique de confidentialité. Pour plus d'informations, consultez notre <a href="/legal/politique-confidentialite">Politique de Confidentialité</a>.</p>

            <h3>Responsabilité</h3>
            <p>Charlie's Events décline toute responsabilité pour les dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.</p>
          </div>
        </div>
      </section>
    </>
  );
}
