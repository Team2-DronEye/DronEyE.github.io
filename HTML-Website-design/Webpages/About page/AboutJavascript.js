const translations = {
    "en": {
        "about-us": "About Us",
        "home": "Home",
        "About-Us": "About Us",
        "product-features": "Product Features",
        "pricing": "Pricing",
        "contact": "Contact",
        "our-team": "Our Team",
        "morning-greeting": "Good morning, explorer!",
        "afternoon-greeting": "Good afternoon, explorer!",
        "evening-greeting": "Good evening, explorer!",
        "slogan": "Explore the world through the comfort of your home!",
        "intro": `We believe that everyone should have access to real place views. 
        That's why we created DronEye, a platform that lets you experience real destinations through a live drone. 
        With our subscription service, you can explore anywhere in the world right from your home, 
        connect with other users, and see the world from a whole new perspective.`,
        "how-it-works": "Want to know how it works?",
        "how-it-works-desc": `Simply choose your membership plan, select a destination, and enjoy breathtaking live views from our drones in real time. 
        Whether you're discovering cities, beaches, or hidden landscapes, DronEye brings the adventure to you.`,
        "get-started": "Get Started",
        "membership-tiers": "Membership Tiers",
        "traveler-title": "Traveler",
        "traveler-desc": `Perfect for casual explorers who want to see the world freely. 
        Access popular destinations and enjoy limited live drone sessions monthly.`,
        "choose-traveler": "Choose Traveler",
        "adventurer-title": "Adventurer",
        "adventurer-desc": `Step up your journey with high-quality live drone views, 
        early access to new destinations, and invites to exciting community events around the globe.`,
        "choose-adventurer": "Choose Adventurer",
        "globetrotter-title": "Globetrotter",
        "globetrotter-desc": `Go all-in with full, unlimited access to every destination. 
        Enjoy premium live drone quality and exclusive experiences that redefine travel.`,
        "choose-globetrotter": "Choose Globetrotter",
        "button_text": "Français",
        "contact-us": "Contact Us",
        "phone": "647-999-9999",
        "email": "dronEye@gmail.com",
        "copyright": "Copyright© 2025 DronEye. All rights reserved."
        
    },
    "fr": {
        "about-us": "À propos de nous",
        "home": "Accueil",
        "About-Us": "À propos de nous",
        "product-features": "Produit caractéristiques",
        "pricing": "Tarifs",
        "contact": "Contact",
        "our-team": "Notre équipe",
        "morning-greeting": "Bonjour, explorateur !",
        "afternoon-greeting": "Bon après-midi, explorateur !",
        "evening-greeting": "Bonsoir, explorateur !",
        "slogan": "Explorez le monde depuis le confort de votre maison !",
        "intro": `Nous croyons que tout le monde devrait avoir accès à des vues réelles de lieux authentiques. 
        C’est pourquoi nous avons créé DronEye, une plateforme qui vous permet de découvrir de vraies destinations grâce à des drones en direct. 
        Avec notre service d’abonnement, vous pouvez explorer n’importe où dans le monde depuis chez vous, 
        vous connecter avec d’autres utilisateurs et voir le monde sous un tout nouveau point de vue.`,
        "how-it-works": "Envie de savoir comment ça fonctionne ?",
        "how-it-works-desc": `Choisissez simplement votre plan d’abonnement, sélectionnez une destination et profitez de vues en direct à couper le souffle depuis nos drones, en temps réel. 
        Que vous exploriez des villes, des plages ou des paysages cachés, DronEye vous apporte l’aventure directement chez vous.`,
        "get-started": "Commencez maintenant",
        "membership-tiers": "Plans d’abonnement",
        "traveler-title": "Voyageur",
        "traveler-desc": `Parfait pour les explorateurs occasionnels qui souhaitent découvrir le monde librement. 
        Accédez à des destinations populaires et profitez de sessions de drones en direct limitées chaque mois.`,
        "choose-traveler": "Choisir Voyageur",
        "adventurer-title": "Aventurier",
        "adventurer-desc": `Passez à la vitesse supérieure avec des vues en direct de haute qualité, 
        un accès anticipé aux nouvelles destinations et des invitations à des événements communautaires passionnants partout dans le monde.`,
        "choose-adventurer": "Choisir Aventurier",
        "globetrotter-title": "Globetrotteur",
        "globetrotter-desc": `Optez pour l’expérience complète avec un accès illimité à toutes les destinations. 
        Profitez d’une qualité supérieure et d’expériences exclusives qui redéfinissent le voyage.`,
        "choose-globetrotter": "Choisir Globetrotteur",
        "button_text": "English",
        "contact-us": "Contactez-nous",
        "phone": "647-999-9999",
        "email": "dronEye@gmail.com",
        "copyright": "Droit d’auteur© 2025 DronEye. Tous droits réservés."
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuBar");
    const dropdown = document.getElementById("dropdownContent");

    menuButton.addEventListener("click", () => {
        dropdown.style.width = dropdown.style.width === "250px" ? "0" : "250px";
    });

    const aboutTitle = document.getElementById("aboutTitle");
    const greeting = document.createElement("h2");
    const hour = new Date().getHours();
let greetingKey;

if (hour < 12) {
    greetingKey = "morning-greeting";
} else if (hour < 18) {
    greetingKey = "afternoon-greeting";
} else {
    greetingKey = "evening-greeting";
}

greeting.setAttribute("data-key", greetingKey);
greeting.textContent = translations["en"][greetingKey];

greeting.style.color = "#006699";
greeting.style.fontFamily = "'Arimo', sans-serif";
greeting.style.marginTop = "10px";
greeting.style.transition = "opacity 0.8s ease";
greeting.style.opacity = "0";

aboutTitle.insertAdjacentElement("afterend", greeting);
setTimeout(() => (greeting.style.opacity = "1"), 300);

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'transform 0.2s ease';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    document.querySelectorAll('.tier .btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const planElement = button.closest('.tier').querySelector('h3');
            const planName = planElement ? planElement.textContent.trim() : 'this';

            if (confirm('You selected the ' + planName + ' plan! Do you want to go to the pricing page?')) {
                window.location.href = "../Pricing page/Pricing Page.html";
            }
        });
    });

    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", (event) => {
            event.preventDefault();
            if (confirm('Ready to begin your journey? Do you want to go to the DronEye product features page?')) {
                window.location.href = getStartedBtn.href;
            }
        });
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

document.addEventListener('DOMContentLoaded', function() {
    translatePage('en'); 

    document.getElementById('lang-toggle').addEventListener('click', () => {
        const contentDiv = document.getElementById('translatable-content');
        let currentLang = contentDiv.getAttribute('lang');
        
        const newLang = (currentLang === 'en') ? 'fr' : 'en';

        translatePage(newLang);
    });
});