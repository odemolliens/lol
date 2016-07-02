var express = require('express');
var app = express();
var router = express.Router();

//Load codes
var request = require('./request_ad.js');
var analytics = require('./analytics.js');

//Router
router.post('/index', function(req, res){
	console.log(req.body);

	var post_data = req.body;

	//Action
	var action = post_data.code;

	if (action == "ads"){

		//request ads code
		request.ads(req, res);
	};



	res.send("Test");
});

//Analytics
router.get('/analytics', function(req, res){
	res.send(analytics.analytics(req, res));
});

module.exports = router

console.log("[INFO] All routers available.");