let a = 10;
let b = 10;

a = 30;


console.log( { a, b } );

let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.log( { juan, ana } );

const cambiarNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiarNombre( peter );

console.log( { peter, tony } );


// Arreglos

const frutas = [ 'Manzanas', 'Pera', 'Piña' ];
// const otrasFrutas = [ ...frutas ]; // Operador spread -> conseguimos queMango solo sea incluido en otrasFrutas
const otrasFrutas = frutas.slice(); // Hace lo mismo pero mas lento

otrasFrutas.push( 'Mango' );
console.table( { frutas, otrasFrutas } );