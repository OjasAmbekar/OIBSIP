document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.getElementById('unitSelect').value;
    let result;

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number');
        return;
    }

    const temperature = parseFloat(temperatureInput);

    // Conversion logic
    if (unit === 'C') {
        result = {
            Fahrenheit: (temperature * 9/5) + 32,
            Kelvin: temperature + 273.15
        };
    } else if (unit === 'F') {
        result = {
            Celsius: (temperature - 32) * 5/9,
            Kelvin: (temperature - 32) * 5/9 + 273.15
        };
    } else if (unit === 'K') {
        result = {
            Celsius: temperature - 273.15,
            Fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
    }

    // Display results
    document.getElementById('result').innerHTML = `
        ${result.Celsius ? result.Celsius.toFixed(2) + ' °C' : ''}
        ${result.Fahrenheit ? result.Fahrenheit.toFixed(2) + ' °F' : ''}
        ${result.Kelvin ? result.Kelvin.toFixed(2) + ' K' : ''}
    `.trim();
});
