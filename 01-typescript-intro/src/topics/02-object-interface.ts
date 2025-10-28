/* 
? OBJETOS ARREGLOS E INTERFACES
*/
/*
! Brackets Alt + 91  []
*/
/*
* Las variables constantes son mas ligeras que las variables let porque no tienen metodo de asignacion.
*/
/*
* INTERFACE :  forma de definir la estructura de un objeto. 
* Sirve para describir cómo debe verse un objeto: qué propiedades tiene, qué tipo de datos espera y, opcionalmente, qué métodos puede tener.
*/


/* 
TODO: ARREGLO
*/
const skills: string[] = ['Bash','Counter','Healing'];

skills;
/* 
TODO: INTERFAZ
*/
interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown: string | undefined;
}

/* 
TODO: OBJETO
*/
const Sakura : Character = {
    name: 'Sakura',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}

Sakura.hometown = 'Tomoeda';

console.table(Sakura);


export {};