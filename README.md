# RMDev.Design

Site vitrine personnel de Romain Maunier, pensé comme une landing page claire et directe pour présenter un profil hybride design / développement autour de la VR, Unity, l'UI/UX et le prototypage interactif.

Le projet est volontairement simple : pas de framework, pas de build, juste une base statique légère et facile à maintenir.

## Ce que contient le site

- une page d'accueil orientée présentation et conversion
- une mise en avant des expertises, de l'approche et des projets
- des cartes projets présentes dans le HTML et animées en JavaScript
- un formulaire de contact branché sur Formspree
- des assets image, vidéo et PDF utilisés dans les sections et cas clients

## Structure du projet

- `index.html` : structure de la page, contenu, SEO, scripts tiers
- `style.css` : styles principaux
- `vars.css` : variables de design
- `script.js` : interactions, animations, génération des projets, formulaire
- `Images/` : visuels, logos, illustrations
- `videos/` : médias vidéo
- `docs/` : documents annexes

## Lancer le site en local

Comme le projet est statique, le plus simple est d'utiliser un petit serveur local pour éviter les comportements imprévisibles du `file://`.

Exemples :

```bash
python3 -m http.server 8000
```

ou

```bash
npx serve .
```

Ensuite, ouvrir `http://localhost:8000`.

## Points à connaître

- Le formulaire de contact passe par Formspree via un endpoint défini sur le formulaire dans `index.html` et consommé dans `script.js`.
- Le fichier `CNAME` indique une publication avec domaine personnalisé `rmdev.design`.
- Le projet ne repose pas sur une étape de build : une modification HTML/CSS/JS est visible directement au rechargement.
- Le fichier `.htaccess` n'est pas utile sur GitHub Pages et a été retiré pour éviter toute confusion.

## Mise à jour du contenu

Pour faire vivre le site rapidement :

- modifier les textes et sections directement dans `index.html`
- ajouter ou remplacer les visuels dans `Images/`
- mettre à jour les cartes HTML dans `index.html` et `realisations.html` ; `projects-data.js` est conservé comme ancien catalogue, mais ne pilote plus l’accueil
- ajuster le style global dans `style.css` et les variables dans `vars.css`

## Intention

Ce repo sert avant tout de vitrine professionnelle : montrer une exécution propre, un positionnement lisible, et donner envie de prendre contact sans surcharger l'expérience.

## Vérifier le SEO statique

```bash
python3 scripts/check-seo.py
node --check script.js
```

Le contrôle vérifie les métadonnées, canonicals, JSON-LD, cibles locales, ancres, dimensions d’images indexables et cohérence du sitemap. Les pages de présentation et d’erreur restent noindex.

Les nouvelles pages réutilisent `expertise.css`, `vars.css` et `signature.js`. Aucun build ni dépendance supplémentaire. Voir `docs/rapport-seo-geo.md` pour le périmètre et les validations éditoriales restantes.

## Header commun

Les pages indexables partagent `header.css` et `header.js`. Leur header est présent dans le HTML initial. Pour changer ses libellés ou liens, modifier `scripts/sync-header.py`, puis exécuter :

```bash
python3 scripts/sync-header.py
python3 scripts/check-seo.py
```

Le script adapte les liens pour l’accueil, les pages internes et les guides. La présentation hackathon garde ses contrôles de diapositives et la 404 sa navigation de récupération.
