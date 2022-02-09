'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

/*
arboles:son estructuras de datos que se usan en todos lados. es una estructura donde tenemos un nodo que tiene varo hijos, pero un nodo siempre tiene un unico padre. 
un nodo puede tener muchos hijos, pero siempre siempre tiene un unico padre. los arboles son un tipo de grafo.
caracteristicas que tienen todos los arboles: 
  un padre, muchos hijos
  diferentes niveles, 0,1,2,3...
  un nodo puede tener hermanos (los que estan en el mismo nivel)
  el ultimo nodo es la hoja, "leaf node"
  un arbol adentro puede tener otro arbol

hay diferentes tipos de arboles, DOM (html), 
arboles binarios, binary search tree: es un tipo de arbol que es particular, todos los valores mas chicos, van a la izquierda y los mas grandes van a la derecha
 
->tienen una gran desventaja, que hay que balancearlo, y esto se hace siempre que se agrega un valor

max heap -> es otro tipo de arbol binario, es una estructura de datos particular que sirve para saber cual es el maximo de una estructura particular

formas de recorrer el arbol en profundidad:
pre order
order
post order
anchura

order:
se hace estas preguntas, y va haciendo recursion, si no encuentra el valor, vuelve a la de arriba 
tengo hijos izquierdo?  
voy hasta obtener el valor
despues me fijo si tiene hijo derecho

post order:
tengo hijo izquierdo?
tengo hijo derecho?
obtengo el valor

pre order:
obtengo el valor
tengo hijo izquierdo?
tengo hijo derecho?

anchura:
va ordenando el primero de cada nivel empezando de ziquierda a derecha
*/

/*
al hacerlo recursivo, se abren contextos de ejecucion, desde el primero al ultimo, entonces el primero empieza y es el ultimo en cerrarse. El ultimo en abrirse es el primero en cerrarse
*/
function BinarySearchTree(value) {
/*
el tree tiene que tener tres propiedades*/
this.value = value; // ID
this.left=null;
this.right=null;
}


 /*
BinarySearchTree.prototype.insert = function(valor){
   /*if(this.value<valor){
    if(this.left){
      this.insert(valor)
    }
  }else{
    this.left = new BinarySearchTree(valor)
  } */
//}


BinarySearchTree.prototype.insert = function(value){
 if(value<this.value){
   if(this.left){
     this.left.insert(value)
   }
   else this.left = new BinarySearchTree(value)
 }
 else if(value>this.value){
   if(this.right){
     this.right.insert(value)
   }
   else this.right =new BinarySearchTree(value)
 }
}
//choreada de nico
BinarySearchTree.prototype.size = function(){
  //Nodo hoja (BST)
  if (!this.left && !this.right) return 1;
  //Nodo con un solo hijo (BST)
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  //Nodo con ambos hijos
  return 1 + this.left.size() + this.right.size();
}

/*ejemplo del stand up
BinarySearchTree.prototype.size = function (){
  // CASO BASE
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();
};
*/


//lo primero es saber si el valor que me llega esta dentro del arbol
//despues pregunto si es menor el valor va a ir al a izquierda, si es mayor va a la derecha

BinarySearchTree.prototype.contains = function(value){ //10
  if(this.value===value) return true;//si el primero es el que me pasan, retorno
  //y sino empiezo a la izquierda
  if(value<this.value){
    if(!this.left){//no va a la izquierda al pedo
      return false;
    }
    else {
      return this.left.contains(value);
    }    
  }
  else{
    if(!this.right){
      return false;
    }
    else {
      return this.right.contains(value);
    }    
  }
}


BinarySearchTree.prototype.depthFirstForEach = function (cb,order){

}

//le paso por parametro uin array. esto se puede hacer con array s y objetos. cuando la llamas por priemra vez
//si lo llamo sin parametro, usa el que le mando, (a=[]), y usa ese, y si le pongo parametro, usa el que le pongo
//al crear un array, creo algo fisico y estatico en memoria, en lugar de algo dinamico y que cambia en los distintos contextos de ejecucion


/*BinarySearchTree.prototype.size = function (a=[]){
  //* si esta linea va aca: pre
  if(this.left) this.left.size(a)
    a.push(this.value) //* si esta linea va aca: en orden
    if(this.rigth) this.rigth.size(a)
    return (a.length)
    //* si esta linea va aca: pos
}*/
//recorre todo el abrol de la parte mas baja de la izquierda y de ahi va a la derecha, y despues empieza a devolver todo


/*
la funcoin cb sirve para pushear los elementos que estan en el test
el array es un aux que usamos para guardar punteros a los objetos con los que vamos a tener que seguir trabajando
lo primero que hace es preguntar si tiene un hijo izquierdo, guarda un puntero en el arr aux, se guarda un punteor a ese hijo izuqierdo
despues pregunta si tiene un hijo derecho
despues llamo a la cb, y ahi le asigno al arr del test
y despues pregunto si el arr tiene valores


*/



BinarySearchTree.prototype.breadthFirstForEach = function(cb,a=[]){
 if(this.left) a.push(this.left)
 if(this.right) a.push(this.right)
 cb(this.value)
 if(a.length){
   var aux=a[0]//aca se crea la variable aux, que tome el puntero que estaba en el primer elemento del array
   //se guarda ese puntero en aux, despues se elimina el valor que guarde en aux y ese valor se lo vuelvo a pasar a la funcion recursivamente desde el primer valor que guarde
   //en la linea 172
   a.shift()
   aux.breadthFirstForEach(cb,a); 
 }
}

/*
BinarySearchTree.prototype.size = function(valor){
  //si tengo hijo izquierdo e hijo derecho
  //return de left.size() + right.size(), si no tengo ninguno de los dos retorno 1

}

BinarySearchTree.protoype.deepFirstForEach = function(cb,order){
  //si tengo hijo izquierdo, llamo a la funcion this.left.deepFirstForEach()
  //cd(this.value)
  //si tengo hijo derecho, this.right.deepFirst.ForEach
}*/

//BinarySearchTree.protoype.breadthFirstForEach = function(cb){
 // tener una estructura de datos alternativa, como un array, guardar los datos en el array para ver cuales son izquierdos y cuales son derechos

//} 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
