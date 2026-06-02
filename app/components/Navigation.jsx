'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className="logo-link">
            <img src="/logo-new.png" alt="Charlie's Events" className="navbar-logo-img" />
          </Link>
        </div>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" className="nav-link" onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className="nav-link" onClick={closeMobileMenu}>
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/prestations" className="nav-link" onClick={closeMobileMenu}>
              Prestations
            </Link>
          </li>
          <li>
            <Link href="/concepts" className="nav-link" onClick={closeMobileMenu}>
              Concepts
            </Link>
          </li>
          <li>
            <Link href="/realisations" className="nav-link" onClick={closeMobileMenu}>
              Réalisations
            </Link>
          </li>
          <li>
            <Link href="/equipe" className="nav-link" onClick={closeMobileMenu}>
              Équipe
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
