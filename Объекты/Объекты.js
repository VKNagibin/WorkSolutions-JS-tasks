/*

    Напишите код, выполнив задание из каждого пункта отдельной строкой:

    Создайте пустой объект user.
    Добавьте свойство name со значением John.
    Добавьте свойство surname со значением Smith.
    Измените значение свойства name на Pete.
    Удалите свойство name из объекта.

 */

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/*

    Проверка на пустоту
    Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

 */

function isEmpty(obj) {
    let flag = true;
    for (let key in obj) {
        flag = false;
        break;
    }
    return flag;
}

let schedule = {};

isEmpty(schedule);


/*

   У нас есть объект, в котором хранятся зарплаты нашей команды:

    let salaries = {
      John: 100,
      Ann: 160,
      Pete: 130
    }
    Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

    Если объект salaries пуст, то результат должен быть 0.

 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj) {
    let total = 0;
    for (let key in obj) {
        total += obj[key];
    }
    return total;
}

sum(salaries);


/*

    Умножаем все числовые свойства на 2
    Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

    Например:

    // до вызова функции
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

    // после вызова функции
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };
    Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

    P.S. Используйте typeof для проверки, что значение свойства числовое.

 */

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}

let menu = {
    width: 2000,
    height: 3300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)