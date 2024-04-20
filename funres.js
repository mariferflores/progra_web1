function verificar() {
  var texto = document.getElementById("textoInput").value;
  var resultado = document.getElementById("resultado");

  if (texto.match(/[a-z]/) && texto.match(/[A-Z]/)) {
    resultado.innerText = "La cadena contiene mayúsculas y minúsculas.";
  } else if (texto.match(/[a-z]/)) {
    resultado.innerText = "La cadena contiene solo minúsculas.";
  } else if (texto.match(/[A-Z]/)) {
    resultado.innerText = "La cadena contiene solo mayúsculas.";
  } else {
    resultado.innerText = "La cadena no contiene ni mayúsculas ni minúsculas.";
  }
}