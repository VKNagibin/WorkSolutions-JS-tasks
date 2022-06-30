/*

Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.

*/

let date = new Date(2012, 1, 20, 3, 12);
alert(date);


/*

    Покажите день недели
    Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

    Например:

    let date = new Date(2012, 0, 3);  // 3 января 2012 года
    alert( getWeekDay(date) );        // нужно вывести "ВТ"

*/

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) );

function getWeekDay(date) {
    let weekDay = date.getDay();
    switch(weekDay) {
        case 0:
            return "ПН";
        case 1:
            return "ВТ";
        case 2:
            return "СР";
        case 3:
            return "ЧТ";
        case 4:
            return "ПТ";
        case 5:
            return "СБ";
        case 6:
            return "ВС";
    }
}
