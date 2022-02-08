
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


```javascript
/* 
cuando no se escribe var, el hoisting no toma esa variable. si no se usa el use strict, el programa anda, pero la variable no tiene valor
el hoisting toma las palabras reservadas var, let, const y function.
si se quiere usar antes y no se declarar, tira ref error, si se usa antes de declarar tira undefined

//(hoisting) definicion de variables
runtime 
cuando se le pasa una variable a una funcion, el hoisting crea un nuevo espacio en memoria para esas variables 


*/

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { //8-9-10
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a; //aca cambia de valor b
    console.log(b); // 8
    b = c; //10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10); // x=10 / a=8 // entra a f -> b=8 sale de f / b->9
console.log(b);
console.log(x); // 1 < - > undefined
```

```javascript
/* 
las function expressions solo se pueden usar despues de definirlas, y las functions definitions se pueden usar cuando quiera
*/
console.log(bar); // la reconoce porque esta declarada mas abajo, pero al estar declarada despes de ser usada, el hoisting le asigna undefined
console.log(baz); // en este caso, la variable no existe, porque no esta declarada con VAR, entonces es una variable no definida <NO EXISTE>
foo();
function foo() { console.log('Hola!'); } //imprime 'hola' -> porque la funcion se levanta completa en el hoisting. la variable, la toma sin //valor, pero la funcion la levanta completa
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";//si en esta linea asignamos con let, el valor de instructor, solo queda en el scope del if
                              //-> let tiene un alcance local, o dentro del mismo bloque de codigo que fue declarada
                              //-> var  es global, tiene alcance dentro de toda la biblioteca o todo todo
                              //-> const no cambia de valor y tambien tiene alcance dentro de todo el bloque
}
console.log(instructor);//aca como siempre va a entrar al if, se pisa el valor de la primer variable, entonces instructor toma el valor de "Franco"
```



```javascript
/*
si se quiere crear un contexto de ejecucion con variables que se usan una sola vez, se usa la inmediate invoque function expression. Linea 79.
para que no se nos pise las variables se usa la IIFE para crear contextos de eejecucion y que no se pisen los nombres de las variables

var algo ='rodri';

(function prueba(){
   var algo='rodri';
   console.log('rodri')
})();

*/

var instructor = "Tony";
console.log(instructor); //printea tony
(function() { //funcion anonima
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // este se printea segundo -> franco
   }
})(); // como este es otro contexto de ejecucion, la informacion que sucede aqui adentro queda aqui adentro
console.log(instructor); //este se printea ultimo -> tony
```

```javascript
var instructor = "Tony";
let pm = "Franco"; // let -> blocked scope (funciona dentro de bloques de codigo, NO es global)
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // printea the flash
    console.log(pm); // printea reverse flash
}
console.log(instructor); //printea the flash
console.log(pm); // printea franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //printea 2 porque parsea el dato automaticamente/ 
"2" * "3" //idem arriba printea 6
4 + 5 + "px" // 9 concatenado px / numero mas string = string
"$" + 4 + 5 // $ concatenado 45. como el primero es string,asume que todo lo que sigue es string
"4" - 2 //  2//NaN
"4px" - 5 // NaN
7 / 0 // lo resuelve y da infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 toma primero el de la derecha, es el ultimo porque tiene que comprobar necesariamente los dos
2 && 5 // 5
5 || 0 // toma el 5, porque toma cualquier valor distinto de 0
0 || 5 // idem arriba
7 || 3 // 7 toma el valor de la izquierda
3 || 7 // 3 idem arriba
// || toma siempre lo que es distinto de 0 y si los dos son distintos de 0, toma el valor de la izquierda
[3]+[3]-[10] // con los primeros dos, asume que son string, los concatena. Despues con la resta, asume que son numeros, y los resta -> 23
3>2>1 //false// es asi porque evalua por separado, primero 3 es mayor a dos, entonces da true. pero true no es mayor a 1, entonces el resultaado final es FALSE
//3>2 true
//true>1 false
[] == ![] // syntax error depende del motor. Preguntar en el code review
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); //retorna 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        
        return snack;
    }
    //console.log(snack)//retorna undefined, porque solo puede mostrar valores dentro de la funcion
    return snack;
    
}
console.log(snack)
getFood(true);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // aca llama a getFullName -> deberia retornar Aurelio De Rosa

var test = obj.prop.getFullname; // Luis -> error // Esther y Kevin -> undefined // Rodrigo -> printea aurelio de rosa // Miguel -> guarda la funcion getFullName

console.log(test()); // -> JS completa el vacio de info con "juan perez" pero en realidad esta mal y deberia quedar undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //printea 1 primero
   setTimeout(function() { console.log(2); }, 1000); //printea 2 en el momento en quede vacia la pila y despues del que tiene menos tiempo
   setTimeout(function() { console.log(3); }, 0); //una vez que queda vacia la pila, ejecuta este porque tiene menos tiempo de espera
   console.log(4); // este es el segundo que se printea porque va a esperara  que se vacie la pila 
}

printing();


```
