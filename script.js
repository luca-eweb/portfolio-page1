const navEls = document.querySelectorAll(".nav"); // Alle Navigationselemente auswählen
const hamburgerEl = document.querySelector(".hamburger");

// Hamburger-Menü öffnen/schließen
hamburgerEl.addEventListener("click", () => {
    navEls.forEach(navEl => {
        navEl.classList.toggle("nav--open");
    });
    hamburgerEl.classList.toggle("hamburger--open");
});

// Menü schließen, wenn auf eines der nav-Elemente geklickt wird
navEls.forEach(navEl => {
    navEls.addEventListener("click", () => {
        navEl.forEach(el => el.classList.remove("nav--open")); // Schließe alle `.nav`
        hamburgerEl.classList.remove("hamburger--open");
    });
});

// Menü schließen beim Scrollen
$(window).scroll(function () {
    navEls.forEach(navEl => navEl.classList.remove("nav--open")); // Schließe alle `.nav`
    hamburgerEl.classList.remove("hamburger--open");
});

// Header-Transparenz basierend auf Scroll-Position ändern
$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $('header').css('opacity', '1');
    } else {
        $('header').css('opacity', '.4');
    }
});