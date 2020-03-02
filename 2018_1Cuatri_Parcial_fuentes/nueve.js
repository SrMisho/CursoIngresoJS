function mostrar()
{
var marca;
var temperatura;
var peso;
var acumulador = 0;
var productos = 0;
var temppar = 0;
var cerogrados = 0;
var promedio;
var pesoalto;
var marcaalta;
var pesobajo;
var flag1 = 0;
var flag2 = 0;
var seguir;

do {
    marca = prompt("Introduzca la marca del producto.");
    peso = parseInt(prompt("Introduzca el peso del producto entre 1 a 100kg."));
    while (peso < 1 || peso > 100) {
        peso = parseInt(prompt("Peso invalio. Introduzca el peso del producto entre 1 a 100kg."));
    }
    temperatura = parseInt(prompt("Introduzca la temperatura de almacenamiento del producto entre -30C y 30C."));
    while (temperatura < -30 || temperatura > 30) {
        temperatura = parseInt(prompt("Tempertaura invalida. Introduzca la temperatura de almacenamiento del producto entre -30C y 30C."));
    }
    if (temperatura % 2 == 0) {
        temppar +=1;
    }
    if (pesoalto < peso || flag1 == 0) {
        pesoalto = peso;
        marcaalta = marca;
        flag1 =1;
    }
    if (temperatura <= 0) {
        cerogrados +=1;
    }
    if (pesobajo > peso || flag2 ==0) {
        pesobajo = peso;
        flag2 = 1;
    }
    acumulador = acumulador + peso;
    productos +=1;
    seguir = prompt("¿Desea seguir?").toLowerCase();
} while (seguir == 's');
 promedio = acumulador / productos;
 document.write("La cantidad de temperaturas pares es: " + temppar + ".</br>" + 
 "La marca del producto mas pesado es:" + marcaalta + ".</br>" +
 "La cantidad de productos que se conservan a menos de 0 grados es:" + cerogrados + ".</br>" +
 "El promedio del peso es: " + promedio + ".</br>" +
 "El producto mas pesado pesa: " + pesoalto + ".</br>" +
 "El producto mas livano pesa: " + pesobajo + ".");

}
