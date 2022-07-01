/*

    Хранение отметок "не прочитано"
    Есть массив сообщений:

        let messages = [
            {text: "Hello", from: "John"},
            {text: "How goes?", from: "John"},
            {text: "See you soon", from: "Alice"}
        ];
    У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

        Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

        P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

        P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.

*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let checkMessageCollection = new WeakSet();

isRead(messages[0]);
isRead(messages[2]);


checkMessageCollection.has(messages[2]);

function isRead(message) {
    checkMessageCollection.add(message);
}

console.log(checkMessageCollection);

/*

Хранение времени прочтения
Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
{ text: "Hello", from: "John" },
{ text: "How goes?", from: "John" },
{ text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

*/


let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let checkMessageCollection = new WeakSet();
let readDateCollection = new WeakMap();

function readMessage(message) {
    checkMessageCollection.add(message);
    readDateCollection.set(new Date(), message);
}

readMessage(messages[1]);
readMessage(messages[0]);

console.log("Коллекция прочитанных сообщений: ");
console.log(checkMessageCollection);
console.log("Коллекция с временем прочтения сообщений: ");
console.log(readDateCollection);