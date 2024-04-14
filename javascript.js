function multi() {
    var num = prompt('Ingresa un número del 1 al 10:', '');
    num = parseInt(num);

    var tablaHTML = "<h2>Tabla de Multiplicar del " + num + "</h2><table>";

    for (var x = 1; x <= 10; x++) {
        var tabla = num * x;
        tablaHTML += "<tr><td>" + num + " x " + x + "</td><td>=</td><td>" + tabla + "</td></tr>";
    }

    tablaHTML += "</table>";

    document.getElementById("tabla").innerHTML = tablaHTML;
}
