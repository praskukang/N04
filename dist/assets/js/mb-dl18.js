$(document).ready(function () {

  if ($('.g8dl').length) {

    $('head').append(`<style type="text/css">.g8dl .dl-box {padding: 30px 0px;}.g8dl .dl-box .wrapper .dl-listing {padding-bottom: 20px;}.g8dl .dl-box .wrapper .dl-listing ul {display: flex;justify-content: center;gap: 100px;}.g8dl .dl-box .wrapper .dl-listing ul li {text-transform: uppercase;text-align: center;cursor: pointer;}.g8dl .dl-box .wrapper .dl-listing ul li p {font-size: 18px;color: #fff;font-weight: bold;text-transform: uppercase;padding-top: 10px;margin-bottom: 0;}.g8dl .dl-box .wrapper .dl-listing ul li.active p {color: #fcbf05;}.g8dl .dl-box .wrapper .dl-body {display: grid;grid-template-columns: repeat(5, 1fr);gap: 20px;}.g8dl .dl-box .wrapper .dl-body .dl-bb {display: inline-block;text-align: center;padding: 10px;background-color: #000;border: 1px solid #fcbf05;}.g8dl .dl-box .wrapper .dl-body .dl-bb .dl-bbt {background-color: rgba(113, 123, 143, 0.25);font-size: 0px;display: inline-block;}.g8dl .dl-box .wrapper .dl-body .dl-bb .dl-bbt img {width: 100%;}.g8dl .dl-box .wrapper .dl-body .dl-bb .dl-bbt .l {display: inline-block;}.g8dl .dl-box .wrapper .dl-body .dl-bb .dl-bbt .r {display: none;}.g8dl .dl-box .wrapper .dl-body .dl-bb h4 {color: #fff;font-size: 16px;padding: 0px;margin: 15px 0px 10px;}.g8dl .dl-box .wrapper .dl-body .dl-bb .dl-bb h4, .g8dl .dl-box .wrapper .dl-body .dl-bb .pbox {color: #ffffff;}.g8dl .dl-box .wrapper .dl-body .dl-bb a {font-size: 12px;font-weight: bold;text-transform: uppercase;color: #ffffff;background-color: #fcbf05;padding: 5px;display: inline-block;}.g8dl .dl-box .wrapper .dl-body .dl-bb a.b2 {margin-left: 2px;}.modal-apps {background-color: rgba(0, 0, 0, 0.75);position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 9999999;display: none;overflow: auto;z-index: 1050 !important;}.modal-apps .modal-apps__dialog {max-width: 650px;background-color: #e9e9ed;color: #464a4c;box-shadow: 0 0 50px 10px rgba(10, 10, 10, 0.25);margin: auto;position: relative;top: 50%;transform: translateY(-50%);}.modal-apps .modal-apps__dialog .modal-content {background-color: #e6e5e5;}.modal-apps .modal-apps__dialog .modal-content .modal-apps__dialog-header {padding: 15px;border-bottom: 1px solid rgba(128, 128, 128, 0.2);position: relative;}.modal-apps .modal-apps__dialog .modal-content .modal-apps__dialog-header .header-title {text-align: center;}.modal-apps .modal-apps__dialog .modal-content .modal-apps__dialog-header .header-close {position: absolute;right: 15px;top: 15px;cursor: pointer;}.modal-apps .modal-apps__dialog .modal-content .modal-apps__dialog-header .header-close .header-close i {font-size: 18px;}.modal-apps .modal-apps__dialog .modal-content .mobLine {padding: 20px;}.modal-apps .modal-apps__dialog .modal-content .mobLine input {padding: 6px 8px;color: #000;background-color: #ffffff;border: 0px;font-size: 12px;width: calc(100% - 16px);}.modal-apps .modal-apps__dialog .modal-content .mobLine .btn {background-color: #e3a43b;color: #212121;cursor: pointer;border: 0px;padding: 6px 20px;font-weight: bold;}.modal-apps .modal-apps__dialog .modal-content .mobLine .btn:hover {background-color: #d0942f;}@media only screen and (max-width: 992px) {.g8dl .dl-box .wrapper .dl-body .dl-bb a {padding: 5px 10px;margin-bottom: 5px;}.g8dl .dl-box .wrapper .dl-body .dl-bb a.b2 {margin-left: 0;}}@media only screen and (max-width: 768px) {.g8dl .dl-box .wrapper .dl-listing ul li img {max-width: 60px;}.g8dl .dl-box .wrapper .dl-listing ul {gap: 50px;}.g8dl .dl-box .wrapper .dl-body {grid-template-columns: repeat(3, 1fr);gap: 10px;}.g8dl .dl-box .wrapper .dl-body .dl-bb h4 {font-size: 14px;margin: 5px 0;}.modal-apps .modal-apps__dialog {top: unset;transform: unset;}}@media only screen and (max-width: 375px) {.g8dl .dl-box .wrapper .dl-body .dl-bb {padding: 5px;}.g8dl .dl-box .wrapper .dl-body {grid-template-columns: repeat(2, 1fr);}}</style>`);

    $('.g8dl').append('<section class="dl-box"><div class="container wrapper" ></div></section>')

    if (!$('.g8dl .wrapper .dl-listing').length) {
      $('.g8dl .wrapper').append('\
        <div class="dl-listing">\
          <ul>\
            <li class="showDL" dd="a"><img src="/assets/img/android.png" /><p>android</p></li>\
            <li class="showDL" dd="i"><img src="/assets/img/ios.png" /><p>IOS</p></li>\
          </ul>\
        </div>\
      ')
    }

    if (!$('.g8dl .wrapper .dl-body').length) {
      $('.g8dl .wrapper').append('<div class="dl-body"></div>')
    }

    $('.g8dl .wrapper .dl-body').append('\
      <!-- Live22 -->\
      <div class="dl-bb da-a g8-lv2 g8mb" dd="lv2">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-lv2-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Live22</h4>\
        <a href="https://www.g8apps.online/d.html?a=lv2-a" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-i g8-lv2 g8mb" dd="lv2">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-lv2-i.png"></div>\
          <div class="r"><img src="/common/images/default/download/ios.png" /></div>\
        </div>\
        <h4>Live22</h4>\
        <a href="https://www.g8apps.online/d.html?a=lv2-i" target="_blank">Download</a>\
      </div>\
      \
      <!-- SLOT88 -->\
      <div class="dl-bb da-a g8-s88 g8mb" dd="s88">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-s88-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Slot88</h4>\
        <a href="https://www.g8apps.online/d.html?a=s88-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- BALAK -->\
      <div class="dl-bb da-a g8-bp g8mb" dd="bp">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-bp-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Balak</h4>\
        <a href="https://www.g8apps.online/d.html?a=bp-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- V Power -->\
      <div class="dl-bb da-a g8-vp g8mb" dd="vp">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-vp-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>V Power</h4>\
        <a href="https://www.g8apps.online/d.html?a=vp-a" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-i g8-vp g8mb" dd="vp">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-vp-i.png"></div>\
          <div class="r"><img src="/common/images/default/download/ios.png" /></div>\
        </div>\
        <h4>V Power</h4>\
        <a href="https://www.g8apps.online/d.html?a=vp-i" target="_blank">Download</a>\
      </div>\
      \
      <!-- PT -->\
      \
      <div class="dl-bb da-a g8-pt g8mb" dd="pt">\
        <div class="dl-bbt">\
          <div class="l"><img src="/common/images/mobile/qr_pt_casino.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Playtech - Live Kasino</h4>\
        <a href="https://www.g8apps.online/d.html?a=pt-lc-a" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-a g8-pt g8mb" dd="pt">\
        <div class="dl-bbt">\
          <div class="l"><img src="/common/images/mobile/qr_pt_games.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Playtech - Slot</h4>\
        <a href="https://www.g8apps.online/d.html?a=pt-sg-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- AB -->\
      <div class="dl-bb da-a g8-ab g8mb" dd="ab">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-ab.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Allbet</h4>\
        <a href="https://www.g8apps.online/d.html?a=ab" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-i g8-ab g8mb" dd="ab">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-ab.png"></div>\
          <div class="r"><img src="/common/images/default/download/ios.png" /></div>\
        </div>\
        <h4>Allbet</h4>\
        <a href="https://www.g8apps.online/d.html?a=ab" target="_blank">Download</a>\
      </div>\
      \
      <!-- GSS -->\
      <div class="dl-bb da-a g8-gss g8mb" dd="gss">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-gss-sg-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>GSS</h4>\
        <a href="https://www.g8apps.online/d.html?a=gss-sg-a" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-i g8-gss g8mb" dd="gss">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-gss-sg-i.png"></div>\
          <div class="r"><img src="/common/images/default/download/ios.png" /></div>\
        </div>\
        <h4>GSS</h4>\
        <a href="https://www.g8apps.online/d.html?a=gss-sg-i" target="_blank">Download</a>\
      </div>\
      \
      <!-- GP -->\
      <div class="dl-bb da-a g8-gp g8mb" dd="gp">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-gp-lc-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Gameplay</h4>\
        <a href="https://www.g8apps.online/d.html?a=gp-lc-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- JOKER -->\
      <div class="dl-bb da-a g8-jk g8mb" dd="jk">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-joker-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Joker</h4>\
        <a href="https://www.g8apps.online/d.html?a=joker-a" target="_blank">Download</a>\
      </div>\
      \
      <div class="dl-bb da-i g8-jk g8mb" dd="jk">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-joker-i.png"></div>\
          <div class="r"><img src="/common/images/default/download/ios.png" /></div>\
        </div>\
        <h4>Joker</h4>\
        <a href="https://www.g8apps.online/d.html?a=joker-i" target="_blank">Download</a>\
      </div>\
      \
      <!-- FA -->\
      <div class="dl-bb da-a g8-fa g8mb" dd="fa">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-fa-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Fish Ace</h4>\
        <a href="https://www.g8apps.online/d.html?a=fa-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- SA -->\
      <div class="dl-bb da-a g8-sa g8mb" dd="sa">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-sa-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Slot Ace</h4>\
        <a href="https://www.g8apps.online/d.html?a=sa-a" target="_blank">Download</a>\
      </div>\
      \
      <!-- TG -->\
      <div class="dl-bb da-a g8-tg g8mb" dd="tg">\
        <div class="dl-bbt">\
          <div class="l"><img src="https://www.g8apps.online/img/qr-tg-a.png"></div>\
          <div class="r"><img src="/common/images/default/download/android.png" /></div>\
        </div>\
        <h4>Tangkas Ace</h4>\
        <a href="https://www.g8apps.online/d.html?a=tg-a" target="_blank">Download</a>\
      </div>\
    ');

    $('.showDL[dd=a]').addClass('active');
    $('.dl-bb.da-i').hide();
  }

  if (typeof globalObj != "undefined") {
    if (globalObj.login) {

      $('body').append('<div class="modal modal-apps"> <div class="modal-apps__dialog"> <div class="modal-content modal-bb"> <div class="modal-apps__dialog-header"> <div class="header-title g8-apps-title"></div> <div class="header-close modal-apps-close"><i class="fa fa-times"></i></div> </div> <div class="modal-apps__dialog-body"> <form id="dlf" action="/ajax/cma/updatePassword" method="post"><input type="hidden" id="cmGameId" name="cmGameId" value="" /><input type="hidden" id="password" name="password" value="" /></form> <div class="mobLine"> <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" width="140">Username :</td> <td width="280"><span class="g8-apps-muser"></span></td> </tr> <tr> <td>Password :</td> <td><span class="g8-apps-mpass"></span></td> </tr> <tr class="cpass"> <td height="40">Change Password :</td> <td><input type="password" maxlength="12" class="newpwd"></td> </tr> <tr class="cpass"> <td></td> <td><button type="button" class="btn g8msubmit">Submit</button></td> </tr> </tbody> </table> </div> </div> </div> </div> </div>')

      $('.g8mb').each(function () {

        var dd = $(this).attr('dd');
        if ($('.g8mb.g8-' + dd).hasClass('aa')) return true;

        $('.g8mb.g8-' + dd).append('<a href="#" class="b2 g8-apps-login" dd="' + dd + '">Apps Login</a>');

        $(this).addClass('aa');

      });

    }
  }

  $(document).on('click', '.showDL', function () {
    var dd = $(this).attr('dd');
    $('.dl-bb').hide();
    $('.showDL').removeClass('active');
    $(this).addClass('active');
    $('.dl-bb.da-' + dd).show();
    return false;
  });

  $(document).on('click', '.g8-apps-login', function () {
    apps = $(this).attr('dd');
    openModalApps(apps);
    return false;
  });

  $(document).on('click', '.modal-apps-close', function () {
    $(".modal-apps").fadeOut();
    $("body").removeAttr("style");
    return false;
  });

  $(document).on('click', '.g8msubmit', function () {

    var gd = gameData(apps),
      newPwd = $(this).closest('.mobLine').find('.newpwd').val();

    $("#cmGameId").val(gd[0]);
    $("#password").val(newPwd);

    if (newPwd.length >= 6) {

      $.alerts.okButton = (buttons.yes);
      jConfirm(messages.confirmUpdatePwd, 'Update Password', function (r) {
        if (r == true) {

          submitHandler('#dlf', false);

          ajaxCallerJson('get', '/ajax/cma/gameLoginInfo?cmGameId=' + gd[0], '', function (rval) {
            resultInfo = rval;
            if (resultInfo.length > 0) {
              var res = resultInfo[1];
              var upwd = res[1];
              $('.g8-apps-mpass').text(upwd);
            }
          });

        } else {
          return false;
        }
      });

    } else {
      alertMsg(messages.errorUpdatePwd);
      return false;
    }

    return false;
  })

});

