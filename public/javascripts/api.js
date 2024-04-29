import { fetchWeatherData, fetchForeCastWeather } from "./utils.js";

window.onload = async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            try {
                const response = await fetch(`/api/weather?latitude=${lat}&longitude=${long}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                await Promise.all([
                    fetchWeatherData(data.location.name),
                    fetchForeCastWeather(data.location.name),
                ]);
            } catch (error) {
                console.error('There was a client-side error fetching current weather data:', error);
                fallbackToDefaultLocation();
            }
        }, (error) => {
            console.error('Geolocation error:', error.message);
            fallbackToDefaultLocation();
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        fallbackToDefaultLocation();
    }
}

function fallbackToDefaultLocation() {
    Promise.all([
        fetchWeatherData('Schaffhausen'),
        fetchForeCastWeather('Schaffhausen'),
    ]).catch(error => {
        console.error('Error fetching weather data for Schaffhausen:', error);
    });
}

document.querySelector('#weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = document.querySelector('#location').value;
    try {
        await Promise.all([
            fetchWeatherData(location),
            fetchForeCastWeather(location),
        ]);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
