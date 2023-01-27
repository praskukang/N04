$(document).ready(function () {

  showAnnouncement();
  appendWallet();

  if (typeof globalObj != "undefined") {

    if (!globalObj.login) {
      window.location = home_link;
    }

    if (window.WebSocket) {
      //console.log("socketUrl===="+globalObj.socketUrl)
      //start(globalObj.nofId, globalObj.socketUrl);
      start(globalObj.nofId, 'wsstag.bongaplay.com');
    } else {
      alertMsg(messages.notSupportWs);
    }
  }

  $('.g8-name').text(globalObj.playerName);

  // $(document).on('click', '.checkstatus', function(){

  //   var url = $(this).attr('url');

  //   ajaxCallerJson('get', '/ajax/cm/getPlayerStatus', '', function(res){
  //     if(res[1] == '10'){
  //       jAlert(messages.errorUserPending, labels.alert);
  //     } else if(res[1] == '-10'){
  //       jAlert(messages.errorUserReject, labels.alert);
  //       setTimeout(function(){
  //         ajaxCaller('get', logout_link, '', function(){});
  //       }, 5000);
  //     } else {
  //       $('.checkstatus').removeClass('checkstatus');
  //       window.location.href = url;
  //     }
  //   })

  // })

  // Special Wallet and Mission

  if (globalObj.isMission == true) {
    $('.misbtn, .openmis-mob,.sw-a').show().css("display", "flex");;
  } else {
    $('.misbtn, .openmis-mob,.sw-a').hide();
  }

  $('.sw-b').text(globalObj.creditSpecialWallet);

  // mission box
  $(document).on('click', '.openmis, .openmis-mob', function () {
    $('.miswrap').addClass('active');

    $('.miswrap .misbox .misbody').empty().append('<div class="mislist"><div><p style="font-size: 14px;text-align: center;margin: 0">Loading ...</p></div></div>');
    $('.miswrap .misbox .mishead .mistol').empty();
    $('.miswrap .misbox .mishead .mistol').hide();

    if (!globalObj.playerStatus) {
      $('.miswrap .misbox .misbody').empty().append('<div class="mislist"><div><p style="font-size: 14px;text-align: center;margin: 0">' + messages.errorUserPendingMS + '</p></div></div>')
      return false;
    } else {
      $('.miswrap .misbox .mishead .mistol').show()
    }

    ajaxCaller('get', '/ajax/mission/getMissionList', '', function (res) {

      $('.miswrap .misbox .misbody').empty()

      var data = res[1],
        doneMIS = 0;

      if (data == '') {
        $('.miswrap .misbox .misbody').append('\
            <div class="mislist">\
              <div>\
                <p style="font-size: 14px;text-align: center;margin: 0">No Mission</p>\
              </div>\
            </div>\
          ')
      }

      for (var i = 0; i < res[1].length; i++) {
        var data = res[1][i];

        var misID = '';
        if (data[0]) {
          misID = data[0];
        }

        var misBonusAmo = 0;
        if (data[3]) {
          misBonusAmo = data[3];
        }

        var misSCR = 0;
        if (data[4]) {
          misSCR = data[4];
        }

        var misrCol = '';

        if (data[2] == 5) {

          misrCol = '<a href="#" class="openml" d="ms-ver-start" dd="' + data[7] + '">Accept</a>';

        } else if (data[2] == 0) {

          misrCol = '<span>Bonus: ' + misBonusAmo + '</span><span class="b-scr" style="display:none">SCR: ' + misSCR + '</span><a href="#" class="openml btn-continue" d="ms-ver">Continue</a>';

        } else if (data[2] == 20) {

          continue;
          misrCol = '<span class="btn-void">Void</span>';

        } else if (data[2] == 10) {

          misrCol = '<span>Bonus: ' + misBonusAmo + '</span><span class="b-scr" style="display:none">SCR: ' + misSCR + '</span><span class="btn-done">Completed</span>';

          doneMIS++
        }

        $('.miswrap .misbox .misbody').append('\
          <div class="mislist misid-'+ data[7] + '" dd="' + data[0] + '" sid="' + data[7] + '">\
            <div class="l">\
              <h3>'+ data[1] + '</h3>\
              <div class="desc">'+ data[6] + '</div>\
            </div>\
            <div class="r">\
              ' + misrCol + '\
            </div>\
          </div>\
        ')
      }

      if (globalObj.isSpecialWallet) {
        $('.b-scr').show()
      }

      $('.miswrap .misbox .mishead .mistol').append('Completed Mission: ' + doneMIS + '/' + res[1].length);

    });
    return false;
  })

  $(document).on('click', '.misclose, .miswrap .overlay', function () {
    $('.miswrap').removeClass('active');
    $('.miswrap .misbox .misbody').empty();
    $('.miswrap .misbox .mishead .mistol').empty();
    return false;
  })

  // mission list
  $(document).on('click', '.openml', function () {
    var ver = $(this).attr('d'),
      t = $(this).closest('.mislist').find('h3').text(),
      c,
      misID = $(this).closest('.mislist').attr('dd');

    if (ver == "ms-done") {
      return false;
    }

    if (ver == 'ms-ver-start') {

      var sid = $(this).attr('dd');

      $('.mlwrap .mlbox .mlhead h2').text(t);
      $('.mlwrap .mlbox .mlbody').append('Loading ...')

      $('.mlwrap').addClass('active');

      $.ajax({
        type: "POST",
        url: '/ajax/mission/acceptMission',
        data: 'settingId=' + sid,
        dataType: "json",
        async: false,
        success: function (res) {

          if (res[0] == prefixs.success) {

            ajaxCaller('get', '/ajax/mission/getMissionList', '', function (res) {

              $.each(res[1], function (i, item) {
                if (item[7] == sid) {

                  c = '\
                  <p>Please contact customer service for verification code:</p>\
                <form id="mission-verifyacc">\
                  <input type="hidden" name="msid" value="'+ item[0] + '">\
                  <input type="text" name="code" placeholder="verification code">\
                  <div class="error" style="display:none"></div>\
                  <a href="#" class="subbtn">Submit</a>\
                </form>';

                  $('.mlwrap .mlbox .mlbody').empty().append(c);
                  $('.openmis').trigger('click');
                }
              });

            });

          } else if (res[0] == prefixs.error) {

            c = '<div class="error">Mission generate failed, please contact customer service or try again later</div>'
            $('.mlwrap .mlbox .mlbody').empty().append(c);

          }

        }
      });
    }

    if (ver == 'ms-ver') {
      c = '\
      <p>Please contact customer service for verification code:</p>\
    <form id="mission-verifyacc">\
      <input type="hidden" name="msid" value="'+ misID + '">\
      <input type="text" name="code" placeholder="verification code">\
      <div class="error" style="display:none"></div>\
      <a href="#" class="subbtn">Submit</a>\
    </form>'

      $('.mlwrap .mlbox .mlhead h2').text(t);
      $('.mlwrap .mlbox .mlbody').append(c)

      $('.mlwrap').addClass('active');
    }

    return false;
  })

  $(document).on('click', '.mlclose, .mlwrap .overlay', function () {
    $('.mlwrap').removeClass('active');
    $('.mlwrap .mlbox .mlhead h2').empty();
    $('.mlwrap .mlbox .mlbody').empty()
    return false;
  })

  // individual mission submit
  $("#mission-verifyacc input[name='code']").on("keypress keyup blur", function (event) {
    $('#mission-verifyacc .error').hide();
  });

  $(document).on('click', '#mission-verifyacc .subbtn', function () {

    var code = $('#mission-verifyacc input[name="code"]').val();
    if (!code) {
      $('#mission-verifyacc .error').text('Please fill up verification code');
      $('#mission-verifyacc .error').show();
      return false;
    }

    $('#mission-verifyacc .error').hide();

    $.ajax({
      type: "POST",
      url: '/ajax/mission/submitMission',
      data: $('#mission-verifyacc').serialize(),
      dataType: "json",
      async: false,
      success: function (res) {

        if (res[0] == prefixs.success) {
          $('#mission-verifyacc .error').text('Sent successfully.');
          $('#mission-verifyacc .error').show();
          $('.openmis').trigger('click');

          setTimeout(function () {
            $('.mlwrap').removeClass('active');
            $('.mlwrap .mlbox .mlhead h2').empty();
            $('.mlwrap .mlbox .mlbody').empty()
          }, 3000);

        } else if (res[0] == prefixs.errorExp) {

          $('#mission-verifyacc .error').text(res[1]);
          $('#mission-verifyacc .error').show();

        } else if (res[0] == prefixs.error) {

          $('#mission-verifyacc .error').text('Verify failed, please re-check your verification code or contact our customer service.');
          $('#mission-verifyacc .error').show();
        }
      }
    });
    return false;
  })

  $(document).on('click', '.g8-bal-m-btn', function () {
    $(this).toggleClass('aa');
    $(".g8-bal-m").slideToggle("3000");
  })

  $(document).on('click', '.g8-admin-dd', function () {
    $(".g8-admin-menu").toggleClass("show");
  })

  $(document).on('click', '.g8-logout', function () {
    ajaxCaller('post', logout_link, '', function () { });
  })

});

