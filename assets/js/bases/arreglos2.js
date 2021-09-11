let juegos = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ];
console.log( 'Largo: ', juegos.length );

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length - 1 ];
console.log( { primero, ultimo } );
console.log( primero, ultimo );

juegos.forEach( ( elemento, indice, arr ) => {
    console.log( elemento, indice, arr );
} );

let nuevaLongitud = juegos.push( 'F-Zero' ); // Añade elemento al final del array
console.log( { nuevaLongitud, juegos } );

nuevaLongitud = juegos.unshift( ( 'Fire Emblem' ) ); // Añade elemento al principio del array
console.log( { nuevaLongitud, juegos } );

let juegoBorrado = juegos.pop(); // Elimina el ultimo de los elementos del array y lo devuelve
console.log( { juegoBorrado, juegos } );

let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2 ); // Elimina del array los elementos especificados y los devuelve en un nuevo array
console.log( { juegosBorrados, juegos } );

let metroidIndex = juegos.indexOf( 'Metroid' ); // Me devuelve la posicion del elemento
console.log( { metroidIndex } );

//TODO: Valores por Referencia