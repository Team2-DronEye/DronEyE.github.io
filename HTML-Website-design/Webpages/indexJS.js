window.onload = function() {
    setTimeout(function() {
        const elementsToFadeIn = document.getElementsByClassName("fade-in");

        for (const element of elementsToFadeIn) {
            element.style.pointerEvents = 'auto';
            element.style.opacity = 1;
        }
    });
};