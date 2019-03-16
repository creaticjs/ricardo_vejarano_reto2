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
    var m = document.getElementById('masse').value;
    if(m) {
        m3 = Math.pow(m, 3); 
        var c = 2.997925e10;
        e = c*m3;
        var eString = e.toString().replace('e', 'x10')
        document.getElementById('energy').innerHTML = '<p>Energy: ' +eString + '  ergios </p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}