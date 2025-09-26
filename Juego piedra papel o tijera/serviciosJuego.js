obtenerAleatorio = function () {
    return Math.floor(Math.random() * 3) + 1;
}

generarElemento = function () {
    let movimiento = obtenerAleatorio();

    if (movimiento == 1) {
        return "piedra";
    }
    else if (movimiento == 2) {
        return "papel";
    }
    else {
        return "tijera";
    }
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return "0";
    }
    else if ((eleccionJugador1 == 1 && eleccionJugador2 == 3) || (eleccionJugador1 == 2 && eleccionJugador2 == 1) || (eleccionJugador1 == 3 && eleccionJugador2 == 2)) {
        return "1";
    }
    else {
        return "2";
    }
}
generarRuta = function (eleccion) {
    if (eleccion == 1) {
        return "./imagenes/piedra.jpeg";
    }
    else if (eleccion == 2) {
        return "./imagenes/papel.jpg";
    }
    else {
        return "./imagenes/tijera.jpeg";
    }
}