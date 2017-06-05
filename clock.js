//======= SETS MAIN PARAMETERS =======//
var index = 0;
var counter = 0;
var imageArray = ["warhol.jpeg", "clock1.jpeg", "clock2.jpeg"];
var imageContainer = document.getElementById("imagediv");
var imageMain = document.getElementById("image1");

//======= STARTS OFF IMAGE COUNTER ON TIMER =======//
function initialize() {
    imageMain.src = imageArray[0];
    setInterval(startTime, 1000);
}

//======= MAIN CLOCK FUNCTION =======//
function startTime() {
    console.log("startTime");

    // ======= TIME FUNCTIONS ======= //
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);

    if (hour > 12) {
        hour = (hour - 12);
    } else {
        hour = hour;
    }

    document.getElementById("clockbox1").innerHTML = hour;
    document.getElementById("clockbox2").innerHTML = minute;
    document.getElementById("clockbox3").innerHTML = second;


    //======= IF LOOP FOR IMAGE TIMER =======//
    if (counter < 5) {
        counter++;
        console.log("counter:", counter);
    } else {
        counter = 0;
        console.log("counter:", counter);
        updateImage();
    }

    //======= FUNCTION FOR ROTATION OF IMAGES ======//
    function updateImage() {
        if (index < imageArray.length - 1) {
            index++;
            console.log("index:", index);
        } else {
            index = 0;
            console.log("index:", index);
        }
        imageMain.src = imageArray[index];
    }
}

//======= MAKES SURE TIME NUMBERS UNDER 10 HAVE A ZERO =======//
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}
window.onload = initialize();
