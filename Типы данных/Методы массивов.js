/*

    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть дефисы удаляются, а все слова после них получают заглавную букву.

        Примеры:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

*/

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
    let array_ = str.split("-");

    array_ = array_.map( (item, index) => {
        if (index === 0) {
            return item;
        }
        return `${item[0].toUpperCase()}${item.substring(1, item.length)}`;

    } );

    console.log( array_.join('') );
}



/*

    Фильтрация по диапазону
    Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

    Функция должна возвращать новый массив и не изменять исходный.

    Например:

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (совпадающие значения)

    alert( arr ); // 5,3,8,1 (без изменений)

*/


const filterRange = ((arr, minValue, maxValue) => arr.filter(item => item >= minValue && item <= maxValue));

let arr = [5, 3, 8, 1, 9, 2, 2, 7, 16];

let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr );

/*

    Фильтрация по диапазону "на месте"

    Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

    Функция должна изменять принимаемый массив и ничего не возвращать.

    Например:

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    alert( arr ); // [3, 1]

*/

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4)

function filterRangeInPlace(arr, a, b) {
    arr = arr.filter(item => item >= a && item <= b);
    console.log(arr);
}



// Сортировать в порядке по убыванию

const sortFunc = (a, b) => a > b ? -1 : a === b ? 0 : 1 ;

let arr = [ 1, 2, 15, -5, 7, 14, -100, 28, 16 ];

arr.sort(sortFunc);

console.log(arr);

/*

    Скопировать и отсортировать массив

    У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

    Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)

*/

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (array) => array.slice().sort();

let sorted = copySorted(arr);

console.log(`sorted: ${sorted}` );
console.log(`source array: ${arr}`)
