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