esMayuscula = function (caracter) {
    let letra
    letra = caracter.charCodeAt(0);
    if (letra >= 65 && letra <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let palabra;

    let PalabraSecreta;
    palabra = recuperarTexto("txtSecreta")

    if (palabra.length == 5) {
        if (esMayuscula(palabra.charAt(0)) && esMayuscula(palabra.charAt(1)) && esMayuscula(palabra.charAt(2)) && esMayuscula(palabra.charAt(3)) && esMayuscula(palabra.charAt(4))) {
            PalabraSecreta = palabra

        } else {
            alert("RECUERDA TODAS DEBEN SER MAYUSCULAS")
        }
    } else {
        alert("Debe ser una palabra de 5 letras todas mayusculas")
    }
    return PalabraSecreta
}

mostrarLetra = function (letra, posicion) {
    let letraMostrada = "div" + posicion;
    mostrarTexto(letraMostrada, letra);
}

validar = function (letra) {
    PalabraSecreta = guardarPalabra();
    let letrasEncontradas = 0;
    for (let i = 0; i < PalabraSecreta.length; i++) {
        if (PalabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++; 
        }
    }

    if (letrasEncontradas == 0) {
        errores++;
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado();
    } else {
        if (coincidencias == 1 || coincidencias == 2 || coincidencias == 3 || coincidencias == 4 || coincidencias == 5) {
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }
    }
}
errores = 0
intentos = 0
coincidencias = 0



ingresarLetra = function () {
    let letraIngresada
    letraIngresada = recuperarTexto("txtLetra")
    if (esMayuscula(letraIngresada)) {
        validar(letraIngresada)
        coincidencias = coincidencias + 1

    } else {
        alert("SOLO SE ACEPTAN LETRAS MAYUSCULAS")
    }
    intentos = intentos + 1
    if (intentos == 10) {
        mostrarImagen("ahorcadoImagen","gameOver.gif")
    }
}

mostrarAhorcado = function () {

    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png")
    } else if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png")
    } else if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png")
    } else if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png")
    } else if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png")
    } else if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png")
    } else if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png")
    } else if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png")
    } else if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png")
    }
}



