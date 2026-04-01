# RMDev.Design

Site vitrine personnel de Romain Maunier, pense comme une landing page claire et directe pour presenter un profil hybride design / developpement autour de la VR, Unity, l'UI/UX et le prototypage interactif.

Le projet est volontairement simple : pas de framework, pas de build, juste une base statique legere et facile a maintenir.

## Ce que contient le site

- une page d'accueil orientee presentation et conversion
- une mise en avant des expertises, de l'approche et des projets
- des cartes projets generees en JavaScript
- un formulaire de contact branche sur Formspree
- des assets image, video et PDF utilises dans les sections et cas clients

## Structure du projet

- `index.html` : structure de la page, contenu, SEO, scripts tiers
- `style.css` : styles principaux
- `vars.css` : variables de design
- `script.js` : interactions, animations, generation des projets, formulaire
- `Images/` : visuels, logos, illustrations
- `videos/` : medias video
- `docs/` : documents annexes

## Lancer le site en local

Comme le projet est statique, le plus simple est d'utiliser un petit serveur local pour eviter les comportements imprevisibles du `file://`.

Exemples :

```bash
python3 -m http.server 8000
```

ou

```bash
npx serve .
```

Ensuite, ouvrir `http://localhost:8000`.

## Points a connaitre

- Le formulaire de contact passe par Formspree via un endpoint defini sur le formulaire dans `index.html` et consomme dans `script.js`.
- Le fichier `CNAME` indique une publication avec domaine personnalise `rmdev.design`.
- Le projet ne repose pas sur une etape de build : une modification HTML/CSS/JS est visible directement au rechargement.
- Le fichier `.htaccess` n'est pas utile sur GitHub Pages et a ete retire pour eviter toute confusion.

## Mise a jour du contenu

Pour faire vivre le site rapidement :

- modifier les textes et sections directement dans `index.html`
- ajouter ou remplacer les visuels dans `Images/`
- mettre a jour la liste `projects` dans `script.js` pour les cartes projet
- ajuster le style global dans `style.css` et les variables dans `vars.css`

## Intention

Ce repo sert avant tout de vitrine professionnelle : montrer une execution propre, un positionnement lisible, et donner envie de prendre contact sans surcharger l'experience.
