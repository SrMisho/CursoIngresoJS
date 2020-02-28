function mostrar()
{
var conpares = 0;
var repeticiones = parseInt(prompt("Ingrese su numero: "));
for (var numero = 1; numero <= repeticiones; numero++) {
   if ( numero % 2 == 0){
       console.log(numero);
conpares+=1;
   }
}
console.log("Pares encontrados: " + conpares);

}//FIN DE LA FUNCIÓN