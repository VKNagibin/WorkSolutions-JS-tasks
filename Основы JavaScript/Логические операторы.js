/*
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.
 */

(function () {
  const isValidAge = (age) => isInRange(14)(90);
  const isInRange = minAge => maxAge => ( age >= minAge && age <= maxAge );
  const isNumber = num => {
    if (isFinite(+num) && String(num).trim() !== '') {
      return true;
    }
  return false;
  }

  const age = +prompt("Сколько Вам лет?");

  if ( !isNumber(age) ) {
    return
  }

  if ( isValidAge(age) ) {
    alert("Functional Programming")  
  }
  
})();

/*
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
 */

//1. С оператором !НЕ

let age = prompt("Сколько вам лет?");

if ( !(age >= 14 && age <= 90) ) {
    alert("Добро пожаловать");
}

//2. Без оператора !НЕ

if ( age <= 14 || age >= 90 ) {
    alert("Добро пожаловать");
}