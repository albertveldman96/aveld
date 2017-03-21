const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get("/static/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", req.path));
});

app.get("/playground", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'httpdocs/index.html'));
});

app.listen(port, () => {
    console.log("Server started and listening to ::" + port);
});