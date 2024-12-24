const navEls = document.querySelectorAll(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const footerEl = document.querySelector("#kontakt");

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
        } else {
            $('header').css('opacity', '.1');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            $('header').css('opacity', '1');
            $('header .logo').css('display', 'block');
        }, 500);
    });

} else {
    console.error("Hamburger oder Navigationselemente nicht gefunden.");
}
async function loadQuote() {
    var category = 'life';
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': MY_SECRET },
        contentType: 'application/json',
        success: function (result) {
            if (result && result.length > 0) {
                $('.quote').text('"' + result[0].quote + '"');
                $('.author').text('- ' + result[0].author);

            } else {
                $('.quote').text('Kein Zitat gefunden.');
                $('.author').text('');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $('.quote').text('Fehler beim Laden des Zitats.');
            $('.author').text('');
        }
    });
}

$(document).ready(function () {
    loadQuote();
});

document.addEventListener('DOMContentLoaded', () => {

    window.showJokePopup = async function() {
        const jokePopup = document.getElementById('jokePopup');
        const jokeOverlay = document.getElementById('jokeOverlay');
        const jokeText = document.getElementById('jokeText');

        jokePopup.style.display = 'block';
        jokeOverlay.style.display = 'block';

        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            jokeText.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
        } catch (error) {
            jokeText.innerText = "Witz konnte nicht geladen werden. 😞";
        }
    }

    window.showTablePopup = function() {
        document.getElementById('tablePopup').style.display = 'block';
        document.getElementById('tableOverlay').style.display = 'block';
    }

    window.hidePopup = function(popupId, overlayId) {
        document.getElementById(popupId).style.display = 'none';
        document.getElementById(overlayId).style.display = 'none';
    }
})