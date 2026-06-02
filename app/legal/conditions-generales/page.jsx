'use client';

import '../legal.css';

export default function ConditionsGenerales() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Conditions Générales</h1>
          <p className="hero-subtitle">Conditions d'utilisation de nos services</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <h2>Conditions Générales d'Utilisation</h2>

            <h3>Objet</h3>
            <p>Les présentes conditions générales définissent les termes et conditions d'accès et d'utilisation du site internet de Charlie's Events ainsi que les services proposés.</p>

            <h3>Accessibilité du site</h3>
            <p>Charlie's Events s'efforce de garantir une disponibilité continue du site. Cependant, le site peut être temporairement indisponible pour des raisons de maintenance ou de mise à jour.</p>

            <h3>Utilisation du site</h3>
            <p>L'utilisateur s'engage à utiliser le site de manière légale et à ne pas :</p>
            <ul style={{ marginLeft: '20px', color: 'var(--text-secondary)' }}>
              <li>Porter atteinte à la sécurité du site</li>
              <li>Violer les droits de propriété intellectuelle</li>
              <li>Poster des contenus offensants ou illégaux</li>
              <li>Utiliser le site à des fins commerciales non autorisées</li>
            </ul>

            <h3>Services proposés</h3>
            <p>Charlie's Events propose des prestations événementielles sur devis. Chaque prestation est définie par un contrat spécifique entre les parties.</p>

            <h3>Limitation de responsabilité</h3>
            <p>Charlie's Events décline toute responsabilité pour les dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site ou ses services.</p>

            <h3>Propriété intellectuelle</h3>
            <p>Tous les éléments du site (textes, images, designs, logos) sont protégés par les droits d'auteur et la propriété intellectuelle. Toute reproduction est interdite sans autorisation.</p>

            <h3>Liens externes</h3>
            <p>Le site peut contenir des liens vers d'autres sites. Charlie's Events ne contrôle pas le contenu de ces sites et ne peut être tenue responsable de leurs contenus.</p>

            <h3>Modification des conditions</h3>
            <p>Charlie's Events se réserve le droit de modifier à tout moment les présentes conditions générales. Les modifications seront applicables dès leur publication.</p>

            <h3>Loi applicable</h3>
            <p>Les présentes conditions générales sont régies par la loi française. Tout litige sera soumis aux tribunaux compétents.</p>

            <h3>Contact</h3>
            <p>Pour toute question concernant ces conditions générales, contactez-nous : contact@charliesevents.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
