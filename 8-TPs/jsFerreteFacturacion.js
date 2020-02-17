/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    total = precio1 + precio2 + precio3;
    alert("Tu total es: " + total);
}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var total;
    var promedio;
    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    total = ptotal = precio1 + precio2 + precio3;
    
    promedio = total / 3;

    alert("El promedio es :" + promedio);

}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var subtotal;
    var total;
    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    subtotal = precio1 + precio2 + precio3;
    total = subtotal + subtotal * 0.21;
    alert("Su total es: " + total);
}