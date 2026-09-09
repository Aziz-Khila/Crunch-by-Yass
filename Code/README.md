# Crunch by Yass — Pâtisserie Showcase

Site vitrine pour une pâtisserie artisanale à domicile. Catalogue statique avec commandes via WhatsApp.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Déployable sur Vercel

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Personnalisation

### Produits

Éditez `src/data/products.ts` pour ajouter, modifier ou supprimer des produits.

### Infos du site

Éditez `src/data/site.ts` :

- Numéro WhatsApp (`whatsappNumber` — format : `216XXXXXXXX`, sans + ni espaces)
- Téléphone, email, réseaux sociaux
- Textes « À propos » et témoignages

### Images

- Logo : remplacez `public/logo.png`
- Photos produits : ajoutez vos images dans `public/images/` et mettez à jour les chemins dans `products.ts`

### Couleurs & polices

Palette chaude définie dans `src/app/globals.css` (cream, blush, warm-brown, gold).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, best sellers, à propos, réseaux sociaux |
| `/menu` | Catalogue avec filtres par catégorie |
| `/a-propos` | Histoire, valeurs, témoignages |
| `/commande-personnalisee` | Formulaire → WhatsApp / email |

## Déploiement

```bash
npm run build
```

Puis déployez sur [Vercel](https://vercel.com) — connectez le repo et c'est prêt.

## Hors scope (v1)

- Paiement en ligne
- Suivi de commandes / dashboard admin
- CMS pour édition autonome des produits
- Toggle multilingue (FR / AR)
