let num = document.getElementById('num-input')
num.addEventListener('input', meterFeet)
num.addEventListener('input', literGallon)
num.addEventListener('input', kiloPound)


function meterFeet() {
    feet = num.value * 3.28084;
    meters = num.value * 0.3048;
    result = `${num.value} meters = ${feet.toFixed(3)} feet | ${num.value} feet = ${meters.toFixed(3)} meters`
    document.getElementById('meterFeet').textContent = result;
}

function literGallon() {
    gallons = num.value * 0.264172;
    liters = num.value * 3.78541;
    result = `${num.value} liters = ${gallons.toFixed(3)} gallons | ${num.value} gallons = ${liters.toFixed(3)} liters`
    document.getElementById('literGallon').textContent = result;
}

function kiloPound() {
    pounds = num.value * 2.20462;
    kilos = num.value * 0.453592;
    result = `${num.value} kilos = ${pounds.toFixed(3)} pounds | ${num.value} pounds = ${kilos.toFixed(3)} kilos`
    document.getElementById('kiloPound').textContent = result;
}