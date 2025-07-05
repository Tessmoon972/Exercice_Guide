// Hero Slider JavaScript
class HeroSlider {
    constructor() {
        this.currentSlideIndex = 0;
        this.slides = null;
        this.dots = null;
        this.totalSlides = 0;
        this.autoSlideInterval = null;
        
        this.init();
    }

    init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.hero-dot');
        this.totalSlides = this.slides.length;

        if (this.totalSlides > 0) {
            this.startAutoSlide();
        }
    }

    showSlide(index) {
        if (!this.slides || !this.dots) return;

        // Masquer toutes les slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Afficher la slide active
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
    }

    changeSlide(direction) {
        this.currentSlideIndex += direction;
        
        if (this.currentSlideIndex >= this.totalSlides) {
            this.currentSlideIndex = 0;
        } else if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = this.totalSlides - 1;
        }
        
        this.showSlide(this.currentSlideIndex);
    }

    currentSlide(index) {
        this.currentSlideIndex = index - 1;
        this.showSlide(this.currentSlideIndex);
    }

    startAutoSlide() {
        // Auto-slide every 5 seconds
        this.autoSlideInterval = setInterval(() => {
            this.changeSlide(1);
        }, 5000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// Fonctions globales pour la compatibilité avec les événements onclick
let heroSliderInstance = null;

function changeSlide(direction) {
    if (heroSliderInstance) {
        heroSliderInstance.changeSlide(direction);
    }
}

function currentSlide(index) {
    if (heroSliderInstance) {
        heroSliderInstance.currentSlide(index);
    }
}

// Fonction pour charger le slider
function loadSlider() {
    fetch('composants/slider/slider.html')
        .then(response => response.text())
        .then(html => {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                // Insérer le slider au début de la section hero
                heroSection.insertAdjacentHTML('afterbegin', html);
                
                // Initialiser le slider
                heroSliderInstance = new HeroSlider();
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement du slider:', error);
        });
}

// Charger le CSS du slider
function loadSliderCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'composants/slider/slider.css';
    document.head.appendChild(link);
}

// Charger le slider au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadSliderCSS();
    loadSlider();
});
