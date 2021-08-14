"use strict";
let login;
const ADMPASS = "12345";



login = prompt("Имя пользователя?", "");
if (login == undefined) {
    alert("Отменено");
} else if (login != "Админ") {
    alert("Я вас не знаю");
}
if (login == "Админ") {
    let password = prompt("Пароль?");
    debugger;
    if (password == ADMPASS) {
        alert("Здравствуйте!");
    } else if (password == undefined) {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
}
