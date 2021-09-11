const dia = 2; //Domingo

switch ( dia ) {  // el switch siempre hace una comparacion ===
    case 0:
        console.log( 'Domingo' );
        break;
    case 1:
        console.log( 'Lunes' );
        break;
    case 2:
        console.log( 'Martes' );
        break;
    default:
        console.log( 'No es Lunes, Martes ni Domingo' );
}
