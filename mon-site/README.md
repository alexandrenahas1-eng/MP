# Site Vitrine - Alexandre Nahas

Site vitrine professionnel présentant Alexandre Nahas, joueur de rugby au Stade Dijonnais et professionnel du développement commercial.

## 📋 Description

Site web 100% local, sans dépendance externe, développé en HTML/CSS/JavaScript vanilla. Design sobre et moderne avec palette de couleurs neutres et accent vert sapin.

## 🚀 Lancement du site sur Windows

### Méthode 1 : Simple (Double-clic)

**La plus rapide, idéale pour tester :**

1. Ouvrez l'explorateur de fichiers Windows
2. Naviguez jusqu'au dossier `mon-site`
3. Double-cliquez sur le fichier `index.html`
4. Le site s'ouvre dans votre navigateur par défaut

**Note :** Cette méthode fonctionne pour visualiser le site, mais certaines fonctionnalités avancées peuvent ne pas fonctionner correctement (notamment si vous ajoutez plus tard des requêtes AJAX ou des APIs).

---

### Méthode 2 : Serveur local (Recommandé)

**Pour une expérience optimale :**

#### Option A : Avec Python (souvent préinstallé)

1. Ouvrez l'invite de commande Windows :
   - Appuyez sur `Windows + R`
   - Tapez `cmd` et appuyez sur Entrée

2. Naviguez vers le dossier du site :
   ```cmd
   cd chemin\vers\mon-site
   ```
   Exemple : `cd C:\Users\VotreNom\Documents\mon-site`

3. Vérifiez si Python est installé :
   ```cmd
   python --version
   ```

4. Lancez le serveur local :
   - **Avec Python 3.x :**
     ```cmd
     python -m http.server 8000
     ```
   - **Avec Python 2.x :**
     ```cmd
     python -m SimpleHTTPServer 8000
     ```

5. Ouvrez votre navigateur et allez à :
   ```
   http://localhost:8000
   ```

6. Pour arrêter le serveur : appuyez sur `Ctrl + C` dans l'invite de commande

---

#### Option B : Avec Node.js (si installé)

1. Installez le package `http-server` globalement (une seule fois) :
   ```cmd
   npm install -g http-server
   ```

2. Naviguez vers le dossier du site :
   ```cmd
   cd chemin\vers\mon-site
   ```

3. Lancez le serveur :
   ```cmd
   http-server -p 8000
   ```

4. Ouvrez votre navigateur et allez à :
   ```
   http://localhost:8000
   ```

---

#### Option C : Avec l'extension Live Server (VSCode)

1. Installez Visual Studio Code (gratuit)
2. Installez l'extension "Live Server" depuis le marketplace VSCode
3. Ouvrez le dossier `mon-site` dans VSCode
4. Clic droit sur `index.html` → "Open with Live Server"
5. Le site s'ouvre automatiquement avec rechargement automatique

---

## 📁 Structure du projet

```
mon-site/
│
├── index.html              # Page principale (HTML)
│
├── css/
│   └── style.css           # Tous les styles (CSS)
│
├── js/
│   └── script.js           # Toute l'interactivité (JavaScript)
│
├── assets/                 # Images et ressources
│   └── (favicon.png, etc.)
│
└── README.md               # Ce fichier
```

---

## 🎨 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation sticky avec menu burger mobile
- ✅ Smooth scroll vers les sections
- ✅ Bouton retour en haut
- ✅ Animations d'apparition au scroll
- ✅ Formulaire de contact (ouvre le client mail)
- ✅ Aucune dépendance externe
- ✅ Accessibilité de base respectée

---

## 🎯 Sections du site

1. **Accueil (Hero)** - Présentation avec nom, tagline et boutons CTA
2. **À propos** - Biographie professionnelle
3. **Profil sportif** - Parcours au Stade Dijonnais et valeurs
4. **Stade Dijonnais** - Présentation du club
5. **Compétences** - Expertises en développement commercial
6. **Projets** - Dossier Remy et autres projets
7. **Contact** - Formulaire et coordonnées
8. **FAQ** - Questions fréquentes

