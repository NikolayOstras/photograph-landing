addEventListener('DOMContentLoaded', (event) => {
    const preloader = document.querySelector('#preloader')
    const overlay = document.querySelector('#overlay')
    const body = document.querySelector('body')
    preloader.style.display = 'none'
    overlay.style.display = 'none'
    body.classList.remove('inactive')

})
const swiper = new Swiper(".swiper", {
    speed: 400,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: true,
    slidesPerView: 3,
    lazy: true,
    preloadImages: false
});
var elem = document.querySelector(".grid");
var iso = new Isotope(elem, {
    // options
    itemSelector: ".grid-item",
    layoutMode: "fitRows"
});
// element argument can be a selector string
//   for an individual element
var iso = new Isotope(".grid", {
});
AOS.init();
const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
if (header) burger.addEventListener("click", () => {
    header.classList.toggle("isActive");
});
if (burger) burger.addEventListener("click", () => {
    burger.classList.toggle("isActive");
});
const links = document.querySelectorAll(".nav__link");
if (links.length > 0) {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
            header.classList.remove("isActive");
            burger.classList.remove("isActive")
        })
    }
}
