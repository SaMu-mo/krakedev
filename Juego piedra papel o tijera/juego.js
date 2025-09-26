puntosUsuario = 0;
puntosComputadora = 0;
juegoTerminado = false;   

jugar = function(seleccionado){


    let opcion = generarElemento();

    mostrarImagen("imgJugador",     generarRuta(seleccionado));
    mostrarImagen("imgComputadora", generarRuta(opcion));

    let ronda = determinarGanador(seleccionado, opcion);

    if (ronda == "0") {
        mostrarTexto("resultado","Empate");
    } else if (ronda == "1") {
        mostrarTexto("resultado","Ganaste");
        puntosUsuario = puntosUsuario + 1;
        mostrarTextoEnCaja("puntosUsuario", puntosUsuario);
    } else {
        mostrarTexto("resultado","Perdiste");
        puntosComputadora = puntosComputadora + 1;
        mostrarTextoEnCaja("puntosComputadora", puntosComputadora);
    }

    
    if (puntosUsuario === 5) {
        juegoTerminado = true;
        mostrarTexto("resultado", "HAS GANADO EL JUEGO");
        
    } else if (puntosComputadora === 5) {
        juegoTerminado = true;
        mostrarTexto("resultado", "Has perdido");
        // alert("Has perdido"); // opcional
    }
}

limpiar = function(){
    puntosUsuario = 0;
    puntosComputadora = 0;
    juegoTerminado = false;   // <— reset

    mostrarTextoEnCaja("puntosUsuario", "0");
    mostrarTextoEnCaja("puntosComputadora", "0");
    mostrarTexto("resultado", "—");

    mostrarImagen("imgJugador", "");
    mostrarImagen("imgComputadora", "");
}
