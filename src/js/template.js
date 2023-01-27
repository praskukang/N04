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

  $('body').append('\
    <div class="modal modal-signup">\
      <div class="modal-signup__dialog">\
      \
        <div class="modal-content modal-bb">\
          <div class="modal-signup__dialog-header">\
            <div class="header-title">Daftar</div>\
            <div class="header-close modal-close"><i class="fa fa-times"></i></div>\
          </div>\
          \
          <div class="modal-signup__dialog-body">\
            <div class="img-container">'+ logo + '</div>\
            \
            <form id="ajax-form-join-special" action="/func/account/register" method="post" novalidate="novalidate">\
              <div class="form-container">\
                \
                <div class="form-input">\
                  \
                  <div class="form-group g8-refid" style="display:none">\
                    <label>Referral ID</label>\
                    <input type="text" class="form-control g8-rcode" name="rid" maxlength="12" minlength="6" placeholder="">\
                  </div>\
                  \
                  <div class="form-group">\
                    <label><span>*</span> Username / Nama Pengguna</label>\
                    <input type="text" class="form-control required" id="regbank-username" name="username" maxlength="12" minlength="6" placeholder="Minimal 6 huruf / angka">\
                  </div>\
                  \
                  <div class="form-group">\
                    <label><span>*</span> Email</label>\
                    <input type="text" class="form-control required email" name="email" maxlength="255">\
                  </div>\
                  \
                  <div class="form-group">\
                    <label><span>*</span> Password</label>\
                    <input type="password" class="form-control required password" id="password" name="password" maxlength="20" minlength="6" placeholder="Minimal 6 huruf & angka">\
                  </div>\
                  \
                  <div class="form-group">\
                    <label><span>*</span> Confirm Password</label>\
                    <input type="password" class="form-control required password" name="confirmPassword" maxlength="20" minlength="6" equalto="#password" placeholder="Ulangi password">\
                  </div>\
                </div>\
                \
                <div class="form-input">\
                  <div class="form-group">\
                    <label><span>*</span> Contact Number / Nomor Handphone</label>\
                    <input type="text" class="form-control required number" id="regbank-phone" name="mobile" maxlength="15" minlength="7" placeholder="08xxx">\
                  </div>\
                  \
                  <div class="form-group regbank">\
                    <label><span>*</span> Bank</label>\
                    <select id="bank" name="bank" class="form-control required bank-getbank" >\
                      <option value="">Please select your bank.</option>\
                    </select>\
                    <!--<div class="regbank-tickbox"><input type="checkbox" id="regbank-check"> Informasi bank sama dengan nomor handphone</div>-->\
                  </div>\
                  \
                  <div class="form-group regbank regbank-info">\
                    <label><span>*</span> Bank Account No / Nomor Rekening</label>\
                    <input type="text" class="form-control required" id="regbank-accno" name="accNo" minlength="9" maxlength="16">\
                  </div>\
                  \
                  <div class="form-group regbank regbank-info">\
                    <label><span>*</span> Bank Account Name / Nama Rekening</label>\
                    <input type="text" class="form-control required" id="regbank-accname" name="bankAccName" maxlength="25" placeholder="nama sesuai di buku tabungan">\
                  </div>\
                </div>\
                \
              </div>\
              \
              <button type="submit" class="button button--register">Daftar</button>\
            </form>\
          </div>\
        </div>\
        \
      </div>\
    </div>\
    \
    <div class="modal modal-forgot">\
      <div class="modal-forgot__dialog">\
      \
        <div class="modal-content modal-bb">\
          <div class="modal-forgot__dialog-header">\
            <div class="forgot-title">Lupa Login</div>\
            <div class="forgot-close modal-close"><i class="fa fa-times"></i></div>\
          </div>\
          \
          <div class="modal-forgot__dialog-body">\
            \
            <div class="img-container">'+ logo + '</div>\
            \
            <form id="ajax-form-pwd" action="/func/account/forget" method="post" novalidate="novalidate">\
              <div class="form-container">\
                \
                <div class="form-group">\
                  <input type="text" class="form-control required" name="username" maxlength="12" minlength="6" placeholder="Username">\
                  <div class="icon"><i class="fas fa-user"></i></div>\
                </div>\
                \
                <div class="form-group">\
                  <input type="text" class="form-control required email" name="email" maxlength="255" placeholder="Email">\
                  <div class="icon"><i class="fas fa-envelope"></i></div>\
                </div>\
                <div class="form-group">\
                  <input type="text" class="form-control required number" name="mobile" maxlength="15" minlength="7" placeholder="Contact Number">\
                  <div class="icon"><i class="fa fa-phone"></i></div>\
                </div>\
                <button type="submit" class="button button--submit">Submit</button>\
              </div>\
            </form>\
            \
          </div>\
          \
        </div>\
        \
      </div>\
    </div>\
    \
    <div class="modal modal-login">\
      <div class="modal-login__dialog">\
        \
        <div class="modal-content modal-bb">\
          <div class="modal-login__dialog-header">\
            <div class="header-title">Login</div>\
            <div class="header-close modal-close"><i class="fa fa-times"></i></div>\
          </div>\
          \
          <div class="modal-login__dialog-body">\
            \
            <div class="img-container">'+ logo + '</div>\
            \
            <form id="login-form-2" action="/j_spring_security_check" method="post" novalidate="novalidate">\
              <div class="form-container">\
              \
                <div class="form-input">\
                  <div class="form-group">\
                    <input type="text" placeholder="Username" name="j_username" class="form-control required" />\
                  </div>\
                  <div class="form-group">\
                    <input type="password" placeholder="Password" id="j_password" name="j_password" class="form-control required"/>\
                  </div>\
                </div>\
                <button type="submit" class="button button--register">Login</button>\
                \
                <div class="text-center">\
                  <a href="#" class="button-forget g8pop-forgot">Lupa Rincian Masuk?</a>\
                  <a href="#" class="button button2 g8pop-signup">Daftar</a>\
                </div>\
                \
              </div>\
            </form>\
            \
          </div>\
          \
        </div>\
        \
      </div>\
    </div>\
  ');

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