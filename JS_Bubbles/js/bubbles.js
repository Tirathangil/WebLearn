var BubblesData = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 75, 30, 39, 75, 21, 33, 75];
var ScoresData = [0.25, 0.32, 0.14, 0.48, 0.25, 0.47, 0.34, 0.16, 0.47, 0.49, 0.57, 0.65, 0.24, 0.16, 0.79, 0.48, 0.54];
var MaxBubbles = 0;
var MaxBubblesElements = [];
var OptimalScoreElement = 0;

function WriteExperimentsResults(Exp) {
    for (var i = 0; i < Exp.length; i++) {
        document.write("Эксперимент №" + (i + 1) + ". Пузырей: " + BubblesData[i] + " Стоимость: " + ScoresData[i] + "<br>");
        if (MaxBubbles < Exp[i]) {
            MaxBubbles = Exp[i];
        }
    }
}

function GetMaxBubbles(Exp) {
    var MaxElements = [];
    for (var j = 0; j < (Exp.length); j++) {
        if (Exp[j] == MaxBubbles) {
            MaxElements.push(++j);
        }
    }
    return MaxElements;
}

function GetOptimalScore(Scores, MaxElements) {
    var MaxScore = 1;

    for (var i = 0; i < MaxElements.length; i++) {
        if (Scores[MaxElements[i]] < MaxScore) {
            MaxScore = MaxElements[i];
        }
    }

    return MaxScore;
}

document.write("<h1>Отчет по экспериментам с пузырями</h1><br>");
WriteExperimentsResults(BubblesData);
document.write("<strong>Всего тестов: </strong>" + BubblesData.length + "<br>");
document.write("<strong>Наивысший результат: </strong>" + MaxBubbles + "<br>");
MaxBubblesElements = GetMaxBubbles(BubblesData);
document.write("<strong>Элементы с наив. результатом: </strong>");
for (i = 0; i < MaxBubblesElements.length; i++) {
    document.write(MaxBubblesElements[i] + ", ");
}
document.write("<strong>Оптимальный элемент: </strong> №" + GetOptimalScore(ScoresData, MaxBubblesElements));
