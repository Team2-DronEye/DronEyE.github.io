// Dropdown logic (same style as your friend) 
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
function toggleMore(id){
  const section = document.getElementById(id);
  if (section) {
    section.classList.toggle('show');
  };
};

// -------------------- TRANSLATION SYSTEM (added) --------------------
const translations = {
  en: {
    "about-us": "About Us",
    "product-features": "Product Features",
    "pricing": "Pricing",
    "contact": "Contact",
    "our-team": "Our Team",
    "our-team-heading": "Meet Our Team",
    "contact-us": "Contact Us<br>something",
    "copyright": "Copyright© 2025 DronEye. All rights reserved.",
    "button_text": "Français"
  },
  fr: {
    "about-us": "À propos de nous",
    "product-features": "Produit caractéristiques",
    "pricing": "Tarifs",
    "contact": "Contact",
    "our-team": "Notre équipe",
    "our-team-heading": "Rencontrez notre équipe",
    "contact-us": "Contactez-nous<br>quelque chose",
    "copyright": "Droit d’auteur© 2025 DronEye. Tous droits réservés.",
    "button_text": "English"
  }
};

function translatePage(lang) {
  // swap text for every element that has a data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const val = translations[lang] && translations[lang][key];
    if (val) el.innerHTML = val;
  });

  // toggle button label
  const toggleButton = document.getElementById('lang-toggle');
  if (toggleButton && translations[lang] && translations[lang]['button_text']) {
    toggleButton.textContent = translations[lang]['button_text'];
  }

  // set page language on <html>
  document.documentElement.setAttribute('lang', lang);
}

// init + toggle (added)
document.addEventListener('DOMContentLoaded', function () {
  // start in English
  translatePage('en');

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang') || 'en';
      const next = current === 'en' ? 'fr' : 'en';
      translatePage(next);
    });
  }
});
