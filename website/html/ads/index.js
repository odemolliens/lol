var express = require('express');
var app = express();
var router = express.Router();

//Load codes
var adalso = require('./adalso/adalso.js');

router.get('/', function(req, res){
	res.send("PPP")
});

//Module export
module.exports = {
	router: router,
	adalso: adalso	
};


//console.log
console.log("[INFO] All ads options is load");