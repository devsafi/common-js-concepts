// Block scope:-

function sum(a, b) {
    const sum = a + b;
    // console.log(sum);
}

const a = true;
if (a === true) {
    // console.log('this is also a block scope');
}

// second bracket er suru sesh er moddehy holo ekta block scope. kintu var diye declare korle oi variable kono scope mane na. tai amra var use korbo na. let/const use korbo.


print5();

function print5(){
    console.log('inside print5', 5); // correct.
}


print10()
const print10 = function print10(){
    console.log('inside print10', 10); // non correct.
}