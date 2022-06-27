/*

    Следующая функция возвращает true, если параметр age больше 18.

    В ином случае она задаёт вопрос confirm и возвращает его результат.

    function checkAge(age) {
      if (age > 18) {
        return true;
      } else {
        return confirm('Родители разрешили?');
      }
    }
    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    Сделайте два варианта функции checkAge:

    Используя оператор ?
    Используя оператор ||

 */

let age = prompt( "Сколько тебе лет?");

function checker(age) {
    let checkAge = age > 18 ? true : confirm('Родители разрешили?');
}

function checkingAge(age) {
    age > 18 || confirm('Родители разрешили?');
}

checker(age);
checkingAge(age);

/*

    Функция pow(x,n)
    Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

 */

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(3, 3));



