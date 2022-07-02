/*

    Ввод числового значения
    Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

        Функция должна возвращать числовое значение.
        Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

*/

function readNumber() {
    let typedValue = prompt("Введите число");

    if (typedValue === null || typedValue === '') {
        alert("В другой раз");
        return null;
    }

    if (isNumber(typedValue)) {
        alert("спасибо!");
        return Number(typedValue);
    } else {
        alert("Это не число");
        readNumber();
    }
}

function isNumber(num) {
    if (isFinite(-num) && String(num).trim() !== '') {
        return true;
    }
    return false;
}

readNumber();


/*

    Случайное целое число от min до max
    Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
        Любое число из интервала min..max должно появляться с одинаковой вероятностью.
        Пример работы функции:

    alert( randomInteger(1, 5) ); // 1
    alert( randomInteger(1, 5) ); // 3
    alert( randomInteger(1, 5) ); // 5

*/

randomInteger(5, 6);

function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min) ;
}
