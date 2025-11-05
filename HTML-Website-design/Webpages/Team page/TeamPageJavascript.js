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
function toggleMore(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.toggle('show');
  }
}
