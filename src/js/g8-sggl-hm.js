var g8sgPVD = 'pm', g8sgCAT;

$(document).ready(function () {

	if ($('.g8sggl-ps').length) {

		$('head').append('<style type="text/css">.g8sggl-ps *{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.g8sggl-ps{padding:10px 0px 15px}.g8sggl-ps .g8sggl-ps-t{position:relative;margin:5px}.g8sggl-ps .g8sggl-ps-t .tt{color:#ffffff;font-weight:700;font-size:18px}.g8sggl-ps .g8sggl-ps-t .rr{position:absolute;right:0;top:5px}.g8sggl-ps .g8sggl-ps-t .rr a{background-color:#d9b300;color:#352c02;text-transform:uppercase;font-size:12px;font-weight:700;padding:5px 10px;border-radius:20px}.g8sggl-ps .g8sggl-ps-t .rr a:hover{background-color:#222;color:#fff}.g8sggl-ps .glbox{font-size:0;position:relative;z-index:0}.g8sggl-ps .glbox .gl{display:none;width:14.28%;font-size:12px;padding:5px}.g8sggl-ps .glbox .gl:nth-child(-n+7){display:inline-block}.g8sggl-ps .glbox .gl .glimg{position:relative;width:100%;padding-top:100%;background-color:#050505;cursor:pointer;overflow:hidden}.g8sggl-ps .glbox .gl .gltext{background-color:#d9b300;color:#352c02;padding:6px 10px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.g8sggl-ps .glbox .gl .glimg:hover .hwrap{opacity:1}.g8sggl-ps .glbox .gl .glpic{position:absolute;width:100%;top:50%;transform:translateY(-50%);z-index:1}.g8sggl-ps .glbox .gl .glpic img{width:100%}.g8sggl-ps .glbox .gl .hwrap{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;background:rgba(0,0,0,0.8);opacity:0}.g8sggl-ps .glbox .gl .hwrap .hbox{position:absolute;width:80%;left:50%;top:50%;transform:translate(-50%,-50%)}.g8sggl-ps .glbox .gl .hwrap .hbox .main{color:#352c02;background-color:#d9b300;text-align:center;width:100%;display:block;text-transform:uppercase;padding:8px;border-radius:20px}@media only screen and (max-width:1000px){.g8sggl-ps .glbox .gl{display:none!important;width:16.66%}.g8sggl-ps .glbox .gl:nth-child(-n+6){display:inline-block!important}}@media only screen and (max-width:768px){.g8sggl-ps .glbox{white-space:nowrap;overflow-x:auto}.g8sggl-ps .glbox .gl{display:inline-block!important;width:120px}}\
	  \
	  .g8sggl-ps.ss1 .g8sggl-ps-t .tt{color:#212121}\
	  \
	  </style>')

		$('.g8sggl-ps').append('\
		<div class="g8sggl-ps-t"><div class="tt">Slots Populer</div><div class="rr"><a href="slots.html">more</a></div></div>\
		<div class="g8sggl-ps-b"><div class="glbox"></div></div>\
		');

		getG8sgPS()

	}

	if ($('.g8sggl').length) {

		// append css
		$('head').append(`
			<style type="text/css">.g8sggl .glbox .gl .glimg,.g8sggl .glbox .gl .glp{background-repeat:no-repeat;background-position:center}.g8sggl *{max-width:460px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.g8sggl .g8sggl-t{font-family:Tahoma;background-color:#e28123;font-size:0;margin-bottom:10px;position:relative}.g8sggl .g8sggl-t .ii{background-color:#842e11;display:inline-block;width:130px;text-align:center;font-size:14px;margin-right:5px;background-repeat:no-repeat;background-position:top 0 center;background-size:72%;position:relative;vertical-align:top;border-radius:4px}.g8sggl .g8sggl-t .ii .ii-tt{padding:40px 0 5px}.g8sggl .g8sggl-t .ii .ii-info{position:absolute;top:2px;right:2px;width:16px;height:16px;border-radius:50%;text-align:center;background-color:#666;color:#fff}.g8sggl .g8sggl-t .ii .ii-info .fa{font-size:10px;line-height:16px}.g8sggl .g8sggl-t .ii.aaa,.g8sggl .g8sggl-t .ii:hover{background-color:#501c0b;background-blend-mode:inherit}.g8sggl .g8sggl-c{background-color:#3577c1;font-size:0;margin-bottom:15px}.g8sggl .g8sggl-c .ll{font-family:Tahoma;display:inline-block;width:80%;white-space:nowrap;overflow-x:auto;position:relative}.g8sggl .g8sggl-c .ll .ii{font-size:14px;display:inline-block;padding:0 20px;line-height:40px;text-transform:uppercase}.g8sggl .g8sggl-c .rr{display:inline-block;width:20%;vertical-align:top}.g8sggl .g8sggl-c .ll .ii.aaa,.g8sggl .g8sggl-c .ll .ii:hover{background-color:#071525;color:#fff}.g8sggl .g8sggl-b{font-family:Tahoma;border:2px solid #e28123;background-color:#842e11;padding:10px}.g8sggl .glmsg{font-size:14px;color:#fff;text-align:center;padding:10px 0}.g8sggl .glmsg .g8sgpopa{background-color:#d9b300;color:#352c02;display:inline-block;font-weight:700;text-transform:uppercase;padding:8px 15px}.g8sggl .glmsg .g8sgpopa:hover{background-color:#333;color:#fff}.g8sggl .glbox{font-size:0;position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;z-index:0}.g8sggl .glbox .gl{display:inline-block;width:calc(100% - 10px);font-size:14px;overflow:hidden}.g8sggl .glbox .gl.hh{display:none}.g8sggl .glbox .gl.ss-yes{display:inline-block!important}.g8sggl .glbox .gl.ss-no{display:none!important}.g8sggl .glbox .gl .glimg{position:relative;width:100%;padding-top:100%;background-size:100%;background-color:#050505;cursor:pointer;overflow:hidden}.g8sggl .glbox .gl .gltext{background-color:#d5d5d5;color:#352c02;padding:6px 10px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.g8sggl .glbox .gl .glp{background-color:#071525;text-align:center;background-size:auto 86%;min-height:26px}.g8sggl .glbox .gl .glimg:hover .hwrap{opacity:1}.g8sggl .glbox .gl .glbadge{width:35%;position:absolute;left:0;top:5px;z-index:2}.g8sggl .glbox .gl .glbadge img{max-width:100%;height:auto}.g8sggl .glbox .gl .glpic{position:absolute;width:100%;top:50%;transform:translateY(-50%);z-index:1}.g8sggl .glbox .gl .glpic img{width:100%}.g8sggl .glbox .gl .hwrap{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;background:rgba(0,0,0,.8);opacity:0}.g8sggl .g8sggl-tarr,.g8sggl .glpagi .pagi.aaa,.g8sggl .glpagi .pagi:hover{color:#352c02;background-color:#e28123}.g8sggl .glbox .gl .hwrap .hbox{position:absolute;width:65%;left:50%;top:50%;transform:translate(-50%,-50%)}.g8sggl .glbox .gl .hwrap .hbox .main{color:#fff;text-align:center;width:100%;display:block;text-transform:uppercase;padding:4px;border-radius:20px}.g8sggl .glpagi{text-align:center;font-size:0;margin-top:15px;display:none}.g8sggl .glpagi .pagi{display:inline-block;font-size:10px;font-weight:700;margin:2px;background-color:#000;width:20px;line-height:20px;text-align:center}.g8sggl .searchbar{font-size:12px}.g8sggl .searchbar input{font-family:Tahoma;background-color:#f5f5f5;border:0;display:inline-block;width:100%;line-height:40px;padding:0 10px;outline:0;border-radius:0;color:#575757}.g8sggl .searchbar input::placeholder{color:#575757;font-weight:700;font-style:italic}.g8sggl .searchbar button{background-color:#f5f5f5;border:0;border-radius:0;display:inline-block;width:40px;height:40px;font-size:16px}.g8sggl .g8sggl-tarr{position:absolute;top:0;height:100%;padding:0 8px;width:22px;font-size:16px;display:none}.g8sggl .g8sggl-tarr.l{left:0}.g8sggl .g8sggl-tarr.r{right:0}.g8sggl .g8sggl-tarr i{color:#fff;font-size:20px;position:absolute;top:50%;left:50%;text-align:center;transform:translate(-50%,-50%)}.g8sggl .g8sggl-c .ll .ii,.g8sggl .g8sggl-t .ii,.g8sggl .glpagi .pagi{transition:.5s;cursor:pointer}.g8sggl .g8sggl-c .ll .ww::-webkit-scrollbar,.g8sggl .g8sggl-t .ww::-webkit-scrollbar{display:none}.g8sggl .g8sggl-c .ll .ww,.g8sggl .g8sggl-t .ww{-ms-overflow-style:none;scrollbar-width:none;white-space:nowrap;overflow-x:auto;text-align:left;padding:5px 22px}.pvd.all{background-image:url(/common/images/slots/all.png)}.pvd.lv2{background-image:url(/common/images/slots/live22.png)}.pvd.pm{background-image:url(/common/images/slots/pm.png)}.pvd.vp{background-image:url(/common/images/slots/vp.png)}.pvd.s88{background-image:url(/common/images/slots/s88.png)}.pvd.jk{background-image:url(/common/images/slots/jk.png)}.pvd.pg{background-image:url(/common/images/slots/pg.png)}.pvd.hb{background-image:url(/common/images/slots/hb.png)}.pvd.sg{background-image:url(/common/images/slots/sg.png)}.pvd.cq9{background-image:url(/common/images/slots/cq9.png)}.pvd.ka{background-image:url(/common/images/slots/ka.png)}.pvd.gss{background-image:url(/common/images/slots/gss.png)}.pvd.gp{background-image:url(/common/images/slots/gp.png)}.pvd.pt{background-image:url(/common/images/slots/pt.png)}.pvd.mgp{background-image:url(/common/images/slots/mg.png)}.pvd.ps{background-image:url(/common/images/slots/ps.png)}.pvd.tsg{background-image:url(/common/images/slots/tsg.png)}.pvd.sa{background-image:url(/common/images/slots/sa.png)}.pvd.nt{background-image:url(/common/images/slots/nt.png)}@media only screen and (max-width:768px){.g8sggl .g8sggl-t .ii{width:110px;font-size:12px}.g8sggl .g8sggl-t .ii .ii-tt{padding-top:50px}.g8sggl .g8sggl-c .ll{width:70%}.g8sggl .g8sggl-c .ll .ii{font-size:12px;padding:0 15px;line-height:34px}.g8sggl .g8sggl-c .rr{width:30%}.g8sggl .searchbar input{line-height:34px}.g8sggl .glbox .gl{font-size:12px}.g8sggl .glbox .gl .hwrap{display:none}}@media only screen and (max-width:479px){.g8sggl .g8sggl-t .ii{width:90px}.g8sggl .g8sggl-t .ii .ii-tt{padding-top:44px}.g8sggl .g8sggl-c .ll,.g8sggl .g8sggl-c .rr{width:100%}.g8sggl .searchbar input{text-align:center}.g8sggl .glbox .gl{width:33.33%;padding:5px}.g8sggl .glbox .gl .gltext{padding:4px 10px}}.g8sggl.ss1 .g8sggl-b,.g8sggl.ss1 .g8sggl-t{background-color:#171342}.g8sggl.ss1 .g8sggl-c,.g8sggl.ss1 .g8sggl-t .ii{background-color:#301d6e}.g8sggl.ss1 .g8sggl-t .ii.aaa,.g8sggl.ss1 .g8sggl-t .ii:hover,.g8sggl.ss1 .glbox .gl .glp,.g8sggl.ss1 .searchbar input{background-color:#110e35}.g8sggl .glbox .gl .hwrap .hbox .main,.g8sggl.ss1 .g8sggl-c .ll .ii.aaa,.g8sggl.ss1 .g8sggl-c .ll .ii:hover,.g8sggl.ss1 .g8sggl-tarr,.g8sggl.ss1 .glbox .gl .gltext{background-color:#e28123}.g8sggl .g8sggl-t .ii .badge{position:absolute;width:34%;left:0;top:0}.g8sggl .g8sggl-t .ii .badge img{max-width:100%}.g8sggl .glbox .gl .glbadge.joker-hot{right:0;left:auto;top:0}</style>
		`);

		$('.g8sggl').append('\
	  <div class="g8sggl">\
		\
		<div class="g8sggl-t">\
		  <div class="ww">\
			<div class="ii glpvd pvd pm aaa" dd="pm"><div class="badge"><img src="/common/imgs/pp/title-promo-en.png"></div><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd s88" dd="s88"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd mgp" dd="mgp"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd lv2" dd="lv2"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd vp" dd="vp"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd jk" dd="jk"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd pg" dd="pg"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd hb" dd="hb"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd sg" dd="sg"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd cq9" dd="cq9"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd ka" dd="ka"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd gss" dd="gss"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd gp" dd="gp"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd pt" dd="pt"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd ps" dd="ps"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd tsg" dd="tsg"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd sa" dd="sa"><div class="ii-tt"></div></div>\
			<div class="ii glpvd pvd nt" dd="nt"><div class="ii-tt"></div></div>\
		  </div>\
		  <a href="javascript:void(0)" class="g8sggl-tarr l" me="l"><i class="fa fa-chevron-left"></i></a>\
		  <a href="javascript:void(0)" class="g8sggl-tarr r" style="display: block;" me="r"><i class="fa fa-chevron-right"></i></a>\
		</div>\
		<!--\
		<div class="g8sggl-c">\
		  <div class="ll glcat">\
			<div class="ww"></div>\
			<a href="javascript:void(0)" class="g8sggl-tarr l" me="l"><i class="fa fa-chevron-left"></i></a>\
			<a href="javascript:void(0)" class="g8sggl-tarr r" style="display: block;" me="r"><i class="fa fa-chevron-right"></i></a>\
		  </div>\
		  <div class="rr">\
			<div class="searchbar d-flex"><button type="button"><i class="fa-solid fa-magnifying-glass"></i></button><input type="text" class="glsearch" placeholder="Cari Permainan"><!-- <button type="button"><i class="fa fa-times"></i></button> --></div>\
		  </div>\
		</div>\
		\
		<div class="g8sggl-b">\
		  <div class="glmsg">Loading ...</div>\
		  <div class="glbox"></div>\
		  <div class="glpagi"></div>\
		</div>\
		\
	  </div>\
	')

		$('.glpvd').each(function () {

			var dd = $(this).attr('dd'), actionCode;
			if (!game4LobbyData(dd).length) { return }

			actionCode = game4LobbyData(dd);

			if (!globalObj.login) {
				$(this).addClass('s-check').attr('action', actionCode[0]).append('<div class="ii-info"><i class="fa fa-external-link fa-external-link-alt"></i></div>');
			} else {
				$(this).addClass('j-winopen').attr('action', actionCode[0]).append('<div class="ii-info"><i class="fa fa-external-link fa-external-link-alt"></i></div>');
			}
		})

		if (g8sgGetURLParameter('sg')) {

			var showSG = $('.glpvd.' + g8sgGetURLParameter('sg')),
				acCode = game4LobbyData(g8sgGetURLParameter('sg'));

			$('.glpvd.aaa').removeClass('aaa');
			$('.glpvd.' + g8sgGetURLParameter('sg')).addClass('aaa');

			g8sgPVD = g8sgGetURLParameter('sg');
			getG8sg(g8sgPVD);

			$('.g8sggl .g8sggl-t .ww').each(function () {

				var sw = $(this).find('.glpvd')[0].scrollWidth,
					currentIndex = $(this).find('.glpvd.' + g8sgGetURLParameter('sg')).index(),
					gotopx;

				gotopx = ((sw * currentIndex) - 30) + 'px';
				$(this).animate({ scrollLeft: gotopx }, 400);

			});

			if (showSG.hasClass('s-check')) {
				showSG.trigger('click')
				getG8sg();
				window.history.replaceState(null, null, window.location.pathname);
				return false;
			}

			if (showSG.hasClass('j-winopen')) {
				$('.g8sggl .glmsg').show().html('<a href="#" class="j-winopen g8sgpopa" action="' + acCode[0] + '">klik di sini untuk bermain sekarang</a>');
				// return false;
			}

			window.history.replaceState(null, null, window.location.pathname);

		} else {

			$('.g8sggl .g8sggl-t .ww').scrollLeft(0);
			getG8sg('all', null, 1);
			getG8sg('pm', 'hot', 1);

		}

		$(window).resize(function () {
			checkLRarrow();
		});

		$(document).on('click', '.g8sggl-tarr', function () {
			var whoami = $(this).attr('me'), scorllSpeed = "+=300px";
			if (whoami == 'l') { scorllSpeed = "-=300px"; }
			$(this).parent().find('.ww').animate({ scrollLeft: scorllSpeed }, 600);
			return false;
		});

		$('.g8sggl .g8sggl-t .ww').scroll(function () {
			var $width = $(this).outerWidth()
			var $scrollWidth = $(this)[0].scrollWidth;
			var $scrollLeft = $(this).scrollLeft();

			$(this).parent().find('.g8sggl-tarr').show();

			if ($scrollWidth - $width - 5 <= $scrollLeft) {
				$(this).parent().find('.g8sggl-tarr.r').hide()
			}

			if ($scrollLeft === 0) {
				$(this).parent().find('.g8sggl-tarr.l i').css('color', '#8f8f8f')
			}
		});

		$('.g8sggl .g8sggl-c .ll .ww').scroll(function () {
			var $width = $(this).outerWidth()
			var $scrollWidth = $(this)[0].scrollWidth;
			var $scrollLeft = $(this).scrollLeft();

			$(this).parent().find('.g8sggl-tarr').show();

			if ($scrollWidth - $width - 5 <= $scrollLeft) {
				$(this).parent().find('.g8sggl-tarr.r').hide()
			}

			if ($scrollLeft === 0) {
				$(this).parent().find('.g8sggl-tarr.l i').css('color', '#8f8f8f')
			}
		});

		$(document).on('click', '.goppp', function () {
			var page = $(this).attr('dd');
			$('.goppp.aaa').removeClass('aaa');
			$(this).addClass('aaa');
			$('.gl.ppp').addClass('hh');
			$('.gl.ppp-' + page).removeClass('hh');
			$('html, body').animate({ scrollTop: $(".g8sggl").offset().top }, 400);
		})

		$(document).on('click', '.gocat', function () {
			var dd = $(this).attr('dd');

			$('.gocat.aaa').removeClass('aaa');
			$(this).addClass('aaa');

			if (dd == 'all') {
				g8sgCAT = ''
			} else {
				g8sgCAT = dd;
			}
			getG8sg(g8sgPVD, g8sgCAT)
		})

		$(document).on('click', '.glpvd', function () {

			if ($(this).hasClass('s-check')) {
				return false;
			}

			if ($(this).hasClass('j-winopen')) {
				return false;
			}

			var dd = $(this).attr('dd');
			$('.g8sggl-banner').empty();
			$('.g8sggl-banner').append(`<img class="animated-image" src="/assets/img/banner/animations/${dd}.png" alt="${dd}" loading="lazy">`);

			$('.glpvd.aaa').removeClass('aaa');
			$(this).addClass('aaa');

			g8sgPVD = dd;

			if (dd == 'pm') {
				//getG8sg('pm', null, '1')
				getG8sg('pm', 'hot', '1');
			} else {
				getG8sg(g8sgPVD)
			}

		})

		$('.glsearch').val('');
		$(document).on('keyup', '.glsearch', function (e) {
			var value = $(this).val().toLowerCase();

			$('.g8sggl .glmsg').empty().hide();
			$('.g8sggl .glbox .gl').removeClass('ss-yes ss-no');
			$('.g8sggl .glpagi').hide();

			$('.g8sggl .glbox .gl').each(function () {
				var str = $(this).find('.gltext').text().toLowerCase(),
					nn = str.search(value);

				if (nn > -1) {
					$(this).addClass('ss-yes');
				} else {
					$(this).addClass('ss-no');
				}
			})

			if (!$('.g8sggl .glbox .gl.ss-yes').length) {
				$('.g8sggl .glmsg').show().text('Could not find the game you were looking for, please try search others game.');
			}

		})

	}

});

