/* 
? FUNCIONES BASICAS
*/
/*
! Backticks Alt + 96 ``
*/
/* 
* * return undefined esta regresando nada
* * return void explicitamente no hay un return en la funcion
*/



/* 
TODO: Funcion basica
*/
function addNumbers(a: number, b: number){
return a + b;
}

/* 
TODO: Funcion de flecha
*/
const addNumbersArrow = (a: number, b:number) :string => {
    return `${a + b}`;
    
}

/* 
TODO: Funcion multiply 
*/
function multiply(fistNumber: number, _secondNumber?: number, base: number = 2){
    return fistNumber * base;

}

addNumbers(1,2);

addNumbersArrow(1,2);

multiply(5);

// const result: number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });
// console.log( result, result2, multiplyResult );


/* 
? FUNCIONES CON OBJETOS COMO ARGUMENTOS
*/
interface Character{
    name: string;
    hp: number;
    showHP: () => void;
}


const healCharacter = ( character: Character, amount: number ) =>{

    character.hp += amount;

}

const sakura: Character = {
    name: 'Sakura',
    hp: 50,
    showHP() {
        console.log(`Puntos de vida ${ this.hp}`);
    }
}

healCharacter (sakura, 10);
healCharacter (sakura, 40);

sakura.showHP();

export{};