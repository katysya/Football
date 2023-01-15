/* Swiper*/
let swiper1 = new Swiper(".Swiper1", {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
});

/* Swiper Team*/
let swiper2 = new Swiper(".Swiper2", {
    slidesPerView: 3,
    spaceBetween: 200,
    loop: true,
    mousewhell: true,
    navigation: {
        prevEl: '.swiper-button-prev',
    },
});

/* Swiper History*/
let swiper3 = new Swiper(".Swiper3", {
    slidesPerView: 1,
    spaceBetween: 190,
    loop: true,
    mousewhell: true,
    keyboard: true,
    navigation: {
        prevEl: '.swiper-button-prev',
    },
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