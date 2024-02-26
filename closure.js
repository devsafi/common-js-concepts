function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

const watch1 = stopWatch();

console.log(watch1()); // 1
console.log(watch1()); // 2
console.log(watch1()); // 3

const watch2 = stopWatch();

console.log(watch2()); // 1
console.log(watch2()); // 2
console.log(watch2()); // 3


