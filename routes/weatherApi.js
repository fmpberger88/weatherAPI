const express = require('express');
const apiRouter = express.Router();
const axios = require('axios');
const process = require("node:process");

const baseUrl = "http://api.weatherapi.com/v1";
const apiKey = process.env.API_KEY;

apiRouter.get('/weather', async (req, res) => {
    const location = req.query.location;
    const weatherApiUrl = `${baseUrl}/current.json?key=${apiKey}&q=${location}`;
    const response = await axios.get(weatherApiUrl);
    res.status(200).send(response.data);
})

module.exports = apiRouter;