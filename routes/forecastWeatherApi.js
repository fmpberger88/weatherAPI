const express = require('express');
const apiForecastWeather = express.Router();
const axios = require('axios');
const process = require("node:process");

const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = process.env.API_KEY;

apiForecastWeather.get('/weather/forecast', async (req, res) => {
    const location = req.query.location;
    const lat = req.query.latitude;
    const long = req.query.longitude;
    let queryParam;

    if (location) {
        queryParam = location;
    } else if (lat && long) {
        queryParam = `${lat},${long}`;
    } else {
        console.error('Failed to fetch weather data:', error);
        res.status(500).send({ error: 'Failed to fetch weather data' });
    }

    const weatherApiUrl = `${baseUrl}/forecast.json?key=${apiKey}&q=${queryParam}&aqi=yes&days=7`;
    const response = await axios.get(weatherApiUrl);
    res.status(200).send(response.data);
})

module.exports = apiForecastWeather;