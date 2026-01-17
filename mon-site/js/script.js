/* =============================================================================
   SCRIPT PRINCIPAL
   Ce fichier gère toutes les interactions JavaScript du site :
   - Menu burger mobile
   - Smooth scroll vers les sections
   - Bouton retour en haut
   - Animation d'apparition au scroll
   - Gestion du formulaire de contact
   ============================================================================= */

// =============================================================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des différentes fonctionnalités
    initMobileMenu();
    initSmoothScroll();
    initScrollTopButton();
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();
});


// =============================================================================
// MENU BURGER MOBILE
// Gère l'ouverture/fermeture du menu de navigation sur mobile
// =============================================================================

function initMobileMenu() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle du menu au clic sur le burger
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnBurger = burger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnBurger && navMenu.classList.contains('active')) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}


// =============================================================================
// SMOOTH SCROLL
// Active le défilement doux vers les sections lors du clic sur les liens
// =============================================================================

function initSmoothScroll() {
    // Sélectionner tous les liens qui pointent vers des ancres (#)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Récupérer l'ID de la section cible
            const targetId = this.getAttribute('href');

            // Ignorer les liens vides (#)
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Trouver l'élément cible
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Calculer la position en tenant compte de la navbar fixe
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                // Scroll doux vers la position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// =============================================================================
// BOUTON RETOUR EN HAUT
// Affiche/masque le bouton selon la position de scroll
// =============================================================================

function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTop');

    // Fonction qui vérifie la position de scroll
    function toggleScrollTopButton() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Vérifier la position au scroll
    window.addEventListener('scroll', toggleScrollTopButton);

    // Action au clic : retour en haut
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// =============================================================================
// NAVBAR AU SCROLL
// Réduit légèrement la navbar lors du scroll pour gagner de l'espace
// =============================================================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Ajouter une ombre plus marquée quand on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
}


// =============================================================================
// ANIMATIONS AU SCROLL
// Fait apparaître les éléments progressivement lors du scroll
// Utilise l'API IntersectionObserver pour de meilleures performances
// =============================================================================

function initScrollAnimations() {
    // Sélectionner tous les éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.section, .skill-card, .value-item, .club-card, .project-featured, .faq-item'
    );

    // Ajouter la classe fade-in à tous ces éléments
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
    });

    // Options de l'observer
    const observerOptions = {
        threshold: 0.1,        // Déclencher quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px'  // Déclencher un peu avant que l'élément soit visible
    };

    // Callback appelé quand un élément entre/sort du viewport
    const observerCallback = function(entries, observer) {
        entries.forEach(entry => {
            // Si l'élément est visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : arrêter d'observer cet élément après l'animation
                // observer.unobserve(entry.target);
            }
        });
    };

    // Créer l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer tous les éléments
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}


// =============================================================================
// FORMULAIRE DE CONTACT
// Gère la soumission du formulaire (ouverture du client mail)
// =============================================================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construire le corps de l'email
        const emailBody = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Construire le lien mailto
        const mailtoLink = `mailto:alexandre.nahas@example.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

        // Ouvrir le client mail
        window.location.href = mailtoLink;

        // Message de confirmation (optionnel)
        alert('Votre client mail va s\'ouvrir. Si ce n\'est pas le cas, veuillez envoyer un email directement à alexandre.nahas@example.com');

        // Réinitialiser le formulaire
        contactForm.reset();
    });
}


// =============================================================================
// FONCTIONS UTILITAIRES
// =============================================================================

/**
 * Détecte si l'utilisateur est sur mobile
 * @returns {boolean}
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Détecte si l'élément est visible dans le viewport
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// =============================================================================
// GESTION DES PERFORMANCES
// Throttle function pour limiter l'exécution d'événements fréquents (scroll, resize)
// =============================================================================

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Exemple d'utilisation du throttle (commenté car déjà géré nativement)
// window.addEventListener('scroll', throttle(function() {
//     console.log('Scroll event avec throttle');
// }, 100));
