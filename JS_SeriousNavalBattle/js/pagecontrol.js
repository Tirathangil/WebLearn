"use strict"

let Theme = document.getElementById("Theme");

function LoadTheme() {
    Theme.setAttribute("href","themes/BlueSea/css/style.css")   
}

function ChangeTheme(event) {
    // Функция меняет тему
    /* Эта функция предназначена для смены оформления страницы
       путем замены ссылки на CSS файл */
    let Selected = event.currentTarget;
    switch (Selected.value) {
        case "BlueSea":
            Theme.removeAttribute("href");
            Theme.setAttribute("href","themes/BlueSea/css/style.css");
            break;
        case "Тестовая":
            Theme.removeAttribute("href");
            Theme.setAttribute("href","themes/Test/css/style.css");
            break;
    }
}


LoadTheme();
