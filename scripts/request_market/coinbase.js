var request = require('request');
var fs = require('fs');

var options = {
  url: 'https://api.gdax.com/products/BTC-USD/ticker',
  headers: {
    'User-Agent': 'request'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info)
  }
}
 
request(options, callback);