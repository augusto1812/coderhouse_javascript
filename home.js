let pacientes = [];
var dietas;
var dietaFiltrada;

$("#completarDatos").click(function () {
  $("#fieldset").fadeIn(1000);
});

class Persona {
  constructor(
    nombrePersona,
    pesoPersona,
    alturaPersona,
    tipoDietaPersona,
    esPersonaCeliaca,
    indiceMasaCorporal
  ) {
    this.nombre = nombrePersona;
    this.peso = pesoPersona;
    this.altura = alturaPersona;
    this.esVegano = tipoDietaPersona;
    this.esCeliaco = esPersonaCeliaca;
    this.imc = indiceMasaCorporal;
  }

  mostrarIMC() {
    this.imc = (this.peso / Math.pow(this.altura, 2)).toFixed(1);
    $("#imc").html(
      "Su IMC es de: " + this.imc + ".<p> ¿Qué significa esto?</p>"
    );
  }

  clasificacionIMC() {
    switch (this.imc > 0) {
      case this.imc <= 18.5:
        $("#categoriaIMC").html(
          "Esto significa que su peso se encuentra por debajo de la media."
        );
        break;
      case this.imc > 18.5 && this.imc < 25:
        $("#categoriaIMC").html(
          "Esto significa que su peso se encuentra en la media."
        );
        break;
      case this.imc >= 25 && this.imc < 30:
        $("#categoriaIMC").html(
          "Esto significa que su peso se encuentra por arriba de la media."
        );
        break;
      case this.imc >= 30:
        $("#categoriaIMC").html(
          "Esto significa que su peso se encuentra en la categpría de obesidad."
        );
        break;
    }
  }

  mostrarDieta() {
    if (this.esVegano) {
      $.get("./db/dietas.json", function (datos) {
        dietas = datos;
        dietaFiltrada = dietas.filter((dieta) => dieta.tipoDieta == "vegana");
        $("#dieta").html(
          "Su dieta debería estar compuesta de los siguientes macronutrientes: <ul><li>Carbohidratos: " +
            dietaFiltrada[0].carbs +
            ".</li></ul><ul><li>Proteinas: " +
            dietaFiltrada[0].prote +
            ".</li></ul><ul><li>Grasas: " +
            dietaFiltrada[0].grasas +
            "."
        );
      });
    } else {
      $.get("./db/dietas.json", function (datos) {
        dietas = datos;
        dietaFiltrada = dietas.filter(
          (dieta) => dieta.tipoDieta == "carnivora"
        );
        $("#dieta").html(
          "Su dieta debería estar compuesta de los siguientes macronutrientes: <ul><li>Carbohidratos: " +
            dietaFiltrada[0].carbs +
            ".</li></ul><ul><li>Proteinas: " +
            dietaFiltrada[0].prote +
            ".</li></ul><ul><li>Grasas: " +
            dietaFiltrada[0].grasas +
            "."
        );
      });
    }
    if (this.esCeliaco) {
      $("#celiaco").html(
        "Usted no debe consumir ningún alimento que contenga T.A.C.C. (Trigo, avena, centeno y cevada)."
      );
    }
  }
}
