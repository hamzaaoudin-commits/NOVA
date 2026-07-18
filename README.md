# NOVA — Application payante pas-à-pas

Site vitrine + application de production statique (HTML/CSS/JS vanilla) présentant et livrant l'offre NOVA de Strawberry Production : un accompagnement en 5 étapes, payé une fois, pour transformer une idée en entreprise lancée.

## Structure

```
nova/
├── index.html          → Accueil
├── offre.html          → Détail de l'offre
├── parcours.html       → Les 5 étapes
├── tarifs.html         → Tarif (paiement unique)
├── contact.html        → Contact / questions avant achat
├── app.html            → L'APPLICATION : paywall + wizard 5 étapes (post-paiement)
├── assets/
│   ├── style.css       → Feuille de style unique (partagée par toutes les pages)
│   ├── config.js       → Prix + lien de paiement Stripe (SEUL endroit à éditer)
│   ├── i18n.js         → Moteur + dictionnaire FR/EN
│   ├── app-steps.js    → Contenu des 5 étapes (chargé par app.html uniquement)
│   ├── nav.js          → Menu mobile accessible
│   ├── favicon.svg     → Favicon principal
│   ├── favicon-32.png  → Repli PNG
│   ├── favicon-180.png → Icône Apple touch
│   └── og-image.png    → Image de partage social (1200×630)
├── robots.txt
├── sitemap.xml
└── vercel.json         → Config de déploiement Vercel
```

Aucune dépendance, aucun build. Tout fonctionne en ouvrant `index.html` directement dans un navigateur.

## Avant de mettre en ligne — 3 réglages obligatoires

### 1. Domaine
Remplace `REMPLACE-PAR-TON-DOMAINE.fr` partout :
```bash
grep -rl "REMPLACE-PAR-TON-DOMAINE.fr" . | xargs sed -i '' 's|REMPLACE-PAR-TON-DOMAINE.fr|tondomaine.fr|g'
```
Concerne les `canonical`, `hreflang`, `og:url`, `og:image`, le JSON-LD, `robots.txt` et `sitemap.xml`.

### 2. Prix et paiement Stripe
Ouvre `assets/config.js` :
- `PRICE_DISPLAY` → le prix affiché sur le site.
- `STRIPE_PAYMENT_LINK` → ton Payment Link Stripe.

⚠️ Le prix apparaît aussi **en dur** dans le `<title>`, la `meta description`, les balises `og:` de `tarifs.html` et dans le JSON-LD (`index.html`, `tarifs.html`). Ces valeurs ne peuvent pas être injectées par JS sans nuire au SEO : **à mettre à jour manuellement** en cas de changement de prix.

### 3. Formulaire de contact
`contact.html` pointe vers `https://formspree.io/f/REMPLACE_MOI`. Crée un formulaire sur formspree.io et remplace l'ID.

## ⚠️ Limite critique du MVP — à traiter avant toute vente

Le déblocage de l'application se fait **côté client** (`?unlocked=1` + `localStorage`). N'importe qui peut accéder au produit sans payer en ajoutant `?unlocked=1` à l'URL.

De plus, la progression n'est stockée **que** dans le `localStorage` du navigateur : changement d'appareil, de navigateur ou nettoyage du cache = travail perdu, alors que l'interface promet « Rien n'est perdu ».

**À faire avant de vendre :**
- Stripe Checkout (et non Payment Link) → `success_url` avec `session_id`
- Fonction Vercel `/api/verify` : `stripe.checkout.sessions.retrieve()` côté serveur → cookie httpOnly signé
- Comptes utilisateurs (magic link) + persistance serveur (Supabase ou Vercel KV)

## Reste à faire (hors technique)

- [ ] Mentions légales, CGV, politique de confidentialité — obligatoires pour la vente en ligne en France. Prévoir la clause de renoncement au droit de rétractation pour contenu numérique (art. L221-28). À faire valider juridiquement.
- [ ] Preuves : capture de l'application, exemple de livrable, cas client.
- [ ] FAQ + garantie (14 jours).
- [ ] Arbitrer l'écart entre la promesse des pages et ce que l'application livre réellement.
- [ ] Refaire `assets/og-image.png` avec la vraie typo Fraunces (la version actuelle utilise une police de repli).

## Déployer sur Vercel

```bash
npm i -g vercel
cd nova
vercel
```
Framework Preset : **Other** (site statique).

## Personnalisation

- Couleurs & typographies : variables CSS en haut de `assets/style.css` (`:root`)
- Textes : `assets/i18n.js` (`DICT`) — le FR est aussi présent en dur dans le HTML pour le SEO, **penser à modifier les deux**
- Contenu des 5 étapes de l'app : `assets/app-steps.js`
- Email de contact : `assets/config.js` → `CONTACT_EMAIL`, et dans `contact.html`
