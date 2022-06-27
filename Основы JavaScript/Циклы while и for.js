/*
    При помощи цикла for выведите чётные числа от 2 до 10.
 */

for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}


/*
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }

*/

let i = 0;

while( i < 3 ) {
    alert(`number ${i}!`);
    ++i;
}


/*
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
 */

let number_ = prompt("Введите число больше 100");


while( +number_ < 100 && number_ !== null ) {
    alert("Попробуйте ещё раз");
    number_ = prompt("Введите число больше 100");
}






function simpleNumbers(n) {
  let simpleNumbers;
    
  if (n >= 2) {
    simpleNumbers = "2, ";
  } else {
    return 0;
  }
  
  for (let i = 3; i <= n; i++) {
    let noRemainder = 0; 
    for (let j = 2; j < i; j++) {
      if ( i % j === 0) {
        noRemainder++;
      }
    }
    simpleNumbers = noRemainder ? simpleNumbers : simpleNumbers + i + ", ";
  }
  return simpleNumbers.substr(0, simpleNumbers.length - 2) + ".";
}


console.log(simpleNumbers(1000));
