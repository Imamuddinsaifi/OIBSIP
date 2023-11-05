function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = fromUnit === "celsius" ? "fahrenheit" : "celsius";
    let convertedTemperature;

    if (fromUnit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
    }

    document.getElementById("result").innerText = `: ${convertedTemperature.toFixed(2)} ${toUnit}`;
}
