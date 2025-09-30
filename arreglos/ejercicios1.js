let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

agregarNota = function(nota){
    notas.push(nota);
}

probarAgregar = function(){
    let notaRecuperada;
    notaRecuperada = recuperarFloat("txtNota")
    agregarNota(notaRecuperada);
}


recorrerArreglo = function(){
    let notaR;
    for(let indice = 0;indice<notas.length;indice ++){
        notaR=notas[indice];
        console.log(notaR);
    }
}


calcularPromedio = function(){
    let sumaNotas=0
    let Promedio;
    for(let i=0; i<notas.length;i++){
        sumaNotas=sumaNotas + i
    }
    Promedio = sumaNotas/notas.length
    return Promedio
}

ejecutarPromedio = function(){
    let promedio; 
    promedio = calcularPromedio();

    mostrarTexto("lblResultado", promedio)
}

