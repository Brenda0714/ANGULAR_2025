/*
? IMPORT Y EXPORT
*/

import { taxCalculation, type Product } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Samsung',
        price: 100
        
    },
    {
        description: 'iPad',
        price: 250
        
    }
];

const Tax = 0.15;

const [total, TaxTotal] = taxCalculation({
    products: shoppingCart,
    tax: Tax

});

console.log('TOTAL:', total);
console.log('TAX:', TaxTotal);
