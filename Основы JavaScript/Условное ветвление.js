/*

 Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

 */


const officialName = prompt("Какое «официальное» название JavaScript?");

if (officialName === "ECMAScript") {
    alert("Верно");
} else {
    alert("Не знаете? ECMAScript!");
}

/*

Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

 */
let login = prompt("Кто вы?")

let message = ( login == 'Сотрудник' ) ? 'Привет' :
    ( login == 'Директор' ) ? 'Здравствуйте' :
    ( login == '' ) ? 'Нет логина' :
    '';

alert(message);



