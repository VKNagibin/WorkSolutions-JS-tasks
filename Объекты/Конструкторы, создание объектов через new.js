/*

    Создание калькулятора при помощи конструктора
    Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

    read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
    sum() возвращает сумму введённых свойств.
    mul() возвращает произведение введённых свойств.
        Например:

    let calculator = new Calculator();
    calculator.read();

    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );

*/

function Calculator() {
    this.read = () => {
        this.num1 = prompt("Введите первое число");
        this.num2 = prompt("Введите второе число");
    }
    this.sum = () => +this.num1 + +this.num2;
    this.mul = () => this.num1 * this.num2;
}

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


/*

    Создаём Accumulator
    Напишите функцию-конструктор Accumulator(startingValue).

        Объект, который она создаёт, должен уметь следующее:

        Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
        Метод read() использует prompt для получения числа и прибавляет его к свойству value.
        Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

        Ниже вы можете посмотреть работу кода:

        let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавит ввод prompt к текущему значению
    accumulator.read(); // прибавит ввод prompt к текущему значению

    alert(accumulator.value); // выведет сумму этих значений

*/

let accumulator = new Accumulator(600);

accumulator.read();
accumulator.read();

alert(accumulator.value);

function Accumulator(startingValue = 0) {
    this.value = startingValue;
    this.read = () => {
        this.value += promptChecker( +prompt("Введите число для сложения") );
    }
}

function promptChecker(message) {
    if (isNumber(message)) {
        return message
    }
    return 0;
}

function isNumber(num) {
    if (isFinite(-num) && String(num).trim() !== '') {
        return true;
    }
    return false;
}