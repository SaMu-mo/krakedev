jugar=function(){
    let aleatorio=lanzarDado();
    mostrarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
       mostrarTexto("resultado","GANASTE")
    }else{
        mostrarTexto("resultado","PERDISTE")
    }

}
//Crear una funcion llamada lanzarDado 
//No recibe parametro 
//Retorna un numero aleatorio entre 1 y el 6 
lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio * 6
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero + 1 
   // console.log(numeroMultiplicado)
   // console.log("------"+numeroEntero)
    //console.log(valorDado)
    return valorDado;
}