function showAnnouncement() {
  if ($('body').hasClass('secure-home')) {
    if (entityData.popupText.length > 0) {
      jAlert(entityData.popupText, '', function (confirmed) {
        if (confirmed) {
          $('body').removeClass('secure-home');
        }
      });
    }
  }
}

function appendWallet() {

  ajaxCaller('get', '/ajax/account/getAccountDto', '', function (res) {

    var amountMainWallet = res[2];
    $('.g8-bal-total').text(amountMainWallet);
    $('.g8-bal').empty().append('<div class="bbl bbl-0" d="0" wid="0"><p>Main Wallet</p><span class="bblcr" hcr="' + amountMainWallet + '">' + amountMainWallet + '</span> <a href="javascript:void(0)" onclick="refreshALLWallet();"><i class="fas fa-redo-alt"></i></a><a class="b1" href="javascript:void(0)" onclick="retoreALLWallet();">Restore</a></div>');

    $('.g8-bal-v2.d').empty().append(
      `<li class="bbl bbl-0" d="0" wid="0"><p>Main Wallet</p><div class="bbl-wrapper"><div class="bbl-val">
          <span class="bblcr" hcr="${amountMainWallet}">${amountMainWallet}</span>
          <a href="javascript:void(0)" onclick="refreshALLWallet();"><i class="fas fa-redo-alt"></i></a></div>
          <a class="b1" href="javascript:void(0)" onclick="retoreALLWallet();"><button class="btn-process">Restore</button></a></div>
      </li>`);

    $('.g8-bal-m').append(
      `<div class="bbl bbl-0" d="0" wid="0"><p>Main Wallet</p><div class="bbl-wrapper"><div class="bbl-val">
          <span class="bblcr" hcr="${amountMainWallet}">${amountMainWallet}</span>
          <a href="javascript:void(0)" onclick="refreshALLWallet();"><i class="fas fa-redo-alt"></i></a></div>
          <a class="b1" href="javascript:void(0)" onclick="retoreALLWallet();"><button class="btn-process">Restore</button></a></div>
      </div>`);

    ajaxCaller('get', '/ajax/cm/getPlayerGameInfo', '', function (res2) {

      var amount = 0;

      for (var i = 0; i < res2[1].length; i++) {
        var data = res2[1][i];
        $('.g8-bal').append('<div class="bbl bbl-' + data[3] + '" d="' + data[3] + '" wid="' + data[5] + '"><p>' + data[0] + '</p><span class="bblcr" hcr="' + data[2] + '">' + data[2] + '</span><a href="javascript:void(0)" onclick="refreshWallet(' + data[3] + ');"><i class="fas fa-redo-alt"></i></a></div>');
        amount = amount + parseFloat(data[2].replace(/,/g, ''));

        $('.g8-bal-v2').append(
          `<li class="bbl bbl-${data[3]}" d="${data[3]}" wid="${data[5]}"><p>${data[0]}</p><div class="bbl-wrapper"><div class="bbl-val">
              <span class="bblcr" hcr="${data[2]}">${data[2]}</span>
              <a href="javascript:void(0)" onclick="refreshWallet(${data[3]});"><i class="fas fa-redo-alt"></i></a></div></div>
          </li>`);
      }

      var totalAmount = amount + amountMainWallet;
      $('.g8-bal-total').empty().append(totalAmount.toFixed(2));

    });
  });

}

