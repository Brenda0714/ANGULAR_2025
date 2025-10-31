/*
? DECORADORES (una simple funcion)
*Son funciones que pueden modificar el comportamiento
*de clases, propiedades y metodos
*/

function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor: T

){
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }

    
}



@classDecorator
export class SuperClass{
    public myProperty: string = 'ABC123'

    print(){
        console.log('hola mundo')
    }
}


console.log(SuperClass)

const myClass = new SuperClass();
console.log(myClass);