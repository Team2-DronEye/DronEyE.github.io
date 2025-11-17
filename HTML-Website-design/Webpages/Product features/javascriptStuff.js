const refreshElements = document.getElementsByClassName('refresh');

function reloadCurrentPage() {
    window.location.reload(); 
}

if (refreshElements.length > 0) {
    refreshElements[0].addEventListener('click', reloadCurrentPage);
}

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

// this makes the title clickable back to menu like how youtube and other websites do it
const headerTitle = document.getElementById('headerTitle');

if (headerTitle) {
    headerTitle.style.cursor = 'pointer';
    headerTitle.addEventListener('click', () => {
        window.location.href = '../mainPageComplete/indexHTML.html';
    });
}

// translation stuff
const translations = { 
  "en": {
    "title": "Product Features",
    "about-us": "About Us",
    "product-features": "Product Features",
    "main-page": "Main page",
    "pricing": "Pricing",
    "contact": "Contact",
    "our-team": "Our Team",
    "contact-us": "Contact Us",
    "copyright": "Copyright© 2025 DronEye. All rights reserved.",
    "button_text": "Français",
    "features-text": "Why choose DronEye?",
    "text1": "Check out a limited amount of places around the world through a live drone before making a decision of visiting the location or travel digitally. This is a product that is to be paid through a subscription. The user would also be able to contact other drones with this product to ask their opinions on the locations or maybe if they know where to find something at a certain area.",
    "text2": "<li><strong>Live verification:</strong> See real time footage to confirm if a location matches reviews and expectations.</li><li><strong>Unbiased insights:</strong> Avoid outdated or misleading info with direct visual access to your destination.</li><li><strong>Digital travel:</strong> Explore cities and landmarks from home, saving time and money.</li><li><strong>Remote connection:</strong> Stay in touch with loved ones or scout areas even when you can’t be there in person.</li>",
    "buyText": "Buy a Subscription"
  },
  "fr": {
    "title": "Caractéristiques du produit",
    "about-us": "À propos de nous",
    "product-features": "Produit caractéristiques",
    "main-page": "Page principale",
    "pricing": "Tarifs",
    "contact": "Contact",
    "our-team": "Notre équipe",
    "contact-us": "Contactez-nous",
    "copyright": "Droit d’auteur© 2025 DronEye. Tous droits réservés.",
    "button_text": "English",
    "features-text": "Pourquoi choisir DronEye?",
    "text1": "Découvrez un nombre limité de lieux à travers le monde grâce à un drone en direct avant de décider de vous y rendre ou de voyager virtuellement. Ce service est disponible par abonnement. L'utilisateur pourra également contacter d'autres drones équipés de ce service pour leur demander leur avis sur les lieux ou s'ils savent où trouver quelque chose dans une zone précise.",
    "text2": "<li><strong>Vérification en direct :</strong> Confirmez un lieu grâce à des images en temps réel.</li><li><strong>Vue directe :</strong> Évitez les infos trompeuses avec un accès visuel immédiat.</li><li><strong>Voyage virtuel :</strong> Explorez villes et sites depuis chez vous, en gagnant temps et argent.</li><li><strong>Connexion à distance :</strong> Restez en contact ou explorez des lieux sans y être physiquement.</li>",
    "buyText": "Acheter un abonnement"
  }
};

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

document.addEventListener('DOMContentLoaded', function() {
    translatePage('en'); 

    document.getElementById('lang-toggle').addEventListener('click', () => {
        const contentDiv = document.getElementById('translatable-content');
        let currentLang = contentDiv.getAttribute('lang');
        
        const newLang = (currentLang === 'en') ? 'fr' : 'en';

        translatePage(newLang);
    });
});