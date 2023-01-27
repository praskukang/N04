var swiper = new Swiper('.lottery', {
    observer: true,
    slidesPerView: 2,
    grid: {
        rows: 2,
        fill: "row",
    },
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 30,
            // grid: {
            // 	rows: 0,
            // },
        },
    },
});