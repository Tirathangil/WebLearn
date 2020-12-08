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
        var PlaceShipClasses = document.getElementById("placegroup").classList;
        var BattleControl = document.getElementById("battlecontrol").classList;
        EnemyGridClasses.remove("display-none");
        PlaceShipClasses.remove("display-none");
        StartMenuClasses.add("display-none");
        BattleControl.add("display-none");
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
    ShipsPlaced: function () {
        var PlaceGroup = document.getElementById("placegroup").classList;
        var BattleControl = document.getElementById("battlecontrol").classList;
        PlaceGroup.add("display-none");
        BattleControl.remove("display-none");
    }
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

function TimerTick() {
    ControlPanel.Timer.increaseTimer();
}
