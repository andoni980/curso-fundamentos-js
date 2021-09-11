let a = 5;

if ( a >= 10 ) {
    console.log( 'A es mayor qe diez' );
} else {
    console.log( 'A es menor que diez' );
}
console.log( 'Fin de programa' );


const hoy = new Date();
let dia = hoy.getDay();
let year = hoy.getFullYear();
console.log( { year } );
console.log( { dia } );

if ( dia === 0 ) {
    console.log( 'Domingo' );
} else if ( dia === 1 ) {
    console.log( 'Hoy es Lunes' )
} else if ( dia === 2 ) {
    console.log( 'Hoy es Martes' );
};

const diaSemana = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];
console.log( diaSemana[ dia ] );


const diasLetras = {
    0: 'dommingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};
console.log( diasLetras[ dia ] );