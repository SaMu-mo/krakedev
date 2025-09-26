puntosUsuario = 0;
puntosComputadora = 0;
juegoTerminado = false;   // <— nuevo

jugar = function(seleccionado){
    if (juegoTerminado) { return; }   // <— evita seguir jugando si ya terminó

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

    // --- FIN DE JUEGO A 5 ---
    if (puntosUsuario === 5) {
        juegoTerminado = true;
        mostrarTexto("resultado", "🎉 ¡Felicidades, GANADOR!");
        // alert("¡Felicidades, GANADOR!"); // opcional
    } else if (puntosComputadora === 5) {
        juegoTerminado = true;
        mostrarTexto("resultado", "😞 Has perdido");
        // alert("Has perdido"); // opcional
    }
};

limpiar = function(){
    puntosUsuario = 0;
    puntosComputadora = 0;
    juegoTerminado = false;   // <— reset

    mostrarTextoEnCaja("puntosUsuario", "0");
    mostrarTextoEnCaja("puntosComputadora", "0");
    mostrarTexto("resultado", "—");

    mostrarImagen("imgJugador", "");
    mostrarImagen("imgComputadora", "");
};
