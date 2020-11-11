var Loc1;
var Loc2;
var Loc3;

var Guess = 0;
var Guesses = 0;
var Hits = 0;
var isSunked = false;

// Позиционирование корабля

Loc1 = 1;
Loc2 = 2;
Loc3 = 3;

while (isSunked == false) {
    Guess = prompt("Готовы стрелять, укажите цель (1-6): ");

    if (Guess < 1 || Guess > 1) {
        alert("Неверные координаты. Введите корректные координаты");
    }
    else {
        Guesses++;
    }

    if (Guess == Loc1 || Guess == Loc2 || Guess == Loc3) {
        Hits++;
    }
    if (Hits == 3) {
        isSunked = true;
    }
}

alert("Игра закончена. Выстрелов: " + Guesses);