function refreshWallet(id) {

  $('.bbl-' + id).find('.bbloverlap').remove();
  $('.bbl-' + id).append('<div class="bbloverlap"></div>');
  // $('.bbl-'+id).find('.bblcr').text('...');
  $('.g8-bal-total').empty().text('...');

  if (id == 0) {
    ajaxCaller('get', '/ajax/account/getAccountDto', '', function (res) {
      var amountMainWallet = res[2];
      $('.bbl-0').find('.bbloverlap').remove();
      $('.bbl-0 .bblcr').empty().append(amountMainWallet).attr('hcr', amountMainWallet)

      var amount = 0;
      var arr = [];
      $('.bbl').each(function (index, item) {

        var d = $(this).attr('d');
        if (arr.indexOf(d) != '-1') {
          return;
        }
        arr.push(d);

        amount = amount + parseFloat($(this).find('.bblcr').attr('hcr').replace(/,/g, ''));
      });
      $('.g8-bal-total').empty().append(amount.toFixed(2));
    });
    return false;
  }

  $.ajax({
    type: "POST",
    url: '/ajax/cma/gameWalletRefresh',
    dataType: 'json',
    data: 'gameIdId=' + id,
    success: function (res) {

      $('.bbl-' + id).find('.bbloverlap').remove();

      if (res[1] == prefixs.gameWalletMaintenance) {
        if ($('.bbl-' + id).find('.bblmt').length == 0) {
          $('.bbl-' + id).find('.bblcr').after('<a href="javascript:void(0)" class="bblmt" style="padding-right: 5px;"><i class="fas fa-wrench"></i></a>')
        }
      } else {
        $('.bbl-' + id).find('.bblmt').remove();
        $('.bbl-' + id).find('.bblcr').text(res[1]).attr('hcr', res[1]);
      }

      var amount = 0;
      var arr = [];
      $('.bbl').each(function (index, item) {

        var d = $(this).attr('d');
        if (arr.indexOf(d) != '-1') {
          return;
        }
        arr.push(d);

        amount = amount + parseFloat($(this).find('.bblcr').attr('hcr').replace(/,/g, ''));
      });
      $('.g8-bal-total').empty().append(amount.toFixed(2));
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // alert(jqXHR.responseText);//Unauthorized
    }
  });

}

