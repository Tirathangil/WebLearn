var SavedValue;
var StandartText = "Введите телефон";

function ClearField() {
    var Field = document.getElementById("phone");
    SavedValue = Field.value;
    if (SavedValue == StandartText) {
        Field.value = "";
    }
}

function ReturnFieldValue() {
    var Field = document.getElementById("phone");
    var Content = Field.value;
    Content = Content.trim();
    if (Content == "") {
        Field.value = StandartText;
        Field.setAttribute("class", "");
        return;
    }
}

function CheckPhone() {
    var Field = document.getElementById("phone");
    var Phone = Field.value;
    var PhoneSections;
    var RealLength = 0;
    if (Phone == "" || Phone == StandartText) {
        Field.setAttribute("class", "invalid");
        return;
    }
    Phone = Phone.trim();
    

    if (!Phone.includes("-")) {
        if(Phone.length != 7) {
            Field.setAttribute("class", "invalid");
            return;
        }
        if (parseInt(Phone,10)) {
            Field.setAttribute("class", "valid");
            return;
        }
    } else {
        PhoneSections = Phone.split("-");
        for (var i = 0; i<PhoneSections.length; i++) {
            RealLength += PhoneSections[i].length;
        }
        if (RealLength == 7) {
            for (var i = 0; i<PhoneSections.length; i++) {
                if (!parseInt(PhoneSections[i],10)) {
                    Field.setAttribute("class", "invalid");
                    return;
                }
            }
            Field.setAttribute("class", "valid");
            return;
        }
        Field.setAttribute("class", "invalid");
        return;
    }
    Field.setAttribute("class", "invalid");
}