function getG8sg(provider, category, action) {

	//action - 1 = first time

	if (provider == 'all') {
		provider = ''
	}

	var ddddd = '';
	if (provider && category) {
		ddddd = 'providerName=' + provider + '&categoryName=' + category + '&group=1'
	} else if (provider) {
		ddddd = 'providerName=' + provider + '&group=1'
	} else if (category) {
		ddddd = 'categoryName=' + category + '&group=1'
	} else {
		ddddd = 'group=1'
	}

	$('.glsearch').val('');
	$('.g8sggl .glmsg').show().text('Loading ...');
	$('.g8sggl .glpagi').empty().hide();
	$('.g8sggl .glbox').empty();

	if (category === undefined || category === null) {
		$('.g8sggl .glcat .ww').empty();
	}

	if (!globalObj.login) {
		ajaxURL = '/func/stl/getSlotGameList'
	} else {
		ajaxURL = '/ajax/stl/getSlotGameList'
	}

	$.ajax({
		type: "GET",
		url: ajaxURL,
		data: ddddd,
		dataType: 'json',
		async: false,
		success: function (res) {

			var gameList = res["slotGameList"],
				gameCategory = res["categoryList"],
				pageLimit = 30;

			if (gameCategory.length) {

				if (category === undefined || category === null) {
					$('.g8sggl .glcat .ww').empty();

					$('.g8sggl .glcat .ww').append('<div class="ii gocat aaa" dd="all" ss="0">all</div>');

					var catSortList = ['all', 'new', 'hot'];
					if (provider == 'pm') {
						var catSortList = ['slots', 'hot', 'new', 'buy bonus', 'megaways', 'table', 'classic'];
					}

					$.each(gameCategory, function (i, item) {

						var gameCat = item['gameCategory'],
							appendData = '<div class="ii gocat" dd="' + gameCat + '" ss="' + (i + 1) + '">' + gameCat + '</div>';

						if (catSortList.indexOf(gameCat) != -1) {
							appendData = '<div class="ii gocat" dd="' + gameCat + '" ss="0.' + catSortList.indexOf(gameCat) + '">' + gameCat + '</div>';
						}

						$('.g8sggl .glcat .ww').append(appendData);

					})

					sortCatList();

					if (action == 1) {

						if (provider == 'pm') {
							$('.gocat.aaa').removeClass('aaa');
							$('.gocat[dd=hot]').addClass('aaa');
							getG8sg('pm', 'hot')
						} else {
							$('.gocat.aaa').removeClass('aaa');
							$('.gocat[dd=new]').addClass('aaa');
							getG8sg(null, 'new')
						}
						return false
					}

				}

			} else {
				$('.g8sggl .glcat .ww').empty();
			}

			if (category === undefined || category === null) {
				$('.g8sggl .glcat .ww').show();
			}

			if (gameList.length) {



				$('.g8sggl .glmsg').hide();

				if (!provider) {
					$('.g8sggl .glpagi').show();

					if (currDT() <= 202208040000) {

						if (category == 'hot') {
							var arrObjGLfirst = [], arrObjGLsecond = [], arrObjGLnormal = [], arrObjGLfinal;

							$.each(gameList, function (i, item) {
								if (item['providerName'] == 's88') {
									arrObjGLsecond.push(item);
								} else if (item['slotGameLink'] == 'vs20olympgate' || item['slotGameLink'] == 'vs20starlight' || item['slotGameLink'] == 'vs20fruitsw' || item['slotGameLink'] == 'vs20sbxmas' || item['slotGameLink'] == 'vs5aztecgems') {
									arrObjGLfirst.push(item);
								} else {
									arrObjGLnormal.push(item);
								}
							})

							arrObjGLfinal = [].concat(arrObjGLfirst, arrObjGLsecond, arrObjGLnormal);
							gameList = arrObjGLfinal

						} else if (!category) {

							var arrSC = [
								{ "id": 999999, "providerName": "pm", "slotGameName": "Gates of Olympus", "slotGameImg": "https://gsoft-tw.pragmaticplay.net/game_pic/square/200/vs20olympgate.png", "slotGameLink": "vs20olympgate", "gameCategory": "hot", "groupId": 1 },
								{ "id": 999999, "providerName": "pm", "slotGameName": "Starlight Princess", "slotGameImg": "https://gsoft-tw.pragmaticplay.net/game_pic/square/200/vs20starlight.png", "slotGameLink": "vs20starlight", "gameCategory": "hot", "groupId": 1 },
								{ "id": 999999, "providerName": "pm", "slotGameName": "Sweet Bonanza", "slotGameImg": "https://gsoft-tw.pragmaticplay.net/game_pic/square/200/vs20fruitsw.png", "slotGameLink": "vs20fruitsw", "gameCategory": "hot", "groupId": 1 },
								{ "id": 999999, "providerName": "pm", "slotGameName": "Sweet Bonanza Xmas", "slotGameImg": "https://gsoft-tw.pragmaticplay.net/game_pic/square/200/vs20sbxmas.png", "slotGameLink": "vs20sbxmas", "gameCategory": "hot", "groupId": 1 },
								{ "id": 999999, "providerName": "pm", "slotGameName": "Aztec Gems", "slotGameImg": "https://gsoft-tw.pragmaticplay.net/game_pic/square/200/vs5aztecgems.png", "slotGameLink": "vs5aztecgems", "gameCategory": "hot", "groupId": 1 }
							];

							gameList = [].concat(arrSC, gameList);

						}

					} else {

						if (category == 'hot') {
							var arrObjGLfirst = [], arrObjGLsecond = [], arrObjGLnormal = [], arrObjGLfinal;

							$.each(gameList, function (i, item) {
								if (item['providerName'] == 's88') {
									arrObjGLfirst.push(item);
								} else if (item['slotGameLink'] == 'vs5aztecgems' || item['slotGameLink'] == 'vs20fruitsw' || item['slotGameLink'] == 'vs20olympgate') {
									arrObjGLsecond.push(item);
								} else {
									arrObjGLnormal.push(item);
								}
							})

							arrObjGLfinal = [].concat(arrObjGLfirst, arrObjGLsecond, arrObjGLnormal);

							gameList = arrObjGLfinal

						} else if (!category) {

							// var arrSC = [{"id": 999999, "providerName": "pm", "slotGameName": "Spaceman", "slotGameImg": "/common/imgs/pp/spaceman.png", "slotGameLink": "1301", "gameCategory": "", "groupId": 1 }]
							//     gameList = [].concat(arrSC, gameList);

						}

					}

				}

				if (provider == 'pm' && category == 'buy bonus') {

					var arrObjPPGamesBonus, ppGamesBonus = ['vs20olympgate', 'vs20starlight', 'vs20fruitsw', 'vs50northgard', 'vs20sbxmas', 'vs20pbonanza', 'vs20bonzgold', 'vswayslions', 'vswaysrhino', 'vs20candvil', 'vs40wildwest', 'vs20xmascarol', 'vswayshammthor', 'vswaysmadame', 'vs20gobnudge', 'vswaysbufking', 'vswaysxjuicy', 'vswayssamurai', 'vswaysdogs', 'vs20fruitparty ', 'vswayslight', 'vs25hotfiesta', 'vs20midas', 'vswayszombcarn', 'vswayswildwest', 'vs20goldfever', 'vs10bxmasbnza', 'vs20bchprty', 'vs20trsbox', 'vswaysaztecking', 'vs25goldparty', 'vs4096bufking', 'vs20santawonder', 'vs10nudgeit', 'vs20fparty2', 'vswayscryscav', 'vs4096magician', 'vs10runes', 'vs1024temuj', 'vs10bookazteck', 'vswaysyumyum', 'vs50juicyfr', 'vs20chickdrop', 'vs20kraken', 'vs20emptybank', 'vs10bookfallen', 'vs20bermuda', 'vs40bigjuan', 'vs20wildboost', 'vswayschilheat', 'vswayswerewolf', 'vs1600drago', 'vs20daydead', 'vs10wildtut', 'vs40voodoo', 'vswayshive', 'vs10bookoftut', 'vs40pirgold'];

					sortGameListOrder(gameList, ppGamesBonus, 'slotGameLink');

				}

				if (provider == 'pm') {

					if (category == 'new' || category == 'buy bonus') {

						if (typeof currDT != "undefined") {
							if (currDT() <= 202208040000) {

								// var arrSC = [{"id": 999999, "providerName": "pm", "slotGameName": "CLEOCATRA", "slotGameImg": "/common/imgs/pp/cleocatra.png", "slotGameLink": "vs20cleocatra", "gameCategory": "", "groupId": 1 }]
								//     gameList = [].concat(arrSC, gameList);

							}
						}
					}

					if (category === undefined || category === null || category == 'hot' || !category) {

						// if(category === undefined || category === null || !category){
						//   var arrSC = [{"id": 999999, "providerName": "pm", "slotGameName": "Spaceman", "slotGameImg": "/common/imgs/pp/spaceman.png", "slotGameLink": "1301", "gameCategory": "hot", "groupId": 1 }]
						//       gameList = [].concat(arrSC, gameList);
						// }

						if (typeof currDT != "undefined") {

							if (currDT() <= 202208040000) {

								var arrObjGLfirst = [], arrObjGLsecond = [], arrObjGLnormal = [], arrObjGLfinal;

								$.each(gameList, function (i, item) {
									if (item['slotGameLink'] == 'vs20olympgate') {
										arrObjGLfirst.push(item);
									} else if (['vs20starlight', 'vs20fruitsw', 'vs20sbxmas', 'vs5aztecgems'].indexOf(item['slotGameLink']) > -1) {
										arrObjGLsecond.push(item);
									} else {
										arrObjGLnormal.push(item);
									}
								})

								arrObjGLfinal = [].concat(arrObjGLfirst, arrObjGLsecond, arrObjGLnormal);
								gameList = arrObjGLfinal

							}

							// if(currDT() <= 202204080000){
							//   var arrSC = [{"id": 999999, "providerName": "pm", "slotGameName": "Spaceman", "slotGameImg": "/common/imgs/pp/spaceman-new.png", "slotGameLink": "1301", "gameCategory": "hot", "groupId": 1 }]
							//   gameList = [].concat(arrSC, gameList);
							// }

						}
					}
				}

				var allows = ['pm', 'all', 'null', 'undefined', 'new', 'buy bonus', 'hot', ''];

				if (allows.indexOf(String(provider)) > -1 && allows.indexOf(String(category)) > -1) {
					var arrFirst = [], arrNormal = [];

					$.each(gameList, function (i, item) {
						if (item['slotGameLink'] == 'vs20sugarrush') {
							arrFirst.push(item);
						} else {
							arrNormal.push(item);
						}
					});

					gameList = [].concat(arrFirst, arrNormal);
				}

				$.each(gameList, function (i, item) {

					if (i > 5) { return false }

					var gameName = item['slotGameName'],
						gameIMG = item['slotGameImg'],
						gameCode = item['slotGameLink'],
						gameProvider = item['providerName'],
						pvdDIV = '',
						pageForROW = Math.ceil((i + 1) / pageLimit),
						pageC = '',
						badge = '';

					if (!provider) {
						if (pageForROW <= 1) {
							pageC = 'ppp ppp-' + pageForROW
						} else {
							pageC = 'hh ppp ppp-' + pageForROW
						}
						pvdDIV = '<div class="glp pvd ' + gameProvider + '"></div>'
					}

					if (provider == 'pm') {
						if (category == 'hot') {
							badge = '<div class="glbadge"><img src="/common/imgs/pp/daily-wins-en.png"></div>'
							if (gameCode == '0000') { badge = '' }
						} else if (category == 'new') {
							badge = '<div class="glbadge"><img src="/common/imgs/pp/new-en.png"></div>'
							if (gameCode == '0000') { badge = '' }
						} else if (category == 'buy bonus') {
							badge = '<div class="glbadge"><img src="/common/imgs/pp/bonus-en.png"></div>'
							if (gameCode == '0000') { badge = '' }
						}
					} else if (provider == 'jk') {
						if (String(item['gameCategory']).indexOf('hot') > -1) {
							badge = '<div class="glbadge joker-hot"><img src="/common/imgs/joker/hot.png"></div>'
						}
					}

					if (gameCode == 'vs20sugarrush') {
						badge = '<div class="glbadge"><img src="/common/imgs/pp/hot-en.png"></div>'
					}

					if (currDT() <= 202208040000 && ['vs20olympgate', 'vs20starlight', 'vs20fruitsw', 'vs20sbxmas', 'vs5aztecgems'].indexOf(gameCode) > -1) {
						badge = '<div class="glbadge"><img src="/common/imgs/pp/title-promo-en.png"></div>';
					}

					// if(typeof currDT != "undefined"){
					//   if(currDT() <= 202207050000){

					//     if(gameCode == 'vs20olympgate'){
					//       badge += '<div class="glbadge" style="left:auto; right:0px; top:0px; width:44%; transform:rotate(90deg)"><img src="/common/imgs/pp/title-event-en.png"></div>'
					//     }

					//   }
					// }

					if (!globalObj.login) {
						$('.g8sggl .glbox').append('\
							<div class="gl '+ pageC + '">\
								<div class="glimg s-check">'+ badge + '<div class="glpic"><img src="' + gameIMG + '" alt="' + gameName + '" loading="lazy"></div><div class="hwrap"><div class="hbox"><a href="javascript:void(0)" class="main">Main</a></div></div></div>\
							</div>\
						');
					} else {
						$('.g8sggl .glbox').append('\
							<div class="gl '+ pageC + '">\
								<div class="glimg j-winopen" action="slot-'+ gameProvider + '" gc="' + gameCode + '">' + badge + '<div class="glpic"><img src="' + gameIMG + '" alt="' + gameName + '" loading="lazy"></div><div class="hwrap"><div class="hbox"><a href="javascript:void(0)" class="main">Main</a></div></div></div>\
							</div>\
							');
					}

					if (!provider) {
						if (!$('.goppp[dd=' + pageForROW + ']').length) {
							var pagiActive = ''
							if (pageForROW <= 1) { pagiActive = 'aaa' }
							$('.g8sggl .glpagi').append('<div class="pagi ' + pagiActive + ' goppp" dd="' + pageForROW + '">' + pageForROW + '</div>');
						}
					}

				});
			} else {
				$('.g8sggl .glmsg').show().text('Could not find the game you were looking for, please try search others game.');
			}

			checkLRarrow()

		}
	});

}

