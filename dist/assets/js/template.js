$(document).ready(function () {

  if (typeof globalObj != "undefined") {
    if (globalObj.login) {
      window.location = "/secure/home.html";
    }
  }

  if (typeof entityData.beforePopupText != "undefined") {
    if (entityData.beforePopupText.length > 0) {
      var urlPath = window.location.pathname;
      if (urlPath == '/' || urlPath == '/index.html') {
        jAlert(entityData.beforePopupText, '', '');
      }
    }
  }

  if (getURLParameter('v')) {
    var paramMSG = 'messages.login' + getURLParameter('v');
    jAlert(eval(paramMSG));
    window.history.replaceState(null, null, window.location.pathname);
  }

  var logo = $('.header-mdl__logo').html();

  $(document).on('click', '.g8pop-signup', function () {
    // $(".modal").fadeOut();
    // $(".modal-signup").fadeIn();
    // $("body").css("overflow-y", "hidden");
    window.location.href = '/register.html'
    return false;
  });

  $(document).on('click', '.g8pop-forgot', function () {
    $(".modal").fadeOut();
    $(".modal-forgot").fadeIn();
    $("body").css("overflow-y", "hidden");
    return false;
  });

  $(document).on('click', '.g8pop-login', function () {
    $(".modal").fadeOut();
    $(".modal-login").fadeIn();
    $("body").css("overflow-y", "hidden");
    return false;
  });

  if (typeof globalObj != "undefined") {
    if (globalObj.isRegisterFormReferral) {
      $('.g8-refid').show()
    }
  }

  $('#login-form').submit(function (e) {
    e.preventDefault();
  }).validate({
    errorPlacement: function (error, element) {
    },
    invalidHandler: function (form, validator) {
      if ($.fn.effect) {
        $("#login-form").effect("shake", { distance: 6, times: 2 }, 35);
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $('#login-form-2').submit(function (e) {
    e.preventDefault();
  }).validate({
    errorPlacement: function (error, element) {
    },
    invalidHandler: function (form, validator) {
      if ($.fn.effect) {
        $("#login-form-2").effect("shake", { distance: 6, times: 2 }, 35);
      }
    },
    submitHandler: function (form) {
      form.submit();
    }
  });

  ajaxCaller('get', '/func/common/getBank', '', function (res) {
    for (var i = 0; i < res[1].length; i++) {
      var data = res[1][i];
      var bankname = data[1];
      bankname = bankname.replace(/\s+/g, '').toLowerCase();
      $('.bank-getbank').append('<option value="' + data[0] + '" dd="' + bankname + '">' + data[1] + '</option>');
    }
  });

  $(document).on('change', '.bank-getbank', function () {
    var dd = $(this).find('option:selected').attr('dd');

    $('.regbank-info').show();

    $('#regbank-check').prop("checked", false)

    if (dd == 'gopay' || dd == 'ovo' || dd == 'dana') {
      $('.regbank-tickbox').show()
    } else {
      $('.regbank-tickbox').hide()
    }

  });

  $(document).on('click', '#regbank-check', function () {
    if ($(this).prop("checked") == true) {
      $('.regbank-info').hide()
    } else if ($(this).prop("checked") == false) {
      $('.regbank-info').show()
    }
  });

  $('#ajax-form-join-special').submit(function (e) {
    e.preventDefault();
  }).validate({
    submitHandler: function (form) {

      var flag = false;
      if (typeof $(form).data('flag') != "undefined") {
        flag = $(form).data('flag');
      }

      if ($('#regbank-check').prop("checked") == true) {
        $('#regbank-accno').val($('#regbank-phone').val());
        $('#regbank-accname').val($('#regbank-username').val());
      }

      submitHandler(form, flag);
    }
  });

  $('#ajax-form-join-mob').submit(function (e) {
    e.preventDefault();
  }).validate({
    submitHandler: function (form) {

      var flag = false;
      if (typeof $(form).data('flag') != "undefined") {
        flag = $(form).data('flag');
      }

      if ($('#regbank-check-mob').prop("checked") == true) {
        $('#regbank-accno-mob').val($('#regbank-phone-mob').val());
        $('#regbank-accname-mob').val($('#regbank-username-mob').val());
      }

      submitHandler(form, flag);
    }
  });

  checkRefCookie();

});

function resetLoginForm(formId) {
  $(formId).find(":password").val('');
  $(formId).find('.form-control').removeClass('valid');
  $(formId).find('.form-control').removeClass('error');
  $(formId).find('label.error').text("").hide();
}

// function refreshCaptcha(){
//   $(".captcha-img").prop("src", "/stickyImg?"+Math.random());
// }

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkRefCookie() {
  var value = getCookie("rcode");
  if ($('.g8-rcode').length) {
    $('.g8-rcode').val(value);
  }
}