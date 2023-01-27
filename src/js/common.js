$(document).ready(function () {
    var url = window.location,
        urlPath = window.location.pathname;
    $("header .menu li a, .bottom-nav a, .menu-2 a, ul.nav-inside li a").each(function () {
        if ($(this).prop("href") == url) {
            $(this).closest('li').addClass("active");
        }
    });

    if ($('.g8-banner').length) {

        if ($('.g8-banner-d').length) {
            $('.g8-banner-d').empty().append('\
            <div class="swiper-container g8b-d">\
              <div class="swiper-wrapper s-slides"></div>\
              <div class="swiper-pagination"></div>\
            </div>\
          ');
        }

        if ($('.g8-banner-m').length) {
            $('.g8-banner-m').empty().append('\
            <div class="swiper-container g8b-m">\
              <div class="swiper-wrapper s-slides"></div>\
            </div>\
          ');
        }

        ajaxCaller('get', '/func/cms/getBannerList', '', function (res) {

            if (typeof sBan == 'undefined') { sBan = [] }

            if (res[1].length) {

                var sBanOP = [], sBanTNM = sBan;
                $.each(res[1], function (i, item) {
                    sBanOP.push({ "url": item[0], "link": item[3], "type": "1", "urlmob": item[1], "title": item[2], "tournament": item[4], "opener": item[5], "reqLogin": item[6] })
                });
                sBan = sBanTNM.concat(sBanOP);

            }

            $.each(sBan, function (i, item) {

                var sBanActive = '', sBanTarget = '', sBanLink = '#', sBanIMG = '<img src="' + item['url'] + '" alt="' + item['title'] + '">', sBanMobIMG = '<img src="' + item['urlmob'] + '" alt="' + item['title'] + '">', sBanIMGTemp, sBanMobIMGTemp;
                if (i == 0) { sBanActive = 'active' }

                if (item['type'] == '2') {
                    sBanIMG = '<img src="/common/images/tnm/' + item['url'] + '1800x600.jpg" alt="' + item['title'] + '">';
                    sBanMobIMG = '<img src="/common/images/tnm/' + item['urlmob'] + '640x300.jpg" alt="' + item['title'] + '">';
                }

                if (item['opener'] == '1') {
                    sBanTarget = 'target="_blank"'
                }

                if (item['link']) {
                    if (item['link'] != '#') {
                        sBanIMGTemp = '<a href="' + item['link'] + '" ' + sBanTarget + '>' + sBanIMG + '</a>';
                        sBanMobIMGTemp = '<a href="' + item['link'] + '" ' + sBanTarget + '>' + sBanMobIMG + '</a>';
                    }
                }

                if (!globalObj.login) {
                    if (item['reqLogin'] == '1') {
                        return
                    }
                }

                if (sBanIMGTemp) { sBanIMG = sBanIMGTemp }
                if (sBanMobIMGTemp) { sBanMobIMG = sBanMobIMGTemp }

                if ($('.g8-banner-d').length) {
                    $('.g8b-d .s-slides').append('<div class="swiper-slide ' + sBanActive + '">' + sBanIMG + '</div>');
                }

                if ($('.g8-banner-m').length) {
                    $('.g8b-m .s-slides').append('<div class="swiper-slide ' + sBanActive + '">' + sBanMobIMG + '</div>');
                }

            });

            var mySwiper = new Swiper(".g8-banner .swiper-container", {
                autoplay: { delay: 5000, disableOnInteraction: false },
                loop: true,
                pagination: { el: ".g8-banner .swiper-pagination", clickable: "true" },
                navigation: { nextEl: ".g8-banner .swiper-button-next", prevEl: ".g8-banner .swiper-button-prev" },
            });

        })

    }

    if (entityData.runningText.length > 0) {
        $('.s-a').empty();

        if ($('.s-a').length) {
            $('.s-a').append('<marquee scrolldelay="150" behavior="scroll" onmouseover="this.stop();" onmouseout="this.start();" direction="left">' + entityData.runningText + '</marquee>');
        }
        if ($('.s-a2').length) {
            $('.s-a2').append(entityData.runningText);
        }
    }

    if ($('.s-cs').length) {

        $.each(entityData, function (i, item) {
            if (item.length > 0 && ['whatsapp', 'youtube', 'line', 'facebook', 'telegram', 'google', 'telephone', 'instagram', 'skype', 'twitter', 'yahoo', 'tiktok', 'sms', 'wechatId'].includes(i)) {

                var scName = i, faName = '' + i, link = 'javascript:void(0)';

                if (i == 'whatsapp') {
                    link = 'https://api.whatsapp.com/send?phone=' + item; faName = '<i class="fa-brands fa-whatsapp"></i>';
                    $('.s-cs.qr-wa-tele').append(`<div class="ctc d-flex flex-wrap"><a href="${link}" target="_blank" rel="noopener nofollow">${faName}<span>${item}</span></a></div>`);
                    $('.s-cs.sc-footer, .s-cs.img-terhubung').append(`<a href="${link}" target="_blank"><img src="/assets/img/${scName}.png" alt="" loading="lazy"></a>`);
                    $('.tele-wa a:last-child').attr('href', link).find('button').text(item);
                }
                if (i == 'line') { faName = '<i class="fa-brands fa-line"></i>' }
                if (i == 'facebook') { link = 'https://www.facebook.com/' + item; faName = '<i class="fa-brands fa-facebook"></i>' }
                if (i == 'telegram') {
                    link = 'https://t.me/' + item; faName = '<i class="fa-brands fa-telegram"></i>';
                    $('.s-cs.qr-wa-tele').append(`<div class="ctc d-flex"><a href="${link}" target="_blank" rel="noopener nofollow">${faName}<span>${item}</span></a></div>`);
                    $('.s-cs.sc-footer, .s-cs.img-terhubung').append(`<a href="${link}" target="_blank"><img src="/assets/img/${scName}.png" alt="" loading="lazy"></a>`);
                    $('.tele-wa a:first-child').attr('href', link).find('button').text(item);
                }
                if (i == 'google') { link = 'mailto:' + item; faName = '<i class="fa-brands fa-google"></i>' }
                if (i == 'telephone') { link = 'tel:' + item; faName = '<i class="fa-solid fa-square-phone"></i>' }
                if (i == 'instagram') {
                    link = 'https://www.instagram.com/' + item; faName = '<i class="fa-brands fa-instagram"></i>';
                    $('.s-cs.sc-footer, .s-cs.img-terhubung').append(`<a href="${link}" target="_blank"><img src="/assets/img/${scName}.png" alt="" loading="lazy"></a>`);
                }
                if (i == 'skype') { link = 'skype:' + item + '?chat'; faName = '<i class="fa-brands fa-skype"></i>' }
                if (i == 'twitter') { link = 'https://twitter.com/' + item; faName = '<i class="fa-brands fa-twitter"></i>' }
                if (i == 'yahoo') { link = 'mailto:' + item; faName = '<i class="fa-brands fa-yahoo"></i>' }
                if (i == 'tiktok') {
                    link = 'https://www.tiktok.com/@' + item; faName = '<i class="fa-brands fa-tiktok"></i>';
                    $('.s-cs.sc-footer, .s-cs.img-terhubung').append(`<a href="${link}" target="_blank"><img src="/assets/img/${scName}.png" alt="" loading="lazy"></a>`);
                }
                if (i == 'youtube') {
                    link = 'https://www.youtube.com/c/' + item; faName = '<i class="fa-brands fa-youtube"></i>';
                    $('.s-cs.sc-footer, .s-cs.img-terhubung').append(`<a href="${link}" target="_blank"><img src="/assets/img/${scName}.png" alt="" loading="lazy"></a>`);
                }
                if (i == 'sms') { link = 'sms:' + item; scName = 'sms'; faName = '<i class="fa-solid fa-comment-sms"></i>' }
                if (i == 'wechatId') { scName = 'wechat'; faName = '<i class="fa-brands fa-weixin"></i>' }

                $('.s-cs .cp').append(`
					<li class="`+ scName + `">
						<a href="`+ link + `" target="_blank">` + faName + `<div class="desc"><span>` + scName + `</span><span>` + item + `</span></div></a>
					</li>
				`);

                $('.s-cs .cu').append(`
					<li class="`+ scName + `"><a href="` + link + `" target="_blank">` + faName + `<span>` + scName + `</span></a></li>
				`);
            }
        });
    }

    $(document).on('click', '.modal-close', function () {
        $(".modal").fadeOut();
        $("body").removeAttr("style");
        return false;
    });

    $(document).mouseup(function (e) {
        if ($('.modal').is(":visible")) {
            var container = $('.modal-bb');

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".modal").fadeOut();
                $("body").removeAttr("style");
            }
        }
    });

    if ($('.supported-banks .bank-container, .payments-system .swiper-wrapper').length > 0) {
        ajaxCaller('get', '/func/common/getBank', '', function (res) {
            for (var i = 0; i < res[1].length; i++) {
                var data = res[1][i];
                var id = data[0];
                var bankname = data[1].replace(/^(B|b)ank /g, "");
                var banks = entityData.bank;
                for (let j = 0; j < banks.length; j++) {

                    if (banks[j][0] == id) {
                        $('.supported-banks .bank-container').append(`<div class="status ${!banks[j][1] ? 'offline' : ''}"><div class="wrap"><span class="${bankname.toLowerCase().replace(/\s+/g, "")}">&nbsp;</span></span></div>`);
                        $('.payments-system .swiper-wrapper').append(`<div class="swiper-slide"><div${!banks[j][1] ? ' class="offline"' : ''}><span class="${bankname.toLowerCase().replace(/\s+/g, "")}">&nbsp;</span></div></div>`);
                    }
                }
            }
        });
    }

    if ($('.jackpotNumber').length) {
        var SEC = 600;
        var LIMIT = 1000000000;
        var cnt = 173715450;
        var disp = $('.jackpotNumber');

        setInterval(countup, SEC);

        function countup() {
            var cnt_str = addCommas(cnt);
            disp.html(cnt_str);
            cnt = (cnt + 111) % LIMIT;
        }

        function addCommas(nStr) {
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        }
    }
    //timer
    setInterval(function () {
        var currentTime = new Date();
        var date = currentTime.toLocaleDateString(["ban", "id"], {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Add leading zeros
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        // Compose the string for display
        var currentTimeString = hours + ":" + minutes + ":" + seconds;
        $("#timer").html(
            date + " " + currentTimeString + " (GMT+" + Math.abs(currentTime.getTimezoneOffset() / 60) + ")"
        );
    }, 1000);

    $(document).on('click', '.s-check', function () {
        alertMsg('Please login and register to enter the game');
        return false;
    });

    $(document).on('click', '.seo-top', function () {
        if ($(this).next().is(":visible")) {
            $(this).find('.arrow').removeClass('aa')
            $(this).next().slideUp("2000");
        } else {
            $(this).find('.arrow').addClass('aa')
            $(this).next().slideDown("2000");
        }
        return false;
    });

    var mMenuNav = new Swiper('#showM .m-head .swiper', {
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: true,
        navigation: {
            nextEl: "#showM .m-head .swiper .swiper-button-next",
            prevEl: "#showM .m-head .swiper .swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 7
            },
            425: {
                slidesPerView: 5
            },
            320: {
                slidesPerView: 3
            },
            280: {
                slidesPerView: 2
            },
            80: {
                slidesPerView: 1
            }
        }
    });

    $('.input-pwd .fa').click(function () {
        $('.input-pwd .fa').toggleClass('fa-eye fa-eye-slash')
        if ($(this).hasClass('fa-eye')) {
            $(this).prev().attr('type', 'password');
        } else {
            $(this).prev().attr('type', 'text');
        }
    });
    $('header .fa-bars').click(function () {
        $('body').addClass('active');
    });
    $('.overlay, nav .fa-angle-left').click(function () {
        $('body').removeClass('active');
    });
    $('.special-events .fa-xmark').click(function () {
        $(this).closest('.special-events').addClass('d-none');
        return false;
    });
    $('footer .event').click(function () {
        $('.special-events').removeClass('d-none');
        return false;
    });

    $('#btnHamburger').click(function () {
        $('.mobile-menu').addClass('active');
        $("#layer").css("display", "block");
    });
    $('.mobile-menu .icon-back').click(function () {
        $('.mobile-menu').removeClass('active');
        $("#layer").css("display", "none");
    });
    $('#layer').click(function () {
        $('.mobile-menu').removeClass('active');
        $('.chat-menu').removeClass('activechat');
        $("#layer").css("display", "none");
    });
    $('#vermobile').click(function () {
        $("#showM").removeClass('#showD');
    });

    $('.download .os').click(function () {
        $('.download .os').removeClass('active');
        $(this).addClass('active');

        $(`.download ul`).removeClass('active');
        $(`.download ul.${this.id}`).addClass('active');
    });

});

