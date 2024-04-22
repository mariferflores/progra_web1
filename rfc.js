function genera_rfc() {
    var apellidoP = document.getElementById("ap").value;
    var apellidoM = document.getElementById("am").value;
    var nombre = document.getElementById("nombre").value;
    var anio = document.getElementById("anio").value;
	var anioCorto = anio.substring(anio.length - 2);
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    var nAP = "";
    for (var i = 0; i < apellidoP.length && nAP.length < 2; i++) {
        nAP += apellidoP[i];
    }

    var nAM = apellidoM[0];
    var nN = nombre[0];

    var rfc = nAP.toUpperCase() + nAM.toUpperCase() + nN.toUpperCase() + anioCorto + mes + dia;
    document.getElementById("resultado").value = rfc;

}
