var request = require('request');
var fs = require('fs');

var options = {
    url: 'https://api.bitfinex.com/v1/pubticker/btcusd',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {

    fs.writeFile('./temp/bitfinex/btcusd.txt', body, function(err) {
      if (err) {
        console.log("Err by save bitfinex")
     } else {
        console.log("bitfinex save")
     }
    });
  }
}

var raw_time = JSON.parse(fs.readFileSync("config.json", "utf8"));
var time = raw_time.bitfinex;

request(options, callback);
/*
//Time reload
setInterval(function() {
  request(options, callback);
}, time);*/