$(() => {
    $("#winners_ticker").easyTicker()
});

! function (i) {
    i.fn.easyTicker = function (n) {
        n = i.extend({
            direction: "up",
            easing: "swing",
            speed: "slow",
            interval: 2e3,
            height: "auto",
            visible: 0,
            mousePause: 0,
            controls: {
                up: "",
                down: "",
                toggle: ""
            }
        }, n);
        var t = 0,
            e = i("body"),
            s = i(n.controls.up),
            o = i(n.controls.down),
            c = i(n.controls.toggle),
            a = function (t, e, s) {
                if (t.is(":visible")) {
                    if ("up" == s)
                        var o = ":first-child",
                            c = "-=",
                            a = "appendTo";
                    else
                        o = ":last-child",
                            c = "+=",
                            a = "prependTo";
                    var r = i(e).children(o),
                        u = r.outerHeight();
                    i(e).stop(!0, !0).animate({
                        top: c + u + "px"
                    }, n.speed, n.easing, function () {
                        r.hide()[a](e).fadeIn(),
                            i(e).css("top", 0),
                            0 != n.visible && "auto" == n.height && l(t, e)
                    })
                }
            },
            r = function (i, s) {
                (0 == c.length || c.hasClass("et-run")) && (t = setInterval(function () {
                    1 == e.attr("data-focus") && a(i, s, n.direction)
                }, n.interval))
            },
            u = function (i) {
                clearInterval(t)
            },
            l = function (t, e) {
                var s = 0;
                i(e).children(":lt(" + n.visible + ")").each(function () {
                    s += i(this).outerHeight()
                }),
                    t.stop(!0, !0).animate({
                        height: s
                    }, n.speed)
            },
            h = function (n, t) {
                var e = 0,
                    s = n.css("display");
                return n.css("display", "block"),
                    i(t).children().each(function () {
                        e += i(this).outerHeight()
                    }),
                    n.css("display", s),
                    e
            };

        function d() {
            e.attr("data-focus", 0)
        }

        function f() {
            e.attr("data-focus", 1)
        }
        return i(window).bind("focus mouseover", f),
            i(window).bind("blur", d),
            this.each(function () {
                var t = i(this),
                    e = t.children(":first-child");
                ! function (i, t) {
                    t.children().css("margin", 0).children().css("margin", 0),
                        i.css({
                            position: "relative",
                            height: "auto" == n.height ? h(i, t) : n.height,
                            overflow: "hidden"
                        }),
                        t.css({
                            position: "absolute",
                            margin: 0
                        }).children().css("margin", 0),
                        0 != n.visible && "auto" == n.height && l(i, t),
                        c.addClass("et-run"),
                        r(i, t)
                }(t, e),
                    1 == n.mousePause && t.mouseover(function () {
                        u()
                    }).mouseleave(function () {
                        r(t, e)
                    }),
                    c.on("click", function () {
                        i(this).hasClass("et-run") ? (u(),
                            i(this).removeClass("et-run")) : (i(this).addClass("et-run"),
                                r(t, e))
                    }),
                    s.on("click", function () {
                        a(t, e, "up")
                    }),
                    o.on("click", function () {
                        a(t, e, "down")
                    })
            })
    }
}(jQuery);