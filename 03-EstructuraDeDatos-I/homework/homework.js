'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

/*
una funcion recursiva es una funcion que se llama a si misma. Hay un return de una funcion que se llama a si misma

function factorial(numero){
    if(numero === 1) return 1
    if(numero === 0 )return 1
  return factorial numero * factorial(numero -1) -> cada vez que llega a este return se genera un neuvo contexto de ejecucion
  
  al usar esta forma se va usando memoria en la pila con los return y se va generando un nuevo contexto de ejecucion y se guarda el valor, hasta que deja de llamar a factorial en el ultimo return, entonces ahi empieza a hacer todos los calculos pero 
  de forma inversa, desde el 1 hasta el numero que le hayamos pasado. En este caso se van acumulando los valores de los returns en los returns

  utilidad de recursion -> cuando tenemos una tarea que se puede resolver haciendo lo mismo una y otra vez, haciendolo ocn recursion es mas sensillo

  partes de recursion:
  caso base 
  logica
  return de la funcion

  si paso arrays u objetos a funcoines por valor, los muta. si los pasamos por referencia no se mutan, pero al acceder a la posicion de memoria se pueden modificar
}
*/

/*
estructura de datos: 
desventaja de arrays, si o si se necesita el espacio para todos los elementos juntos

set de data: son muy parecidos a los arrys, la unica diferencia es que los sets no pueden tener valores repetidos. Se pueden generar los sets a partir de un array y a partir de un iterable
los sets se usan principalmente para saber si hay o no hay un dato.

estructuras de datos que no estan en JS. pilas de elementos LIFO, ultimo en entrar, primero en salir
queue: una fila -> el ultimo en entrar, va a ser el ultimo en salir

*/

var array = [2,[3,3],2];
function sumarTodosLosElementos (array){
  var acc=0;
  for(var i=0;i<array.length;i++){
    if(Array.isArray.bind(array[i])){
      acc=acc+sumarTodosLosElementos(arra[i]);
    }else{
      acc=acc+array[i];
    }
  }
  return acc;
}



function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n===0 || n===1) return 1;
  return n*nFactorial(n-1)//en esta parte hace el numero que recibe menos 1, pero al invocar la funcion vuelve a evaluar el if de la linea 59, y asi con los que quedan hasta que sea 1 o 0
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  //el numero que viene por parametro es una posicion, no un numero, entonces lo que tenemos que encontrar es la posicion
  if(n=== 0) return 0;
  if(n=== 1) return 1;

  return nFibonacci(n-1) + nFibonacci(n-2)
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow
// (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

//prototype = clase
//el metodo se enlaza colocando el metodo de donde lo vamos a enlazas Queue.prototype.enqueue = function(){ 'aca va el codigo de la funcion}

/*
la pila del stak es LIFO

*/

function Queue() { //first in - first out queue. push queue. shift

  this.array=[]

}

  Queue.prototype.enqueue = function(a){
    this.array.push(a)//aca hay que pasarle algo para que 
  }

  Queue.prototype.dequeue = function(){
    return this.array.shift()
    
  }

  Queue.prototype.size = function(){
    this.array.length
    return this.array.length;
  }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
