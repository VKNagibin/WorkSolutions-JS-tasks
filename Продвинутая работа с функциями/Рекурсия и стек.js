/*

    Вычислить сумму чисел до данного
    Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

        Например:

    sumTo(1) = 1
    sumTo(2) = 2 + 1 = 3
    sumTo(3) = 3 + 2 + 1 = 6
    sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
    Сделайте три варианта решения:

        С использованием цикла.
        Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
        С использованием формулы арифметической прогрессии.
        Пример работы вашей функции:

        function sumTo(n) { /!*... ваш код ... *!/ }

    alert( sumTo(100) ); // 5050
    P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

        P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

*/


console.log( sumTo(9) );

//Рекурсия

function sumTo(num) {
    if (num === 1) {
        return num;
    }

    return num + sumTo(num - 1);
}


//Решение с помощью цикла

console.log( sumCicle(9) );

function sumCicle(num) {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum += i;
    }
    return sum;
}

//Арифметическая прогрессия

const progressionFunc = num => num * (num + 1) / 2;
console.log( progressionFunc(9) );

