/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numerouno;
var numerodos;
var resultado;

numerouno = parseInt(document.getElementById("numeroUno").value);
numerodos = parseInt(document.getElementById("numeroDos").value);
resultado = (numerouno + numerodos);
alert ("La suma es: " + resultado);

}