function getG8sgPS() {

	$('.g8sggl-ps .glbox').empty();

	var ddddd = 'categoryName=hot&group=1';

	if (!globalObj.login) {
		ajaxURL = '/func/stl/getSlotGameList'
	} else {
		ajaxURL = '/ajax/stl/getSlotGameList'
	}

	$.ajax({
		type: "GET",
		url: ajaxURL,
		data: ddddd,
		dataType: 'json',
		async: false,
		success: function (res) {

			var gameList = res["slotGameList"];

			if (gameList.length) {

				var arrObjGLSpecial = [], arrObjGLfirst = [], arrObjGLsecond = [], arrObjGLfinal;

				$.each(gameList, function (i, item) {
					if (item['providerName'] == 'pm' && item['slotGameLink'] == 'vs20olympgate') {
						arrObjGLSpecial.push(item);
					} else if (item['providerName'] == 's88') {
						arrObjGLfirst.push(item);
					} else {
						arrObjGLsecond.push(item);
					}
				})

				arrObjGLfinal = [].concat(arrObjGLSpecial, arrObjGLfirst, arrObjGLsecond);

				gameList = arrObjGLfinal;

				$.each(gameList, function (i, item) {

					if (i > 19) { return false }

					var gameName = item['slotGameName'],
						gameIMG = item['slotGameImg'],
						gameCode = item['slotGameLink'],
						gameProvider = item['providerName'];

					if (!globalObj.login) {
						$('.g8sggl-ps .glbox').append('\
			  <div class="gl">\
				<div class="glimg s-check"><div class="glpic"><img src="'+ gameIMG + '" alt="' + gameName + '" loading="lazy"></div><div class="hwrap"><div class="hbox"><a href="javascript:void(0)" class="main">Main</a></div></div></div>\
				<div class="gltext">'+ gameName + '</div>\
			  </div>\
			')
					} else {
						$('.g8sggl-ps .glbox').append('\
			  <div class="gl">\
				<div class="glimg j-winopen" action="slot-'+ gameProvider + '" gc="' + gameCode + '"><div class="glpic"><img src="' + gameIMG + '" alt="' + gameName + '" loading="lazy"></div><div class="hwrap"><div class="hbox"><a href="javascript:void(0)" class="main">Main</a></div></div></div>\
				<div class="gltext">'+ gameName + '</div>\
			  </div>\
			')
					}

				});
			}

		}
	});

}

