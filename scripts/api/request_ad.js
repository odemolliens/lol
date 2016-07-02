//load modules
var fs = require('fs');

//load config
var config = fs.readFileSync("./config.json", "utf8");
var url = config.url;

module.exports = {

	ads: function(req, res){

		//Request data
		var post_data = req.body;

		//Afmetingen 
		var width = post_data.width;
		var height = post_data.height;

		if (width == "728" && height == "90"){
			return '<iframe src="'+url+'/ads/adalso/728_90"></iframe>';
		};
	}
};

console.log("[INFO] Request ads software is running");