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

    let scrollTimeout;

    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('header').css('opacity', '1');
            $('header .logo').css('display', 'block');
        } else {
            $('header').css('opacity', '.1');
            $('header .logo').css('display', 'none');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            $('header').css('opacity', '1');
            $('header .logo').css('display', 'block');
        }, 200);
    });

} else {
    console.error("Hamburger oder Navigationselemente nicht gefunden.");
}
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://zenquotes.io/api/random';

async function loadQuote() {
    const url = proxyUrl + apiUrl; // Kombinierte URL mit Proxy
    try {
        const response = await fetch(url);
        const data = await response.json();
        const quote = data[0]; // Die API liefert ein Array, daher Zugriff auf das erste Element
        document.querySelector('.quote').innerText = `"${quote.q}"`; // q = Zitat
        document.querySelector('.author').innerText = `– ${quote.a}`; // a = Autor
    } catch (error) {
        console.error('Fehler beim Abrufen des Zitats:', error);
        document.querySelector('.quote').innerText = 'Fehler beim Laden eines neuen Zitats.';
        document.querySelector('.author').innerText = '';
    }
}

loadQuote();