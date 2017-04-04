"use strict";
const express = require('express');
const request = require('superagent');
const mongo = require('mongodb');
const secrets = require('./secrets').secrets;
const api = express.Router();

const openWeatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast';
let db;
mongo.connect('mongodb://' +
        secrets.mongodb.username + ':' +
        secrets.mongodb.password + '@' +
        secrets.mongodb.url, (err, database) => {
    if (err) throw err;
    db = database;
});

api.get('/weather/:city', (req, res) => {
    if (req.params.city === null) {
        res.status(400).send('Missing city');
    } else {
        request
            .get(openWeatherApiUrl)
            .query({APPID: secrets.apis.openweather_api, units: 'metric', q: req.params.city})
            .set("Accept", "application/json")
            .end(function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).json(data.body);
                }
            })
    }
});

api.get('/weights', (req, res) => {
    db.collection('weight').find({}).toArray((err, weights) => {
        if (err) throw err;
        if (weights && weights.length > 0) {
            let response = [];
            weights.forEach((weight) => {
                response.push({
                    weight: weight.weight,
                    date: {
                        day: weight.date.day,
                        month: weight.date.month,
                        year: weight.date.year
                    }
                });
            });
            res.status(200).json(response);
        }
    });
});

module.exports.api = api;