# Rapport SEO / GEO : 8 octobre 2026

Mise en œuvre du brief `RMDevDesign_SEO_GEO_IA_Codex.md`, sans commit ni déploiement. Le site conserve son HTML statique, ses styles, ses assets et son formulaire Formspree. Aucune dépendance ajoutée.

## Fichiers modifiés

- `index.html`, `script.js`, `style.css` : positionnement Unity XR freelance, identité Romain Maunier / RM Dev Design, compteurs renseignés dès le HTML, 12 cartes projets et CTA statiques, vidéo chargée à l’approche du viewport, animations activées seulement après installation de l’observer, formulaire utilisable sans JS, navigation de secours sans JS et landmarks header/main/footer.
- `developpement-vr-unity.html`, `prototypage-interactif.html`, `design-ui-ux-figma.html`, `expertise.css` : liens contextuels, Twitter Cards, breadcrumbs visibles, styles des FAQ, cartes et tableau comparatif. Texte sombre sur les boutons à dégradé pour améliorer le contraste.
- Les 12 fichiers `cas-client-*.html` : navigation vers la collection de réalisations, identifiants d’entités partagés et BreadcrumbList. Les cas cockpit VR, sécurité VR et UI/UX domotique reçoivent une section reliant le travail documenté aux prestations, avec TODO de validation.
- `404.html` : liens de récupération vers Unity XR, les réalisations et le contact, focus clavier ; noindex conservé.
- `confidentialite.html` : métadonnées Open Graph et graphe d’entités.
- `sitemap.xml`, `llms.txt`, `README.md` : nouvelles URLs, identité et documentation.
- `scripts/check-seo.py` : contrôle local des pages statiques.

`robots.txt` était déjà conforme : accès autorisé pour tous les agents, sitemap déclaré, aucun blocage CSS/JS ou OAI-SearchBot. Il est conservé.

## Neuf nouvelles pages

1. `/developpeur-unity-xr-freelance.html` : page pilier, usages, stack documentée, méthode, types de missions et FAQ.
2. `/developpement-meta-quest-3.html` : VR/MR, interactions, contraintes du casque et diffusion des tests.
3. `/demonstrateur-vr-industriel.html` : scénario, exploitation sur salon, méthode et preuves.
4. `/realite-mixte-entreprise.html` : usages, critères de choix et validation dans le lieu cible.
5. `/realisations.html` : 12 projets avec textes indexables et liens vers les études existantes.
6. `/a-propos-romain-maunier.html` : relation entre la personne et son activité, photo et profils connus.
7. `/guides/deployer-application-meta-quest-3.html` : organisation du test et diffusion, daté et sourcé.
8. `/guides/quest-3-ou-pc-vr.html` : tableau de comparaison et décision selon le scénario.
9. `/guides/cout-prototype-vr-entreprise.html` : facteurs d’estimation sans tarifs inventés.

Aucune URL existante supprimée ou renommée ; aucune redirection nécessaire. Les études existantes sont enrichies plutôt que dupliquées sous de nouvelles URLs.

## SEO technique et données structurées

Les pages indexables ont un title, une description, un H1, une canonical HTTPS non-www et les champs Open Graph essentiels. Les nouvelles pages réutilisent les assets existants, sans prétendre que leurs illustrations constituent des preuves de projets Quest 3.

Le graphe JSON-LD identifie WebSite, RM Dev Design et Romain Maunier avec des `@id` stables. La personne est reliée à l’activité par `worksFor` et l’activité à son fondateur. Les profils LinkedIn/Malt sont ceux déjà présents dans le dépôt. Aucun avis, adresse, téléphone ou chiffre ajouté aux données structurées.

Les prestations utilisent Service. Les études conservent Article ; les guides utilisent Article et `dateModified` lorsqu’ils sont techniques. BreadcrumbList correspond au fil visible. Les FAQ restent des éléments HTML accessibles, sans dépendre d’une promesse de rich result.

Le sitemap contient 26 URLs indexables, dont les neuf nouvelles pages. La 404, la présentation noindex et la vérification Google en sont exclues. Les dates reflètent les modifications HTML effectuées.

## Vérifications

- `python3 scripts/check-seo.py` : 28 pages, 26 URLs indexables ; langue, H1, main, métadonnées uniques, canonicals, JSON-LD parseable, assets locaux, ancres et cohérence du sitemap.
- `node --check script.js` et `git diff --check`.
- Chrome local : 168 visites (28 pages × 3 largeurs : 390 / 768 / 1440 px × JS activé/désactivé). Statuts locaux 200, un H1/main par page, aucun débordement horizontal, contenu principal visible sans JS et aucune erreur JavaScript. Menu mobile et fermeture Escape vérifiés.
- Inspection visuelle de l’accueil mobile et de la page Quest desktop. Les polices distantes ont été bloquées pendant les tests automatisés pour vérifier aussi le fonctionnement avec les polices de secours.
- Les cartes projets restent présentes sans JS. Les valeurs initiales des compteurs viennent des études déjà publiées ; leur animation reste décorative dans son intention.

