/*
document.getElementById('date').innerHTML = '<p>Date: ' + day + ' ' + monthNumber + ' ' + year +' </p>';
Materialize.toast('Invalid data', 4000);
var date_complete = document.getElementById('date-entry').value;
*/

function calculate() {
    var year = document.getElementById('year-entry').value;
    year = Number(year);

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                document.getElementById('year').innerHTML = '<p> YES </p>';
            } else {
                document.getElementById('year').innerHTML = '<p> NO </p>';
            }
        } else {
            document.getElementById('year').innerHTML = '<p> YES </p>';
        }
    } else {
        document.getElementById('year').innerHTML = '<p> NO </p>';
    }
}