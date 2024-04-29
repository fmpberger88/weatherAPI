export async function fetchWeatherData(locaction) {
    try {
        const response = await fetch(`/api/weather?location=${locaction}&aqi=yes`);
        const data = await response.json();
        displayTemperature(data.current.temp_c);
        displayCity(data.location.name)
        displayFeelsLikeCelsius(data.current.feelslike_c)
        displayHumidity(data.current.humidity);
        displayCloudIndex(data.current.cloud);
        displayUvIndex(data.current.uv);
        displayWindSpeed(data.current.wind_kph);
        displayWeatherIcon(data.current.condition.icon)
        displayCo(data.current.air_quality.co)
        displayNo2(data.current.air_quality.no2);
        displayO3(data.current.air_quality.o3);
        displaySo2(data.current.air_quality.so2);
        displayPm25(data.current.air_quality.pm2_5);
        displayPm10(data.current.air_quality.pm10);
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

export function displayFeelsLikeCelsius(feelsLikeCelsius) {
    const feelsLikeCelsiusDiv = document.querySelector('#feelsLikeCelsius');

    // if showFeelsLikeCelsius already exists
    let showFeelsLikeCelsius = feelsLikeCelsiusDiv.querySelector('p');

    if (showFeelsLikeCelsius) {
        showFeelsLikeCelsius.textContent = `Feels like ${feelsLikeCelsius}°C`;
    }
    else {
        showFeelsLikeCelsius = document.createElement('p');
        showFeelsLikeCelsius.textContent = `Feels like ${feelsLikeCelsius}°C`;
        feelsLikeCelsiusDiv.appendChild(showFeelsLikeCelsius);
    }
}

export function displayHumidity(humidity) {
    const humidityDiv = document.querySelector('#humidity');
    let showHumidity = humidityDiv.querySelector('p');

    if (showHumidity) {
        showHumidity.textContent = `Humidity: ${humidity}%`;
    } else {
        showHumidity = document.createElement('p');
        showHumidity.textContent = `Humidity: ${humidity}%`;
        humidityDiv.appendChild(showHumidity);
    }
}

export function displayCloudIndex(cloudindex) {
    const cloudIndexDiv = document.querySelector('#cloudIndex');
    let showCloudIndex = cloudIndexDiv.querySelector('p');

    if (showCloudIndex) {
        showCloudIndex.textContent = `Cloud Index: ${cloudindex}`;
    } else {
        showCloudIndex = document.createElement('p');
        showCloudIndex.textContent = `Cloud Index: ${cloudindex}`;
        cloudIndexDiv.appendChild(showCloudIndex);
    }
}

export function displayUvIndex(uvIndex) {
    const uvIndexDiv = document.querySelector('#uvIndex');
    let showUvIndex = uvIndexDiv.querySelector('p');

    if (showUvIndex) {
        showUvIndex.textContent = `UV Index: ${uvIndex}`;
    } else {
        showUvIndex = document.createElement('p');
        showUvIndex.textContent = `UV Index: ${uvIndex}`;
        uvIndexDiv.appendChild(showUvIndex);
    }
}

export function displayWindSpeed(windSpeed) {
    const windSpeedDiv = document.querySelector('#windSpeed');
    let showWindSpeed = windSpeedDiv.querySelector('p');

    if (showWindSpeed) {
        showWindSpeed.textContent = `Wind Speed: ${windSpeed} km/h`;
    } else {
        showWindSpeed = document.createElement('p');
        showWindSpeed.textContent = `Wind Speed: ${windSpeed} km/h`;
        windSpeedDiv.appendChild(showWindSpeed);
    }
}

export function displayWeatherIcon(weatherIcon) {
    const weatherIconDiv = document.querySelector('#weatherIcon');
    let showWeatherIcon = weatherIconDiv.querySelector('img');

    if (showWeatherIcon) {
        showWeatherIcon.src = weatherIcon;
    } else {
        showWeatherIcon = document.createElement('img');
        showWeatherIcon.src = weatherIcon;
        weatherIconDiv.appendChild(showWeatherIcon);
    }
}

export function displayCo(co) {
    const coDiv = document.querySelector('#co');
    let showCo = coDiv.querySelector('p');

    if (showCo) {
        showCo.textContent = `CO: ${co}`;
    } else {
        showCo = document.createElement('p');
        showCo.textContent = `CO: ${co}`;
        coDiv.appendChild(showCo);
    }
}

export function displayNo2(no2) {
    const no2Div = document.querySelector('#no2');
    let showNo2 = no2Div.querySelector('p');

    if (showNo2) {
        showNo2.textContent = `NO2: ${no2}`;
    } else {
        showNo2 = document.createElement('p');
        showNo2.textContent = `NO2: ${no2}`;
        no2Div.appendChild(showNo2);
    }
}

export function displayO3(o3) {
    const o3Div = document.querySelector('#o3');
    let showO3 = o3Div.querySelector('p');

    if (showO3) {
        showO3.textContent = `O3: ${o3}`;
    } else {
        showO3 = document.createElement('p');
        showO3.textContent = `O3: ${o3}`;
        o3Div.appendChild(showO3);
    }
}

export function displaySo2(so2) {
    const so2Div = document.querySelector('#so2');
    let showSo2 = so2Div.querySelector('p');

    if (showSo2) {
        showSo2.textContent = `SO2: ${so2}`;
    } else {
        showSo2 = document.createElement('p');
        showSo2.textContent = `SO2: ${so2}`;
        so2Div.appendChild(showSo2);
    }
}

export function displayPm25(pm25) {
    const pm25Div = document.querySelector('#pm25');
    let showPm25 = pm25Div.querySelector('p');

    if (showPm25) {
        showPm25.textContent = `PM2.5: ${pm25}`;
    } else {
        showPm25 = document.createElement('p');
        showPm25.textContent = `PM2.5: ${pm25}`;
        pm25Div.appendChild(showPm25);
    }
}

export function displayPm10(pm10) {
    const pm10Div = document.querySelector('#pm10');
    let showPm10 = pm10Div.querySelector('p');

    if (showPm10) {
        showPm10.textContent = `PM10: ${pm10}`;
    } else {
        showPm10 = document.createElement('p');
        showPm10.textContent = `PM10: ${pm10}`;
        pm10Div.appendChild(showPm10);
    }
}

export function displayCity(city) {
    const citySpan = document.querySelector('#cityName');
    if (citySpan) {
        citySpan.textContent = `${city}`;
    } else {
        citySpan.textContent = 'Lustig';
    }
}

export async function fetchForeCastWeather(location) {
    try {
        const url = new URL('/api/weather/forecast', window.location.origin);
        url.searchParams.append('location', location);
        url.searchParams.append('days', '3');
        console.log(url)

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Clear previous forecasts
        const forecastContainer = document.getElementById('forecastContainer');
        forecastContainer.innerHTML = '';

        if (data && data.forecast && data.forecast.forecastday) {
            data.forecast.forecastday.forEach(day => {
                displayForecastDay(day);
            });
        } else {
            throw new Error('Invalid or incomplete forecast data');
        }
    } catch (err) {
        console.error('There was a client side error fetching forecast weather data', err);
    }
}

export function displayForecastDay(day) {
    const forecastContainer = document.getElementById('forecastContainer');
    const dayDiv = document.createElement('div');
    dayDiv.className = 'forecast-day';

    // Display day's date
    const dateP = document.createElement('p');
    dateP.textContent = `Date: ${day.date}`;
    dayDiv.appendChild(dateP);

    // Display max temperature
    const maxTempP = document.createElement('p');
    maxTempP.textContent = `Max Temp: ${day.day.maxtemp_c}°C`;
    dayDiv.appendChild(maxTempP);

    // Display min temperature
    const minTempP = document.createElement('p');
    minTempP.textContent = `Min Temp: ${day.day.mintemp_c}°C`;
    dayDiv.appendChild(minTempP);

    // Display icon
    const iconImg = document.createElement('img');
    iconImg.src = `https:${day.day.condition.icon}`;
    dayDiv.appendChild(iconImg);

    // Display weather condition text
    const conditionP = document.createElement('p');
    conditionP.textContent = day.day.condition.text;
    dayDiv.appendChild(conditionP);

    forecastContainer.appendChild(dayDiv);
}
