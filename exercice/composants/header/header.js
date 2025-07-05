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
        link.href = '';
        document.head.appendChild(link);
    }

    async loadHTML() {
        try {
            // Charger le HTML du header
            const response = await fetch('');
            const headerHTML = await response.text();
            
            // Insérer le header au début du body
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
            
            // Initialiser le menu burger après injection du HTML
            
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

}

// Initialiser le header
new HeaderComponent();