function refreshALLWallet() {

  var totalWallet = $('.bbl').length,
    counter = 0,
    amount = 0;

  $('.bbl .bbloverlap').remove();;
  $('.bbl').append('<div class="bbloverlap"></div>');
  // $('.bbl').find('.bblcr').text('...');
  $('.g8-bal-total').empty().text('...');

  ajaxCaller('get', '/ajax/account/getAccountDto', '', function (res) {
    var amountMainWallet = res[2];
    $('.bbl-0').find('.bbloverlap').remove();
    $('.bbl-0 .bblcr').empty().append(amountMainWallet).attr('hcr', amountMainWallet);
    amount = amount + parseFloat(amountMainWallet);

    var arr = [];

    $('.bbl').each(function (index, item) {

      var d = $(this).attr('d');

      if (arr.indexOf(d) != '-1') {
        return;
      }

      if (d == 0) {
        arr.push(d);
        counter++;
        return;
      }

      arr.push(d);

      $.ajax({
        type: "POST",
        url: '/ajax/cma/gameWalletRefresh',
        dataType: 'json',
        data: 'gameIdId=' + d,
        success: function (res) {

          $('.bbl-' + d).find('.bbloverlap').remove();

          if (res[1] == prefixs.gameWalletMaintenance) {
            if ($('.bbl-' + d).find('.bblmt').length == 0) {
              $('.bbl-' + d).find('.bblcr').after('<a href="javascript:void(0)" class="bblmt" style="padding-right: 5px;"><i class="fas fa-wrench"></i></a>')
            }
          } else {
            $('.bbl-' + d).find('.bblmt').remove();
            $('.bbl-' + d).find('.bblcr').text(res[1]).attr('hcr', res[1]);
          }

          amount = amount + parseFloat($('.bbl-' + d).find('.bblcr').attr('hcr').replace(/,/g, ''));
          counter++;

          $('.g8-bal-total').empty().append(amount.toFixed(2));
        },
        error: function (jqXHR, textStatus, errorThrown) {
          // alert(jqXHR.responseText);//Unauthorized
        }
      });

    });

  });

}

