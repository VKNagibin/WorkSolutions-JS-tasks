/*

    Вывод каждую секунду
    Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

    Сделайте два варианта решения.
    Используя setInterval.
    Используя рекурсивный setTimeout.

*/

printNumbersTimeout(1, 10);

function printNumbersTimeout(from, to) {
    let timerId = setTimeout(function oneSecond() {
        console.log(from++);
        if (from <= to) {
            timerId = setTimeout(oneSecond,1000);
        } else {
            clearTimeout(timerId);
        }
    }, 1000);
}


printNumbersIntervals(1, 10);

function printNumbersIntervals(from, to) {
    let timerId = setInterval(function oneSecond() {
        console.log(from++);
        if (from > to) {
            clearInterval(timerId);
        }
    },1000);
}



