# GENÈSE — Site vitrine

Site statique (HTML/CSS vanilla) présentant l'offre GENÈSE de Strawberry Production.

## Structure

```
genese-site/
├── index.html       → Accueil
├── offre.html       → Détail de l'offre (concept, fusion, positionnement)
├── parcours.html     → Les 5 étapes + friction
├── tarifs.html       → Tarification + comparatif portefeuille
├── contact.html      → Formulaire de candidature
├── assets/
│   └── style.css     → Feuille de style partagée
└── vercel.json        → Config de déploiement Vercel
```

Aucune dépendance, aucun build. Tout fonctionne en ouvrant `index.html` directement dans un navigateur.

## Déployer sur GitHub

```bash
cd genese-site
git init
git add .
git commit -m "Site GENÈSE — première version"
git branch -M main
git remote add origin https://github.com/<ton-user>/genese-site.git
git push -u origin main
```

## Déployer sur Vercel

**Option A — via l'interface Vercel :**
1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe le repo GitHub `genese-site`
3. Framework Preset : **Other** (site statique, aucun build nécessaire)
4. Clique sur **Deploy**

**Option B — via la CLI :**
```bash
npm i -g vercel
cd genese-site
vercel
```
Suis les instructions ; Vercel détecte automatiquement le site comme statique.

## Formulaire de contact

Le formulaire de `contact.html` est câblé pour **Netlify Forms** (attribut `data-netlify="true"`). Si le site est hébergé sur **Vercel**, ce formulaire ne sera pas fonctionnel tel quel — deux options :
- Remplacer l'attribut `action` du `<form>` par un endpoint externe (ex. [Formspree](https://formspree.io), [Basin](https://usebasin.com))
- Ou brancher une fonction serverless Vercel (`/api/contact`) qui envoie l'email

## Personnalisation rapide

- Couleurs & typographies : variables CSS en haut de `assets/style.css` (`:root`)
- Email de contact : dans `contact.html`, remplacer `contact@strawberryproduction.fr`
- Nom de domaine : à configurer dans les réglages du projet Vercel une fois déployé
