//Load modules
var fs = require('fs');
var express = require('express');
var router = express.Router();

//Get config
var config = JSON.parse(fs.readFileSync("config.json", "utf8"));

//analytics
var uri = config.api_url;
var analytics_uri = uri+'/api/analytics';

//Bestand locatie
var file_location = "./ads/adalso/";

//Router
router.get('/728_90', function (req, res) {
	res.render(file_location+'728_90', {
		analytics: analytics_uri
	})
});

module.exports = router;

console.log("[INFO] Adalso ads is available.");