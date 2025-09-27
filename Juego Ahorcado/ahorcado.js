esMayuscula = function (caracter) {
    let letra
    letra = caracter.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function (){
    let palabra; 
    
    let PalabraSecreta;
    palabra = recuperarTexto("txtSecreta")

    if(palabra.length == 5){
        if(esMayuscula(palabra.charAt(0)) && esMayuscula(palabra.charAt(1)) && esMayuscula(palabra.charAt(2)) && esMayuscula(palabra.charAt(3)) && esMayuscula(palabra.charAt(4))){
            PalabraSecreta = palabra
            
        } else {
            alert("RECUERDA TODAS DEBEN SER MAYUSCULAS")
        }
    } else { 
        alert("Debe ser una palabra de 5 letras todas mayusculas")
    } 
    return PalabraSecreta
}