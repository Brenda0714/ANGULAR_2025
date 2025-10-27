const skills: string[] = ['Bash','Counter','Healing'];
//  Las variables constantes son mas ligeras que las variables let porque no tienen metodo de asignacion

//Brackets Alt + 91

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown: string | undefined;
}

//INTERFACE :  forma de definir la estructura de un objeto.
//Sirve para describir cómo debe verse un objeto: qué propiedades tiene, qué tipo de datos espera y, opcionalmente, qué métodos puede tener.


const Sakura : Character = {
    name: 'Sakura',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}

Sakura.hometown = 'Tomoeda';

console.table(Sakura);


export {};