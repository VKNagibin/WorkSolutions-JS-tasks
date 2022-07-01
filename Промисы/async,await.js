/*

Перепишите, используя async/await
    Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

*/

async function loadJson_(url) {
    let fetchResponse = fetch(url);
    if (fetchResponse.status == 200) {
        return fetchResponse.json();
    } else {
        throw new Error(fetchResponse.status);
    }
}

loadJson('no-such-user.json')
    .catch(alert);


/*

Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

    class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Полное имя: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoGithubUser();

*/


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let fetchResponse = await fetch(url);

    if (fetchResponse.status == 200) {
        return fetchResponse.json();
    } else {
        throw new HttpError(fetchResponse);
    }
}

async function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    let user = await loadJson(`https://api.github.com/users/${name}`);

    alert(`Полное имя: ${user.name}.`);
    return user;
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoGithubUser();