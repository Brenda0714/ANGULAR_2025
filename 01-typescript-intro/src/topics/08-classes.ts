/*
? CLASES
*/

export class Person {
    // public firstname?: string | undefined;
    // public lastname?: string | undefined;
    // private address?: string | undefined;

    constructor( 
        public firstname: string,
        public lastname: string,
        public address: string = 'no address',

    ) {}

}

const ironman = new Person('Loki','Asgard');

console.log(ironman);


/*
? CONSTRUCTOR DE UNA CLASE
*/
/* 
* * El constructor de una clase
* * Es un metodo especial en nuestras clases
* * Es el primer metodo o funcion
*/

export class Person2 {

    constructor( 
        public name?: string | undefined,
        private address?: string | 'undefined'
        
    ) {}

}


const ironman2 = new Person('Iron Man','New York');

console.log(ironman2);
//console.log(address);


/*
? EXTENDER UNA CLASE HERENCIA
*/

export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'Forest');
    }
}

const ironman3 = new Hero('Witch',45,'Wanda');

console.log(ironman3);


/*
? PRIORIZAR COMPOSICION SOBRE HERENCIA
*/

export class Hero2 {

    //public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
       //this.person = new Person(realName);
    }
}

const personR = new Person('Wanda','Vision','New York')
const ironman4 = new Hero2('Witch',45,'Wanda',personR);

console.log(ironman4);
console.log(personR);