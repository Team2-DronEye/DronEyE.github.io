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
        window.location.href = '../index.html';
    });
}