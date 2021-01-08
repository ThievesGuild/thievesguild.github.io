const express = require('express');
const app = express();

const mainURL = 'https://getipaddress.dev.with-datafire.io';

var ipAddress = document.getElementById("IP").value;

var queryURL = `/getIP?value=${ipAddress}`;
var finalURL = `${mainURL}${queryURL}`;

app.get(finalURL, function(req, res) {
    res.send(console.log("success!"));
});