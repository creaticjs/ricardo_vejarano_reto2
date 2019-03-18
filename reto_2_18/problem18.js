/*
document.getElementById('date').innerHTML = '<p>Date: ' + day + ' ' + monthNumber + ' ' + year +' </p>';
Materialize.toast('Invalid data', 4000);
var date_complete = document.getElementById('date-entry').value;
*/


function inputEvent() {
    var number = document.getElementById('number-entry').value;
    if (number !== '-') {
        calculate(number);
    }
}

function calculate(number) {
    if (Number(number) > 0) {
        document.getElementById('number').innerHTML = '<p>Number: ' + number + ' is ' + ' POSITIVE ' + ' </p>';
    } else if (Number(number) < 0) {
        document.getElementById('number').innerHTML = '<p>Number: ' + number + ' is ' + ' NEGATIVE ' + ' </p>';
    } else {
        document.getElementById('number').innerHTML = '<p>Number: ' + number + ' is ' + ' ZERO ' + ' </p>';
    }
    document.getElementById('number-entry').value = null;

}