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


//Вариант с  использованием ?

let age = prompt( "Сколько тебе лет?");

function checker(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

checker(age);



//Вариант с использованием ||

let age = prompt( "Сколько тебе лет?");


function checkingAge(age) {
   return age > 18 || confirm('Родители разрешили?');
}


checkingAge(age);

/*

    Функция pow(x,n)
    Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

 */
    
console.log(pow(3, "wrggfgaefgga"));
console.log(pow(-153, 7));
console.log(pow(0, 0));
console.log(pow(5, -6));
console.log(pow('', ''));
console.log(pow(15, 8));

function pow(x, n) {
    if (
      n < 1 ||
      !isNumber(x) ||
      !isNumber(n)
       ) {
      return NaN;
    }

    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

function isNumber(num) {
  if (isFinite(+num) && String(num).trim() !== '') {
      return true;
  }
  return false;
}