---

## 🛠️ Personnalisation

### Modifier les informations de contact

Dans `index.html`, recherchez :
```html
<a href="mailto:alexandre.nahas@example.com">
```
Et remplacez par votre véritable adresse email.

### Modifier les couleurs

Dans `css/style.css`, modifiez les variables CSS au début du fichier :
```css
:root {
    --color-primary: #0F3D2E;     /* Votre couleur principale */
    --color-anthracite: #1F2937;  /* Couleur sombre */
}
```

### Ajouter des images

1. Placez vos images dans le dossier `assets/`
2. Référencez-les dans `index.html` :
   ```html
   <img src="assets/votre-image.jpg" alt="Description">
   ```

---

## 📚 Comprendre ce que tu as codé

### Structure HTML (index.html)

**Qu'est-ce que c'est ?**
Le HTML est le **squelette** de votre site. Il définit la structure et le contenu.

**Comment ça marche ?**

1. **Balises sémantiques** : Le code utilise des balises HTML5 modernes qui ont un sens :
   - `<nav>` pour la navigation
   - `<section>` pour les sections de contenu
   - `<footer>` pour le pied de page
   - `<h1>`, `<h2>`, `<h3>` pour les titres (hiérarchie importante pour l'accessibilité)

2. **Structure en sections** : Chaque grande partie du site est une `<section>` avec un `id` unique :
   ```html
   <section class="section" id="a-propos">
   ```
   - L'`id` permet de cibler la section (pour le menu et le smooth scroll)
   - La `class` permet d'appliquer des styles CSS communs

3. **Hiérarchie des titres** :
   - `<h1>` : Titre principal (une seule fois par page) → "Alexandre Nahas"
   - `<h2>` : Titres de sections → "À propos", "Compétences", etc.
   - `<h3>` : Sous-titres dans les sections
   - Cette hiérarchie aide les moteurs de recherche et les lecteurs d'écran

4. **Classes réutilisables** :
   ```html
   <div class="container">
   ```
   - La classe `container` centre le contenu et limite sa largeur
   - Elle est réutilisée partout pour garder une mise en page cohérente

---

### Logique CSS (style.css)

**Qu'est-ce que c'est ?**
Le CSS est l'**apparence** de votre site. Il définit les couleurs, tailles, positions, etc.

**Comment ça marche ?**

1. **Variables CSS (Custom Properties)** :
   ```css
   :root {
       --color-primary: #0F3D2E;
       --spacing-md: 2rem;
   }
   ```
   - Définies une seule fois en haut du fichier
   - Réutilisables partout : `background-color: var(--color-primary);`
   - Avantage : changer une couleur partout en modifiant une seule ligne

2. **Layout et positionnement** :

   **Flexbox** (alignement en ligne) :
   ```css
   .nav-container {
       display: flex;
       justify-content: space-between;
   }
   ```
   - Aligne les éléments horizontalement
   - `justify-content: space-between` : espace égal entre les éléments

   **Grid** (grille en 2D) :
   ```css
   .skills-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   }
   ```
   - Crée une grille responsive automatique
   - `minmax(300px, 1fr)` : largeur min 300px, max égale
   - `auto-fit` : adapte le nombre de colonnes à l'écran

3. **Responsive Design (Mobile-First)** :

   La stratégie : le code CSS de base s'applique à tous les écrans, puis on ajoute des ajustements pour les petits écrans :

   ```css
   /* Style par défaut (desktop) */
   .hero-title { font-size: 3.5rem; }

   /* Ajustements tablettes */
   @media (max-width: 768px) {
       .hero-title { font-size: 2.5rem; }
   }

   /* Ajustements mobiles */
   @media (max-width: 480px) {
       .hero-title { font-size: 2rem; }
   }
   ```

4. **Transitions et animations** :
   ```css
   .btn {
       transition: all 0.3s;
   }
   .btn:hover {
       transform: translateY(-2px);
   }
   ```
   - `transition` : rend le changement progressif sur 0.3 seconde
   - `:hover` : appliqué quand on survole avec la souris
   - `transform: translateY(-2px)` : déplace de 2px vers le haut

5. **Classes utilitaires** :
   - `.container` : centre et limite la largeur du contenu
   - `.section` : espacement vertical standard pour toutes les sections
   - `.section-alt` : fond gris clair pour alterner les sections

---

### Logique JavaScript (script.js)

**Qu'est-ce que c'est ?**
Le JavaScript ajoute l'**interactivité** : animations, réactions au clic, scroll, etc.

**Comment ça marche ?**

1. **DOMContentLoaded - Point d'entrée** :
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       initMobileMenu();
       initSmoothScroll();
       // etc.
   });
   ```
   - Attend que toute la page HTML soit chargée avant d'exécuter le JS
   - Évite les erreurs si on essaie d'accéder à un élément qui n'existe pas encore

2. **Menu burger mobile** :
   ```javascript
   function initMobileMenu() {
       const burger = document.getElementById('burger');
       const navMenu = document.getElementById('navMenu');

       burger.addEventListener('click', function() {
           burger.classList.toggle('active');
           navMenu.classList.toggle('active');
       });
   }
   ```
   - `getElementById` : récupère l'élément HTML avec cet ID
   - `addEventListener` : écoute un événement (ici le clic)
   - `classList.toggle` : ajoute la classe si elle n'existe pas, la retire sinon
   - La classe `active` change l'apparence en CSS (menu visible/caché)

3. **Smooth scroll** :
   ```javascript
   function initSmoothScroll() {
       const links = document.querySelectorAll('a[href^="#"]');

       links.forEach(link => {
           link.addEventListener('click', function(e) {
               e.preventDefault();
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);

               window.scrollTo({
                   top: targetPosition,
                   behavior: 'smooth'
               });
           });
       });
   }
   ```
   - `querySelectorAll` : sélectionne tous les liens qui commencent par `#`
   - `forEach` : boucle sur chaque lien trouvé
   - `preventDefault` : empêche le comportement par défaut (saut instantané)
   - `scrollTo` avec `behavior: 'smooth'` : scroll progressif

