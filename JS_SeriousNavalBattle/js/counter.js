var seconds = 0;

function Timer() {
    seconds++;
    var Gauge = document.getElementById("seconds");
    Gauge.innerHTML = seconds;
    if (seconds >= 99) {
        seconds = 0;
    }
}
