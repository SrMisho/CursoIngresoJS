/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var cantidad;
var total;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
cantidad = (largo + ancho) * 2;
total = cantidad * 3;
alert("La cantidad necesaria para el terreno es: " + total + " metros de alambre.");
}
function Circulo () 
{
    var radio;
    var diametro;
    var circuferencia;
    var total;
    
    radio = parseInt(document.getElementById("Radio").value);
    diametro = radio * 2;
    circuferencia = diametro * 3.14;
    total = circuferencia * 3;

    alert("La cantidad necesaria para el terreno es: " + total + " metros de alambre.");

}
function Materiales () 
{
    var largo;
    var ancho;
    var superficie;
    var cal;
    var cemento;
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    superficie = largo * ancho;
    cal = superficie * 3;
    cemento = superficie * 2;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal.")


}