/* Swiper*/
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
});

/*Carousel News*/

const gap = 16;

const carousel = document.querySelector(".news__carousel"),
    content = document.querySelector(".news__content"),
    next = document.querySelector(".news__next"),
    prev = document.querySelector(".news__prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.opacity = "1";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.opacity = "0.2";
    }
});

prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.opacity = "0.2";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.opacity = "1";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));