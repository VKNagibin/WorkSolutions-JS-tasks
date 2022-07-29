/*

Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.

*/

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles.splice( (styles.length - 1) / 2, 1);
alert(styles.shift());
styles = [ "Рэп", "Регги", ...styles];

console.log(styles);


/*

    Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.
    P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

*/

sumInput();

function sumInput() {
    let arraySum = [];
    let whileNumber = true;

    while (whileNumber) {
        let prompt_ = prompt("Введите число");

        if ( prompt_ !== null && prompt_.trim() !== '' && isNumber(prompt_) ) {
            arraySum.push(+prompt_);
        } else {
            whileNumber = false;
        }
    }

   return arraySum.reduce((sum, currentValue) => {
       return sum + currentValue;
       }, 0);
}

function isNumber(num) {
    return isFinite(-num) && String(num).trim() !== ''
}












