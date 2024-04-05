const express = require('express');
const apiRouter = express.Router();
const axios = require('axios');
const process = require("node:process");

const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = process.env.API_KEY;

apiRouter.get('/weather', async (req, res) => {
    const location = req.query.location;
    const lat = req.query.latitude;
    const long = req.query.longitude;
    let queryParam;

    if (location) {
        queryParam = location;
    } else if (lat && long) {
        queryParam = `${lat},${long}`;
    } else {
        res.status(400).send({error: 'Either location or latitude and longitude query parameters are required'});
        return;
    }

    const weatherApiUrl = `${baseUrl}/current.json?key=${apiKey}&q=${queryParam}`;
    const response = await axios.get(weatherApiUrl);
    res.status(200).send(response.data);
})

module.exports = apiRouter;