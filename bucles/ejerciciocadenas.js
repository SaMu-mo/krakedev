ejecutarPrueba1 = function () {
    let mensaje = recuperarTexto("txtCadena");
    let cadenaInvertida = InvertirCadena(mensaje);
    mostrarTexto("Resultado", cadenaInvertida)
}



recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion)
    }

}

InvertirCadena = function (cadena) {
    let resultado = "";
    for (let i=cadena.length - 1; i>=0; i--){
        resultado = resultado + cadena[i];
        }
        return resultado


}


