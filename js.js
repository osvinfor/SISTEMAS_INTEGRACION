﻿function dibujarYCalcularDistancia() {

var x1 = parseInt(document.getElementById("x1").value);
var y1 = parseInt(document.getElementById("y1").value);
var x2 = parseInt(document.getElementById("x2").value);
var y2 = parseInt(document.getElementById("y2").value);

r=x1+x2+y1+y2
document.write("La suma es: "+r);
}

// Función del boton 10 Gema Jácome
//Esta funcion realiza la serie de Fibonacci
function fibonacci(n) {
    var a = 0, b = 1, c;
    var result = [a, b];
    for (var i = 2; i < n; i++) {
        c = a + b;
        result.push(c);
        a = b;
        b = c;
    }
return result;
}
// Función para mostrar los números de la serie en la página web
function mostrarFibonacci() {
    var n = document.getElementById("numero").value;
    var resultado = fibonacci(n);
    //document.getElementById("resultado").innerHTML = resultado.join(", ");
    alert("resultado: "+resultado.join(", "));
}
    