function retoreALLWallet() {

  $('.bbl .bbloverlap').remove();;
  $('.bbl').append('<div class="bbloverlap"></div>');
  $('.g8-bal-total').empty().text('...');

  ajaxCaller('get', '/ajax/cm/getPlayerGameInfo', '', function (res) {

    var agl = [],
      pd = {};

    for (var i = 0; i < res[1].length; i++) {

      var data = res[1][i],
        currAmo,
        currGameID;

      // collect user current available game
      agl.push(data[5]);
      pd[data[6]] = data[0];

      wg = data[2];
      currAmo = wg.replace(',', '');
      currAmo = Math.floor(currAmo);

      currGameID = data[3];
      // console.log(data[5])

      if (currAmo >= 1) {

        if (data[4] != '50' && data[4] != '60') {
          gwOut(currGameID);
        }

      }

      //done looping
      if (i == (res[1].length - 1)) {

        setTimeout(function () {
          ajaxCaller('get', '/ajax/account/getAccountDto', '', function (res) {

            wm = res[2];
            $('.bbl-0').find('.bbloverlap').remove();
            $('.bbl-0 .bblcr').empty().append(wm).attr('hcr', wm);

            ajaxCaller('get', '/ajax/cm/getPlayerGameInfo', '', function (res2) {

              var amount = 0;

              for (var i = 0; i < res2[1].length; i++) {
                var data = res2[1][i];
                $('.bbl-' + data[3] + ' .bblcr').empty().append(data[2]).attr('hcr', data[2]);
                $('.bbl-' + data[3]).find('.bbloverlap').remove();
                amount = amount + parseFloat(data[2].replace(/,/g, ''));
              }

              var totalAmount = amount + wm;
              $('.g8-bal-total').empty().append(totalAmount.toFixed(2));

            });

          });
        }, 5000);

      }
      //exit done looping

    }

  });

}

function gwOut(gameID) {
  $.ajax({
    type: "POST",
    url: '/ajax/cma/gameWalletRefresh',
    dataType: 'json',
    data: 'gameIdId=' + gameID,
    success: function (res) {

      if (res[1] == prefixs.gameWalletMaintenance) {
        if ($('.bbl-' + gameID).find('.bblmt').length == 0) {
          $('.bbl-' + gameID).find('.bblcr').after('<a href="javascript:void(0)" class="bblmt" style="padding-right: 5px;"><i class="fas fa-wrench"></i></a>')
        }
        return false;
      } else {
        $('.bbl-' + gameID).find('.bblmt').remove();
        $('.bbl-' + gameID).find('.bblcr').text(res[1]).attr('hcr', res[1]);
      }

      var gwAmo = res[1],
        latestAmo;

      latestAmo = gwAmo.replace(',', '');
      latestAmo = Math.floor(latestAmo);

      $.ajax({
        type: "POST",
        url: '/ajax/cm/requests',
        dataType: 'json',
        data: 'gameIdTransfer=' + gameID + '&reqType=-6&amountTransfer=' + latestAmo,
        success: function (res) { },
        error: function (jqXHR, textStatus, errorThrown) {
          // console.log(jqXHR.responseText);
        }
      });

    },
    error: function (jqXHR, textStatus, errorThrown) {
      // console.log(jqXHR.responseText);
    }
  });
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var checkCKwallet = setInterval(refreshCKwallet, 30000);

function refreshCKwallet() {

  if (getCookie('g8wllg')) {

    var wllg = getCookie('g8wllg').split(',');
    $.each(wllg, function (i, item) {
      var gameID = $('.bbl[wid=' + item + ']').attr('d');
      refreshWallet(gameID);
    })

    setTimeout(function () { refreshWallet(0) }, 3000);

  }

}