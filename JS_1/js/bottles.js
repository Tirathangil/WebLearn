var Word = "bottles";
var Count = 99;

while (Count > 0) {
    if (Count == 1) 
        {
            Word = "bottle";
        }
    console.log(Count + " " + Word + " of beer on the wall");
    console.log(Count + " " + Word + " of beer,");
    console.log("Take one down, pass it around,");
    Count = Count - 1;
    if (Count > 0) {
        console.log(Count + " " + Word + " of beer on the wall.");
    }
    else {
        console.log("No more " + Word + " of beer on the wall.");
    }
}