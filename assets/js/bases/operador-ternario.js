// Dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

const dia = 0;
const horaActual = 11;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, Abrimos a las XX

// if ( dia === 0 || dia === 6 ) {
//     console.log( 'Fin de semana' );
//     horaApertura = 9
// } else {
//     console.log( 'Dia de semana' );
//     horaApertura = 11;
// };

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// if ( [ 0, 6 ].includes( dia ) ) {  ////////////////////////////////////////////
//     console.log( 'Fin de semana' );
//     horaApertura = 9
// } else {
//     console.log( 'Dia de semana' );
//     horaApertura = 11;
// }

horaApertura = ( [ 0, 6 ].includes( dia ) ) ? 9 : 11;
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, abrimos a las ${ horaApertura }`

console.log( { horaApertura, mensaje } );