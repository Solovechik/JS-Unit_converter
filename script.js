let num = document.getElementById('num-input');
num.addEventListener('input', meterFeet);
num.addEventListener('input', literGallon);
num.addEventListener('input', kiloPound);


function meterFeet() {
    let feet = num.value * 3.28084;
    let meters = num.value * 0.3048;
    let result = `${num.value} meters = ${feet.toFixed(3)} feet | ${num.value} feet = ${meters.toFixed(3)} meters`;
    document.getElementById('meterFeet').textContent = result;
}

function literGallon() {
    let gallons = num.value * 0.264172;
    let liters = num.value * 3.78541;
    let result = `${num.value} liters = ${gallons.toFixed(3)} gallons | ${num.value} gallons = ${liters.toFixed(3)} liters`;
    document.getElementById('literGallon').textContent = result;
}

function kiloPound() {
    let pounds = num.value * 2.20462;
    let kilos = num.value * 0.453592;
    let result = `${num.value} kilos = ${pounds.toFixed(3)} pounds | ${num.value} pounds = ${kilos.toFixed(3)} kilos`;
    document.getElementById('kiloPound').textContent = result;
}
