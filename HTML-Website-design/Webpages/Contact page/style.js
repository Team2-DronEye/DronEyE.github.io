document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const dropdown = document.getElementById('dropdownContent');

    if (menu && dropdown) {
        menu.addEventListener('mouseenter', () => {
            dropdown.style.width = '250px';
        });

        menu.addEventListener('mouseleave', (e) => {
            if (!dropdown.contains(e.relatedTarget)) {
                dropdown.style.width = '0';
            }
        });

        dropdown.addEventListener('mouseenter', () => {
            dropdown.style.width = '250px';
        });

        dropdown.addEventListener('mouseleave', (e) => {
            if (!menu.contains(e.relatedTarget)) {
                dropdown.style.width = '0';
            }
        });
    }
});

const translations = {
    "en": {
        "about-us": "About Us",
        "product-features": "Product Features",
        "pricing": "Pricing",
        "contact": "Contact",
        "our-team": "Our Team",
        "name" : "Name",
        "Email": "Email",
        "Contents": "Contents",
        "Submit" : "Submit",
        "Contact Us":"Contact Us",
        "reserved" : "All rights reserved",
        "email-example":"email@example.com",
        "company": "Company Name",
        

        },
        
    "fr": {
        "about-us": "À propos de nous",
        "product-features": "Produit caractéristiques",
        "pricing": "Tarifs",
        "contact": "Contact",
        "our-team": "Notre équipe",
        "name" :"Nom",
        "Email" :"Courriel",
        "Contents":"Contenu",
        "Submit": "Soumettre",
        "Contact Us":"Contactez-nous",
        "reserved": "Tous droits réservés",
        "button_text": "English",
        "email-example":"courriel@example.com",
        "company": "Nom de l'entreprise",
        "
        }
};

function translatePage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName.toLowerCase() === "input" && element.type === "submit"){
                element.value = translations[lang][key];
            } else{
            element.innerHTML = translations[lang][key]}
        }
    });

    const toggleButton = document.getElementById('lang-toggle');
    if (lang === "en"){
        toggleButton.textContent = "Français";
    } else {
        toggleButton.textContent = "English";
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
