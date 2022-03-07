function calculateTime(){
    var date = new Date();
    var dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    document.getElementById("day").innerHTML = dayName[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}

window.addEventListener("load", calculateTime);