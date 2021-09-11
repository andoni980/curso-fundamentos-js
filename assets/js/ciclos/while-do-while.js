const carros = [ 'Ford', 'Mazda', 'Toyota', 'Honda' ];

let i = 0;

while ( carros[ i ] ) {
    if ( i === 1 ) {
        // break;
        i++;
        continue;
    }
    console.log( carros[ i ] );
    i++;
};


console.warn( 'Do while' );
let j = 10;
do {
    console.log( carros[ j ] );
    j++;
} while ( carros[ j ] );