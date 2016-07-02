var express = require('express');
var app = express();
var router = express.Router();

//Load code
var api_index = require('./scripts/api/index.js');

//Tunnel
app.use('/', api_index);

console.log("[INFO] Adware is running.");