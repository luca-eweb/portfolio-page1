const navEls = document.querySelectorAll(".nav");
const hamburgerEl = document.querySelector(".hamburger");

if (hamburgerEl && navEls.length > 0) {
    hamburgerEl.addEventListener("click", () => {
        navEls.forEach(navEl => {
            navEl.classList.toggle("nav--open");
        });
        hamburgerEl.classList.toggle("hamburger--open");
    });

    navEls.forEach(navEl => {
        navEl.addEventListener("click", () => {
            navEls.forEach(el => el.classList.remove("nav--open"));
            hamburgerEl.classList.remove("hamburger--open");
        });
    });

    document.addEventListener("click", (event) => {
        if (!hamburgerEl.contains(event.target) && !Array.from(navEls).some(navEl => navEl.contains(event.target))) {
            navEls.forEach(navEl => navEl.classList.remove("nav--open"));
            hamburgerEl.classList.remove("hamburger--open");
        }
    });

    $(window).scroll(function () {
        navEls.forEach(navEl => navEl.classList.remove("nav--open"));
        hamburgerEl.classList.remove("hamburger--open");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('header').css('opacity', '1');
        } else {
            $('header').css('opacity', '.4');
        }
    });
} else {
    console.error("Hamburger oder Navigationselemente nicht gefunden.");
}

async function loadQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://zenquotes.io/api/random';
    const url = proxyUrl + apiUrl;

    document.querySelector('.quote').innerText = 'Lade ein Zitat...';
    document.querySelector('.author').innerText = '';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const quote = data[0];
        document.querySelector('.quote').innerText = `"${quote.q}"`;
        document.querySelector('.author').innerText = `– ${quote.a}`;
    } catch (error) {
        console.error('Fehler beim Abrufen des Zitats:', error);
        document.querySelector('.quote').innerText = 'Fehler beim Laden eines neuen Zitats.';
        document.querySelector('.author').innerText = '';
    }
}

// Aufruf der Funktion beim Laden der Seite
loadQuote();