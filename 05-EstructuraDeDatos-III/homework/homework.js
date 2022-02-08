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


function BinarySearchTree(valor) {

  this.left=null;
  this.right=null;
  this.value=valor;
}

BinarySearchTree.prototype.size = function(valor){
  //tengo dos hijos
  if(this.left && this.right) return this.left.size() + this.right.size()
  //tengo hijo izquierdo
  if(this.left) return this.left.size()+1
  //tengo hijo derecho
  if(this.right) return this.right.size()+1
  return 1
}

BinarySearchTree.prototype.insert = function(valor){
  if(this.value > valor){
    //izquierda
    //si tengo un hijo izquierdo
    if(this.left){
      return this.left.insert(valor)
    }
    else{
      //si no lo tengo voy a hacer otro arbol
      this.left=new BinarySearchTree(valor)
    }
  }
  else{
    //derecha
    if(this.right){
      this.right.insert(valor)
    }
    else{
      this.right = new BinarySearchTree(valor)
    }
  }
}

//la linea 72 setea por defecto la forma in-order por si no viene por parametro en la variable order
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  order = order || 'in-order'//
  if(order=== 'pre-order'){
    //valor, hijo izquierdo, derecho
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb,order)
    if(this.right) this.right.depthFirstForEach(cb,order)
  }
  if(order=== 'post-order'){
    //hijo izquierdo, derecho, valor
   if(this.left) this.left.depthFirstForEach(cb,order)
  
  if(this.right) this.right.depthFirstForEach(cb,order)
  cb(this.value)
  }
  if(order === 'in-order'){
  if(this.left) this.left.depthFirstForEach(cb,order)
  cb(this.value)
  if(this.right) this.right.depthFirstForEach(cb,order)
  }

}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,elementsToExecute){
  var elementsToExecute = elementsToExecute || []
  cb(this.value)
    if(this.left) elementsToExecute.push(this.left)
    if(this.right) elementsToExecute.push(this.right)
  
  //aca en esta linea llamamos a la funcion, pero vamos pusheadno los nodos en orden de jerarquita, se van guardando en elementsToExecute)
  let siguienteNodo = elementsToExecute.shift()
  if(siguienteNodo){
  siguienteNodo.breadthFirstForEach(cb,elementsToExecute)
  }
}


BinarySearchTree.prototype.contains = function(valor){
if(this.value  === valor) return true
//si llego hasta aca el valor no es igual, y hay que empezar a buscar
  if(valor < this.value){
    if(this.left){
      return this.left.contains(valor)    
  }
  else{
    if(this.right){
      return this.right.contains(valor)
    }
  }
  return false
}
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
