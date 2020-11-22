var SelectedSector = {
    xcoord: "0",
    ycoord: "0",
    SegmentIndicator: {
        yseg: 0,
        xseg: 0,
    },
    SetSector: function (Qu) {
        this.ycoord = Qu[0];
        this.xcoord = Qu[1];
        this.SegmentIndicator.yseg.innerHTML = this.ycoord;
        this.SegmentIndicator.xseg.innerHTML = this.xcoord;
    }
}

function InitSector() {
    SelectedSector.SegmentIndicator.yseg = document.getElementById("ycoord");
    SelectedSector.SegmentIndicator.xseg = document.getElementById("xcoord");
}

function Selection() {
    SelectedSector.SetSector(event.target.id);
}

function Debug() {
    console.log(SelectedSector.SegmentIndicator);
}