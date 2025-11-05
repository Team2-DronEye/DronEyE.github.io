// this makes the title clickable back to menu like how youtube and other websites do it
const headerTitle = document.getElementById('headerTitle');

if (headerTitle) {
    headerTitle.style.cursor = 'pointer';
    headerTitle.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}