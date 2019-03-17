function calculate() {
    var hour_24 = document.getElementById('hour-24').value;
    var arrayHour = hour_24.split('');
    if (arrayHour.length === 5) {
        if (arrayHour[2] === ":") {
            determinateHour(hour_24);
        } else {
            Materialize.toast('Invalid hour format', 4000);
        }

    } else {
        Materialize.toast('Enter a valid value', 4000);
    }

}

function determinateHour(hour) {
    var temp = hour.split(':');
    if(temp[0] > 0 && temp[0] <= 24  ) {

    } else {
        Materialize.toast('Invalid hour', 4000);
    }
    console.log(hour);
}