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
