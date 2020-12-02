var Grid = {
    Size: "I9",
    Shots: new Array(),
    Ships: new Array(),
};

var ControlPanel = {
    Coords: {
        x: document.getElementById("xcoord"),
        y: document.getElementById("ycoord"),
        SetSector: function () {
            var SelectedSector = event.currentTarget.id;
            var LogPrinter = document.getElementById("logprinter");
            ControlPanel.Coords.y.innerHTML = SelectedSector[0];
            ControlPanel.Coords.x.innerHTML = SelectedSector[1];
            LogPrinter.innerHTML = "<div class=\"log-printer-record type-font\">Выбран сектор " + event.currentTarget.id + "</div>" + LogPrinter.innerHTML;
            
        },
    },
    Timer: {
        indicator: document.getElementById("timer"),
        time: new Date(0),
        started: false,
        timerId: null,
        increaseTimer: function () {
            var Seconds = this.time.getSeconds();
            var Minutes = this.time.getMinutes();

            if (this.started) {
                this.time.setSeconds(this.time.getSeconds() + 1);

                Seconds = this.time.getSeconds();
                Minutes = this.time.getMinutes();

                if (Seconds < 10) {
                    Seconds = "0" + Seconds;
                }
                if (Minutes < 10) {
                    Minutes = "0" + Minutes;
                }

                this.indicator.innerHTML = Minutes + ":" + Seconds;
            }
        },
        toggleTimer: function () {
            this.started = !this.started;
        }
    },

    StartGame: function () {
        var EnemyGridClasses = document.getElementById("enemygrid").classList;
        var StartMenuClasses = document.getElementById("startmenu").classList;
        var TopPanelClasses = document.getElementById("toppanel").classList;
        EnemyGridClasses.remove("display-none");
        TopPanelClasses.add("display-none");
        StartMenuClasses.add("display-none");
    },

    AddHandlersToGrid: function () {
        // Быдлокодная функция, надо переделать
        var i;
        var Y;
        for (i = 1; i < 10; i++) {
            Y = "A";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "B";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "C";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "D";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "E";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "F";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "G";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "H";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }
        for (i = 1; i < 10; i++) {
            Y = "I";
            document.getElementById(Y + i).addEventListener("click", this.Coords.SetSector);
        }  
    },
};

function Init() {
    ControlPanel.AddHandlersToGrid();

}

function TimerToggle() {
    if (ControlPanel.Timer.started) {
        clearInterval(ControlPanel.Timer.timerId);
        ControlPanel.Timer.toggleTimer();
    } else {
        ControlPanel.Timer.timerId = setInterval(TimerTick, 1000);
        ControlPanel.Timer.toggleTimer();
    }
}

function HoverMenuItem() {
    var HoveredItem = document.getElementById(event.target.id);
    HoveredItem.innerHTML = ">" + HoveredItem.innerHTML;
}

function UnhoverMenuItem() {
    var HoveredItem = document.getElementById(event.target.id);
    var SlicedItem = HoveredItem.innerHTML.split("&gt;");
    HoveredItem.innerHTML = SlicedItem[1];
}

function TimerTick() {
    ControlPanel.Timer.increaseTimer();
}
//setInterval(Increase, 1000);


// Старый быдлокод
/*
var FourDeckShip = {
    p1: {
        y: undefined,
        x: undefined,
        hit: false,
    },
    p2: {
        y: undefined,
        x: undefined,
        hit: false,
    },
    p3: {
        y: undefined,
        x: undefined,
        hit: false,
    },
    p4: {
        y: undefined,
        x: undefined,
        hit: false,
    },
    Died: false,
    CheckPlace: function () {
        console.log(this);
        if (!(this.p1.x && this.p1.y)) {
            return false;
        }
        if (!(this.p2.x && this.p2.y)) {
            return false;
        }
        if (!(this.p3.x && this.p3.y)) {
            return false;
        }
        if (!(this.p4.x && this.p4.y)) {
            return false;
        }
        return true;
    },
    CheckHit: function () {
        if (true) {}
    }
};
var ThreeDeckShip;
var TwoDeckShip;
var OneDeckShip;

var PlaceMode = false;
var VerticalPlace = true;

function XWithOffset(P, Offset) {
    var XCoords = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var i = 0; i < XCoords.length; i++) {
        if (P == XCoords[i]) {
            return XCoords[i + Offset];
        }
    }
}

function YWithOffset(P, Offset) {
    var YCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    for (var i = 0; i < YCoords.length; i++) {
        if (P == YCoords[i]) {
            return YCoords[i + Offset];
        }
    }
}

function ExpandCoords(Vertical, PQ) {

    var X = PQ[1];
    var Y = PQ[0];

    if (Vertical) {
        return [YWithOffset(Y, 0), YWithOffset(Y, 1), YWithOffset(Y, 2), YWithOffset(Y, 3)];
    } else {
        return [XWithOffset(X, 0), XWithOffset(X, 1), XWithOffset(X, 2), XWithOffset(X, 3)];
    }
}

function PlaceShip() {
    if (PlaceMode) {
        var PlaceCoords = ExpandCoords(VerticalPlace, event.target.id);
        if (VerticalPlace) {
            FourDeckShip.p1.y = PlaceCoords[0];
            FourDeckShip.p2.y = PlaceCoords[1];
            FourDeckShip.p3.y = PlaceCoords[2];
            FourDeckShip.p4.y = PlaceCoords[3];
            FourDeckShip.p1.x = SelectedSector.xcoord;
            FourDeckShip.p2.x = SelectedSector.xcoord;
            FourDeckShip.p3.x = SelectedSector.xcoord;
            FourDeckShip.p4.x = SelectedSector.xcoord;
        } else {
            FourDeckShip.p1.x = PlaceCoords[0];
            FourDeckShip.p2.x = PlaceCoords[1];
            FourDeckShip.p3.x = PlaceCoords[2];
            FourDeckShip.p4.x = PlaceCoords[3];
            FourDeckShip.p1.y = SelectedSector.ycoord;
            FourDeckShip.p2.y = SelectedSector.ycoord;
            FourDeckShip.p3.y = SelectedSector.ycoord;
            FourDeckShip.p4.y = SelectedSector.ycoord;
        }
    }
}

function InitSector() {
    SelectedSector.SegmentIndicator.yseg = document.getElementById("ycoord");
    SelectedSector.SegmentIndicator.xseg = document.getElementById("xcoord");
}
/*
function Selection() {
    SelectedSector.SetSector(event.target.id);
    console.log(event.target.id);
    if (PlaceMode) {
        PlaceShip();
        if (!FourDeckShip.Check()) {
            console.log("Нельзя разместить");
        }
    }

}


function TogglePlaceMode() {
    PlaceMode = !PlaceMode;
}

function ScreenMenu() {

}
*/
