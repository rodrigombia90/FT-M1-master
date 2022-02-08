'use strict'
/*
para usar un closure necesitamos una funcion anidada, una variable que se encuentre en el scope de la funcion padre, y que se use en la funcion hija y despues invocar a la funcion
a la funcion mas grande y esta nos va a devolver la funcion mas pequeña

closure: es una funcion que recuerda las referencias de la variable declarada en su funcion padre -> explicacion de mati
>siempre es una funcion que retorna una funcion
utilidades del closure -> para poder tener funciones que recuerden variales que esten guardadas en otro contexto de ejecucion
                        -> tambien se usan para generar modulos
 */
function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
 
    // var contador = 0;
    //return function (){
   //   return contador=contador+1;
   // }  

   //no funciona con return contador ++ porque primero retorna y despues suma

   //resolucion en el egg
   let contador=0;
   return () =>contador+=1


}

counter();

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y 
  //el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se 
  //había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  var cache={};
  return function cacheNuevo(caca){
    //pregunta si existe caca en cache, si existe, no calcula y devuelve lo que tiene (linea 51)
    //si no existe, entra al if y le asigna ese valor de caca a cache, y despues lo retorna
    if(!cache.hasOwnProperty(caca)){
      cache[caca]=cb(caca);
    }
    //paraa acceder a la info de los objetos con [] esto permite acceder usando variable
    // el NEW (constructor) retorna implicitamente el THIS
    
    return cache[caca];
  } 


} 

// Bind

/*
son metodos de funciones que nos van a permitir cambiar el div de una funcion
metodo .bind -> copia el this de un objeto y se lo pasa a una funcion. Fija el this del objeto
*/

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y
 // luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor);//esto seria lo mismo que escribir this.nombre, pero al estar en otro scope se  hace imposible
let getNombreAlumno = getNombre.bind(alumno);


/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this.textoAsteriscos,'*','*');

let textoGuiones = crearCadena.bind(this.textoAsteriscos,'-','-');

let textoUnderscore = crearCadena.bind(this.textoAsteriscos,'_','_');

/* 
lo que sucede es que tomo la palabra que viene por parametro en texto asteriscos y le digo que tiene que agregarle a crearCadena
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
