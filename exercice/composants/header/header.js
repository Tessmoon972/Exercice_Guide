// Header Component Loader
class HeaderComponent {
    constructor() {
        this.init();
    }

    async init() {
        await this.loadCSS();
        await this.loadHTML();
        this.attachEventListeners();
    }

    async loadCSS() {
        // Charger le CSS du header
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'composants/header/header.css';
        document.head.appendChild(link);
    }

    async loadHTML() {
        try {
            // Charger le HTML du header
            const response = await fetch('composants/header/header.html');
            const headerHTML = await response.text();
            
            // Insérer le header au début du body
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
            
            // Initialiser le menu burger après injection du HTML
            this.initBurgerMenu();
            
        } catch (error) {
            console.error('Erreur lors du chargement du header:', error);
        }
    }

    attachEventListeners() {
        // Attendre que le DOM soit chargé
        document.addEventListener('DOMContentLoaded', () => {
            // Effet de scroll sur le header
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                if (header) {
                    if (window.scrollY > 100) {
                        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
                    } else {
                        header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
                    }
                }
            });

            // Navigation fluide pour les liens internes
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    }
// Initialiser le menu burger
    initBurgerMenu() {
        // Petit délai pour s'assurer que les éléments sont bien dans le DOM
        setTimeout(() => {
            const burgerMenu = document.getElementById('burgerMenu');
            const navLinks = document.getElementById('navLinks');

            if (burgerMenu && navLinks) {
                console.log('Menu burger initialisé avec succès');

                // Toggle menu on burger click
                burgerMenu.addEventListener('click', () => {
                    this.toggleMenu();
                });

                // Close menu when clicking on a link
                navLinks.addEventListener('click', (e) => {
                    if (e.target.tagName === 'A') {
                        this.closeMenu();
                    }
                });

                // Close menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                        this.closeMenu();
                    }
                });

                // Close menu on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeMenu();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768) {
                        this.closeMenu();
                    }
                });
            } else {
                console.error('Éléments du menu burger non trouvés:', {
                    burgerMenu: !!burgerMenu,
                    navLinks: !!navLinks
                });
            }
        }, 100);
    }

    // Initialiser le menu burger
    initBurgerMenu() {
        // Petit délai pour s'assurer que les éléments sont bien dans le DOM
        setTimeout(() => {
            const burgerMenu = document.getElementById('burgerMenu');
            const navLinks = document.getElementById('navLinks');

            if (burgerMenu && navLinks) {
                console.log('Menu burger initialisé avec succès');

                // Toggle menu on burger click
                burgerMenu.addEventListener('click', () => {
                    this.toggleMenu();
                });

                // Close menu when clicking on a link
                navLinks.addEventListener('click', (e) => {
                    if (e.target.tagName === 'A') {
                        this.closeMenu();
                    }
                });

                // Close menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                        this.closeMenu();
                    }
                });

                // Close menu on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeMenu();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768) {
                        this.closeMenu();
                    }
                });
            } else {
                console.error('Éléments du menu burger non trouvés:', {
                    burgerMenu: !!burgerMenu,
                    navLinks: !!navLinks
                });
            }
        }, 100);
    }
// Toggle menu visibility
    toggleMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const navLinks = document.getElementById('navLinks');

        if (burgerMenu && navLinks) {
            const isActive = burgerMenu.classList.contains('active');

            if (isActive) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        }
    }

// Initialiser le menu burger
    initBurgerMenu() {
        // Petit délai pour s'assurer que les éléments sont bien dans le DOM
        setTimeout(() => {
            const burgerMenu = document.getElementById('burgerMenu');
            const navLinks = document.getElementById('navLinks');

            if (burgerMenu && navLinks) {
                console.log('Menu burger initialisé avec succès');

                // Toggle menu on burger click
                burgerMenu.addEventListener('click', () => {
                    this.toggleMenu();
                });

                // Close menu when clicking on a link
                navLinks.addEventListener('click', (e) => {
                    if (e.target.tagName === 'A') {
                        this.closeMenu();
                    }
                });

                // Close menu when clicking outside
                document.addEventListener('click', (e) => {
                    if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                        this.closeMenu();
                    }
                });

                // Close menu on escape key
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeMenu();
                    }
                });

                // Handle window resize
                window.addEventListener('resize', () => {
                    if (window.innerWidth > 768) {
                        this.closeMenu();
                    }
                });
            } else {
                console.error('Éléments du menu burger non trouvés:', {
                    burgerMenu: !!burgerMenu,
                    navLinks: !!navLinks
                });
            }
        }, 100);
    }
// Toggle menu visibility
    toggleMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const navLinks = document.getElementById('navLinks');

        if (burgerMenu && navLinks) {
            const isActive = burgerMenu.classList.contains('active');

            if (isActive) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        }
    }
// Close menu
    closeMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const navLinks = document.getElementById('navLinks');

        if (burgerMenu && navLinks) {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');

            // Restore body scroll
            document.body.style.overflow = '';
        }
    } 
// Open menu
    openMenu() {
        const burgerMenu = document.getElementById('burgerMenu');
        const navLinks = document.getElementById('navLinks');

        if (burgerMenu && navLinks) {
            burgerMenu.classList.add('active');
            navLinks.classList.add('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';

            // Set focus to first menu item for accessibility
            const firstLink = navLinks.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        }
    }


}

// Initialiser le header
new HeaderComponent();
