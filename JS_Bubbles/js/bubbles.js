BubblesData = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 75, 30, 39, 75, 21, 33, 75];
ScoresData  = [.25, .32, .14, .48, .25, .47, .34, .16, .47, .49, .57, .65, .24, .16, .79, .48, .54]
var i = 0;
var j = 0;
var MaxBubbles = 0;
var MaxBubblesElements = [];
document.write("<h1>Отчет по экспериментам с пузырями</h1><br>");
for (i=0; i<BubblesData.length; i++) {
    document.write("Эксперимент №" + (i + 1) + ". Пузырей: " + BubblesData[i] + "<br>");
    if (MaxBubbles < BubblesData[i]) {
        MaxBubbles = BubblesData[i];
    }
}

for (j = 0; j < (BubblesData.length); j++) {
    if (BubblesData[j] == MaxBubbles) {
        MaxBubblesElements.push(++j);
    }
}

document.write("<strong>Всего тестов: </strong>" + BubblesData.length + "<br>");
document.write("<strong>Наивысший результат: </strong>" + MaxBubbles + "<br>");
document.write("<strong>Элементы с наив. результатом: </strong>");
for (i = 0; i < MaxBubblesElements.length; i++) {
    document.write(MaxBubblesElements[i]+", ");
}
