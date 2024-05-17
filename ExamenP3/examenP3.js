// Función para comprobar si una cadena es un palíndromo
function palindromo(cadena) {
      var resultado = "La frase \"" + cadena + "\"\n";
      var cadenaOriginal = cadena.toLowerCase();
      var letrasEspacios = cadenaOriginal.split("");
      var cadenaSinEspacios = "";
      
      for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
          cadenaSinEspacios += letrasEspacios[i];//almacena la cadena eliminando los espacios
        }
      }     
      var letras = cadenaSinEspacios.split("");
      var letrasReves = cadenaSinEspacios.split("").reverse();//voltea la cadena en otra variable
      var iguales = true;
      
      for (i in letras) {
        if (letras[i] != letrasReves[i]) {
          iguales = false;
          break; // Termina el bucle tan pronto como se encuentre una diferencia
        }
      }
      
      if (iguales) {
        resultado += " es un palíndromo";
      } else {
        resultado += " no es un palíndromo";
      }
      
      return resultado;
    }

    // Función para ejecutar cuando se hace clic en el botón
    function checarPalindromo() {
      var cadenaInput = document.getElementById("cadenaInput").value;
      var resultadoP = document.getElementById("resultadoP");
      resultadoP.textContent = palindromo(cadenaInput);
}