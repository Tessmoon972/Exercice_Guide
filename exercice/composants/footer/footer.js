// Footer Component JavaScript
class FooterComponent {
    constructor() {
        this.init();
    }

    init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadFooter());
        } else {
            this.loadFooter();
        }
    }

    loadFooter() {
        fetch('composants/footer/footer.html')
            .then(response => response.text())
            .then(html => {
                // Insérer le footer à la fin du body, avant les scripts
                document.body.insertAdjacentHTML('beforeend', html);
            })
            .catch(error => {
                console.error('Erreur lors du chargement du footer:', error);
            });
    }
}

// Charger le CSS du footer
function loadFooterCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'composants/footer/footer.css';
    document.head.appendChild(link);
}

// Initialiser le footer au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadFooterCSS();
    new FooterComponent();
});
