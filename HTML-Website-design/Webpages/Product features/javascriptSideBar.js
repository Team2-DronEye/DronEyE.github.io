document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdownContent');
    const menuTrigger = document.getElementById('menu');

    const showDropdown = () => {
        if (dropdown) dropdown.style.width = '250px';
    };

    const hideDropdown = () => {
        if (dropdown) dropdown.style.width = '0';
    };

    if (menuTrigger) {
        menuTrigger.addEventListener('mouseover', showDropdown);
        menuTrigger.addEventListener('mouseout', hideDropdown);
    }

    // this makes the title clickable back to menu like how youtube and other websites do it
    const headerTitle = document.getElementById('headerTitle');

    if (headerTitle) {
        headerTitle.style.cursor = 'pointer';
        headerTitle.addEventListener('click', () => {
            window.location.href = '../MainPage.html';
        });
    }
});