Ces vérifications locales ne mesurent pas les Core Web Vitals en production. Aucun envoi réel du formulaire n’a été effectué. Le serveur statique local rend le fichier `404.html` en 200 à son URL directe ; le statut 404 d’une URL inexistante relève de GitHub Pages et doit être vérifié après publication.

## Contenus à valider et TODO_CONTENT

- Compléter les rôles des autres projets si utile. Les responsabilités sécurité VR, domotique et cockpit Unity ont été précisées par Romain. La collection renvoie au travail documenté plutôt que d’inventer une attribution ; les cartes contiennent un `TODO_CONTENT` dans le HTML.
- Conserver les sources des résultats déjà affichés sur cockpit VR, sécurité VR et domotique. Aucun nouveau KPI n’a été inventé ; le dépôt sert de source et non de preuve indépendante des chiffres.
- Compatibilité Quest 3 confirmée par Romain : toutes ses applications VR sont compatibles. Aucune référence réalisée spécifiquement pour Quest 3. Les matériels historiques des études sont conservés. Le périmètre MR reste à préciser.
- Complément facultatif : documenter un projet MR et ses résultats si une nouvelle étude dédiée est souhaitée. Aucune référence Quest 3 supplémentaire n’est exigée pour annoncer la compatibilité confirmée.
- `TODO_CONTENT` : confirmer l’usage réel d’OpenXR, Meta XR SDK, Blender ou Photon par projet avant toute mention de maîtrise ou d’utilisation passée. Unity, C#, URP/HDRP, Figma et SolidWorks sont documentés ; les SDK possibles sont présentés comme des choix à cadrer.
- Offre configurateur 3D web confirmée par Romain, avec Three.js et React. Les projets sont confidentiels : aucune identité, capture ou donnée projet n’est publiée. La page de prestation est créée sans étude de cas nominative.
- Références clients : uniquement les noms et logos déjà présents sur le site. Aucun nouveau client nommé ni nouveau droit de publication présumé.

## Vérification locale

```bash
python3 scripts/check-seo.py
node --check script.js
python3 -m http.server 8000
```

Ouvrir `http://localhost:8000/`, puis les nouvelles pages. Désactiver JavaScript pour vérifier le contenu, les compteurs, les liens et le formulaire ; tester le responsive, la navigation clavier et les FAQ natives. Après publication, vérifier les URLs canoniques, les images OG, le sitemap, les vrais statuts HTTP, ainsi que les redirections HTTP/HTTPS et www/non-www.

## Priorités restantes

- **P0** : après publication, vérifier les réponses HTTP et la 404 réelle, lancer un audit performance / accessibilité complet, vérifier la réception Formspree et les canonicals sur le domaine. Les scripts de mesure n’ont pas été ajoutés ; aucun analytics existant trouvé.
- **P1** : valider les rôles et les sources des KPI existants ; préciser les prestations MR ; vérifier Search Console et Bing Webmaster Tools et soumettre le sitemap depuis les comptes concernés. Le fichier de vérification Google existant est conservé.
- **P2** : envisager un guide Unity / Three.js si utile ; compléter le parcours professionnel et les informations légales uniquement avec des données confirmées. Mesurer impressions, clics, pages d’entrée et trafic référent IA, sans garantie de citation.

## Sources techniques consultées

