// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);
//
// var d = new Date();
// document.getElementById("demo").innerHTML = d;
//
// var d = new Date("October 13, 2014 11:13:00");
// document.getElementById("demo").innerHTML = d;
//
// var d = new Date(86400000);
// document.getElementById("demo").innerHTML = d;
//
// var d = new Date(99, 5, 24, 11, 33, 30, 0);
// document.getElementById("demo").innerHTML = d;

function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById("clockreg").innerHTML =
    hour + ":" + minute + ":" + second;
    var t = setTimeout(startTime, 10);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
