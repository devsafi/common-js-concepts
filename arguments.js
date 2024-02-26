function sum(a, b, c) {
    console.log(arguments);
    // aita hocche array like object. for of loop calano jabe.

    console.log(typeof arguments);
    console.log(arguments[4]);

    // array paite hoile nicer system use korte hobe.
    const args = [...arguments];
    console.log(args);
    const sum = a + b + c;
    return sum;
}

console.log(sum(2, 3, 4, 6, 6, 6, 5,))

console.log(sum.length); // 3. karon kono function er pore length dile output e oi function er moddeh koyta parameter ache ta dekhabe.