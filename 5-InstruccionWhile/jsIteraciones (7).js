function mostrar()
{

	var contador=0;
	var acumulador=0;
	var seguir;
	var numero;
	var promedio;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		contador = contador + 1;
		acumulador = acumulador + numero;
		seguir = prompt("¿Quiere seguir sumando?").toLowerCase();
	} while (seguir == 's');
promedio = acumulador / contador;
document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN