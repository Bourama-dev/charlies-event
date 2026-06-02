'use client';

import { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Nous Contacter</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Coordonnées</h3>
            <p>
              <strong>Téléphone:</strong><br />
              <a href="tel:+33XXXXXXXXXX">+33 (0)X XX XX XX XX</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:contact@charliesevents.com">contact@charliesevents.com</a>
            </p>
            <p>
              <strong>Localisation:</strong><br />
              Cergy, Île-de-France
            </p>
            <div className="credentials">
              <p>
                <strong>Licences:</strong><br />
                Producteur de spectacles n° 2-1073209 & 2-1073210
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Votre message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
}
