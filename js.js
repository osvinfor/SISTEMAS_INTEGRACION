function dibujarYCalcularDistancia() {

var x1 = parseInt(document.getElementById("x1").value);
var y1 = parseInt(document.getElementById("y1").value);
var x2 = parseInt(document.getElementById("x2").value);
var y2 = parseInt(document.getElementById("y2").value);

r=x1+x2+y1+y2
alert("La suma es: "+ r);
}

function calcularLogaritmo() {
    var x = document.getElementById("numero").value;
    var logaritmo = Math.log(x);
    //document.getElementById("resultado").innerHTML = "El logaritmo de " + x + " es " + logaritmo;
    alert("El logaritmo de "+ x +" es: "+ logaritmo);
}

function calcularResiduo() {
    var dividendo = parseInt(document.getElementById("dividendo").value);
    var divisor = parseInt(document.getElementById("divisor").value);
    var residuo = dividendo % divisor;
    alert("El residuo de la división es: " + residuo);
}

function multiplicacion() {

    var x1 = parseInt(document.getElementById("x1").value);
    var y1 = parseInt(document.getElementById("y1").value);
    var x2 = parseInt(document.getElementById("x2").value);
    var y2 = parseInt(document.getElementById("y2").value);
    
    r=x1*x2*y1*y2
    alert("La multiplicacion es: "+ r);
    }
    function sumar(){
        var num1 = parseInt(document.getElementById('a').value);
        var num2 = parseInt(document.getElementById('b').value);
        var suma = num1 + num2;
        alert('la suma es: '+suma);
    }