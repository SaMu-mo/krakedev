mostrarNumeros = function(){
    console.log("antes del for");
    for (let i=0; i<4; i++){
        console.log(i);
    }
    console.log("después del for");
}

mostrarNumeros2 = function(){
    console.log("antes del for");
    for(let indice=0; indice<=5; indice++){
        console.log(indice);
    }


    console.log("después del for");
}

mostrarPares = function(){
    console.log("antes del for");
    for(let x=2; x<=10; x=x+2){
        console.log(x);
    } 
    console.log("después del for");
}

mostrarInverso = function(){
    console.log("antes del for");
    for(let i=10; i>=0; i--){
        console.log(i);
    }
    console.log("después del for");
}

hackearNasaPelis = function(){
    for(let porcentaje=0; porcentaje<=100; porcentaje=porcentaje+10){
        console.log("Hackeando Nasa " + porcentaje + "%");  
    }
    console.log("Nasa ah sido Hackeada");
    }

mostrarImpares = function(){
    console.log("antes del for");
    for(let i=1; i<=10; i=i+2){
        console.log(i);
    }
    console.log("después del for");
}