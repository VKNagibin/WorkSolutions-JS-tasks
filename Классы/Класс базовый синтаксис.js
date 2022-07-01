/*

Перепишите класс
Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

    P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть.

    function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();

*/


class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    start() {
        this.render();
        let timer = setInterval(this.render, 1000);
    }

    stop () {
        clearInterval(timer);
    }

}

let clock = new Clock({template: 'h:m:s'});
clock.start();


// function Clock({ template }) {
//
//     let timer;
//
//     function render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     this.stop = function() {
//
//     };
//
//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }




class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new ValidationError("Нет поля: age");
    }
    if (!user.name) {
        throw new ValidationError("Нет поля: name");
    }

    return user;
}

try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        alert("Некорректные данные: " + err.message);
    } else if (err instanceof SyntaxError) {
        alert("JSON ошибка синтаксиса:" + err.message);
    } else {
        throw err;
    }
}

