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

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);