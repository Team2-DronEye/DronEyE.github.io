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


const translations = {
    "en": {
        "welcome-header": "Welcome to DronEye",
        "about-us": "About Us",
        "product-features": "Product Features",
        "pricing": "Pricing",
        "contact": "Contact",
        "our-team": "Our Team",
        "slogan": "Travel the world - without ever leaving your home.",
         "intro": `Ever wanted to see the world from above without leaving home? <br> 
        With DronEye, you can watch live views from real drones around the globe. <br> 
        Explore cities, nature, and landmarks in real time, right from your couch. <br> 
        Discover new places, relax, and enjoy the world like never before.`,
        "p1-topic": "Explore. Connect. Experience.",
        "p1": `With DronEye, you can pick a membership plan <br>
            that suits your lifestyle.
            Whether you just want to explore
            for fun or you're a serious adventurer,
            there's a plan for you.
            Subscribers can watch live drone streams,
            chat with other users, and even talk to drone pilots
            to learn more about the places they're seeing.`,
        "p2-topic": "Why Just Watch When You Can Experience?",
        "p2": `Unlike regular travel videos or photos,
            DronEye lets you explore in real time. Watch the sunrise over the Alps, 
            glide above Tokyo, or fly over the beaches of Bali - all as it happens. 
            It's more than just watching; it's like traveling virtually with a real, human connection.`,
        "p3-topic": "Discover Your World",
        "p3": `Our goal is simple: to make exploring the world easy for everyone. 
            Whether you're planning a trip or just want to enjoy beautiful places 
            from home, DronEye makes it possible. Join other explorers, see destinations 
            in new ways, and experience the world like never before.`,
        "btm-txt": "Your journey begins here!",
        "button_text": "Français"
    },
    "fr": {
        "welcome-header": "Bienvenue chez DronEye",
        "about-us": "À propos de nous",
        "product-features": "Produit caractéristiques",
        "pricing": "Tarifs",
        "contact": "Contact",
        "our-team": "Notre équipe",
        "slogan": "Voyagez le monde - sans jamais quitter la maison.",
        "intro": `Vous avez toujours rêvé de voir le monde d'en haut sans quitter votre maison? <br>
        Avec DronEye, vous pouvez regarder des vues en direct captées par de vrais drones partout dans le monde. <br>
        Explorez des villes, la nature et des monuments en temps réel, confortablement installé dans votre canapé. <br>
        Découvrez de nouveaux endroits, détendez-vous et profitez du monde comme jamais auparavant.`,
        "p1-topic": "Explorez. Connectez. Vivez l'expérience.",
        "p1": `Avec DronEye, vous pouvez choisir un abonnement
        adapté à votre style de vie.
        Que vous souhaitiez simplement explorer pour le plaisir
        ou que vous soyez un aventurier passionné,
        il y a un plan fait pour vous.
        Les abonnés peuvent regarder des diffusions en direct de drones,
        discuter avec d'autres utilisateurs
        et même parler aux pilotes de drones
        pour en apprendre davantage sur les lieux qu'ils découvrent.`,
        "p2-topic": "Pourquoi regarder quand on peut vivre l'expérience?",
        "p2": `Contrairement aux vidéos ou photos de voyage classiques, DronEye vous permet d'explorer le monde en temps réel.
            Regardez le soleil se lever sur les Alpes, planez au-dessus de Tokyo ou survolez les plages de Bali - tout cela en direct.
            Ce n'est pas seulement regarder; c'est voyager virtuellement, avec une véritable connexion humaine.`,
        "p3-topic": "Découvrez votre monde",
        "p3": `Notre objectif est simple: rendre l'exploration du monde accessible à tous.
            Que vous planifiez un voyage ou que vous souhaitiez simplement admirer de magnifiques endroits depuis chez vous, DronEye rend cela possible.
            Rejoignez d'autres explorateurs, découvrez des destinations sous un nouveau jour
            et vivez le monde comme jamais auparavant.`,
        "btm-txt": "Votre voyage commence ici!",
        "button_text": "English"
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