- [Meta : Release Channels](https://developers.meta.com/vr/resources/publish-release-channels/) : canaux de test, audiences invitées et exigences de packaging.
- [Meta : Set up your headset for development](https://developers.meta.com/vr/documentation/unity/unity-env-device-setup/) : préparation du casque de développement.

Les liens sont présents dans le guide de déploiement pour permettre une vérification lors des futures mises à jour.

## Correction des chemins de chargement

Les nouvelles pages utilisaient initialement des chemins depuis la racine (`/expertise.css`, `/vars.css`), qui fonctionnaient via HTTP mais pas à l’ouverture directe depuis le disque. Les liens internes, feuilles de style, scripts et images utilisent désormais des chemins relatifs, avec `../` pour les guides. La 404 conserve un style autonome et des liens absolus vers le site pour fonctionner également sous une URL inexistante imbriquée.

Chrome a vérifié les 28 fichiers ouverts directement sur disque, sur trois largeurs (84 vérifications) : aucune feuille de style locale manquante, aucune image cassée et aucun débordement horizontal. Les tirets cadratins ont été retirés des sources et contenus maintenus.

## Offre configurateur 3D web confirmée

Création de `/configurateur-3d-web.html`, ajout d’une carte sur l’accueil, de liens contextuels, du Service et du BreadcrumbList, et mise à jour du sitemap et de llms.txt. Stack Three.js / React confirmée par Romain. Les références confidentielles ne sont pas nommées et ne constituent pas un TODO obligatoire de publication. Le site contient désormais 27 URLs indexables.

## Ajustements de présentation

Accueil allégé : une seule phrase de présentation dans le hero, identité et localisation dans le badge, compatibilité Quest 3 dans la carte Unity XR, et profil détaillé accessible depuis la section Approche. Les quatre expertises sont disposées sur deux colonnes sur desktop et une colonne sur mobile, avec textes alignés à gauche et liens en bas des cartes. Le bouton renvoyant la page Réalisations vers elle-même est supprimé ; son CTA principal devient « Parler de votre projet ».

Contrôle visuel et géométrique à 390, 768, 1024 et 1440 px : aucun débordement horizontal. Contrôle SEO statique réussi sur 29 pages et 27 URLs indexables.

## Relecture éditoriale des pages

Retrait du lien de collection placé sous les 12 cartes de l’accueil : il répétait le contenu déjà accessible. Les pages Unity XR, Quest 3 et démonstrateur présentent désormais des preuves visuelles liées aux études de cas. La page MR se concentre sur le lien au lieu réel et les critères d’un prototype, la bio sur l’approche et les réalisations. Les introductions et les CTA sont raccourcis et contextualisés.

Les cas cockpit, sécurité et domotique détaillent les décisions de réalisation à partir des faits déjà présents, sans ajouter de responsabilité personnelle. Romain a précisé les rôles et les fonctions : voir la section de confirmation ci-dessous.

À la demande de Romain, les mentions de l’ancien modèle de casque ont été retirées du contenu public. La compatibilité Quest 3 est annoncée ; une ancienne mesure de 90 FPS n’est pas transférée à ce modèle sans confirmation. Il reste à préciser les conditions de mesure si ce chiffre doit être republié.

## Responsabilités confirmées et ton commercial

- Applications VR : Romain confirme qu’elles tournent sur Quest 3.
- Cockpit automobile : développement d’une application Unity autour d’un simulateur de conduite. Présentation sobre ; aucun détail interne supplémentaire. Les mentions de bus CAN, DLL et calendrier de recherche ont été retirées de la fiche concernée et de ses résumés.
- Sécurité VR : développement de l’ensemble de l’application de sensibilisation aux risques industriels en équipe avec un motion designer, avec intégration de l’environnement, des animations et du scénario. Le rôle ne présente pas les contributions du motion designer comme celles de Romain.
- Domotique : mission UI/UX et livraison aux développeurs ; Romain n’a pas développé l’application.
- Configurateur en ligne : développement de A à Z, viewer Three.js, frontend React et backend pour la gestion des abonnements et l’ajout de produits. Noms et éléments privés restent absents.

Les pages commerciales mettent en avant le travail confirmé plutôt que des réserves sur les références. Les limites de publication restent dans ce rapport. Les TODO de confirmation des responsabilités ci-dessus sont levés ; les justificatifs des anciens KPI restent à conserver.

## Header harmonisé

Les 27 pages indexables utilisent le header de l’accueil : même logo, hauteur, liens, bouton contact et menu mobile. Le style et le comportement sont centralisés dans `header.css` et `header.js`. `scripts/sync-header.py` génère le HTML statique commun avec les chemins relatifs adaptés, sans dépendance de build ou rendu JavaScript. La navigation sans JavaScript est présente sur toutes ces pages.

La présentation hackathon conserve ses contrôles spécifiques et la 404 sa navigation de récupération. Le header passe en menu mobile à 1200 px pour éviter que les liens débordent sur les tailles intermédiaires.

## Accès direct aux expertises et liens complémentaires

Le header commun propose un menu Expertises qui donne accès aux huit pages commerciales et à la vue d’ensemble. Le menu utilise des éléments details natifs et fonctionne sans JavaScript ; les liens mobiles sont accessibles dans le menu burger. L’accueil propose également quatre accès directs sous ses cartes : Unity XR freelance, Quest 3, réalité mixte et démonstrateur industriel.

Sur les pages prototypage et UI/UX, le paragraphe isolé vers les configurateurs est remplacé par une grille de trois cartes complémentaires avec titre, description et action. Les trois cartes passent en colonne sur mobile.

## Fusion des deux pages Unity / XR

Les pages Unity XR freelance et développement VR Unity couvraient le même besoin. Leurs contenus sont regroupés sur l’URL existante `/developpement-vr-unity.html` : usages, preuves de réalisation, types de missions, stack et FAQ. Les liens internes et le menu Expertises pointent directement vers cette page unique.

La nouvelle URL `/developpeur-unity-xr-freelance.html` est conservée comme redirection HTML immédiate avec canonical vers la page unifiée, noindex et lien de secours. Ce mécanisme fonctionne sur l’hébergement statique ; il ne s’agit pas d’une réponse HTTP 301. L’URL de redirection est retirée du sitemap et de llms.txt. Le sitemap contient désormais 26 URLs indexables.
