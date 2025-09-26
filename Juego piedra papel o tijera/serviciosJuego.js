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
determinarGanador = function (e1, e2) {
    if (e1 === e2) return "0";
    let ganaJ1 = (e1 === "piedra" && e2 === "tijera") || (e1 === "papel" && e2 === "piedra") || (e1 === "tijera" && e2 === "papel");
    if (ganaJ1) {
        return "1";
    } else {
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