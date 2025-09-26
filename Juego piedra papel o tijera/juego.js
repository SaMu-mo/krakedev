puntosUsuario = 0;
puntosComputadora = 0;


jugar = function(seleccionado){
    let opcion = generarElemento();

mostrarImagen("imgJugador", generarRuta(seleccionado));
mostrarImagen("imgComputadora", generarRuta(opcion));

let ronda = determinarGanador(seleccionado, opcion);

if(ronda=="0"){
    mostrarTexto("resultado","Empate");
    
}
else if(ronda =="1"){
    mostrarTexto("resultado","Ganaste");
    puntosUsuario = puntosUsuario + 1;
    mostrarTextoEnCaja("puntosUsuario",puntosUsuario);
}
else{
    mostrarTexto("resultado","Perdiste");
    puntosComputadora = puntosComputadora + 1;
    mostrarTextoEnCaja("puntosComputadora",puntosComputadora);
}
}