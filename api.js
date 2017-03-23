"use strict";
const express = require('express');
const request = require('superagent');
const secrets = require('./secrets').secrets;
const api = express.Router();

const openWeatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast';


api.get('/weather/:city', function (req, res) {
    if (req.params.city === null) {
        res.sendStatus(400).send('Missing city');
    } else
        request
        .get(openWeatherApiUrl)
        .query({APPID: secrets.openweather_api, units: 'metric', q: req.params.city})
        .set("Accept", "application/json")
        .end(function (err, data) {
            if (err) {
                res.sendStatus(500).send(err);
            } else {
                res.json(data.body);
            }
        })
});

module.exports.api = api;