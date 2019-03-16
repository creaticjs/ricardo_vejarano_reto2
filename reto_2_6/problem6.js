function navegate(valueNavegate) {
    console.log(valueNavegate);
    switch (valueNavegate) {
        case 1: window.location.replace('http://127.0.0.1:5500/reto_2_1/index.html');
            break;
        case 2: window.location.replace('http://127.0.0.1:5500/reto_2_2/problem2.html')
            break;
        case 3: window.location.replace('http://127.0.0.1:5500/reto_2_3/problem3.html')
            break;
        case 4: window.location.replace('http://127.0.0.1:5500/reto_2_4/problem4.html')
            break;
        case 5: window.location.replace('http://127.0.0.1:5500/reto_2_5/problem5.html')
            break;
        case 6: window.location.replace('http://127.0.0.1:5500/reto_2_6/problem6.html')
            break;
    }
}

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