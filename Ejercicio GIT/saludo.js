saludar = function(){
    //recuperar el valor de la caja de texto txtNombre
    let nombre = recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarEntero("txtEdad");

    let estatura = recuperarFloat("txtEstatura");

    let mensajeBienvenida = "Bienvenido " +nombre+" "+apellido

    mostrarTexto("lblResultado", mensajeBienvenida)
}
