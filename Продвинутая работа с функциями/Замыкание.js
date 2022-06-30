/*

    Сумма с помощью замыканий
    Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

        Да, именно таким образом, используя двойные круглые скобки (не опечатка).

    Например:

    sum(1)(2) = 3
    sum(5)(-1) = 4

*/


sum(100)(250);

function sum(a) {
    return function sumInner(b) {
        return a + b;
    }
}


/*

    Фильтрация с помощью функции
    У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

        Сделайте набор «готовых к употреблению» фильтров:

        inBetween(a, b) – между a и b (включительно).
        inArray([...]) – находится в данном массиве.
        Они должны использоваться таким образом:

        arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
    arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
    Например:

        /!* .. ваш код для inBetween и inArray *!/
        let arr = [1, 2, 3, 4, 5, 6, 7];

    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

*/

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(5, 7)) );
alert( arr.filter(inArray([1, 2, 10])) );

function inBetween(min, max) {
    return function(item) {
        if (item >= min && item <= max) {
            return true;
        }
        return false
    }
}

function inArray(array) {
    return function inArrayInner(item) {
        for (let i of array) {
            if (item === i) {
                return true;
            }
        }
        return false;
    };
}


