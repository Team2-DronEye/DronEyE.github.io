// Dropdown logic
function openDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  if (dropdown) dropdown.style.width = '250px';
}

function closeDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  if (dropdown) dropdown.style.width = '0';
}

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  if (menu) {
    menu.addEventListener('mouseover', openDropdown);
    menu.addEventListener('mouseout', closeDropdown);
  }

  // Make title clickable to return home
  const headerTitle = document.getElementById('headerTitle');
  if (headerTitle) {
    headerTitle.style.cursor = 'pointer';
    headerTitle.addEventListener('click', () => {
      window.location.href = '../index.html';
    });
  }
});

// Toggle More Info for team members
function toggleMore(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.toggle('show');
  }
}

// 🌍 TRANSLATIONS
const translations = { 
  "en": {
    "welcome-header": "Welcome to DronEye",
    "about-us": "About Us",
    "product-features": "Product Features",
    "pricing": "Pricing",
    "contact": "Contact",
    "our-team": "Our Team",
    "contact-us": "Contact Us",
    "copyright": "Copyright© 2025 DronEye. All rights reserved.",
    "button_text": "Français"
  },
  "fr": {
    "welcome-header": "Bienvenue chez DronEye",
    "about-us": "À propos de nous",
    "product-features": "Produit caractéristiques",
    "pricing": "Tarifs",
    "contact": "Contact",
    "our-team": "Notre équipe",
    "contact-us": "Contactez-nous",
    "copyright": "Droit d’auteur© 2025 DronEye. Tous droits réservés.",
    "button_text": "English"
  }
};

function translatePage(lang) {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
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
