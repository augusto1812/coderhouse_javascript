function datosCargados() {
  $("#datosCargadosCorrectamente").slideDown(1000).delay(2000).slideUp(1000);
}

function guardarDatos(paciente) {
  pacientes.push(paciente);
  sessionStorage.setItem("pacientes", JSON.stringify(pacientes));
}

$("#cargarDatos").click(function cargarDatos() {
  let nombre = $("#nombre").val();
  let peso = $("#peso").val();
  let altura = $("#altura").val();
  let esVegano = $("#esVegano").is(":checked");
  let esCeliaco = $("#esCeliaco").is(":checked");
  let paciente = new Persona(nombre, peso, altura, esVegano, esCeliaco, 0);
  guardarDatos(paciente);
  datosCargados();
  $("#obtenerResultados").fadeIn(1000);
});
