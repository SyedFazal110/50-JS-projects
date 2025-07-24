const celsius = document.querySelector('#celsius');
const kelvin = document.querySelector('#kelvin');
const fahrenheit = document.querySelector('#fahrenheit');

celsius.addEventListener('input', function () {
    let c = parseFloat(celsius.value);
    let k = c + 273.15;
    let f = (c * 9/5) + 32;
    kelvin.value = k;
    fahrenheit.value = f;
});

kelvin.addEventListener('input', function () {
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.5) * 9/5 +32;
    celsius.value = c;
    fahrenheit.value = f;
});

fahrenheit.addEventListener('input', function () {
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;
    celsius.value = c;
    kelvin.value = k;
});