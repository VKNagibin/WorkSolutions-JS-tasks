let exampleVar = 1000;
let exampleArray = [200, -700, 8, 43];

function exampleFunc(num, array) {
    return [num, ...array];
}

console.log(exampleFunc(exampleVar, exampleArray));