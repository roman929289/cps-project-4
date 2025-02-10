// import Swiper from "swiper"
// import { Navigation, Pagination } from "swiper/modules"

function resetSwiperStyles(selector, wrapperSelector) {
    const container = document.querySelector(selector);

    if (container) {
        container.classList.remove('swiper-initialized', 'swiper-horizontal', 'swiper-backface-hidden');
        container.style = '';

        const wrapper = container.querySelector(wrapperSelector);
        if (wrapper) {
            wrapper.style = '';
            wrapper.classList.remove('.swiper-wrapper'); // Убираем точку перед классом
        } 

        const slides = container.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            slide.style = '';
            slide.classList.remove('swiper-slide');
        });
    }
}

function disableSwiper768() {
    let swiperInstance;
    const breakpoint = 768;
    const selector = '.swiper-container.main__uslugi';
    const wrapper = '.main__wrapper';
    const slideSelector = '.main__slde';

    function toggleSwiper() {
        if (window.innerWidth > breakpoint) {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                resetSwiperStyles(selector, wrapper);
            }
        } else {
            if (!swiperInstance) {
                const container = document.querySelector(selector);
                const slides = container.querySelectorAll(slideSelector);

                slides.forEach(slide => slide.classList.add('swiper-slide'));

                swiperInstance = new Swiper('.swiper-container', {
                    direction: "horizontal",
                    loop: true,
                    slidesPerView: 1.2,
                    spaceBetween: 10
                });
            }
        }
    }

    window.addEventListener('resize', toggleSwiper);
    toggleSwiper();
}

disableSwiper768();





function disableSwiper425() {
    let swiperInstance;
    const breakpoint = 425;
    const selector2 = '.remont.swiper-container3';
    const wrapper2 = '.remont__wrapper';
    const slideSelector2 = '.remont__button';

    function toggleSwiper() {
        if (window.innerWidth > breakpoint) {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                resetSwiperStyles(selector2, wrapper2);
            }
        } else {
            if (!swiperInstance) {
                const container = document.querySelector(selector2);
                if (!container) return;

                const slides = container.querySelectorAll(slideSelector2);
                slides.forEach(slide => slide.classList.add('swiper-slide'));

                swiperInstance = new Swiper('.swiper-container3', {
                    direction: "horizontal",
                    loop: true,
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination3',
                        type: 'bullets',
                        clickable: true,
                    },
                });
            }
        }
    }

    window.addEventListener('resize', toggleSwiper);
    toggleSwiper();
}

disableSwiper425();

function disableSwiper425_2() {
    let swiperInstance;
    const breakpoint = 425;
    const selector3 = '.main__brands.swiper-container4';
    const wrapper3 = '.brands__wrapper';
    const slideSelector3 = '.main__brands--brands';

    function toggleSwiper() {
        if (window.innerWidth > breakpoint) {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                resetSwiperStyles(selector3, wrapper3);
            }
        } else {
            if (!swiperInstance) {
                const container = document.querySelector(selector3);
                if (!container) return;

                const slides = container.querySelectorAll(slideSelector3);
                slides.forEach(slide => slide.classList.add('swiper-slide'));

                swiperInstance = new Swiper('.swiper-container4', {
                    direction: "horizontal",
                    loop: true,
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    pagination: {
                        el: '.swiper-pagination4',
                        type: 'bullets',
                        clickable: true,
                    },
                });
            }
        }
    }

    window.addEventListener('resize', toggleSwiper);
    toggleSwiper();
}

disableSwiper425_2();

const swiper2 = new Swiper('.swiper-container2', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlieds: false,
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
    },
});

const swiper5 = new Swiper('.swiper-container5', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3.3,
    spaceBetween: 10,
    breakpoints: {
        769: {
            allowTochMove: false,
            allowSlideNext: false,
            allowSlidePrev: false,
        },
        768: {
            allowTochMove: true,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
    },
});


const callLaptop = document.querySelector(".uslugi__call");
const chatLaptop = document.querySelector(".uslugi__message");
const laptopClose = document.querySelector(".okno__laptop--button");
const laptopClose2 = document.querySelector(".okno__laptop--button2");
const overlay = document.querySelector(".okno__laptop");
const overlay2 = document.querySelector(".okno__laptop--overlay");
const laptopFirst = document.querySelector(".okno__laptop--feedback");
const laptopSecond = document.querySelector(".okno__laptop--call");

callLaptop.addEventListener("click", () => {
    overlay.style.display = ("block");
    overlay2.style.display = ("block");
    laptopFirst.style.display = ("block");
    laptopSecond.style.display = ("none");
});

