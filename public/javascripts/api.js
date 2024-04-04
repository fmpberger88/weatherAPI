window.onload = async () => {
    const location = 'Schaffhausen';

    try {
        const response = await fetch(`/api/weather?location=${location}`);
        const data = await response.json();
        const temperature = data.current.temp_c;

        const celsiusDiv = document.querySelector('#celsius');
        const showCelsius = document.createElement('p');
        showCelsius.textContent = `${temperature}°C`;
        celsiusDiv.appendChild(showCelsius);
    } catch (error) {
        console.error('There was a client side error fetching current weather data', error);
    }
};

document.querySelector('#weatherForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = document.querySelector('#location').value;

    try {
        const response = await fetch(`/api/weather?location=${location}`);
        const data = await response.json();
        const temperature = data.current.temp_c;

        const celsiusDiv = document.querySelector('#celsius');
        celsiusDiv.innerHTML = ''; // This clears old contents before appending new
        const showCelsius = document.createElement('p');
        showCelsius.textContent = `${temperature}°C`;
        celsiusDiv.appendChild(showCelsius);
    } catch (error) {
        console.error('There was a client side error fetching current weather data', error);
    }
});