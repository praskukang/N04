var swiper1 = new Swiper('.lottery', {
    observer: true,
    breakpoints: {
        325: {
            direction: "horizontal",
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
            mousewheel: true,
            spaceBetween: 10,
            scrollbar: {
                el: ".swiper-scrollbar"
            },
        },
    },
});

var swiper2 = new Swiper('.lottery-d', {
    direction: "vertical",
    observer: true,
    mousewheel: true,
    slidesPerView: 7,
    scrollbar: {
        el: ".swiper-scrollbar"
    },
});

var swiper = new Swiper(".hotGames", {
    slidesPerView: 5,
    spaceBetween: 10,
    mousewheel: true,
    navigation: {
        nextEl: ".swiper-button-next.hotGames-next",
        prevEl: ".swiper-button-prev.hotGames-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 7,
        },
    },
});

$('.lg-in').click(function () {
    $('.popup-login').addClass('active')
    $('.overlay').addClass('active')
})

$(document).mouseup(function (e) {
    if ($(".popup-login").hasClass('active') && !$(".overlay").is(e.target) && $(".overlay").has(e.target).length === 1) {
        $(".popup-login").removeClass("active");
        $('.overlay').removeClass('active')
    }
});

$('.btn-lgin').click(function () {
    $(".popup-login").removeClass("active");
    $('.overlay').removeClass('active')
})

$('.fgp').click(function () {
    $('.popup-fp').addClass('active')
    $('.overlay').addClass('active')
})

$(document).mouseup(function (e) {
    if ($(".popup-fp").hasClass('active') && !$(".overlay").is(e.target) && $(".overlay").has(e.target).length === 1) {
        $(".popup-fp").removeClass("active");
        $('.overlay').removeClass('active')
    }
});

$('.btn-fp').click(function () {
    $(".popup-fp").removeClass("active");
    $('.overlay').removeClass('active')
})

$('.sdMenu').click(function () {
    $('.mobile-sidemenu').addClass('active')
    $('.overlaysd').addClass('active')
})

$(document).mouseup(function (e) {
    if (!$(".mobile-sidemenu").is(e.target) && $(".mobile-sidemenu").has(e.target).length === 0) {
        $(".mobile-sidemenu").removeClass("active");
        $('.overlaysd').removeClass('active')
    }
});

$(document).on('click', '.adt', function () {
    if ($(this).next().is(":visible")) {
        $(this).next().slideUp("2000");
    } else {
        $(this).next().slideDown("2000");
    }
    return false;
});

$('.download-menu ul li').click(function () {
    $('.download-menu ul li').removeClass('active');
    $(this).toggleClass('active');
    $('.download-content')
        .children()
        .not($('.' + $(this).attr('id')))
        .removeClass('active');
    $('.download-content .' + this.id).addClass('active');
});

var int = setInterval((function () {
    if ($(".slotPopuler .populerGame .glpic img").length > 0) {
        var hLtr = $('.slotPopuler').height();
        $('.hLoterry').css('height', (hLtr + 3) + 'px');
        clearInterval(int);
    }
}), 1000);

var width = $(window).width();
$(window).on('resize', function () {
    var hLtr2 = $('.slotPopuler').height();
    $('.hLoterry').css('height', (hLtr2 + 3) + 'px');
});
