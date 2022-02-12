'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] 
  //Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1]
  let i=2;

  while(num!==1){
      if(num%i===0){
        arr.push(i)
        num=num/i
      }
      else{
        i++
      }   
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var tamanio=array.length;
  for(let i=0;i<tamanio;i++){
    for(let j=0;j<(tamanio-i-1);j++){
      if(array[j] > array[j+1]){
         
        // If the condition is true then swap them
        var temp = array[j]
        array[j] = array[j + 1]
        array[j+1] = temp
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
