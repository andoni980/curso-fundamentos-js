// const arr = new Array( 10 ); // No comun
// const arr = [];
// console.log( arr );

let videoJuegos = [ 'Mario3', 'Megaman', 'Chorno Trigger' ];
console.log( { videoJuegos } );
console.log( videoJuegos[ 0 ] );

let arregloCosas = [
    true,
    123,
    'Andoni',
    1 + 2,
    function () { },
    () => { },
    { a: 1, b: 3 },
    [ 'X', 'Megaman', 'Zero', 'Dr Light', [
        'Dr Willy',
        'Woodman'
    ] ]
];

console.log( arregloCosas[ 7 ][ 4 ][ 1 ] );