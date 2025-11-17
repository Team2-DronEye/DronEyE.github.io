const refreshElement = document.getElementById('refresh');

function reloadCurrentPage() {
    window.location.reload(); 
}
refreshElement.addEventListener('click', reloadCurrentPage);

function openDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    if (dropdown) {
        dropdown.style.width = '250px';
    }
}

function closeDropdown() {
    const dropdown = document.getElementById('dropdownContent');
    if (dropdown) {
        dropdown.style.width = '0';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');

    if (menu) {
        menu.addEventListener('mouseover', openDropdown);
        menu.addEventListener('mouseout', closeDropdown);
    }
});

function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]
        }
    });

    const toggleButton = document.getElementById('lang-toggle');
    if (translations[lang] && translations[lang]['button_text']) {
        toggleButton.textContent = translations[lang]['button_text'];
    }
    
    document.getElementById('translatable-content').setAttribute('lang', lang);
}
const translations = {
    "en": {
        "welcome-header": "Welcome to DronEye",
        "about-us": "About Us",
        "product-features": "Product Features",
        "pricing": "Pricing",
        "contact": "Contact",
        "our-team": "Our Team",
        "Home": "Home",
        "button_text": "Français",
        "contact-us": "Contact Us",
        "copyright": "Copyright© 2025 DronEye. All rights reserved.",
        "Subscriptions": "MEMBERSHIPS TIERS",
        "introText": "Discover the world from a new perspective with DRONEYE! Join the DRONEYE family today and unlock endless ways to explore every breathtaking view! Choose the membership plan that suits you best!",
        "tierOne": 'Traveler Tier is recommended for everyone with great offerings! <a href="#TravelerTier" class="buyButton"><div style="font-size: 100%; text-align: center;">Traveler</div></a>',
        "tierTwo": 'Adventurer Tier provides the best value and new experiences! <a href="#AdventurerTier" class="buyButton">Adventurer</a>',
        "tierThree": 'Globetrotter Tier is perfect for those who want to explore every horizon of the world! <a href="#GlobetrotterTier" class="buyButton">Globetrotter</a>',
        "travelerTier": "At $20 a month, Traveler Tier members receive the following benefits: <div style='margin-left: 40px'><ul><li>Free roam exploration of major cities across the globe</li><li>5 hours of flight time per week!</li></ul></div>",
        "adventurerTier": "At $40 a month, Adventurer Tier members receive the following benefits: <div style='margin-left: 40px'><ul><li>Includes the benefits from Traveler Tier</li><li>Free roam exploration of all towns and villages across the globe</li><li>Drone customization</li><li>15 hours of flight time per week!</li></ul></div>",
        "globetrotterTier": "At $70 a month, Globetrotter Tier members receive the following benefits: <div style='margin-left: 40px'><ul><li>Includes the benefits from all prior tiers</li><li>Complete limitless free roam exploration</li><li>Unlimited flight hours</li><li>First priority for drone model selection!</li></ul></div>"
    },
    "fr": {
        "welcome-header": "Bienvenue chez DronEye",
        "about-us": "À propos de nous",
        "product-features": "Produit caractéristiques",
        "pricing": "Tarifs",
        "contact": "Contact",
        "our-team": "Notre équipe",
        "Home": "Accueil",
        "btm-txt": "Votre voyage commence ici!",
        "button_text": "English",
        "contact-us": "Contactez-nous",
        "copyright": "Droit d'auteur© 2025 DronEye. Tous droits réservés.",
        "Subscriptions": "ABONNEMENT",
        "introText": "Découvrir le monde par un nouveau point de vue avec DRONEYE! Rejoignez la famille de DRONEYE aujourd'hui et trouvez des nouveaux façons d'explorer sans fin! Choisissez ce qui vous intéresse le plus!",
        "tierOne": 'Le plan Voyageur est recommandé à tous grâce à ses offres exceptionnelles ! <a href="#TravelerTier" class="buyButton"><div style="font-size: 100%; text-align: center;">Touriste</div></a>',
        "tierTwo": 'Le plan Adventurier offre le meilleur rapport qualité-prix et de nouvelles expériences ! <a href="#AdventurerTier" class="buyButton">Voyageur</a>',
        "tierThree": 'Le plan Globetrotteur est idéal pour ceux qui souhaitent explorer tous les horizons du monde ! <a href="#GlobetrotterTier" class="buyButton">Globe-Trotteur</a>',
        "travelerTier": "À 20$ par mois, les membres Voyageur recevront ce qui suit: <div style='margin-left: 40px'><ul><li>Exploration libre des grandes villes à travers le monde</li><li>5 heures de vol par chaque semaine!</li></ul></div>", 
        "adventurerTier": "À 40$ par mois, les membres Aventurier recevront ce qui suit: <div style='margin-left: 40px'><ul><li>Tous les avantages d'Étage Touriste</li><li>Exploration libre de tous les villes et villages à travers le monde</li><li>Personnalisation de votre drone</li><li>15 heures de vol par chaque semaine!</li></ul></div>",
        "globetrotterTier": "À 70$ par mois, les membres Globetrotteur recevront ce qui suit: <div style='margin-left: 40px'><ul><li>Tous les avantages des precedents Étages</li><li>Exploration entiérement libre</li><li>Rien de limite sur des heures de vol</li><li>Priorité absolue sur le choix du mod<le de drone</li></ul></div>"
    }
};
document.addEventListener('DOMContentLoaded', function() {
    translatePage('en'); 

    document.getElementById('lang-toggle').addEventListener('click', () => {
        const contentDiv = document.getElementById('translatable-content');
        let currentLang = contentDiv.getAttribute('lang');
        
        const newLang = (currentLang === 'en') ? 'fr' : 'en';

        translatePage(newLang);
    });
});