function openModalApps(gameID) {
  var gd = gameData(gameID);

  $('.g8-apps-title').text(gd[1]);
  getAppsDetails(gd[0]);
  $('.mobLine input').val('');

  if (gameID == 'lv2') {
    $('.mobLine .cpass').hide();
  } else {
    $('.mobLine .cpass').show();
  }

  $(".modal").fadeOut();
  $(".modal-apps").fadeIn();
  $("body").css("overflow-y", "hidden");
}

function getAppsDetails(gameID) {

  $('.g8-apps-muser, .g8-apps-mpass').text('');

  var resultInfo;
  ajaxCallerJson('get', '/ajax/cma/gameLoginInfo?cmGameId=' + gameID, '', function (rval) {

    resultInfo = rval;
    if (resultInfo.length > 0) {

      var res = resultInfo[1];

      if (gameID == '119') {
        $('.g8-apps-muser').text("cmm7w" + res[0] + "@gl22ft");
      } else if (gameID == '40') {
        $('.g8-apps-muser').text(res[0] + "@cm7");
      } else if (gameID == '38') {
        $('.g8-apps-muser').text(res[0] + "@cm7");
      } else if (gameID == '127') {
        $('.g8-apps-muser').text("g8-1" + res[0]);
      } else if (gameID == '15') {
        $('.g8-apps-muser').text(res[0] + "@CMM7");
      } else if (gameID == '19') {
        $('.g8-apps-muser').text(res[0]);
      } else if (gameID == '21') {
        $('.g8-apps-muser').text(res[0] + "@B16");
      } else if (gameID == '109') {
        $('.g8-apps-muser').text(res[0] + "@cm7w");
      } else if (gameID == '106') {
        $('.g8-apps-muser').text(res[2] + '.' + res[0]);
      } else if (gameID == '3') {
        $('.g8-apps-muser').text(res[2] + globalObj.playerName);
      } else {
        $('.g8-apps-muser').text(res[0]);
      }

      if (gameID == '119') {
        $('.g8-apps-mpass').text('Silakan ikuti kata sandi akun login Anda');
      } else {
        $('.g8-apps-mpass').text(res[1]);
      }

    }

  });

}

function gameData(action) {
  var data = [];
  switch (action) {

    case 'lv2':
      data = [119, 'Live22']
      break;
    case 's88':
      data = [40, 'Slot88']
      break;
    case 'bp':
      data = [38, 'Balak']
      break;
    case 'vp':
      data = [127, 'V Power']
      break;
    case 'pt':
      data = [15, 'Playtech']
      break;
    case 'ab':
      data = [19, 'Allbet']
      break;
    case 'gss':
      data = [109, 'GSS']
      break;
    case 'gp':
      data = [21, 'Gameplay']
      break;
    case 'idn':
      data = [108, 'IDN Poker']
      break;
    case 'jk':
      data = [106, 'Joker']
      break;
    case 'fa':
      data = [32, 'Fish ace']
      break;
    case 'sa':
      data = [31, 'Slot ace']
      break;
    case 'tg':
      data = [3, 'Tangkas ace']
      break;
  }
  return data;
}
