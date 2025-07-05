# Configuration du Site de Vernon

## 🎨 Personnalisation du design

### Couleurs principales
Vous pouvez modifier les couleurs dans le fichier `main.css` :

```css
:root {
    --primary-color: #2c3e50;      /* Bleu foncé principal */
    --secondary-color: #3498db;    /* Bleu clair */
    --accent-color: #e74c3c;       /* Rouge accent */
    --text-dark: #2c3e50;          /* Texte sombre */
    --text-light: #ecf0f1;         /* Texte clair */
    --bg-light: #f8f9fa;           /* Fond clair */
    --bg-dark: #2c3e50;            /* Fond sombre */
    --border-color: #bdc3c7;       /* Bordures */
}
```

### Polices de caractères
Les polices sont définies dans `main.css` :

```css
/* Police principale */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Titres */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', serif;
}
```

## 📱 Configuration responsive

### Points de rupture (breakpoints)
Définis dans `main.css` :

```css
/* Mobile first */
@media (min-width: 576px) { /* Petit mobile */ }
@media (min-width: 768px) { /* Tablette */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

## 🗺️ Configuration de la carte

### Paramètres Leaflet
Dans `informations.html`, section script :

```javascript
// Coordonnées de Vernon
const vernonCoords = [49.0947, 1.4842];

// Configuration de la carte
const map = L.map('map').setView(vernonCoords, 13);

// Style de la carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
```

### Markers personnalisés
Ajoutez vos propres points d'intérêt :

```javascript
// Exemple de marker
L.marker([49.0947, 1.4842])
    .addTo(map)
    .bindPopup('Votre point d\'intérêt')
    .openPopup();
```

## 🎭 Configuration des animations

### Effet parallaxe
Paramètres dans `main.js` :

```javascript
// Vitesse de l'effet parallaxe (0.1 = lent, 0.5 = rapide)
const parallaxSpeed = 0.3;

// Éléments avec parallaxe
const parallaxElements = document.querySelectorAll('.parallax-element');
```

### Transitions CSS
Durées des transitions dans `main.css` :

```css
/* Transition standard */
.transition-smooth {
    transition: all 0.3s ease;
}

/* Transition rapide */
.transition-fast {
    transition: all 0.15s ease;
}

/* Transition lente */
.transition-slow {
    transition: all 0.5s ease;
}
```

## 🔗 Configuration du maillage interne

### Navigation principale
Modifiez dans `composants/header/header.html` :

```html
<nav class="navbar">
    <ul class="nav-menu">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="informations.html">Informations</a></li>
        <li><a href="contact.html">Contact</a></li>
        <!-- Ajoutez vos pages ici -->
    </ul>
</nav>
```

### Liens contextuels
Ajoutez des liens dans le contenu des pages :

```html
<!-- Exemple de lien contextuel -->
<p>Découvrez nos <a href="informations.html#attractions">attractions principales</a>.</p>
```

## 📸 Configuration des images

### Formats recommandés
- **WebP** : Format moderne, compression optimale
- **JPEG** : Photos, images complexes
- **PNG** : Images avec transparence
- **SVG** : Icônes, logos

### Optimisation
Dimensions recommandées :
- **Slider** : 1920x1080px (16:9)
- **Cartes** : 800x600px (4:3)
- **Icônes** : 64x64px ou SVG

## 🎯 Configuration SEO

### Balises meta
Ajoutez dans chaque page HTML :

```html
<head>
    <meta name="description" content="Description de votre page">
    <meta name="keywords" content="mots-clés, séparés, par, virgules">
    <meta name="author" content="Votre nom">
    <meta property="og:title" content="Titre pour les réseaux sociaux">
    <meta property="og:description" content="Description pour les réseaux sociaux">
    <meta property="og:image" content="url-image-preview.jpg">
</head>
```

### Structured Data
Ajoutez des données structurées pour le SEO :

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Vernon",
    "description": "Ville historique de Normandie"
}
</script>
```

## 🚀 Configuration de performance

### Optimisation des images
Utilisez des formats modernes :

```html
<!-- Image responsive avec formats multiples -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Lazy loading
Ajoutez `loading="lazy"` aux images :

```html
<img src="image.jpg" alt="Description" loading="lazy">
```

### Minification
Pour la production :
1. Minifiez le CSS avec un outil comme [CSS Minifier](https://cssminifier.com/)
2. Minifiez le JavaScript avec [UglifyJS](https://github.com/mishoo/UglifyJS)
3. Compressez les images avec [TinyPNG](https://tinypng.com/)

## 🔧 Configuration avancée

### Variables CSS personnalisées
Créez vos propres variables :

```css
:root {
    --mon-espacement: 1rem;
    --ma-couleur: #custom;
    --ma-police: 'Custom Font', sans-serif;
}
```

### Modules JavaScript
Organisez votre code en modules :

```javascript
// utils.js
export function maFonction() {
    // Code de votre fonction
}

// main.js
import { maFonction } from './utils.js';
```

## 📋 Checklist de déploiement

Avant de mettre en ligne :
- [ ] Tester sur différents navigateurs
- [ ] Vérifier le responsive design
- [ ] Optimiser les images
- [ ] Minifier CSS/JS
- [ ] Tester la vitesse de chargement
- [ ] Vérifier l'accessibilité
- [ ] Valider le HTML/CSS
- [ ] Tester les liens internes

## 🛠️ Outils recommandés

### Développement
- **VS Code** : Éditeur de code
- **Live Server** : Extension VS Code pour le développement
- **Browser DevTools** : Outils de débogage

### Optimisation
- **Lighthouse** : Audit de performance
- **PageSpeed Insights** : Analyse de vitesse
- **GTmetrix** : Test de performance

### Design
- **Figma** : Maquettes et prototypes
- **Adobe XD** : Design d'interface
- **Canva** : Création graphique simple

---

**Cette configuration vous permet de personnaliser facilement le site selon vos besoins !**
