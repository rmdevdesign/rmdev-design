window.rmdevProjects = [
  { id: 'openImmersiveExp', modal: 'cs-immersive-exp', src: 'Images/ImmersiveExp.png', alt: 'Sécurité VR', name: 'Sécurité VR', cat: 'Formation' },
  { id: 'openDemonstrateur', modal: 'cs-demonstrateur', src: 'Images/Demonstrateur.png', alt: 'Démonstrateur Moteur', name: 'Démonstrateur Moteur', cat: 'Unity HDRP' },
  { id: 'openSystemes', modal: 'cs-systemes-embarques', src: 'Images/Reno.webp', alt: 'Systèmes Embarqués', name: 'Systèmes Embarqués', cat: 'Automobile' },
  { id: 'openVRInCar', modal: 'cs-vr-cockpit', src: 'Images/VRinCar.png', alt: 'VR in Cockpit', name: 'VR in Cockpit', cat: 'Expérience Immersive' },
  { id: 'openFormationImmersive', modal: 'cs-formation-immersive', src: 'videos/salle_reunion_vr.mp4', alt: 'Formation immersive', name: 'Formation immersive', cat: 'Formation · IA & VR', video: true },
  { id: 'openPlan3D', modal: 'cs-plan-to-3d', src: 'Images/3DPlan.webp', alt: 'Plan to 3D', name: 'Plan to 3D', cat: 'Visualisation 3D' },
  { id: 'openMultijoueur', modal: 'cs-multijoueur', src: 'Images/XRSHARE.webp', alt: 'XR Share', name: 'XR Share', cat: 'Multijoueur AR/VR' },
  { id: 'openVisitesVR', modal: 'cs-visites-virtuelles', src: 'Images/VisitesVirtuelles.webp', alt: 'Visites Virtuelles', name: 'Visites Virtuelles', cat: 'Immobilier' },
  { id: 'openMaquette', modal: 'cs-maquette-uiux', src: 'Images/Calypshome.webp', alt: 'App Domotique', name: 'App Domotique', cat: 'UI / UX Design' },
  { id: 'openErgonomie', modal: 'cs-ergonomie', src: 'Images/Ergonomie.png', alt: 'Ergonomie Cockpit', name: 'Ergonomie Cockpit', cat: 'R&D' },
  { id: 'openAR', modal: 'cs-ar', src: 'Images/AR.webp', alt: 'Réalité Augmentée', name: 'Réalité Augmentée', cat: 'Mobile' },
  { id: 'openShowroomVR', modal: 'cs-showroom-vr', src: 'Images/ShowroomVR.png', alt: 'ShowRoom VR', name: 'ShowRoom VR', cat: 'Réalité Virtuelle' }
];

