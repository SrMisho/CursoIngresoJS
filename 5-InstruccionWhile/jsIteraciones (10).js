function mostrar()
{

//cantidad = poner un contador
var numero;
var acunegativos = 0;
var acupositivos = 0;
var contpositivos = 0;
var contnegativos = 0;
var contceros = 0;
var contpares = 0;
var promediopositivos;
var promedionegativos;
var diferencia;
var seguir;


/*
do {
    numero = parseInt(prompt("Introduzca su numero."));
   while (isNaN(numero)) {
       numero = parseInt(prompt("Eso no es un numero, introduzca un numero."));
   }
if (numero % 2 == 0) {
    contpares +=1;
}
if (numero > 0) {
    acupositivos = acupositivos + numero;
    contadordepositivos +=1;
} else if (numero == 0) {
    contceros +=1;
} else {r acunegativos r acunegativos + numero;
    contnegativos +=1;
}
 seguir = prompt("¿Quiere seguir introduciendo numeros?");
} while (seguir == 's');

promedionegativos r acunegativos / contnegativos;
promediopositivos = acupositivos / contpositivos;
diferencia = contpositivos - contnegativos;

document.write("La cantidad de positivos es: " + contpositivos + ".</br>" + "pan con queso");



}//FIN DE LA FUNCIÓN */

do {
    numero = parseInt(prompt("Ingrese un numero."));
    while ( isNaN(numero)) {
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero."));
    }
    if (numero % 2 == 0) {
        contpares +=1;
    }
    if (numero > 0) {
        acupositivos = acupositivos + numero;
        contpositivos +=1;
    } else if (numero < 0) {
        acunegativos = acunegativos + numero;
        contnegativos +=1;
    } else {
        contceros +=1;
    }
    seguir = prompt("¿Quiere ingresar otro numero?").toLowerCase();
} while (seguir == 's');

promedionegativos = acunegativos / contnegativos;
promediopositivos = acupositivos / contpositivos;
diferencia = contpositivos - contnegativos;

document.write("La suma de los positivos es: " + acupositivos + ".</br>" +
"La suma de los negativos es: " + acunegativos + ".</br>" +
"La cantidad de positivos es: " + contpositivos + ".</br>" +
"La cantidad de negativos es: " + contnegativos + ".</br>" +
"La cantidad de ceros es: " + contceros + ".</br>" +
"La cantidad de numeros pares es: " + contpares + ".</br>" +
"El promedio de positivos es: " + promediopositivos + ".</br>" +
"El promedio de negativos es: " + promedionegativos + ".</br>" +
"La diferencia entre positivos y negativos es: " + diferencia + "."
);

}