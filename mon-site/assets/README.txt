DOSSIER ASSETS - Images et ressources
==========================================

Ce dossier est destiné à contenir toutes les images et ressources du site.

IMAGES À AJOUTER :
------------------

1. favicon.png (16x16 ou 32x32 pixels)
   - Icône qui apparaît dans l'onglet du navigateur
   - Format PNG recommandé
   - Référencé dans index.html : <link rel="icon" type="image/png" href="assets/favicon.png">

2. Photo de profil (optionnel)
   - Photo professionnelle pour la section "À propos"
   - Format JPG ou PNG
   - Taille recommandée : 400x400 pixels
   - Ajouter dans index.html dans la section #a-propos

3. Logo Stade Dijonnais (optionnel)
   - Pour la section club
   - Format PNG avec fond transparent recommandé

4. Images de projets (optionnel)
   - Visuels pour illustrer les projets
   - Format JPG pour les photos, PNG pour les graphiques


COMMENT AJOUTER UNE IMAGE DANS LE HTML :
-----------------------------------------

1. Placez votre image dans ce dossier (assets/)
   Exemple : assets/mon-image.jpg

2. Dans index.html, ajoutez la balise <img> :
   <img src="assets/mon-image.jpg" alt="Description de l'image">

   - src : chemin vers l'image
   - alt : texte alternatif (important pour l'accessibilité)


OPTIMISATION DES IMAGES :
--------------------------

Avant d'ajouter vos images, optimisez-les pour le web :

- Taille de fichier : < 200 Ko par image idéalement
- Résolution : 72 DPI (pour le web)
- Format :
  * JPG pour les photos (compression avec perte)
  * PNG pour les logos et graphiques (transparence possible)
  * WebP pour une meilleure compression (support moderne)

Outils gratuits pour optimiser :
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)


STRUCTURE RECOMMANDÉE :
-----------------------

assets/
├── favicon.png
├── profile-photo.jpg
├── logo-stade-dijonnais.png
├── projet-1.jpg
├── projet-2.jpg
└── README.txt (ce fichier)
