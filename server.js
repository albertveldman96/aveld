"use strict";
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.use('/api/v1', require('./api').api);

app.route("/static/*")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "build", req.path));
    });

app.route("/playground/*")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "build/index.html"));
    });

app.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'httpdocs/index.html'));
    });

app.route('/*')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'httpdocs/index.html'));
    });

app.listen(port, () => {
    console.log("Server started and listening to ::" + port);
});