function checkLRarrow() {
	// var catMenu = '.g8sggl .g8sggl-c .ll';
	// if($(catMenu+' .ww')[0].scrollWidth > $(catMenu+' .ww').width()){
	//  $(catMenu+' .g8sggl-tarr.r').show();
	// } else {
	//  $(catMenu+' .g8sggl-tarr.r').hide();
	// }

	$('.g8sggl .g8sggl-c .ll').each(function () {
		if ($(this).find('.ww')[0].scrollWidth - $(this).find('.ww').outerWidth() - 10 <= $(this).find('.ww').scrollLeft()) {
			$(this).find('.g8sggl-tarr.r').hide();
		} else {
			$(this).find('.g8sggl-tarr.r').show();
		}
	})

}

function game4LobbyData(action) {
	var data = [];
	switch (action) {

		// wovs action code
		// case 'live22':
		//     data = ['live22-slot']
		//     break;
		// case 'vp':
		//     data = ['vp-slot']
		//     break;
		case 'sg':
			data = ['spadegaming']
			break;
		case 'cq9':
			data = ['cq-slot']
			break;
		case 'gss':
			data = ['gss-slot']
			break;
		case 'gp':
			data = ['gp-slot']
			break;
		// case 'mgp':
		//     data = ['mg-slot']
		//     break;
		// case 'ps':
		//     data = ['playstar']
		//     break;
		case 'tsg':
			data = ['tsg-slot']
			break;
		case 'sa':
			data = ['slotace']
			break;
		case 'nt':
			data = ['nt-slot']
			break;
		case 'pt':
			data = ['pt-slot']
			break;

	}
	return data;
}

function sortCatList() {
	var items = $('.g8sggl .glcat .ww');
	items.each(function () {
		$(this).find('.gocat').sort(function (a, b) {
			return +$(a).attr('ss') - +$(b).attr('ss');
		}).appendTo($(this));
	});
}

function sortGameListOrder(array, order, key) {

	array.sort(function (a, b) {
		var A = a[key], B = b[key];

		if (order.indexOf(A) > order.indexOf(B)) {
			return 1;
		} else {
			return -1;
		}

	});

	return array;
};

function g8sgGetURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
