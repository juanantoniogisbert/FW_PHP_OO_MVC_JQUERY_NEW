// toastr.options = {
//     "closeButton": true,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-top-right",
//     "preventDuplicates": false,
//     "onclick": null,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "3000",
//     "extendedTimeOut": "1000",
//     "showEasing": "swing",
//     "hideEasing": "linear",
//     "showMethod": "fadeIn",
//     "hideMethod": "fadeOut"
// }

$(document).ready(function(){
    var webAuth = new auth0.WebAuth({
        domain: 'juagisla.eu.auth0.com',
        clientID: 'sfxhvAtO4jsHzk80Ct5HGspSKlfvR6Kh',
        redirectUri: 'http://localhost/www/FW_PHP_OO_MVC_JQUERY_NEW/cardoor/module/login/view/js/',
        audience: 'https://' + 'juagisla.eu.auth0.com' + '/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile',
        leeway: 60
      });

      $(document).on('click','#logRS',function(e){
        e.preventDefault();
        webAuth.authorize();
      });
});

function setSession(authResult) {
  // Set the time that the access token will expire at
  var expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
}

function validate_register(){
  result = true;
  $(".errorr").remove();
  $(".error1").remove();

  if ($("#ruser").val() === "" || $("#ruser").val() === "Introduce tu usuario" ) {
    $("#ruser").focus().after("<span class='errorr'>Introduce tu usuario</span>");
    return false;
  }
  if ($("#remail").val() === "" || $("#remail").val() === "Introduce tu email" ) {
    $("#remail").focus().after("<span class='errorr'>Introduce tu email</span>");
    return false;
  }else if (!pmail.test($("#remail").val())) {
    $("#remail").focus().after("<span class='errorr'>El formato del mail es incorrecto</span>");
    return false;
  }
  if ($("#rpasswd").val() === "" || $("#rpasswd").val() === "Introduce una contraseña" ) {
    $("#rpasswd").focus().after("<span class='errorr'>Introduce una contraseña</span>");
    return false;
  }else if (!ppassw.test($("#rpasswd").val())) {
    $("#rpasswd").focus().after("<span class='errorr'>El formato dela contraseña es incorrecto</span>");
    return false;
  }
  if ($("#rpasswdr").val() === "" || $("#rpasswdr").val() === "Introduce una contraseña" ) {
    $("#rpasswdr").focus().after("<span class='errorr'>Introduce una contraseña</span>");
    return false;
  }else if (!ppassw.test($("#rpasswdr").val())) {
    $("#rpasswdr").focus().after("<span class='errorr'>El formato dela contraseña es incorrecto</span>");
    return false;
  }

  if (result) {
    data = {'rname':$("#rname").val(),'ruser':$("#ruser").val(),'remail':$("#remail").val(),'rpasswd':$("#rpasswd").val(),'rpasswdr':$("#rpasswdr").val()};
    $.post(amigable("?module=login&function=validate_register"),{'total_data':JSON.stringify(data)},function(data){
        Command: toastr["success"]("Revisa tu correo electrónico para activar la cuenta.", "Registrado correctamente");
        setTimeout(function(){ window.location.href = amigable("?module=home&function=list_home"); }, 3000);
    },"json").fail(function(data, textStatus, errorThrown){
        if (data.responseJSON == 'undefined' && data.responseJSON === null )
                      data.responseJSON = JSON.parse(data.responseText);
        if(data.responseJSON.error.ruser)
            $("#error_ruser").focus().after("<span  class='error1'>" + data.responseJSON.error.ruser + "</span>");
        if(data.responseJSON.error.remail)
            $("#error_remail").focus().after("<span  class='error1'>" + data.responseJSON.error.remail + "</span>");
        if(data.responseJSON.error.rpasswd)
            $("#error_rpasswd").focus().after("<span  class='error1'>" + data.responseJSON.error.rpasswd + "</span>");
        if(data.responseJSON.error.rpasswdr)
            $("#error_rpasswdr").focus().after("<span  class='error1'>" + data.responseJSON.error.rpasswdr + "</span>");
    });
  }
}