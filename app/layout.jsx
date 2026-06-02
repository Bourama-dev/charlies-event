import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata = {
  title: 'Charlie\'s Events | Agence Événementielle Premium',
  description: 'Agence événementielle premium spécialisée en animations, spectacles et événements. L\'excellence à chaque instant.',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0F0F0F',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon-new.svg" type="image/svg+xml" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
