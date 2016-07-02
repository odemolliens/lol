var express = require('express');

var router = express.Router();

//Request software versie
router.get('/', function(req, res){
	res.send("Het werkt")
});













module.exports = router