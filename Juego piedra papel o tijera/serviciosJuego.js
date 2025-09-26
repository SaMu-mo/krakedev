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
    if (eleccionJugador1 === eleccionJugador2) return "0";
    let ganadorJugador1 = (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") || (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") || (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel");
    if (ganadorJugador1) {
        return 1;
    } else {
        return 2;
    }
}


generarRuta = function (nombre) {
    return "./Imagenes/" + nombre + ".jpeg";
}