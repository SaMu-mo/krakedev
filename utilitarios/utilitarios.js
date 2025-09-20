recuperarTexto=function(idComponente){
    let componente;
    let valor
    componente=document.getElementById(idComponente);
    valor = componente.value
    return valor
}
recuperarEntero=function(idComponente){
    let valor;
    let valorEntero;
    valor=recuperarTexto(idComponente);
    valorEntero=parseInt(valor);
    return valorEntero;
}
recuperarFloat=function(idComponente){
    let valor;
    let valorFloat;
    valor=recuperarTexto(idComponente);
    valorFloat=parseFloat(valor);
    return valorFloat;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
mostrarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=imagen;
}

cambiarCajaTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}