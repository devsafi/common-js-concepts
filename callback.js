function greeting(naruto, name) {
    naruto(name);
    // call back function.
}

function naruto(name) {
    console.log('Dattebayo', name);
}

greeting(naruto, 'Hina');
greeting(naruto, 'Eno');

function hinata(name) {
    console.log('love you', name);
}

greeting(hinata, 'Naruto');
greeting(hinata, 'safi');

// using call back function .. bar bar use kora jay, multiple kajer jonno.

function submitHandler(){
    console.log('love me please');
}

document.getElementById('sub-btn').addEventListener('click', submitHandler);