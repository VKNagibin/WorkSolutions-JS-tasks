/*

    Ввод числового значения
    Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

        Функция должна возвращать числовое значение.
        Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

*/

function readNumber() {
    const v = read();
    if (breakCondition(v)) return null;
    const parsed = parse(v);
    return isNaN(parsed) ? readNumber() : parsed;

}

const breakCondition = (v) => v === "" || v === null;
const parse = (v) => parseInt(v);
const read = (m = "Введите число") => prompt(m);

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
