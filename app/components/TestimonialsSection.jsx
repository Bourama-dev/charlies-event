'use client';

import './TestimonialsSection.css';

const testimonials = [
  {
    stars: '★★★★★',
    text: '"Charlie\'s Events a transformé notre centre commercial avec une animation captivante et professionnelle. Notre fréquentation a augmenté de 35% pendant la période d\'animation."',
    author: 'Directeur - Centre Commercial Île-de-France'
  },
  {
    stars: '★★★★★',
    text: '"Une équipe réactive, créative et professionnelle. Ils ont dépassé nos attentes pour notre événement corporate. Nos collaborateurs en parlent encore!"',
    author: 'Responsable RH - Groupe Fortune 500'
  },
  {
    stars: '★★★★★',
    text: '"Depuis 15 ans, Charlie\'s Events crée les animations de nos fêtes publiques. Qualité, fiabilité et innovation à chaque fois. Incontournable!"',
    author: 'Maire - Collectivité Île-de-France'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Ce que disent nos clients</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">{testimonial.stars}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
