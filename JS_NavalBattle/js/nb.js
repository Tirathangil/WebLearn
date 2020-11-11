var Loc1 = Math.floor(Math.random() * 5);
var Loc2 = Loc1 + 1;
var Loc3 = Loc2 + 1;
var Loc1Hit = false;
var Loc2Hit = false;
var Loc3Hit = false;
var Guess = 0;
var Guesses = 0;
var isSunked = false;

while (isSunked == false) {
    Guess = prompt("Готовы стрелять, укажите цель (0-7): ");

    if (Guess < 0 || Guess > 7) {
        alert("Неверные координаты. Введите корректные координаты");
    } else {
        Guesses++;
    }

    if (Guess == Loc1) {
        Loc1Hit = true;
        alert("Попадание!");
    }
    if (Guess == Loc2) {
        Loc2Hit = true;
        alert("Попадание!");
    }
    if (Guess == Loc3) {
        Loc3Hit = true;
        alert("Попадание!");
    }
    if (Loc1Hit && Loc2Hit && Loc3Hit) {
        isSunked = true;
    }
}

alert("Игра закончена. Выстрелов: " + Guesses);
