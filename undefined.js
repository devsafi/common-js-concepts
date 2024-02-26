// 8 ways to get undefined.


// 1:- variable er man na dile.
let a;
// console.log(a); //undefined

// 2:- function jodi na return kore.
function first(a, b) {
    const sum = a + b;
}

const result = first(1, 3);
// console.log(result); //undefined

// 3:- function e parameter pass na korle.
function second(a, b, c, d) {
    const sum = a + b + c + d;
    console.log(a, b, c, d);
}

// second(2, 3); // 2 3 undefined undefined

// 4:- function er moddeh kichui return na korle.
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return; // aikhane kichui return kortache na.
    }
    return a + b;
}

// console.log(noNegative(2, -4)); //undefined

// 5:- kono object er moddeh property nai emon property k output e undefined dekhabe.
const info = {
    name: 'safi',
    age: 20,
}

// console.log(info.name, info.salary); // safi undefined

// 6:- array er range er baire kono kichu output e dekhte caile.
const arry = [1, 3, 54, 5, 6, 7];
// console.log(arr[9]); //undefined

// 7:- array er moddeh kono element remove korte delete use kora jabe na. aplice use korte pari.
const arr = [1, 3, 54, 5, 6, 7];
delete arr[3];
// console.log(arr); // [ 1, 3, 54, <1 empty item>, 6, 7 ]

// 8:- jodi kono value nai bujate cai tahole value directly undefined kora jabe na.
const nine = undefined; // aivabe kora jabe na.
const ninee = null; // aivabe use kora jabe.