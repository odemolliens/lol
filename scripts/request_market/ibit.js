//LOad modules
var request = require('request');
var fs = require('fs');

var options = {
    url: 'https://api.itbit.com/v1/markets/XBTUSD/ticker',
    headers: {
        'User-Agent': 'request'
    }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {

    fs.writeFile('./temp/ibit/btcusd.txt', body, function(err) {
      if (err) {
        console.log("Err by save IBIT")
     } else {
        console.log("IBIT save")
     }
    });
  }
}

var raw_time = JSON.parse(fs.readFileSync("config.json", "utf8"));
var time = raw_time.ibit;



//Time reload
setInterval(function() {
  request(options, callback);
}, time);