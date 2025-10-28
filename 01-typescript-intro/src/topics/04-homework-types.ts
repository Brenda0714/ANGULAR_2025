/*
    ===== Código de TypeScript =====
*/
interface SuperHero{
    name: string,
    age: number,
        /*
    * Arreglo
     */
    address: Address,
    /*
    * Funcion
     */
    showAddress: () => string

}

interface Address{
        street: string,
        country: string,
        city: string
}



const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};