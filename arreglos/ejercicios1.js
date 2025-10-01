let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

agregarNota = function (nota) {
    notas.push(nota);
}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarFloat("txtNota")
    agregarNota(notaRecuperada);
}


recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}


calcularPromedio = function () {
    let sumaNotas = 0
    let Promedio;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas = sumaNotas + i
    }
    Promedio = sumaNotas / notas.length
    return Promedio
}

ejecutarPromedio = function () {
    let promedio;
    promedio = calcularPromedio();

    mostrarTexto("lblResultado", promedio)
}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divtabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>" + "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}
mostrarNotas = function () {
    let cmpTabla = document.getElementById("divtabla");
    let contenidoTabla = "<table>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla


}


