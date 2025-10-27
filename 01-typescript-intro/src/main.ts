import './style.css'
import './topics/01-basic-types'; // "import" requerir un modulo(Agrupacion encapsulada de un procedimiento)

const app = document.querySelector<HTMLDivElement>('#app')!;


app.innerHTML = 'Hola Mundo';

console.log("Hola Mundo!!");