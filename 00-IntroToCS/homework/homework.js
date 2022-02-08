'use strict'

function BinarioADecimal(num) {
  let cantidadDeDigitos=num.length;
  let retorno=0;
  let posicion=0;
  let base=0;

  for(let i=0;i<cantidadDeDigitos;i++){
      posicion=cantidadDeDigitos - 1-i;
      base=2**i;
      retorno+=num[posicion]*base;
  }
  
  return retorno;
}
/* 
var base = 2
var acumulador = 0
var posicion= 0
for(let i = num.length -1 ; i>=0;i--){
  var valor = num[i]
  acumulador = acumulador + math.pow(base,posicion) * valor
  posicion=posicion +1
}
return acumulador

num = num.spli('').reverse().join('') <- aca se da vuelta el string 
var acumulador =0
for (let i=0;i<num.length;i++){
  acumulador=acumulador + 2 **i*num[i]
}
*/




function DecimalABinario(num) {
  var listabinario = [];    
  while (num != 0) {  

      listabinario.push(num%2);  
      num = parseInt(num / 2);
  }

  listabinario=listabinario.reverse().join('');
   return listabinario;

}

/*  
para ejecutar dentro de la terminal > node 'nombre de archivo

var acc =''
while(num>0){
  var resto=num%2
  num=(num-resto)/2
  acc=resto+acc -> esto sucede porque estamos trabajando con strings en vez de numeros
}
return acc
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}