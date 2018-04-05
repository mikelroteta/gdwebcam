(function() {
  "use strict";

  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function(){

    //Campos datos de Usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // Campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    // Botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var resultado = document.getElementById('lista-productos');

    calcular.addEventListener('click', calcularMontos);

    function calcularMontos(event){
      event.preventDefault();
      if(regalo.value === '') {
        alert("Debes elegir un regalo");
        regalo.focus();
      }else {
        var boletosDia = pase_dia.value,
            boletos2Dias = pase_dosdias.value,
            boletoCompleto = pase_completo.value;

        var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50);

        console.log(totalPagar);
      }
    }

  }); // DOM CONTENT LOADED
})();
