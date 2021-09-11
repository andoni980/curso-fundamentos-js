function crearPersona ( nombre, apellido ) {
    return {
        nombre: nombre, //Basta con poner nombre una vez
        apellido: apellido // Basta poner apellido una vez
    }
};

const persona = crearPersona( 'Andoni', 'Larrazabal' );
// console.log( persona );



// const crearPersona2 = ( nombre, apellido ) => {
//     return { nombre, apellido };
// };

const crearPersona2 = ( nombre, apellido ) => ( { nombre, apellido } ); //Para que sea igual hay que mandarala entre parentesis porque las llaves declaran el cuerpo de la funcion

const persona2 = crearPersona2( 'Andoni', 'Larrazabal' );
// console.log( persona2 );


function imprimeArgumentos () {
    console.log( arguments );
};
imprimeArgumentos( 10, true, false, 'Andoni', 'Hola' );



// const imprimeArgumentos2 = () => {
//     console.log( arguments );
// };
// imprimeArgumentos2( 10, true, false, 'Andoni', 'Hola' ); //'Undefined' La funcion de flecha no crea el objeta 'arguments' para recibir todos lo 'arguments' usar parametro 'rest' por eso esta funcion FALLA





const imprimeArgumentos3 = ( ...args ) => { //...patata "Parametro rest" despues no ha de haber ningun argumento
    console.log( args );
};
imprimeArgumentos3( 12, true, false, 'Andoni', 'C/Juarez' ); // Para extraer una variable ante del rest hay que ponerlo asi:



const imprimeArgumentos4 = ( edad, ...args ) => {   //...patata "Parametro rest" despues no ha de haber ningun argumento
    // console.log( { edad, args } );                  //Primero extrae la edad y despues el arreglo con los demas argumentos
    return args;
};
// imprimeArgumentos4( 12, true, false, 'Andoni', 'C/Juarez' );
//IMPORTANTE
const [ casado, vivo, nombre, direccion ] = imprimeArgumentos4( 10, true, false, 'Andoni', 'Palagreros' );
console.log( { casado, vivo, nombre, direccion } );

const { apellido } = crearPersona2( 'Andoni', 'Lopategui' );
console.log( apellido );


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'traje', personaje.trajes );
// };

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 0, trajes } ) => {
    console.log( { nombre } );
    console.log( { codeName } );
    console.log( { vivo } );
    console.log( { edad } );
    console.log( { trajes } );
};


imprimePropiedades( tony );


