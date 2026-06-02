# Charlie's Events - Agence Événementielle Premium

Modern Next.js web application for Charlie's Events, a premium event agency specializing in animations, shows, and corporate events.

## Project Overview

Charlie's Events is rebuilding their web presence with a modern, performant Next.js application. This replaces the previous static HTML site with a component-based React architecture featuring:

- **Modern tech stack**: Next.js 16.2.7 with React 19.2.7
- **Premium design**: Dark theme with gold accents (#0F0F0F + #C9A84C)
- **Responsive layout**: Mobile-first approach with tailored breakpoints
- **Performance optimized**: Server-side rendering and static generation
- **SEO ready**: Meta tags, semantic HTML5, structured data

## Tech Stack

- **Framework**: Next.js 16.2.7 with App Router
- **UI Library**: React 19.2.7
- **Styling**: CSS modules with CSS custom properties (variables)
- **Build Tool**: Turbopack (Next.js default)
- **Version Control**: Git
- **Deployment**: Vercel (configured)

## Project Structure

```
charlies-event/
├── app/                          # Next.js App Router
│   ├── components/              # Reusable React components
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── TrustSection.jsx     # Client logos & badges
│   │   ├── ConceptsSection.jsx  # Signature concepts
│   │   ├── PortfolioSection.jsx # Project gallery
│   │   ├── SectorsSection.jsx   # Service sectors
│   │   ├── TestimonialsSection.jsx # Client testimonials
│   │   ├── ContactSection.jsx   # Contact form
│   │   ├── CTASection.jsx       # Call-to-action
│   │   └── Footer.jsx           # Footer
│   ├── a-propos/               # About page
│   ├── concepts/               # Concepts page
│   ├── contact/                # Contact page
│   ├── equipe/                 # Team page
│   ├── realisations/           # Realizations/portfolio page
│   ├── prestations/            # Services page
│   ├── legal/                  # Legal pages
│   ├── layout.jsx              # Root layout
│   ├── page.jsx                # Homepage
│   └── globals.css             # Global styles
├── public/                      # Static assets
│   ├── images/
│   │   ├── portfolio/          # Project images
│   │   ├── concepts/           # Concept images
│   │   ├── team/               # Team photos
│   │   └── clients/            # Client logos
│   ├── logo-new.png           # Main logo
│   └── favicon-new.svg        # Favicon
├── lib/                        # Utility functions
├── jsconfig.json              # JS path aliases
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
└── vercel.json               # Vercel deployment config
```

## Key Features

### 🎨 Design System
- **Theming**: CSS custom properties for colors, typography, spacing
- **Animations**: Subtle entrance animations and hover effects
- **Typography**: Playfair Display (headers) + DM Sans (body)
- **Color Palette**:
  - Background: #0F0F0F (dark)
  - Surface: #1A1A1A
  - Accent Gold: #C9A84C
  - Text Primary: #FFFFFF
  - Text Secondary: #B0B0B0

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grids and flexbox layouts
- Optimized for: 480px, 768px, 1024px, 1280px+

### 🖼️ Image Management
**Portfolio Images** (`/public/images/portfolio/`):
- artiste.jpg - Artist performance showcase
- artiste-bulle.jpg - Bubble magic show
- noel.jpg - Christmas event

**Concept Images** (`/public/images/concepts/`):
- mascotte.jpg - Farm concept visual
- technique-escape.jpg - Stars concept technical

**Team Image** (`/public/images/team/`):
- equipe-complet.jpg - Full team photo

**Client Logos** (`/public/images/clients/`):
- ikea.webp - Client logo
- logo1.png - Client logo
- logo2.png - Client logo

### 🧩 Components

**Navigation**
- Fixed top navbar with logo
- Navigation links to all main pages
- Mobile hamburger menu
- Smooth scroll behavior

**Hero Section**
- Large call-to-action buttons
- Gradient background overlay
- Responsive typography
- Two primary CTAs: "Demander un devis" and "Prendre rendez-vous"

**Trust Section**
- Client logo wall (6 clients)
- Experience badges (20+ years, 500+ events, licenses)
- Hover effects and animations

**Concepts Section**
- 3 signature concepts with images
- Description and discovery links
- Responsive grid layout

**Portfolio Section**
- Filterable gallery (All, Animations, Shows, Events)
- Image-based project cards
- Project info overlay

**Services Section**
- 3 main sectors: Shopping Centers, Public Sector, Corporate
- Feature lists per sector
- Icon-based layout

**Testimonials Section**
- Client testimonials with 5-star ratings
- Real client descriptions
- Professional formatting

**Contact Section**
- Contact form (name, email, phone, message)
- Contact information display
- License/credential information

**Footer**
- Logo and company description
- Navigation links
- Service links
- Legal links
- Copyright and license info

## Getting Started

### Prerequisites
- Node.js 18+ (recommended 20 LTS)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Development

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Linting (if configured)
npm run lint
```

## Component Development

Each component is self-contained with:
- **Component file** (`ComponentName.jsx`) - React logic
- **Styles file** (`ComponentName.css`) - Component-scoped CSS
- **Animations** - Smooth transitions and hover effects

### Creating a New Component

```jsx
// app/components/MyComponent.jsx
'use client';

import './MyComponent.css';

export default function MyComponent() {
  return (
    <section className="my-component">
      {/* Component content */}
    </section>
  );
}
```

## CSS Architecture

- **Global styles** in `app/globals.css`
- **Component styles** in colocated `.css` files
- **CSS custom properties** for theming and consistency
- **Mobile-first** media queries

### Color Variables
```css
:root {
  --bg-dark: #0F0F0F;
  --bg-surface: #1A1A1A;
  --accent-gold: #C9A84C;
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --text-white: #FFFFFF;
}
```

## Styling Best Practices

1. Use CSS custom properties for consistency
2. Responsive design with mobile-first approach
3. Component-scoped styles (avoid global conflicts)
4. Smooth animations (0.3s ease for interactions)
5. Accessible color contrasts

## SEO & Metadata

- Page titles and descriptions in layout
- Semantic HTML5 structure
- Open Graph meta tags (in layout)
- Mobile viewport configuration
- Favicon and favicon variants

## Performance Optimization

- **Code splitting**: Automatic by Next.js
- **Image optimization**: CSS-based (object-fit, object-position)
- **Font loading**: Google Fonts preload
- **CSS**: Minified by Next.js build process
- **Static generation**: Homepage and static pages

## Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment:

```bash
# Push to git
git push

# Deploy via Vercel CLI
vercel deploy

# Or connect GitHub repo to Vercel dashboard for auto-deploy
```

### Other Platforms

Next.js can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted servers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Known Limitations & TODOs

### Current Implementation
- ✅ Homepage with all main sections
- ✅ Basic page structure for subpages (About, Team, Services, Contact, Concepts, Portfolio, Legal)
- ✅ Responsive navigation
- ✅ Image integration (portfolio, concepts, team, clients)
- ✅ Contact form HTML structure

### Next Steps
- [ ] Backend integration for contact forms
- [ ] Email notifications
- [ ] CRM integration (Pipedrive, HubSpot)
- [ ] Blog/News section
- [ ] SEO: Schema.org JSON-LD structured data
- [ ] Analytics: Google Analytics 4
- [ ] Newsletter signup
- [ ] Live chat support
- [ ] Testimonial video embeds
- [ ] Portfolio detail pages
- [ ] Calendar integration for bookings
- [ ] Multi-language support (FR/EN)

## Environment Variables

Currently no environment variables required for development.

For production, you may need:
- `NEXT_PUBLIC_SITE_URL` - Site URL for links
- Email service credentials (SendGrid, Resend, etc.)
- CRM API keys
- Analytics tracking IDs

## Code Style & Conventions

- **Components**: PascalCase (MyComponent.jsx)
- **Utilities**: camelCase (myUtility.js)
- **CSS Classes**: kebab-case (my-component)
- **Props**: Descriptive names reflecting purpose
- **Comments**: Only for complex logic or non-obvious WHY

## Contributing

When working on this project:
1. Create feature branches from `main`
2. Keep commits focused and descriptive
3. Test responsiveness across breakpoints
4. Ensure all components render without errors
5. Update this README for major changes

## Troubleshooting

### Dev Server Issues
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

### Image Not Loading
- Check image path in `/public/images/`
- Verify file format and name
- Check browser console for 404 errors
- Ensure path is relative to `/public`

### Styling Issues
- Check component-level CSS imports
- Verify global CSS is loaded
- Check for CSS custom property definitions
- Use browser DevTools to inspect computed styles

## Performance Metrics

Target Lighthouse scores:
- Performance: 85+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## License

Copyright © 2026 Charlie's Events. All rights reserved.

---

**Last Updated**: June 2, 2026  
**Current Version**: 2.0.0 (Next.js)  
**Developer**: Claude Code