4. **IntersectionObserver - Animations au scroll** :
   ```javascript
   const observer = new IntersectionObserver(function(entries) {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
           }
       });
   });

   elementsToAnimate.forEach(el => observer.observe(el));
   ```
   - `IntersectionObserver` : API moderne pour détecter quand un élément entre dans le viewport
   - Plus performant qu'écouter l'événement `scroll` en continu
   - `isIntersecting` : `true` quand l'élément devient visible
   - Ajoute la classe `visible` qui déclenche l'animation CSS

5. **Formulaire de contact** :
   ```javascript
   contactForm.addEventListener('submit', function(e) {
       e.preventDefault();

       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       // ... récupération des autres champs

       const mailtoLink = `mailto:adresse@example.com?subject=${subject}&body=${emailBody}`;
       window.location.href = mailtoLink;
   });
   ```
   - Écoute la soumission du formulaire
   - `preventDefault` : empêche le rechargement de la page
   - Récupère les valeurs des champs avec `.value`
   - Construit un lien `mailto:` qui ouvre le client mail
   - `window.location.href` : redirige vers le lien mailto

---

## 🔑 Concepts clés à retenir

### 1. Séparation des responsabilités
- **HTML** = Structure et contenu (QUOI)
- **CSS** = Apparence et mise en page (COMMENT ça ressemble)
- **JavaScript** = Interactivité et comportement (COMMENT ça réagit)

### 2. Responsive Design
Le site s'adapte à toutes les tailles d'écran grâce à :
- **Media queries CSS** : `@media (max-width: 768px) { ... }`
- **Unités relatives** : `rem`, `%`, `vh` au lieu de pixels fixes
- **Flexbox et Grid** : layouts flexibles qui s'adaptent automatiquement