chatLaptop.addEventListener("click", () => {
    overlay.style.display = ("block");
    overlay2.style.display = ("block");
    laptopSecond.style.display = ("block");
    laptopFirst.style.display = ("none");
});

laptopClose.addEventListener("click", () => {
    overlay.style.display = ("none");
    overlay2.style.display = ("none");
    laptopFirst.style.display = ("none");
});

laptopClose2.addEventListener("click", () => {
    overlay.style.display = ("none");
    overlay2.style.display = ("none");
    laptopSecond.style.display = ("none");
});

overlay2.addEventListener("click", (e) => {
    if (e.target === overlay2) {
        overlay2.style.display = "none";
        overlay.style.display = ("none");
    laptopFirst.style.display = ("none");
    }
});

overlay2.addEventListener("click", (e) => {
    if (e.target === overlay2) {
        overlay2.style.display = "none";
        overlay.style.display = ("none");
        laptopSecond.style.display = ("none");
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay2.style.display = "none";
        overlay.style.display = ("none");
    }
});

const tabletMenu = document.querySelector(".header__tablet--burger2");
const overlayTablet = document.querySelector(".okno__tablet");
const overlayTablet2 = document.querySelector(".okno__tablet--overlay");
const blockTablet = document.querySelector(".okno__tablet--block");
const tabletClose = document.querySelector(".okno__tablet--burger");
const callTablet = document.querySelector(".okno__tablet--uslugiCall");
const chatTablet = document.querySelector(".okno__tablet--uslugiChat");
const tabletFirst = document.querySelector(".okno__tablet--call");
const tabletSecond = document.querySelector(".okno__tablet--feedback");
const tabletButton2 = document.querySelector(".okno__tablet--button");
const tabletButton = document.querySelector(".okno__tablet--button2");
const tabletButton4 = document.querySelector(".header__mobile--chapCopy");
const tabletButton3 = document.querySelector(".header__mobile--chat");

tabletMenu.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    overlayTablet2.style.display = ("block");
    blockTablet.style.display = ("block");
    tabletFirst.style.display = ("none");
    tabletSecond.style.display = ("none");
});

tabletClose.addEventListener("click", () => {
    overlayTablet.style.display = ("none");
    overlayTablet2.style.display = ("none");
    blockTablet.style.display = ("none");
    tabletSecond.style.display = ("none");
});

overlayTablet2.addEventListener("click", (e) => {
    if (e.target === overlayTablet2) {
        overlayTablet2.style.display = ("none");
        overlayTablet.style.display = ("none");
        blockTablet.style.display = ("none");
        tabletSecond.style.display = ("none");
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlayTablet.style.display = "none";
        overlayTablet2.style.display = ("none");
        tabletSecond.style.display = ("none");
    }
});

callTablet.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    blockTablet.style.display = ("none");
    tabletSecond.style.display = ("block");
});

chatTablet.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    blockTablet.style.display = ("block");
    tabletFirst.style.display = ("block");
});

tabletButton.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    overlayTablet2.style.display = ("block");
    blockTablet.style.display = ("block");
    tabletFirst.style.display = ("none");
});

tabletButton2.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    overlayTablet2.style.display = ("block");
    blockTablet.style.display = ("block");
    tabletSecond.style.display = ("none");
});

tabletButton4.addEventListener("click", () => {
    tabletFirst.style.display = ("none");
    tabletSecond.style.display = ("block");
    overlayTablet.style.display = ("block");
    overlayTablet2.style.display = ("block");
    blockTablet.style.display = ("block");
});

tabletButton3.addEventListener("click", () => {
    overlayTablet.style.display = ("block");
    blockTablet.style.display = ("block");
    overlayTablet2.style.display = ("block");
    tabletFirst.style.display = ("block");
});

const mobileMenu = document.querySelector(".header__mobile--burger2");
const overlayMobile = document.querySelector(".okno__mobile");
const overlayMobile2 = document.querySelector(".okno__mobile--overlay");
const blockMobile = document.querySelector(".okno__mobile--block");
const mobileClose = document.querySelector(".okno__mobile--burger");
const callMobile = document.querySelector(".okno__mobile--uslugiCall");
const chatMobile = document.querySelector(".okno__mobile--uslugiChat");
const oknoMobileCall = document.querySelector(".okno__mobile--call");
const oknoMobileFeed = document.querySelector(".okno__mobile--feedback");
const mobileButton = document.querySelector(".okno__mobile--button");
const mobileButton2 = document.querySelector(".okno__mobile--button2");

mobileMenu.addEventListener("click", () => {
    overlayMobile.style.display = ("block");
    overlayMobile2.style.display = ("block");
    blockMobile.style.display = ("block");
});

