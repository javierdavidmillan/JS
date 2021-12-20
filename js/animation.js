
//  $(document).ready(function () {
    $("#btnIngresar").fadeTo( "slow" , 0.5, function() {
    });
    function ingresar(event) {
        event.preventDefault();
        $("#btnIngresar").fadeTo( "slow" , 1, function() {
        });
        $("#registrarse").hide( "fast", function() {
        });
        $("#ingresar").slideDown( "slow", function() {
        });
        $("#btnRegistrarse").fadeTo( "slow" , 0.5, function() {
          });
    }

    function registrarse(event) {
        event.preventDefault();
        $("#btnRegistrarse").fadeTo( "slow" , 1, function() {
        });
        $("#ingresar").hide( "fast", function() {
        });
        $("#registrarse").slideDown( "slow", function() {
        });
        $("#btnIngresar").fadeTo( "slow" , 0.5, function() {
        });

    }
    /*
    $("#ingresar").prepend('<button id="btnIngresar">mostrar<button>')
    // $("#ingresar").prepend('<div id="div1"><h3>Esconder</h3></div>')
    

      $("#btnIngresar").click(() => {
        $("#div1").slideDown( "slow", function() {
          });
      });
      */
    // });


/*
 $(document).ready(function () {

$("#ingresar").prepend('<button id="btnIngresar">mostrar<button>')
$("#ingresar").prepend('<div id="div1"><h3>Esconder</h3></div>')

  $("#btnIngresar").click(() => {
    $("#div1").slideDown( "slow", function() {
      });
  });

});
*/
