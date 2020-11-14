var RedDiv = document.getElementById("reddiv");
var BlueDiv = document.getElementById("bluediv");
var ChangeColorButton = document.getElementById("changecolor");

function ChangeAttributes() {
    RedDiv.setAttribute("class", "element red");
    BlueDiv.setAttribute("class", "element blue");
    RedDiv.innerHTML = "Теперь он красный";
    BlueDiv.innerHTML = "Теперь он синий";
    
    ChangeColorButton.onclick = ResetAttributes;
    ChangeColorButton.innerHTML = "<b>Сбросить цвета<b>";
    
    var RedDivCSS = RedDiv.getAttribute("class");
    console.log(typeof(RedDivCSS));
}

function ResetAttributes() {
    RedDiv.setAttribute("class","element green");
    BlueDiv.setAttribute("class","element green");
    RedDiv.innerHTML = "Снова зеленый";
    BlueDiv.innerHTML = "Снова зеленый";
    
    ChangeColorButton.onclick = ChangeAttributes;
    ChangeColorButton.innerHTML = "Установить цвета";
}
