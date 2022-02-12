const suma = require("./suma")

describe('La funcion suma deberia',function (){
    //los describe van a agrupar testing

    it('devolver 4 cuando la llame con 2 y 2',function(){
        expect(true)//el resultado de la funcion
        .toBe(true)//el valor que deberia devolver
    })// los it van a ser de correr un test en particular
})
it('devolver 5 cuando la llame con 3 y 2',function(){
    expect(suma(2,3)).toBe(5)
})
it('devolver false si la llamo con algun tipo que no sea numero', function (){
    expect(suma(2,'hola')).toBe(null)
})
