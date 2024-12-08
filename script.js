function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger-menu').addEventListener('click', toggleMenu);
});