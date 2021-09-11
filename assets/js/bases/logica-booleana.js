const regresaTrue = () => {
    console.log( 'Regresa true' );
    return true;
};

const regresaFalse = () => {
    console.log( 'Regresa false' );
    return false;
};

console.warn( 'Not o la negación' );
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true

console.warn( 'And' ); // Si todas las condiciones  devuelven true devuelve true
console.log( true && true ); //true
console.log( true && false ); //false
console.log( true && !false ); //true

console.log( '=====================' );
console.log( regresaFalse() && regresaTrue() ); //false solo hace el primer console.log, deja de evaluar el codigo al encontrar un false
console.log( regresaTrue() && regresaFalse() ); //false pero hace los dos console.log

console.warn( ( 'OR' ) ); // true si una de las condiciones se cumple
console.log( true || false ); // true
console.log( false || false ); //false 

console.log( regresaTrue() || regresaFalse() ); //true  pero hace los dos console.log porque al encontrar un true deja de evaluar

console.warn( 'Asignaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150; //Devuelve el ultimo valor 
const a2 = false && 'Hola mundo' && 150; //Si el primero es false deja de evaluar y devuelve false( el primer valor)

console.log( { a1, } );
console.log( { a2, } );


const a3 = 'Hola' && 'Mundo';// imprime el ultimo valor 'Mundo'
console.log( { a3 } );

const a4 = soyFalse || 'Ya no soy falso';
console.log( { a4 } );

const a5 = soyFalse || soyNull || soyUndefined || 'Ya no soy falso de nuevo';
console.log( { a5 } );


if ( true || true || true || false ) {
    console.log( 'Hacer algo' );
} else {
    console.log( 'Hacer otra cosa' );
}






