function dibujarYCalcularDistancia() {

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
function raizcua(){
    var num1 = parseInt(document.getElementById('a').value);
    var raizc = (num1**0.5);
    alert('la raiz de ' +num1+ ' es: '+raizc);
} 

//Funcion Andrea
function operacion16()
{
    document.getElementById("res").innerHTML = boton16();
}
function boton16()
{
    //Esta es una operacion

    a=27
    r=a**(0.3333333333333333)
    alert ("la raiz cubica de " +a+ " es: " + r)
}

function operacion15()
{
    document.getElementById("res").innerHTML = "La raiz es: " + boton15();
}
function boton15()
{
    //Esta es una operacion
    a=49
    b=7
    r=a%b
    alert ("Hola, el residuo de la division es: " + r)
}