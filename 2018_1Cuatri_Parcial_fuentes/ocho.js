function mostrar()
{
var numero;
var letra;
var contpositivos = 0;
var contpares = 0;
var contceros = 0;
var contimpares = 0;
var promedio;
var negativos = 0;
var acumupositivos = 0;
var numerobajo;
var letrabaja;
var numeroalto;
var letraalta;
var flag1 = 0;
var flag2 = 0;
var seguir;

do {
    numero = parseInt(prompt("Introduzca un numero del -100 al 100."));
    while (numero > 100 || numero < -100 || isNaN(numero)) {
        numero = parseInt(prompt("Ese no es un numero valido. Introduzca un numero del -100 al 100."));
    }

    letra = prompt("Introduzca una letra.").toLowerCase();
    while (!(isNaN(letra))) {
        letra = prompt("Eso no es una letra. Introduzca una letra.").toLowerCase();
    }
    if (numero % 2 == 0) {
        contpares+=1;
    } else {
        contimpares+=1;
    }
    if (numerobajo > numero || flag1 == 0) {
        numerobajo = numero;
        letrabaja = letra;
        flag1 = 1;
    }
    if (numeroalto < numero || flag2 == 0 ) {
        numeroalto = numero;
        letraalta = letra;
        flag2 = 1;
    }
    if (numero > 0) {
        acumupositivos = acumupositivos + numero;
        contpositivos+=1;
    } else if (numero < 0) {
        negativos = negativos + numero;
    } else {
        contceros +=1;
    }

    seguir = prompt("¿Desea seguir?");
} while (seguir == 's');
promedio = acumupositivos / contpositivos;
if (contpositivos == 0) {
    promedio = 0;
}

document.write("La cantidad de numeros pares es: " + contpares + ".</br>" +
"La cantidad de numeros impares es: " + contimpares + ".</br>" +
"La cantidad de ceros es: " + contceros + ".</br>" +
"El promedio de todos los numeros ingresados es: " + promedio + ".</br>" +
"La suma de todos los numeros ingresados negativos es: " + negativos + ".</br>" +
"El numero y letra mas baja fue: " + numerobajo + " , " + letrabaja + ".</br>" +
"El numero y letra mas alta fue: " + numeroalto+ " , " + letraalta + ".");
}
