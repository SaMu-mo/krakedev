let puntos = 0
let lanzamientos = 5




jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
   
}

modificarPuntos=function(numero){
    puntos=puntos+numero
    mostrarTexto("lblPuntos", puntos)
     if (puntos > 20) {
    mostrarTexto("lblGanador", " GANASTE, felicitaciones!");
  } else {
    // limpia mensaje si aún no gana
    mostrarTexto("lblGanador", "");
    
  }
   

}
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1
    mostrarTexto("lblLanzamientos", lanzamientos)
    if (lanzamientos == 0 && puntos <= 20) {
    mostrarTexto("lblGanador", "GAME OVER");
  }
    if(lanzamientos == 0){
        limpiar();
    }
   
}
limpiar=function(){
    puntos = 0;
  lanzamientos = 5;
}

//funcion mostrar cara, recibe el numero que quiere mostrar y muestra la imagen correspondiente  
mostrarCara=function(numero){
    if(numero==1){
        mostrarImagen("imagenDados", "dados1.png")
    }else if(numero==2){
        mostrarImagen("imagenDados", "dados2.png")
    }else if(numero==3){
        mostrarImagen("imagenDados", "dados3.png")
    }else if(numero==4){
        mostrarImagen("imagenDados", "dados4.png")
    }else if(numero==5){
        mostrarImagen("imagenDados", "dados5.png")
    }else if(numero==6){
        mostrarImagen("imagenDados", "dados6.png")
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}