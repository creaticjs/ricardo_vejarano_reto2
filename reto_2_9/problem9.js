/*
document.getElementById('date').innerHTML = '<p>Date: ' + day + ' ' + monthNumber + ' ' + year +' </p>';    
Materialize.toast('Invalid data', 4000);
var date_complete = document.getElementById('date-entry').value;
*/

function calculate() {
    var radious = document.getElementById('radious-entry').value;
    var diameter = 2*radious;
    var pi = 3.1416;
    var circ = pi*diameter;
    var diameter2 = Math.pow(radious, 2)
    var area = pi*diameter2;

    document.getElementById('radious').innerHTML = '<p>Circumference: ' + circ + ' | Area: ' + area + ' | Diameter: ' + diameter + ' </p>';

}