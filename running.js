//Load modules
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());


//Load code
var adware = require('./adware.js');
var analytics = require('./analytics.js');

//Load api
var api = require('./scripts/api/index.js');

//Web router
var website = require('./website.js');

//App.use
app.use('/', website.router);
app.use('/ads', website.ads);
app.use('/api', api);




app.listen(8085, function(){
	console.log("[INFO] Software is runnig.");
});