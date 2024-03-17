var txtInicial = document.querySelectorAll(".cajastxt")[0];
var txtResultado = document.querySelectorAll(".cajastxt")[1];

function encriptar() {
  var txtCifrado = txtInicial.value.replace(/[a-z]/g, function (letra) {
    switch (letra) {
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "a":
        return "ai";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letra;
    }
  });

  if (txtInicial.value !== "") {
    txtResultado.value = txtCifrado;
    txtInicial.value = "";
  } else {
    console.log("No hay ningún texto");
  }
}

function desencriptar() {
  let txtOriginal = txtResultado.value
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e");

  if (txtResultado.value !== "") {
    txtInicial.value = txtOriginal;
    txtResultado.value = "";
  } else {
    console.log("No hay ningún texto encriptado");
  }
}

function copiar() {
  txtResultado.select();
  document.execCommand("copy");
}

function borrar(){
  txtInicial.value = "";
  txtResultado.value = "";
}