document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuBar");
    const dropdown = document.getElementById("dropdownContent");

    menuButton.addEventListener("click", () => {
        dropdown.style.width = dropdown.style.width === "250px" ? "0" : "250px";
    });
    });

const aboutTitle = document.getElementById("aboutTitle");
const greeting = document.createElement("h2");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning, explorer!";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon, adventurer!";
} else {
    greeting.textContent = "Good evening, traveler!";
}

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
        const plan = button.closest('.tier').querySelector('h3').textContent;
        alert(`You selected the ${plan} plan! Redirecting to pricing...`);
        window.location.href = "Pricing Page (3).html";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
        target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const getStartedBtn = document.querySelector('a[href^="productFeatures"]');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert("Ready to begin your journey? Redirecting you to explore DronEye product features page...");
    window.location.href = getStartedBtn.href;
  });
}