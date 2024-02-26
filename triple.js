// == 2i ta value soman ki na ta check kore.
// === 2i ta value soman ki na tau check kore abar 2i ta value er type ekoi kina tau check kore.

const x = 2;
const y = 2;

if (x == y) {
    console.log('values are same') // values are same
} else {
    console.log('values are not same')
}

// --------------------------------------------

const p = 2;
const l = '2';

if (p == l) {
    console.log('values are same'); // values are same
} else {
    console.log('values are not same');
}

// --------------------------------------------

const z = 2;
const s = '2';

if (z === s) {
    console.log('values are same');
} else {
    console.log('values are not same'); // values are not same
}


// non primitive hoile tahole ==/=== check korbe na. [],{}.
const f = [];
const g = [];
// const f = {};
// const g = {};

if (f === g) {
    console.log('values are same');
} else {
    console.log('values are not same'); // values are not same
}

// tara check kore referance k.
const b = {};
const t = b;

if (b === t) {
    console.log('values are same'); // values are same.
} else {
    console.log('values are not same');
}