recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
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
cambiarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=imagen;
}