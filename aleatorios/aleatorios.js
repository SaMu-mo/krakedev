numeroAleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}

generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarFloat("numero");
    let valor = numeroAleatorio();
    if (isNaN(numero)) {
        alert("Debe ingresar un número.");

    }
    if (numero < 5 || numero > 20) {
        alert("Debe ingresar un número entre 5 y 20.");
    }

    for (let i = 0; i < numero; i++) {

        console.log(i);
        let valor = numeroAleatorio();
        aleatorios.push(valor);
    }
    return mostrarResultados(aleatorios);

}

mostrarResultados = function(arregloNumeros){
    let tabla = "<table> <tr><th>Número</th><th>Valor</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + i + "</td>";
        tabla += "<td>" + arregloNumeros[i] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    let cmpTabla = document.getElementById("tabla");
    cmpTabla.innerHTML = tabla;

}