window.rmdevOverlaysHtml = `
<!-- === Overlay 1 : Visites Virtuelles (VR) === -->
<div id="cs-visites-virtuelles" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-visites-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/VisitesVirtuelles.webp" alt="Visite VR immersive"></figure>
    <section class="cs-section">
      <h1 id="cs-visites-title" class="section-title">Visites Virtuelles</h1>
      <p class="description">Création d’une <strong>visite VR</strong> et d’un walkthrough vidéo à partir de plans <strong>DWG</strong> – première signature d’achat sur plan obtenue en&nbsp;<strong>48 h</strong>.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Acheteuse en VEFA souhaitant valider volumes, agencement et lumière avant de s’engager.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis techniques &amp; UX</h2>
      <ul class="description cs-list disc">
        <li>Conversion DWG ➜ modèle 3D propre.</li>
        <li>Rendu temps réel sur Quest 2 à 90 FPS.</li>
        <li>Walkthrough vidéo 4 K fluide.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche – sprint 48 h</h2>
      <ol class="description cs-list decimal">
        <li>Nettoyage DWG, extrusion murs (Solidworks).</li>
        <li>Portage Unity URP, navigation téléportation.</li>
        <li>Optimisation occlusion + baking lumières.</li>
        <li>Export APK + capture walkthrough.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description"><strong>Signature sur plan confirmée</strong> après la démo VR.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">URP</span>
      <span class="cs-tag">SolidWorks</span>
      <span class="cs-tag">Meta Quest 2</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 2 : Plan to 3D === -->
<div id="cs-plan-to-3d" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-plan3d-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/3DPlan.webp" alt="Rendus 3D Plan to 3D"></figure>
    <section class="cs-section">
      <h1 id="cs-plan3d-title" class="section-title">Plan to 3D</h1>
      <p class="description">Transformation rapide d’un <strong>plan 2D</strong> en maquette <strong>3D</strong> avec walkthrough vidéo pour valider l’aménagement intérieur.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Promoteur immobilier cherchant à présenter un bien sur plan de façon immersive lors de salons et en ligne, sans disposer d’un prototype VR.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis techniques</h2>
      <ul class="description cs-list disc">
        <li>Fiabilité des cotes lors de la conversion DWG ➜ 3D.</li>
        <li>Rendus réalistes prêts en < 72 h.</li>
        <li>Walkthrough 4 K à 60 fps pour diffusion web.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche – 2 jours</h2>
      <ol class="description cs-list decimal">
        <li>Import DWG ➜ Solidworks, modélisation fine.</li>
        <li>Portage Unity URP: Texturing + lighting.</li>
        <li>Animation caméra &amp; montage walkthrough.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Visuels et vidéo livrés en <strong>48 h</strong> • Validation design obtenu.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Aller plus loin</h2>
      <p class="description"><a href="docs/Visualisation%20de%20projets%20immobiliers.pdf" target="_blank" rel="noopener noreferrer">📄 Voir la plaquette (PDF)</a></p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">URP</span>
      <span class="cs-tag">SolidWorks</span>
      <span class="cs-tag">DWG</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 3 : Démonstrateur === -->
<div id="cs-demonstrateur" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-demo-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/Demonstrateur.png" alt="Démonstrateur motorisation véhicule"></figure>
    <section class="cs-section">
      <h1 id="cs-demo-title" class="section-title">Démonstrateur</h1>
      <p class="description">Prototype <strong>Unity HDRP</strong> illustrant, de manière réaliste, plusieurs configurations de motorisation (thermique, hybride) sur un véhicule transparent roulant sur une route infinie.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Appel d'offre pour démonstrateur technique présenté lors d'un salon ; objectif : <strong>montrer les différentes motorisations possibles</strong> et leur fonctionnement interne.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis techniques</h2>
      <ul class="description cs-list disc">
        <li>Modèle transparent révélant la chaîne cinématique.</li>
        <li>Switch temps‑réel entre deux variantes de motorisation.</li>
        <li>Route procédurale infinie sans artefacts.</li>
        <li>Rendu HDRP à 60 fps sur station RTX.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Import CAO, création shaders transparents HDRP.</li>
        <li>Système de commutation moteur (scripts C#).</li>
        <li>Route procédurale + mouvements caméra.</li>
        <li>Post‑process, capture vidéo 4 K.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Prototype livré dans le délai imparti. L’appel d’offres a finalement été remporté par un concurrent, mais la démo a été ré‑utilisée comme support visuel.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">HDRP</span>
      <span class="cs-tag">C#</span>
      <span class="cs-tag">SolidWorks</span>
    </div>
  </div>
</div>

<!-- === Overlay 4 : Systèmes embarqués === -->
<div id="cs-systemes-embarques" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-sys-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/Reno.webp" alt="Prototype systèmes embarqués"></figure>
    <section class="cs-section">
      <h1 id="cs-sys-title" class="section-title">Systèmes Embarqués</h1>
      <p class="description">Développement d’un <strong>prototype Unity</strong> interfaçant volant, pédales et autres commandes via <strong>bus CAN</strong>, avec visualisation UX/UI temps réel.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Programme R&amp;D de <strong>24 mois</strong>: prouver la faisabilité d’une passerelle logicielle temps réel entre hardware cockpit et maquette Unity.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Décodage CAN.</li>
        <li>Mapping inputs ➜ animations volant/pédales.</li>
        <li>Interface tactile minimaliste (UX/UI) co‑conçue avec un motion designer.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Architecture Unity + DLL CAN custom.</li>
        <li>Boucle d’acquisition CAN en continu injectée en temps réel dans la scène Unity.</li>
        <li>Plusieurs cycles UX avec motion designer, tests internes.</li>
      </ol>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">CAN Bus</span>
      <span class="cs-tag">C#</span>
      <span class="cs-tag">UI/UX</span>
    </div>
  </div>
</div>

<!-- === Overlay 5 : ShowRoom VR === -->
<div id="cs-showroom-vr" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-show-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/ShowroomVR.png" alt="ShowRoom VR portes"></figure>
    <section class="cs-section">
      <h1 id="cs-show-title" class="section-title">ShowRoom VR</h1>
      <p class="description">Exposer la <strong>gamme complète de portes</strong> du client à l’échelle 1 dans un showroom virtuel immersif.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Remplacer 200 m² de stand physique par une démonstration VR transportable en salon et en agence commerciale.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis techniques</h2>
      <ul class="description cs-list disc">
        <li>Catalogue > 50 références, finitions variables.</li>
        <li>Conversion Solidworks ➜ FBX ➜ Unity.</li>
        <li>Texturing unifié, optimisation.</li>
        <li>Low‑latency navigation sur PCVR.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Pipeline Solidworks ➜ FBX ➜ prefab Unity.</li>
        <li>Material library + variantes dynamiques (couleurs, finitions).</li>
        <li>UI catalogue pour filtrer et charger modèles à la volée.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Présentation exhaustive de la gamme sans stock physique.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">SolidWorks</span>
      <span class="cs-tag">FBX</span>
      <span class="cs-tag">PCVR</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 6 : VR in Cockpit === -->
<div id="cs-vr-cockpit" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-vr-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/VRinCar.png" alt="Expérience VR in Cockpit – Renault Triber"></figure>
    <section class="cs-section">
      <h1 id="cs-vr-title" class="section-title">VR in Cockpit</h1>
      <p class="description">Expérience marketing <strong>Unity</strong> présentée au <strong>New Delhi Auto Show</strong> : visiter des sites emblématiques de l’Inde (Gateway of India, tempête de neige himalayenne, tigre du Bengale) <em>sans quitter le siège du Renault Triber</em>.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Opération de lancement sur le marché indien : attirer les visiteurs sur le stand, générer des leads et démontrer le confort du Triber dans des environnements extrêmes.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Gamme de scènes variées (urbain, montagne, jungle) en <strong>60 FPS</strong> PC VR.</li>
        <li>Conversion SolidWorks → FBX → Unity HDRP sans perte de détails.</li>
        <li>Texturing réaliste + neige &amp; FX particules.</li>
        <li>Robustesse “salon” : lancement 1-clic et boucle autonome 8 h/jour.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Conversion des modèles SolidWorks du Triber en FBX puis import Unity HDRP.</li>
        <li>Mise à l’échelle 1 : 1 et éclairage HDRI unique pour les trois scènes (ville, montagne, jungle).</li>
        <li>Boucle de démo stable 8 h sur PC VR; aucun crash constaté en salon.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description"><strong>1 200+</strong> visiteurs ont vécu l’expérience sur 5 jours.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">HDRP</span>
      <span class="cs-tag">SolidWorks</span>
      <span class="cs-tag">FBX</span>
      <span class="cs-tag">PCVR</span>
    </div>
  </div>
</div>

<!-- === Overlay 7 : Expérience Immersive === -->
<div id="cs-immersive-exp" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-immersive-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/ImmersiveExp.png" alt="Démo VR sécurité nacelle élévatrice"></figure>
    <section class="cs-section">
      <h1 id="cs-immersive-title" class="section-title">Expérience Immersive</h1>
      <p class="description">Démonstration sur salon des <strong>innovations de sécurité</strong> d’une nacelle élévatrice : l’utilisateur vérifie, en réalité virtuelle, la stabilité et les techniques de contrôle.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Mettre en valeur les dispositifs de sécurité d’un constructeur d’engins. Montrer en <em>live</em> les dispositifs anti-basculement et l’ergonomie du pupitre sans déplacer la machine sur le stand.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Fichiers 3D CAD très lourds (1200 Mo CAD ➜ &nbsp;&lt; 100 Mo FBX).</li>
        <li>Animation d’environnement (chantier + engins) sur PC VR.</li>
        <li>Calage métrique précis pour aligner la nacelle virtuelle sur la nacelle réelle.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Réduction des poids de fichiers puis import Unity.</li>
        <li>Intégration des séquences sécurité : stabilisateurs et anti-basculement animés par Timeline.</li>
        <li>Réglage pour correspondre à la nacelle physique.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description"><strong>800+</strong> démonstrations sur 5 jours.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">Timeline</span>
      <span class="cs-tag">FBX</span>
      <span class="cs-tag">VR</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 8 : Maquette UI/UX === -->
<div id="cs-maquette-uiux" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-uiux-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/Calypshome.webp" alt="Maquettes UI/UX – app domotique"></figure>
    <section class="cs-section">
      <h1 id="cs-uiux-title" class="section-title">Maquette UI / UX</h1>
      <p class="description">De la page blanche au <strong>kit développeur</strong> : wireframes, maquettes&nbsp;Figma haute fidélité et assets marketing d’une application mobile pilotant volets, stores et BSO d’une maison connectée.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Accompagner le client depuis le cahier des charges jusqu’au passage aux devs : définir l’architecture fonctionnelle, concevoir un design system complet et livrer les visuels App Store / Play Store.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Gérer plusieurs types d’équipements (volets roulants, stores, BSO) dans une même interface.</li>
        <li>Création de 40+ pictogrammes.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Atelier cadrage : personas, user‑flows.</li>
        <li>Wireframes basse fidélité.</li>
        <li>Maquettes haute fidélité &amp; design system Figma (couleurs, typographie, icônes).</li>
        <li>Export DevMode Ready + spec PDF &amp; visuels marketing (screenshots, icônes, bannière).</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description"><strong>+100 écrans Figma</strong> livrés. Application disponible sur les stores.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Figma</span>
      <span class="cs-tag">Design System</span>
    </div>
  </div>
</div>

<!-- === Overlay 9 : Multijoueur multiplateforme === -->
<div id="cs-multijoueur" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-multi-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/XRSHARE.webp" alt="Prototype VR/AR multijoueur à distance"></figure>
    <section class="cs-section">
      <h1 id="cs-multi-title" class="section-title">Multijoueur Multiplateforme</h1>
      <p class="description">Application <strong>VR/AR</strong> de <strong>co‑créativité à distance</strong>, développée au LCPI : réunion virtuelle, tableau blanc 3D et revue de design temps réel, accessibles depuis casque VR, mobile ou PC.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Projet de recherche académique visant à améliorer les séances de créativité distribuées ; permettre à des équipes dispersées d’itérer sur des modèles 3D comme si elles partageaient la même salle.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Réalité mixte synchronisée (VR + AR + PC) via <em>Photon PUN</em>.</li>
        <li>Support iOS, Android, PC et casques Meta Quest avec un seul code‑base.</li>
        <li>Outils de créativité : post‑it 3D, sketch in‑air, import rapide OBJ.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Wireframes &amp; prototypes rapides (Figma) pour valider le flow multijoueur.</li>
        <li>Implémentation réseau avec Photon PUN 2 ; gestion avatars, voix, permissions.</li>
        <li>Tests cross‑device : Quest 2 / iPhone / PC .</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Étude en cours : en attente de publication.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">Photon PUN 2</span>
      <span class="cs-tag">Meta Quest</span>
      <span class="cs-tag">iOS</span>
      <span class="cs-tag">Android</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 10 : Ergonomie === -->
<div id="cs-ergonomie" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-ergo-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/Ergonomie.png" alt="Prototype Leap Motion dans un cockpit avion"></figure>
    <section class="cs-section">
      <h1 id="cs-ergo-title" class="section-title">Ergonomie</h1>
      <p class="description">Maquette <strong>Unity + Leap Motion</strong> pour tester, en réalité virtuelle, la prise en main d’une <em>nouvelle commande produit</em> dans un cockpit d’avion avant toute fabrication physique.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Projet R&amp;D avionique : proposer un design de contrôle pour fonctions de contrôle. Valider la <strong>faisabilité ergonomique</strong> et la zone de confort pilote avant de lancer les maquettes physiques.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Suivi mains fiable sous canopy resserré, bras appuyés sur accoudoirs.</li>
        <li>Respect des volumes certifiés CS‑23 (champ visuel + gestes limités).</li>
        <li>Cycle <em>design → test VR</em> &lt; 48 h pour itérations rapides.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Import CAO cockpit ➜ Unity URP ; calibration 1 : 1 avec sièges fixes.</li>
        <li>Intégration SDK <strong>Leap Motion</strong> .</li>
        <li>Mesures sur plusieurs morphologies.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Zone de confort validée pour la plupart des morphologies. Passage en maquette physique avec un <strong>layout figé</strong> issu du prototype VR.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">Leap Motion</span>
      <span class="cs-tag">URP</span>
      <span class="cs-tag">CAO</span>
      <span class="cs-tag">C#</span>
    </div>
  </div>
</div>

<!-- === Overlay 11 : Réalité augmentée === -->
<div id="cs-ar" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-ar-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l’étude de cas">&times;</button>
    <figure class="cs-hero"><img src="Images/AR.webp" alt="Application AR Renault sur tablette"></figure>
    <section class="cs-section">
      <h1 id="cs-ar-title" class="section-title">Réalité Augmentée</h1>
      <p class="description">Application <strong>Unity + Vuforia</strong> sur tablette Android : filmer un véhicule Renault et faire apparaître des contenus augmentés (vue en coupe, intérieurs, animations d'ouverture).</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Démo salon destinée au grand public : montrer en live les atouts techniques directement sur la maquette exposée.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Défis clés</h2>
      <ul class="description cs-list disc">
        <li>Suivi image + shape‑based Vuforia sous forte lumière salon.</li>
        <li>Réduction des modèles 3D (&gt; 250 Mo ➜ 30 Mo) pour la tablette.</li>
        <li>Maintien &gt; 45 FPS sur SoC Snapdragon milieu de gamme.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Approche</h2>
      <ol class="description cs-list decimal">
        <li>Création d’un marker profil de calandre pour lock AR.</li>
        <li>Pipeline de décimation ➜ FBX, textures.</li>
        <li>Scripts toggle options couleur, éclaté moteur, fiche technique animée.</li>
      </ol>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description"><strong>500+</strong> démonstrations sur 3 jours .</p>
    </section>
  </div>
</div>

<!-- === Overlay 12 : Expertise Design === -->
<div id="cs-expertise" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-expertise-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer la fiche expertise">&times;</button>
    <figure class="cs-hero"><img src="Images/Creativity.webp" alt="Collage représentant UI, VR et 3D"></figure>
    <section class="cs-section">
      <h1 id="cs-expertise-title" class="section-title">Expertise Design</h1>
      <p class="description">7 ans d’expérience à la croisée du <strong>design produit</strong> et du <strong>développement interactif</strong> : de l’idéation à la mise en production, en AR/VR, mobile ou embarqué.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Compétences principales</h2>
      <ul class="description cs-list disc">
        <li><strong>UI/UX&nbsp;mobile&nbsp;&amp;&nbsp;VR</strong> : wireframes ➜ maquettes Figma ➜ design system.</li>
        <li><strong>Prototypage temps‑réel</strong> : Unity&nbsp;HDRP/URP, OpenXR, Vuforia, Photon PUN.</li>
        <li><strong>3D pipeline</strong> : SolidWorks ➜ optimisation LOD, textures atlas.</li>
      </ul>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Savoir‑faire en action</h2>
      <p class="description">Ces compétences ont été déployées sur les <em>11 projets</em> présentés ci‑dessus : showroom VR, AR tablette, cockpit avion hand‑tracking, contrôle domotique, etc. Chaque overlay détaille le contexte, les défis et les résultats obtenus.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Outils &amp; stack favoris</h2>
      <ul class="description cs-list disc">
        <li>Figma, Illustrator pour UI/UX.</li>
        <li>Unity, C#, URP/HDRP.</li>
        <li>SolidWorks, Blender.</li>
      </ul>
    </section>
    <section class="cs-section">
      <h2 class="section-title">En bref</h2>
      <p class="description">Que vous ayez besoin d’un <strong>prototype fonctionnel</strong>, d’une <strong>refonte UX</strong> ou d’un <strong>POC AR/VR</strong>, je peux prendre votre idée et la transformer en expérience testable rapidement.</p>
    </section>
  </div>
</div>

<!-- === Overlay 13 : Formation immersive === -->
<div id="cs-formation-immersive" class="cs-overlay" role="dialog" aria-modal="true" aria-labelledby="cs-formation-immersive-title" tabindex="-1">
  <div class="cs-dialog">
    <button class="cs-close" aria-label="Fermer l'étude de cas">&times;</button>
    <figure class="cs-hero">
      <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;">
        <source src="videos/salle_reunion_vr.mp4" type="video/mp4">
      </video>
    </figure>
    <section class="cs-section">
      <h1 id="cs-formation-immersive-title" class="section-title">Formation immersive</h1>
      <p class="description">Plateforme d'entraînement à la <strong>prise de parole en public</strong> combinant intelligence artificielle et réalité virtuelle, destinée aux organisations et aux particuliers.</p>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Contexte &amp; objectifs</h2>
      <p class="description">Reproduire les conditions réelles d'une salle de réunion ou d'une conférence en VR pour permettre un entraînement immersif et répété, avec un feedback instantané piloté par l'IA.</p>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Fonctionnalités clés</h2>
      <ul class="description cs-list disc">
        <li>Immersion VR sur <strong>Meta Quest</strong>: salle de réunion, auditorium, bureau...</li>
        <li>Coach IA <em>Goos</em>: guidance avant, pendant et après la session.</li>
        <li>Analyse en temps réel : verbal, vocal, visuel.</li>
        <li>Scénarios interactifs adaptatifs (négociation, présentation, Q&amp;R).</li>
        <li>Dashboard de progression session par session.</li>
      </ul>
    </section>
    <section class="cs-section cs-alt">
      <h2 class="section-title">Technologies</h2>
      <ul class="description cs-list disc">
        <li>Unity: rendu temps réel, intégration Meta Quest.</li>
        <li>IA conversationnelle pour le feedback vocal et comportemental.</li>
        <li>Plateforme web pour le suivi hors casque.</li>
      </ul>
    </section>
    <section class="cs-section">
      <h2 class="section-title">Résultats</h2>
      <p class="description">Déploiement B2B auprès d'organisations avec une progression mesurable des apprenants grâce aux métriques d'analyse.</p>
    </section>
    <div class="cs-tags">
      <span class="cs-tag">Unity</span>
      <span class="cs-tag">Meta Quest</span>
      <span class="cs-tag">IA</span>
      <span class="cs-tag">Web</span>
    </div>
  </div>
</div>
`;
