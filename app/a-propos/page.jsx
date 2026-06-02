'use client';

import Hero from '../components/Hero';
import Link from 'next/link';
import './about.css';

const values = [
  { icon: '⚙️', title: 'Rigueur & Fiabilité', description: 'Une exécution sans faille, chaque détail compte. Vous pouvez nous faire confiance.' },
  { icon: '👂', title: 'Écoute & Conseil', description: 'Nous comprenons vos besoins et vous guidons vers les meilleures solutions.' },
  { icon: '💡', title: 'Créativité & Originalité', description: 'Des idées fraîches et des concepts exclusifs qui font la différence.' },
  { icon: '⚡', title: 'Réactivité & Accompagnement', description: 'À vos côtés avant, pendant et après. Toujours un pas d\'avance.' },
  { icon: '🚀', title: 'Innovation Permanente', description: 'Nouveaux artistes, nouvelles tendances, nouvelles technologies. Toujours inédit.' },
  { icon: '❤️', title: 'Passion du Métier', description: 'L\'événementiel est notre passion. Elle se ressent dans chaque création.' }
];

const stats = [
  { number: '20+', label: 'ans d\'expérience' },
  { number: '500+', label: 'événements réalisés' },
  { number: '30+', label: 'clients majeurs' },
  { number: '2', label: 'licences producteur' }
];

export default function AboutPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Notre Histoire</h1>
          <p className="hero-subtitle">20 ans d'excellence dans l'événementiel premium</p>
        </div>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Qui sommes-nous ?</h2>
              <p>Depuis 2005, <strong>Charlie's Events</strong> est l'agence événementielle de référence pour les centres commerciaux, les collectivités et les entreprises. Nous créons des expériences mémorables qui marquent les esprits.</p>

              <div className="about-quote">
                <p><em>"Petit, mais tous les talents d'un grand"</em></p>
              </div>

              <h3>Notre Philosophie</h3>
              <p>Rigueur, écoute, analyse, conseil, création, réactivité, accompagnement, optimisation, fiabilité, originalité et innovation. Être votre partenaire de confiance.</p>

              <h3>Notre Promesse</h3>
              <p>Surprendre, convaincre, motiver, faire mémoriser, faire savoir, faire adhérer, développer vos ventes, rentabiliser. Être unique.</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nos Valeurs</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Notre Équipe</h2>
          <p className="section-subtitle">Dynamique, motivée et toujours à la recherche des meilleurs moyens pour satisfaire vos objectifs</p>

          <div className="team-description">
            <p>Nos talents multidisciplinaires mettent leur passion et leur originalité au service de votre événement :</p>
            <div className="team-roles">
              <div className="role-group">
                <h4>Direction & Gestion</h4>
                <ul>
                  <li>Chefs de projets marketing et communication</li>
                  <li>Spécialistes de l'événementiel</li>
                </ul>
              </div>
              <div className="role-group">
                <h4>Création & Technique</h4>
                <ul>
                  <li>Graphistes</li>
                  <li>Webmasters</li>
                  <li>Techniciens sons et lumières</li>
                </ul>
              </div>
              <div className="role-group">
                <h4>Animation & Opérations</h4>
                <ul>
                  <li>Régisseurs / Régisseuses</li>
                  <li>Hôtesses d'accueil</li>
                  <li>Animateurs professionnels</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cta-centered">
            <Link href="/equipe" className="cta-secondary">Découvrir notre équipe</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Prêt à créer<br />votre prochain événement?</h2>
          <p className="cta-subtitle">20 ans d'expertise au service de votre projet</p>
          <Link href="/contact" className="cta-large">Nous contacter</Link>
        </div>
      </section>
    </>
  );
}
