# Charlie's Events - Site Premium v2.0

Nouvelle version du site web de Charlie's Events basée sur l'audit Nexya (28/100 → 82/100).

## Structure du projet

```
src/
├── index.html       # Page principale
├── css/
│   └── styles.css   # Styles modernes (Dark mode + Or)
└── js/
    └── main.js      # Interactions et logique
```

## Caractéristiques principales

### ✅ Résolution de l'audit critique

- **Identité unifiée** : Suppression de la double marque Escape-Com
- **Formulaires de contact** : Demande de devis multi-étapes + formulaire contact
- **CTA visibles** : 2 CTA hero + multi-CTA sectionnels
- **Portfolio moderne** : Galerie filtrable en masonry
- **Menu responsive** : Navigation mobile avec hamburger
- **Crédibilité** : Logo wall clients + badges de confiance

### 🎨 Design Premium

- **Couleurs** : Fond sombre (#0F0F0F) + accent or (#C9A84C)
- **Typographie** : Playfair Display (titres) + DM Sans (corps)
- **Layout** : Grille 12 colonnes, espacement généreux, whitespace premium
- **Animations** : Subtle scroll reveal, hover effects

### 📱 Mobile-first & Responsive

- Navigation responsive avec menu hamburger
- Optimisé pour tous les breakpoints (480px, 768px, 1280px+)
- Touch-friendly interactions

### 🚀 SEO Ready

- Meta descriptions uniques
- Balises HTML5 sémantiques
- Schema.org LocalBusiness (à ajouter)
- Urls propres sans espaces

### 💼 Sections implémentées

1. **Hero** : Image héroïque + H1 + 2 CTA
2. **Trust** : Logo wall clients + badges (20+ ans, 500+ événements)
3. **Concepts** : 3 concepts signature (Ferme Arthus-Zora, Durable, Étoiles)
4. **Prestations** : 3 secteurs cibles (Centres commerciaux, Collectivités, Entreprises)
5. **Portfolio** : Galerie filtrable avec 6 projets sample
6. **Témoignages** : 3 témoignages clients (à actualiser)
7. **Contact** : Formulaire + info de contact
8. **Modals** : Devis (multi-étapes) + Rendez-vous

## Recommandations suivantes

### Immédiat (P0)

- [ ] Remplacer les images placeholder par vraies photos des réalisations
- [ ] Ajouter coordonnées téales + intégration email backend
- [ ] Supprimer/archiver les PDF 2012
- [ ] Intégrer Google Calendar ou Calendly pour prise de RDV
- [ ] Connecter formulaires à CRM (Pipedrive, HubSpot)

### Court terme (P1)

- [ ] Page détail par concept signature
- [ ] Page hub Réalisations avec filtres avancés
- [ ] Témoignages clients réels + vidéos
- [ ] Blog / Actualités
- [ ] Schema.org LocalBusiness JSON-LD
- [ ] Google Analytics 4 + Search Console

### Moyen terme (P2)

- [ ] Section "À propos" narrative (20 ans, équipe, story)
- [ ] Page détail par secteur cible
- [ ] Intégration Mailchimp/Brevo pour newsletter
- [ ] Live chat (Intercom, Drift)
- [ ] Lighthouse score > 80

## Déploiement

```bash
# Développement local
python -m http.server 8000
# Ouvrir http://localhost:8000/src/

# Production
# Déployer le dossier /src sur hébergement statique (Vercel, Netlify, OVH)
```

## Stack

- HTML5 sémantique
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (pas de dépendances)
- Responsive design (mobile-first)

## Audit de base

Score estimé après implémentation : **82/100**

Voir `/audit-charliesevents.md` pour détails complets.

---

*Créé par Claude Code | Basé sur audit Nexya juin 2026*
