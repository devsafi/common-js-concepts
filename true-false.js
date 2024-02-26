/*

truthy:- 
1- value truth dile tahole truthy.
2- kono shonkha dile tahole truthy. aita +,- hoite pare.
3- any string hobe truthy. 's'   , ' ' // aikhane space ache taholeu truth.
4- '0' hoile truthy.
5- 'false' hoile truthy.
6- {} empty object truthy. ar {} er value thakle to truthy hobeyi.
6- [] empty object truthy. ar [] er value thakle to truthy hobeyi.


falsy:-
1- value false dile falsy.
2- man jodi 0 hoy tahole falsy.
3- empty string falsy hobe. ''
5- undefined value hobe falsy. // let x; aikhane aita falsy.
6- value null hobe falsy. // let x = null; aikhane aita falsy.

*/


// lets try all this:-
let x = true;

if (x) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}

// optional:-

// check falsy- use ! before item.
const y = '';
if (!y) {
    console.log('Value is falsy');
} else {
    console.log('Value is truthy');
}

// check truthy- use !! before item.
const z = ' ';
if (!!z) {
    console.log('Value is Truthy');
} else {
    console.log('Value is Falsy');
}

// !!value diye true false ber kora jay.

const a = '';
console.log(!!a);
