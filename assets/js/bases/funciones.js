// function saludar ( nombre ) {
//     console.log( arguments ); // Todas las funciones tradicionales(las arrow functions NO) internamente tienen objeto implicito llamado 'arguments'
//     console.log( 'Hola ' + nombre );
//     return [ 1, 2, 3, 4 ]; // Si no hay return devuelve 'undefined' 
// };

// const saludar2 = function ( nombre ) {
//     console.log( 'Hola ' + nombre );
// }

// // Funciones lambda
// const saludarArrow = () => {
//     console.log( 'Hola arrow' );
// };

// const saludarArrow2 = ( nombre ) => { // Los parentesis son opcionales pero es buena practica ponerlos porque queda mas claro lo que es
//     console.log( 'Hola ' + nombre );
// };




// const retornoDeSaludar = saludar( 'Andoni', 40, true, 'Costa Rica' ); //Devuelve 1
// console.log( { retornoDeSaludar } );
// // saludar2( 'Raul' );
// // saludarArrow();
// // saludarArrow2( 'arrow ' );

function sumar ( a, b ) {
    return a + b;
};

const sumar2 = ( a, b ) => {
    return a + b;
};

const sumar3 = ( a, b ) => a + b;

console.log( sumar( 3, 2 ) );
console.log( sumar2( 13, 2 ) );
console.log( sumar3( 20, 20 ) );



function getAleatorio () {
    return Math.random();
};

const aleatorio = () => Math.random();

// console.log( getAleatorio() );
console.log( aleatorio() );

