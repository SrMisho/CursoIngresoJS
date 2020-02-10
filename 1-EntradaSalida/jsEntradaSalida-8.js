/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numerodividendo;
    var numerodivisor;
    var resto;

    numerodividendo = parseInt(document.getElementById("numeroDividendo").value);
    numerodivisor = parseInt(document.getElementById("numeroDivisor").value);
    resto = (numerodividendo % numerodivisor);
    alert (resto);
}
