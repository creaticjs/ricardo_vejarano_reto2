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
    }
}

function calculate() {
    var s1 = document.getElementById('side1').value;
    var s2 = document.getElementById('side2').value;
    var s3 = document.getElementById('side3').value;
    if (s1 && s2 && s3) {
        var p = (parseFloat(s1)+parseFloat(s2)+parseFloat(s3))/2
        var a = Math.sqrt(p*(p - s1)*(p - s2)*(p - s2));
        document.getElementById('area').innerHTML = '<p>Area: ' + a + '</p>';
    } else {
        Materialize.toast('All fields are required', 4000);
    }
}
