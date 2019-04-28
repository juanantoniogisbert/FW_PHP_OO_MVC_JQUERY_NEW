function validate_register(){
    result = true;
    $(".errorr").remove();
    $(".error1").remove();
  
    if ($("#rusername").val() === "" || $("#rusername").val() === "Introduce tu usuario" ) {
      $("#rusername").focus().after("<span class='errorr'>Introduce tu usuario</span>");
      return false;
    }
    if ($("#rmail").val() === "" || $("#rmail").val() === "Introduce tu email" ) {
      $("#rmail").focus().after("<span class='errorr'>Introduce tu email</span>");
      return false;
    }else if (!pmail.test($("#rmail").val())) {
      $("#rmail").focus().after("<span class='errorr'>El formato del mail es incorrecto</span>");
      return false;
    }
    if ($("#rpasswd").val() === "" || $("#rpasswd").val() === "Introduce una contraseña" ) {
      $("#rpasswd").focus().after("<span class='errorr'>Introduce una contraseña</span>");
      return false;
    }else if (!ppassw.test($("#rpasswd").val())) {
      $("#rpasswd").focus().after("<span class='errorr'>El formato dela contraseña es incorrecto</span>");
      return false;
    }
    if ($("#repPassword").val() === "" || $("#repPassword").val() === "Introduce una contraseña" ) {
      $("#repPassword").focus().after("<span class='errorr'>Introduce una contraseña</span>");
      return false;
    }else if (!ppassw.test($("#repPassword").val())) {
      $("#repPassword").focus().after("<span class='errorr'>El formato dela contraseña es incorrecto</span>");
      return false;
    }
  
    if (result) {
      data = {'rusername':$("#rusername").val(),'rmail':$("#rmail").val(),'rpasswd':$("#rpasswd").val(),'repPassword':$("#repPassword").val()};
      $.post(amigable("?module=login&function=validate_register"),{'total_data':JSON.stringify(data)},function(data){
          Command: toastr["success"]("Revisa tu correo electrónico para activar la cuenta.", "Registrado correctamente");
          setTimeout(function(){ window.location.href = amigable("?module=home&function=list_home"); }, 3000);
      },"json").fail(function(data, textStatus, errorThrown){
          if (data.responseJSON == 'undefined' && data.responseJSON === null )
                        data.responseJSON = JSON.parse(data.responseText);
          if(data.responseJSON.error.rusername)
              $("#e_rusername").focus().after("<span  class='error1'>" + data.responseJSON.error.rusername + "</span>");
          if(data.responseJSON.error.rmail)
              $("#e_rmail").focus().after("<span  class='error1'>" + data.responseJSON.error.rmail + "</span>");
          if(data.responseJSON.error.rpasswd)
              $("#e_rpasswd").focus().after("<span  class='error1'>" + data.responseJSON.error.rpasswd + "</span>");
          if(data.responseJSON.error.repPassword)
              $("#e_repPassword").focus().after("<span  class='error1'>" + data.responseJSON.error.repPassword + "</span>");
      });
    }
  }