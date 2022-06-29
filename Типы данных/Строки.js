/*

    Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
    Функция должна быть нечувствительна к регистру:

    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true
    checkSpam("innocent rabbit") == false

*/

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

function checkSpam(checkingString) {
    let regVia = checkingString.match(/viagra/i);
    let regXXX = checkingString.match(/xxx/i);

    if (regVia || regXXX) {
        return true;
    }

    return false
}


/*

    Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

    Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

*/

truncate("мывм мывмфвфафвпы фвафывфавфы", 10);

function truncate(str, maxLength) {
    if (str.length - 1 <= maxLength) {
        return str;
    }

    let newStr = str.substring(0, maxLength);
    return newStr += "...";
}


/*

    Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

    Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

 */


extractCurrencyValue("$fdsaf120fdsad");

function extractCurrencyValue(str) {
    const regExp =/\d{1,}/;
    return +( str.match(regExp) )[0];
}
