var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();

//Load acess
var ads_acces = require('./website/html/ads/index.js');

//Website
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'website/html'));

router.get('/', function(req, res){
	res.send("LOLOLOL")
});


//export
module.exports = {

	//Request software versie
	router: router,
	ads:  app.use('/adalso', ads_acces.adalso)

};

console.log("[INFO] Website.js is running.");