mobileClose.addEventListener("click", () => {
    overlayMobile.style.display = ("none");
    overlayMobile2.style.display = ("none");
    blockMobile.style.display = ("none");
});

overlayMobile2.addEventListener("click", (e) => {
    if (e.target === overlayMobile2) {
        overlayMobile2.style.display = "none";
        overlayMobile.style.display = ("none");
        blockMobile.style.display = ("none");
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlayMobile.style.display = "none";
        overlayMobile2.style.display = ("none");
    }
});

callMobile.addEventListener("click", () => {
    oknoMobileCall.style.display = ("none");
    oknoMobileFeed.style.display = ("block");
});

chatMobile.addEventListener("click", () => {
    oknoMobileCall.style.display = ("block");
    oknoMobileFeed.style.display = ("none");
});

mobileButton.addEventListener("click", () => {
    oknoMobileCall.style.display = ("none");
    oknoMobileFeed.style.display = ("none");
});

mobileButton2.addEventListener("click", () => {
    oknoMobileCall.style.display = ("none");
    oknoMobileFeed.style.display = ("none");
});

const hideTablet1 = document.querySelector(".main__brands--button");
const viewTablet1 = document.querySelector(".main__brands--buttonHide");
const tabletBlock1 = document.querySelectorAll(".hideTablet");

hideTablet1.addEventListener("click", () => {
    hideTablet1.style.display = ("none");
    viewTablet1.style.display = ("flex");
    tabletBlock1.forEach(block => {
        block.style.display = "none";
    });
});

viewTablet1.addEventListener("click", () => {
    viewTablet1.style.display = ("none");
    hideTablet1.style.display = ("flex");
    tabletBlock1.forEach(block => {
        block.style.display = "flex";
    });
});

const hideTablet2 = document.querySelector(".main__brands--buttonLaptop");
const viewTablet2 = document.querySelector(".main__brands--buttonLaptopHide");
const tabletBlock2 = document.querySelectorAll(".hideLaptop");

hideTablet2.addEventListener("click", () => {
    hideTablet2.style.display = ("none");
    viewTablet2.style.display = ("flex");
    tabletBlock2.forEach(block => {
        block.style.display = "none";
    });
});

viewTablet2.addEventListener("click", () => {
    viewTablet2.style.display = ("none");
    hideTablet2.style.display = ("flex");
    tabletBlock2.forEach(block => {
        block.style.display = "flex";
    });
});

const hideTablet3 = document.querySelector(".remont__button2");
const viewTablet3 = document.querySelector(".remont__buttonHide2");
const tabletBlock3 = document.querySelectorAll(".hideTablet2");

hideTablet3.addEventListener("click", () => {
    hideTablet3.style.display = ("none");
    viewTablet3.style.display = ("flex");
    tabletBlock3.forEach(block => {
        block.style.display = "none";
    });
});

viewTablet3.addEventListener("click", () => {
    viewTablet3.style.display = ("none");
    hideTablet3.style.display = ("flex");
    tabletBlock3.forEach(block => {
        block.style.display = "flex";
    });
});

const hideTablet4 = document.querySelector(".remont__buttonLaptop2");
const viewTablet4 = document.querySelector(".remont__buttonLaptopHide2");
const tabletBlock4 = document.querySelectorAll(".hideLaptop2");

hideTablet4.addEventListener("click", () => {
    hideTablet4.style.display = ("none");
    viewTablet4.style.display = ("flex");
    tabletBlock4.forEach(block => {
        block.style.display = "none";
    });
});

viewTablet4.addEventListener("click", () => {
    viewTablet4.style.display = ("none");
    hideTablet4.style.display = ("flex");
    tabletBlock4.forEach(block => {
        block.style.display = "flex";
    });
});

const abzacMobile = document.querySelector(".main__opisanie--text2");
const abzacLaptop = document.querySelector(".main__opisanie--360");
const knopka1 = document.querySelector(".main__opisanie--button");
const knopka2 = document.querySelector(".main__opisanie--button2");
const knopka3 = document.querySelector(".main__opisanie--button3");
const knopka4 = document.querySelector(".main__opisanie--button4");

knopka1.addEventListener("click", () => {
    abzacMobile.style.display = "none";
    knopka1.style.display = "none";
    knopka2.style.display = "flex";
});

knopka2.addEventListener("click", () => {
    abzacMobile.style.display = "block";
    knopka2.style.display = "none";
    knopka1.style.display = "flex";
});

knopka3.addEventListener("click", () => {
    abzacLaptop.style.display = "none";
    knopka3.style.display = "none";
    knopka4.style.display = "flex";
});

knopka4.addEventListener("click", () => {
    abzacLaptop.style.display = "block";
    knopka4.style.display = "none";
    knopka3.style.display = "flex";
});