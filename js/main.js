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
    speed: 500,
    spaceBetween: 200,
    loop: true,
    mousewhell: true,
    navigation: {
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 50
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 200
        }
    }
});

/* Swiper History*/
let swiper3 = new Swiper(".Swiper3", {
    slidesPerView: 1,
    spaceBetween: 190,
    loop: true,
    mousewhell: true,
    keyboard: true,
    navigation: {

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

/*Scroll*/
const linkNav = document.querySelectorAll('.header__nav-link');

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        linkNav.forEach(item => {
            item.classList.remove('header__nav-link--active');
        });

        link.classList.add('header__nav-link--active');

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        burger.classList.toggle('burger--active');
        nav.classList.toggle('nav--visible');

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/*Tabs*/
const table = document.querySelector('.start-page__statistic');
const tableTitles = document.querySelectorAll('.start-page__statistic-name');
const tableContent = document.querySelectorAll('.start-page__statistic-table');

console.log(table);
console.log(tableTitles);
console.log(tableContent);


function hideTabContent() {
    tableContent.forEach(item=> {
        item.style.display = 'none';
    });

    tableTitles.forEach(item => {
        item.classList.remove('start-page__statistic-name--active');
    });

    console.log("сработал Hide");
}

function showTabContent(i = 0) {
    console.log("сработал Show");
    tableTitles[i].classList.add('start-page__statistic-name--active');
    tableContent[i].style.display = 'block';
    tableContent[i].style.layoutfixed = "fixed";

}

// hideTabContent();
// showTabContent();

table.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('start-page__statistic-name')){
        tableTitles.forEach((item, index) => {
            if(event.target == item) {
                // hideTabContent();
                // showTabContent(index);
            }
        });
    }
});

/* Burger Menu*/

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', ()=> {

    console.log('Сработал burger');
    nav.classList.toggle('nav--visible');
    burger.classList.toggle('burger--active');
});