let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lgn: -118.70
    },
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje[ 'nombre' ] );
console.log( 'Edad: ', personaje.edad );
console.log( 'Coords: ', personaje.coords );
console.log( 'Lat: ', personaje.coords.lat );

let numeroTrajes = personaje.trajes.length;
let ultimoTraje = personaje.trajes[ personaje.trajes.length - 1 ];

console.log( numeroTrajes );
console.log( ultimoTraje );

const x = 'vivo';
console.log( 'Vivo: ', personaje[ x ] );

console.log( 'Ultima pelicula: ', personaje[ 'ultima-pelicula' ] );

//MAS DETALLES 

delete personaje.edad; // Borra la clave del objeto sin dejar rastro
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje ); // Crea un array de arrays con las claves-valores del objeto
console.log( entriesPares );

Object.freeze( ( personaje ) ); // No permite cambiar o eliminar o sumar claves y valores Pero no congela los valores de los objetos dentro del objeto

personaje.dinero = 1000000000000; // Dinero no es creado por el freeze pero ubicacion si cambia porque esta dentro de un objeto del objeto
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );

console.log( { propiedades, values } );





