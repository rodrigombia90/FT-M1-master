'use strict'

const eleventyNavigation = require("@11ty/eleventy-navigation/eleventy-navigation");
const { has } = require("markdown-it/lib/common/utils");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un val or o una función. Si no hubiera resultados, devuelve null.

/*
En este caso la LL tiene solo dos campos, el campo del dato y el campo del proximo elemento, el proximo elemento apunta a un neuvo objeto con dos campos
siempre esos campos son lo "punteros" y se accede por referencia a esa posicion de memoria a y a todos los valores que tiene adentro guardandolos en una variable 
*/

function LinkedList() {
  this.head = null
}

function Node(value){
  this.value=value;
  this.next=null;
}

LinkedList.prototype.add = function (elemento){
  //primero me fijo si es el primero elemento de la lista
  //el primer elemento tiene datos, en esta parte le puedo agregar el elemento que llega por parametro
  if(!this.head){
    var nuevoNodo = new Node(elemento);//aca usa la clase node para agregar elementos. aca se crea el primer nodo y se le pasa la info
    this.head=nuevoNodo;
    return nuevoNodo;//en el caso de que sea el primer nodoe aca tengo que cortar el flujo
  }
  
  //asi se iteran las LL en JS
  var punteroFalso=this.head;
  while(punteroFalso.next){
    punteroFalso=punteroFalso.next; //variable de control, va pasando los punteros para poder ir evaluando hasta que guarda el ultimo elemento en puntero
  }
   var nodo=new Node(elemento); //aca se crean a partir del nodo 2 en adelante
   punteroFalso.next=nodo; //aca le paso el nuevo nodo con el elemento que llega por parametro y el siguiente que es null
   return punteroFalso;//retorno el ultimo elemento de la lista
    
  
}

LinkedList.prototype.remove = function (){
 //retorna null si la lista esta vacia
  if(this.head==null){
  return null //si el primer elemento de la lista no tiene nada, quiere decir que la lista esta vacia, entonces tieneque retornar null
  } 

  if(this.head.next==null){//en este caso lo que hago es eliminar el dato si la lista tiene un solo elemento, osea borro el dato del primer elemento de la lista
    let valorEliminado = this.head.value;
    this.head=null;
    return valorEliminado;
  }

  var punteroFalsoEliminado=this.head;

  while(punteroFalsoEliminado.next.next!==null){ //asi llego al anteultimo nodo 
    punteroFalsoEliminado=punteroFalsoEliminado.next;
  }


  var datoEliminado=punteroFalsoEliminado.next.value;
  punteroFalsoEliminado.next=null;
  return datoEliminado; 
    
}

LinkedList.prototype.search = function (value){
  if(this.head==null) return null;
  var punteroFalso=this.head
  while(punteroFalso !==null){
    var valorDelNodo=punteroFalso.value
    if(typeof value === 'function'){
      var cb =value
      if(cb(valorDelNodo)) return valorDelNodo //si devuelve true, retorna el valor del nodo
    }
    else {
    if(valorDelNodo==value){
      return valorDelNodo
     }
    }
    punteroFalso=punteroFalso.next;
  }
  return null; //devuele null si no encuentra el valor en la lista
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.s
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
 this.numBuckets =35 //el test pide que tenga 35 lugares (buckets)
 this.buckets={}
}

HashTable.prototype.get=function(llave ){//a partir de la llave tengo que obtener el valor
  var hashedString =this.hash(llave);
  var objeto=this.buckets[hashedString]
  return objeto[llave]
}

HashTable.prototype.hash=function(string){
  var acc = 0;

  for(let i=0;i<string.length;i++){
    acc=acc+string.charCodeAt(i);

  } 
  
  return acc % this.numBuckets;
}

HashTable.prototype.set=function(key,value){
  var hashedString= this.hash(key) //con esto se accede a los datos que tiene el objeto 
  if(his.buckets[hashedString]){
    var objeto =this.buckets[hashedString]
    objeto[key]=value;
  }
  else{//a partir de aca se crea un objeto que no existe, y en la linea 134 se le agrega los valores que vienen por parametro
    var objeto={}
    this.buckets[hashedString]=objeto
    objeto[key]=value;
  }
}

HashTable.prototype.haskey=function(){}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
