import { fetchWeatherData, displayTemperature } from "./utils.js";

window.onload = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            try {
                const response = await fetch(`/api/weather?latitude=${lat}&longitude=${long}`);
                const data = await response.json();
                displayTemperature(data.current.temp_c);
            } catch (error) {
                console.error('There was a client side error fetching current weather data', error);
            }
        }, async (error) => {
            console.error('There was a client side error fetching current location', error);
            await fetchWeatherData('Schaffhausen')
            });
    } else {
        console.log("Geolocation is not supported");
        await fetchWeatherData('Schaffhausen');
    }
}

document.querySelector('#weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = document.querySelector('#location').value;
    await fetchWeatherData(location);
})