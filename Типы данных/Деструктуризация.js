/*

    Деструктурирующее присваивание
    У нас есть объект:

        let user = {
            name: "John",
            years: 30
        };
    Напишите деструктурирующее присваивание, которое:

    свойство name присвоит в переменную name.
        свойство years присвоит в переменную age.
        свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
    Пример переменных после вашего присваивания:

        let user = { name: "John", years: 30 };

    // ваш код должен быть с левой стороны:
    // ... = user

    alert( name ); // John
    alert( age ); // 30
    alert( isAdmin ); // false

*/

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


/*

    Максимальная зарплата
    У нас есть объект salaries с зарплатами:

        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
    Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

    Если объект salaries пустой, то нужно вернуть null.
    Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
    P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Bob": 2020,
    "Lucy": 2000,
    "Mark": -2345,
};

function expensiveEmployee(obj) {
    if (Object.keys(obj).length === 0) {
        return null;
    }

    let result = [null, 0];

    for (let [key, value] of Object.entries(obj)) {
        result = result[1] > value ? result : [key, value];
    }
    return result[0]
}

expensiveEmployee(salaries);

// Решение с использованием Array.prototype.sort()

// const expensiveEmployee = (employeeList) => {
//     if (JSON.stringify(employeeList) === "{}") {
//         return null;
//     }
//
//     let result = Object.entries(salaries);
//
//     result.sort(sortedArray);
//     return result[0][0]
// }
//
// function sortedArray(a, b) {
//     return b[1] - a[1]
// }
//
// expensiveEmployee(salaries);


