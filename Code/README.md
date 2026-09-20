# Crunch by Yass — Pâtisserie Showcase

Site vitrine pour une pâtisserie artisanale. Catalogue statique avec commandes via WhatsApp.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion + Anime.js
- Déployable sur Vercel

## Démarrage

```bash
cd Code
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Personnalisation

### Produits

Éditez `Code/src/data/products.ts` pour ajouter, modifier ou supprimer des produits.

### Infos du site

Éditez `Code/src/data/site.ts` :

- Numéro WhatsApp (`whatsappNumber` — format : `216XXXXXXXX`, sans + ni espaces)
- Téléphone, email, réseaux sociaux
- Textes « À propos » et témoignages

### Images

- Logo : remplacez `Code/public/logo.png`
- Photos produits : ajoutez vos images dans `Code/public/images/` et mettez à jour les chemins dans `products.ts`

### Couleurs & polices

Palette cream / orange / ink définie dans `Code/src/app/globals.css`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, best sellers, à propos, réseaux sociaux |
| `/menu` | Catalogue avec filtres par catégorie |
| `/a-propos` | Histoire, valeurs, témoignages |
| `/commande-personnalisee` | Formulaire → WhatsApp / email |

## Déploiement

```bash
cd Code
npm run build
```

Puis déployez sur [Vercel](https://vercel.com) — racine du projet : dossier `Code`.
