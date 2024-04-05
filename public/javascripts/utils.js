export async function fetchWeatherData(locaction) {
    try {
        const response = await fetch(`/api/weather?location=${locaction}`);
        const data = await response.json();
        displayTemperature(data.current.temp_c);
    } catch (error) {
        console.error('There was a client side error fetching weather data', error);
    }
}

export function displayTemperature(temperature) {
    const celsiusDiv = document.querySelector('#celsius');

    // if showCelsius already exists
    let showCelsius = celsiusDiv.querySelector('p');

    if (showCelsius) {
        showCelsius.textContent = `${temperature}°C`;
    }
    else {
        showCelsius = document.createElement('p');
        showCelsius.textContent = `${temperature}°C`;
        celsiusDiv.appendChild(showCelsius);
    }

}