### 3. Accessibilité
Bonnes pratiques appliquées :
- Hiérarchie de titres correcte (`h1` → `h2` → `h3`)
- Attributs `alt` sur les images
- Attributs `aria-label` sur les boutons sans texte
- Contrastes de couleurs suffisants
- Navigation au clavier possible

### 4. Performance
Optimisations appliquées :
- JavaScript chargé en bas de page (ne bloque pas le rendu)
- IntersectionObserver au lieu d'écouter `scroll` en continu
- Transitions CSS (plus performantes que les animations JS)
- Pas de librairies externes (site léger et rapide)

---

## 🐛 Résolution de problèmes

### Le menu mobile ne s'ouvre pas
- Vérifiez que le fichier `js/script.js` est bien chargé
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les animations ne fonctionnent pas
- Vérifiez que vous utilisez un navigateur moderne (Chrome, Firefox, Edge récent)
- IntersectionObserver n'est pas supporté sur Internet Explorer

### Le formulaire ne fonctionne pas
- Assurez-vous d'avoir un client mail configuré sur votre ordinateur
- Sinon, copiez l'adresse email et envoyez un mail manuellement

### Le site s'affiche mal en local (fichier://)
- Utilisez un serveur local (Méthode 2) au lieu d'ouvrir directement le fichier HTML
- Certaines fonctionnalités nécessitent le protocole HTTP

---

## 📖 Ressources pour aller plus loin

### Apprendre le HTML/CSS/JS
- [MDN Web Docs](https://developer.mozilla.org/fr/) - Documentation de référence
- [W3Schools](https://www.w3schools.com/) - Tutoriels interactifs
- [CSS-Tricks](https://css-tricks.com/) - Astuces et guides CSS

### Outils utiles
- [Can I Use](https://caniuse.com/) - Vérifier la compatibilité des fonctionnalités
- [Coolors](https://coolors.co/) - Générateur de palettes de couleurs
- [Google Fonts](https://fonts.google.com/) - Polices gratuites (si vous voulez en ajouter)

### Validation
- [W3C HTML Validator](https://validator.w3.org/) - Valider votre HTML
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - Valider votre CSS

---

## 📝 Notes importantes

1. **Personnalisation** : Ce site est un modèle. Remplacez tous les placeholders (email, LinkedIn, etc.) par vos vraies informations.

2. **Images** : Ajoutez vos propres images dans le dossier `assets/` et référencez-les dans le HTML.

3. **Hébergement** : Pour mettre le site en ligne :
   - GitHub Pages (gratuit)
   - Netlify (gratuit)
   - Vercel (gratuit)
   - Uploadez simplement tous les fichiers

4. **SEO** : Pour améliorer le référencement Google :
   - Complétez la balise `<meta name="description">` dans le `<head>`
   - Ajoutez des balises Open Graph pour les réseaux sociaux
   - Créez un fichier `sitemap.xml`

---

## ✅ Checklist avant mise en ligne

- [ ] Remplacer l'email placeholder par votre vraie adresse
- [ ] Remplacer le lien LinkedIn placeholder
- [ ] Ajouter un favicon (icône dans l'onglet du navigateur)
- [ ] Ajouter vos propres images/photos
- [ ] Vérifier tous les liens (aucun lien mort)
- [ ] Tester sur mobile, tablette et desktop
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Vérifier l'orthographe et la grammaire
- [ ] Valider le HTML et CSS (W3C validators)
- [ ] Optimiser les images (compresser pour un chargement rapide)

---

## 📧 Contact

Pour toute question sur ce site ou collaboration :
- **Email** : alexandre.nahas@example.com
- **LinkedIn** : [Alexandre Nahas](https://www.linkedin.com/in/alexandre-nahas)

---

**Développé avec soin pour Alexandre Nahas**
Site vitrine professionnel - 100% local, 0% dépendance 🚀
