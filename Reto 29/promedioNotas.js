calcularPromedioNotas=function() {
  let n1 = parseFloat(recuperarTexto("nota1"));
  let n2 = parseFloat(recuperarTexto("nota2"));
  let n3 = parseFloat(recuperarTexto("nota3"));


  let promedio = calcularPromedio(n1, n2, n3);

  mostrarTexto("lblPromedio", promedio.toFixed(2));
  if (promedio >= 0 && promedio < 5) {
    mostrarTexto("lblMensaje", "REPROBADO");
    mostrarImagen("imgResultado", "./imagenes/reprobado.jpeg");
  } else if (promedio >= 5 && promedio <= 8) {
    mostrarTexto("lblMensaje", "BUEN TRABAJO");
    mostrarImagen("imgResultado", "./imagenes/buenTrabajo.jpeg");
  } else if (promedio > 8 && promedio <= 10) {
    mostrarTexto("lblMensaje", "EXCELENTE");
    mostrarImagen("imgResultado", "./imagenes/excelente.jpeg");
  } else {
    mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
    mostrarImagen("imgResultado", "./imagenes/datosIncorrectos.jpeg");
  }
}

calcularPromedio=function(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    let promedio = suma / 3;
    return promedio;
}




