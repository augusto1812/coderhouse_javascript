function habilitarBoton() {
  $("#obtenerResultados").prop("disabled", false);
  $("#obtenerResultados").css("background-color", "white");
  $("#obtenerResultados").removeAttr("disabled");
}

function inhabilitarBoton() {
  $("#obtenerResultados").prop("disabled", true);
  $("#obtenerResultados").css("background-color", "grey");
  $("#obtenerResultados:hover").css("color", "black");
}

$("#obtenerResultados").click(function generarResultado() {
  pacientes.forEach((persona) => {
    persona.mostrarIMC();
    persona.clasificacionIMC();
    persona.mostrarDieta();
    $("#resultadoIMC").fadeIn(2000);
    $("#recomendacionDieta").fadeIn(2100);
    inhabilitarBoton();
    $("#masResultados").fadeIn(2000);
  });
});

$("#masResultados").click(function () {
  $("#resultadoIMC").fadeOut(300);
  $("#recomendacionDieta").fadeOut(400);
  habilitarBoton();
  $("#masResultados").fadeOut(400);
});
